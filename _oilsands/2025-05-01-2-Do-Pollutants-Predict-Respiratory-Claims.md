---
layout: post
title: "2. Diving Into 20 Years of WCB Respiratory Claims Data"
date: 2025-05-01
categories: analysis oil-sands public-health data
---

Before trying to correlate claims with pollution levels, I wanted to look closely at the **WCB dataset itself**—what kinds of injuries were reported, how many, and what the costs looked like over time.

This post dives into the claims data I received directly from **WCB Alberta**. I submitted my request in April and received the data back by **April 28, 2025**. The dataset includes:

* Accepted claims from **2005 to 2024** in the **Oilsands Operations Industry (Code #6600)**
* Separate counts and costs for **respiratory injuries** and **other injuries**
* Obfuscation of low-frequency entries: any value between 1–4 appears as `<5`
* Breakdown by injury type (Nature of Injury) and cause (Type of Accident)

---

### 📊 Nature of Respiratory Injuries (2005–2024)

WCB listed the **top 15 respiratory-related injury types** by number of accepted claims:

| Code  | Injury Description                | Claims |
| ----- | --------------------------------- | ------ |
| 14360 | COVID-19                          | 651    |
| 14370 | COVID-19 VARIANT                  | 147    |
| 09590 | Other poisoning/toxic effect, N   | 55     |
| 49105 | Contact with/carriers of COVID-19 | 36     |
| 09500 | Other poisoning/toxic effect, U   | 34     |
| 49190 | Contact with/carrier-disease, N   | 19     |
| 14520 | Asbestosis                        | 6      |
| 14900 | Other respiratory disease, UNS    | <5     |
| 14400 | Chronic obstructive pulmonary,    | <5     |
| 41690 | Symptoms of respiratory/chest,    | <5     |
| 14490 | Chronic obstructive pulmonary,    | <5     |
| 14491 | Chronic obstructive lung disease  | <5     |
| 14210 | Allergic rhinitis                 | <5     |
| 14530 | Silicosis                         | <5     |

Out of 971 total respiratory claims, **COVID-related codes dominate** the list. Claims for chronic or occupational diseases like asbestosis and silicosis were reported far less frequently.. Claims for asbestosis and other chronic diseases were rare in volume, though not necessarily in cost (see below).

---

### 💸 Top Respiratory Injury Types by Total Cost

WCB also provided the top 15 respiratory injury categories by **total amount paid** over 20 years:

| Code  | Injury Description                | Amount Paid    |
| ----- | --------------------------------- | -------------- |
| 14360 | COVID-19                          | \$7,778,093.83 |
| 14520 | Asbestosis                        | \$2,059,302.11 |
| 49105 | Contact with/carriers of COVID-19 | \$1,653,189.30 |
| 14370 | COVID-19 VARIANT                  | \$1,396,844.81 |
| 49190 | Contact with/carrier-disease, N   | \$1,169,451.10 |
| 41690 | Symptoms of respiratory/chest,    | \$1,119,314.69 |
| 30000 | Neoplasm/tumor/cancer, UNS        | \$1,110,467.50 |
| 09590 | Other poisoning/toxic effect, N   | \$891,366.54   |
| 14400 | Chronic obstructive pulmonary,    | \$811,231.13   |
| 31901 | Mesothelioma                      | \$580,600.34   |
| 39900 | Neoplasm/tumor/cancer, NEC        | \$532,718.54   |
| 14491 | Chronic obstructive lung disease  | \$377,508.63   |
| 14900 | Other respiratory disease, UNS    | \$69,686.26    |
| 14530 | Silicosis                         | \$26,852.30    |
| 09700 | Nonspecific injury/disorder, UN   | \$15,557.00    |

While **COVID-19** made up the most claims, diseases like **asbestosis**, **mesothelioma**, and **cancer-related respiratory conditions** carried significantly higher cost per claim. Chronic conditions seem to be more expensive to treat—even if they're less commonly reported.. Chronic conditions seem to be more expensive to treat—even if they're less commonly reported.

---

### ⚠️ Leading Causes of Respiratory Injury Claims (TOA)

Here are the top 5 **Types of Accident (TOA)** responsible for accepted respiratory claims. Note that these are *accident*, rather than injury:

| Code  | TOA Description                 | Claims |
| ----- | ------------------------------- | ------ |
| 34000 | Exposure to noxious substance   | 846    |
| 34100 | Inhalation of substance, UNS    | 48     |
| 34190 | Inhalation of substance, NEC    | 20     |
| 34110 | Inhalation in confined space    | 11     |
| 51200 | Forest/brush/other outdoor fire | 11     |

The vast majority of respiratory claims were linked to **exposure to noxious substances**, consistent with expectations in oil sands operations.

---

### 💰 Total Cost Over Time

WCB also shared annual transaction-level costs for all injury types. Between 2005 and 2024:

* Over **\$156 million** was paid out for oil sands-related claims
* Of this, **\~13% was attributed to respiratory injuries**

![Oil Sands Claim Costs by Year, 2005–2024](/assets/OilSandsClaimCost.PNG)


Costs for respiratory injuries were relatively stable until **2020–2021**, when they jumped sharply due to COVID-related claims, and seemed to stay elevated.

---

### 🧠 Takeaways from the WCB Dataset

* **COVID-19 drastically altered the respiratory claims landscape** both in volume and cost.
* Chronic diseases like **asbestosis** and **mesothelioma** were rare but expensive.
* Most claims were attributed to **noxious substance exposure**, not necessarily acute incidents.
* The data suppression for low counts (`<5`) limits granularity but protects privacy.

In the next post, I’ll explore how these trends compare to environmental data—and whether pollution levels in the oil sands correlate with respiratory health outcomes at the population level.
