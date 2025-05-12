---
layout: post
title: "3. Building My Own DICOM Downloader"
date: 2025-02-27
categories: tooling python dicom
---

<p>Working on this phantom project has been an adventure in radiology, anatomy, and... weird tooling problems. Here's the story of how I ended up writing my own program to bulk-download CT slices from a web directory—because sometimes, doing things yourself is faster than relying on clinical software that doesn't play nicely.</p>

<h2>🧠 The Problem</h2>
<p>I wanted to use the <strong>Visible Human Project</strong> dataset from the NIH/Harvard Dataverse, which contains hundreds of CT DICOM files of the human skull. However, when I opened the dataset in my browser, I discovered something frustrating:</p>

<ul>
  <li><strong>All the DICOMs were listed individually</strong> — no bulk download button.</li>
  <li>There were <strong>463 separate files</strong>, named <code>J.001.dcm</code> through <code>J.463.dcm</code>.</li>
  <li>Downloading them one-by-one? Absolutely not.</li>
</ul>

<h2>🛠️ First Attempt: wget</h2>
<p>I tried using <code>wget</code> to recursively download the directory, but ran into errors:</p>

<pre><code>wget -r -np -nH --cut-dirs=8 -A ".dcm" \
  -P "%USERPROFILE%\Downloads\VisibleHuman_CT" \
  "https://data.lhncbc.nlm.nih.gov/public/Visible-Human/Male-Images/Visible%20Human%202.0%20-%20Peter%20Ratiu/Seriel%20Head/MR_CT_DICOM/CAT/"
</code></pre>

<p>Unfortunately, the server returned <strong>403 Forbidden</strong>, likely due to bot protection.</p>

<h2>🧰 Workaround: aria2c + file_list.txt</h2>
<p>I discovered that if I could make a <code>file_list.txt</code> containing all the direct links to the files, I could use <code>aria2c</code> to download them in parallel. So I wrote this Python script:</p>

<pre><code>base_url = "https://data.lhncbc.nlm.nih.gov/public/Visible-Human/Male-Images/Visible%20Human%202.0%20-%20Peter%20Ratiu/Seriel%20Head/MR_CT_DICOM/CAT/"
file_list_path = "file_list.txt"

with open(file_list_path, "w") as f:
    for i in range(1, 464):  # From J.001 to J.463
        file_name = f"J.{i:03d}.dcm"
        f.write(base_url + file_name + "\n")

print(f"Saved: {file_list_path}")
</code></pre>

<p>Then ran:</p>

<pre><code>aria2c -x 16 -s 16 -i file_list.txt
</code></pre>

<p>🚀 It worked! All 463 slices were downloaded into a local folder and were ready to import into <strong>InVesalius 3.1</strong> for 3D reconstruction.</p>

<h2>🤓 Version 2: A GUI Tool</h2>
<p>Because I'm definitely the kind of person who over-engineers his own problems, I decided to build a Windows executable that:</p>

<ul>
  <li>Accepts a folder-based URL</li>
  <li>Lets me choose a save location</li>
  <li>Automatically parses the directory or generates the file list</li>
  <li>Downloads all DICOMs in parallel</li>
</ul>

<p>I used:</p>
<ul>
  <li><code>Tkinter</code> for the GUI</li>
  <li><code>requests</code> + <code>BeautifulSoup</code> for HTML parsing</li>
  <li><code>aria2c</code> for actual downloading</li>
</ul>

<p>I probably didn't need to go though THIS much work, but it kinda made me feel like a stupider version of Newton creating calculus to determine orbits.</p>

<h2>🎯 Why I Bothered</h2>
<p>Because doing this saved me days of clicking and let me use <strong>real CT data</strong> from a well-documented open-access source. More importantly, it reminded me of something:</p>

<blockquote>
<p>In projects like this, you're not just learning anatomy or CT—you end up inventing tools, pipelines, and workflows that didn’t exist before. That’s where the growth happens.</p>
</blockquote>
