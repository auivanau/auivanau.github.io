---
layout: post
title: "1. Building a Respiratory Health Dataset from Scratch"
date: 2025-03-23
categories: planning oil-sands public-health data
---

When I started this project, I had a hunch from my time working at Mildred Lake that the air wasn’t quite as benign as people might think. I wanted to know if there was any measurable connection between air pollution in the oil sands and respiratory illnesses among workers. That curiosity snowballed into a full-on data merge across three very different sources: WCB injury claims, ambient pollution data, and workforce estimates.

### 🧩 Piecing Together the Data

To begin, I requested **WCB claims data** for respiratory injuries related to oil sands jobs, focusing on Syncrude and surrounding operations. WCB responded with annual totals from 2005 to 2024, including:

* Respiratory injury claims
* Other injury claims
* Total cost to WCB (split by type)

Then came the environmental side. I downloaded **hourly air quality data** from [Wood Buffalo Environmental Association (WBEA)](https://wbea.org), covering pollutants like SO₂, H₂S, and total hydrocarbons. This data spanned from 2000 to 2024 and was massive—millions of rows. To make it manageable, I wrote a Python script that averaged the pollution data first by day, then by year:

```python
chunks = pd.read_csv("pollution.csv", parse_dates=[0], chunksize=50000)
processed = []
for chunk in chunks:
    chunk.rename(columns={chunk.columns[0]: "datetime"}, inplace=True)
    chunk['custom_day'] = (chunk['datetime'] - pd.Timedelta(hours=1)).dt.floor('D') + pd.Timedelta(hours=1)
    daily_avg = chunk.groupby("custom_day").mean(numeric_only=True).reset_index()
    processed.append(daily_avg)
annual_avg = pd.concat(processed)
annual_avg['Year'] = annual_avg['custom_day'].dt.year
final = annual_avg.groupby('Year').mean(numeric_only=True).reset_index()
```

Finally, I retrieved **labour population estimates** from StatsCan Table 36-10-0480-01, specifically job counts for non-conventional oil extraction (NAICS BS211114). This gave me the denominator I needed to calculate incidence rates.

---

### 🧹 Data Cleaning Notes

#### "<5" Suppression

WCB entries like "<5" had to be removed or treated as NaN to avoid misleading results. I excluded those years from claim rate calculations.

#### Timeline Alignment

I trimmed all datasets to a common timeframe of **2005–2024**. Pollution data existed earlier, but WCB data didn’t. I also excluded 2021 in some plots due to an anomalous COVID spike in claims.

#### Claim Rate Calculation

With claims and population counts, I computed a standardized rate:

```python
df['claim_rate_per_10k'] = (df['respiratory_claims'] / df['estimated_workers']) * 10000
```

---

### 📊 Sample Output Table

| Year | Respiratory Claims | Jobs   | SO₂ (ppb) | THC (ppm) | Rate per 10k |
| ---- | ------------------ | ------ | --------- | --------- | ------------ |
| 2011 | 43                 | 19,850 | 3.12      | 2.40      | 21.7         |

---

### 🔍 What This Taught Me

This wasn’t just a study—it was a scavenger hunt. The data didn’t come clean, and no one handed me a single file to analyze. But by merging WCB reports, air pollution records, and industry workforce stats, I was able to build a public health dataset with real potential.

No conclusions yet, just a direction. Next up, I’ll look at whether pollution actually correlates with the rise and fall of respiratory claims—and what 2021’s spike might really tell us about illness, awareness, and systems that respond only when it’s too late.
