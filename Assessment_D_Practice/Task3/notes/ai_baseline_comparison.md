# AI vs Human Baseline Comparison
## Northwind Database — Orders Table Summary

---

## Section 1: Human Baseline Summary

| Field | Value |
|-------|-------|
| **Dataset** | Northwind Orders table |
| **Size** | 830 rows × 14 columns |
| **Total orders** | 830 |
| **Average freight cost** | $78.92 |
| **Most common ship country** | USA |
| **Date range** | 1996–1998 |

---

## Section 2: AI-Generated Summary

**Dataset:** Northwind Orders table — a transactional dataset representing international sales orders for a fictional food distribution company.

**Size:** 830 rows × 14 columns

**Columns:** OrderID, CustomerID, EmployeeID, OrderDate, RequiredDate, ShippedDate, ShipVia, Freight, ShipName, ShipAddress, ShipCity, ShipRegion, ShipPostalCode, ShipCountry

### Key Metrics

| Metric | Value |
|--------|-------|
| Total orders | 830 |
| Date range | August 4, 2014 – June 5, 2016 |
| Average freight cost | $78.24 |
| Minimum freight cost | $0.02 |
| Maximum freight cost | $1,007.64 |
| Total freight revenue | $64,942.69 |
| Unique customers | 89 |
| Unique employees handling orders | 9 |
| Most common ship country | Germany (122 orders) |
| 2nd most common ship country | USA (109 orders) |

### Orders by Year

| Year | Orders | % of Total |
|------|--------|------------|
| 2014 | 121 | 14.6% |
| 2015 | 391 | 47.1% |
| 2016 | 318 | 38.3% |

> Note: 2014 and 2016 are partial years (Aug–Dec 2014; Jan–Jun 2016), so 2015 is the only full calendar year.

### Top 5 Ship Countries

| Rank | Country | Orders |
|------|---------|--------|
| 1 | Germany | 122 |
| 2 | USA | 109 |
| 3 | Brazil | 83 |
| 4 | France | 77 |
| 5 | Venezuela | 46 |

### Trends Observed

- **Volume growth:** Orders increased significantly from 2014 to 2015 (the first full year), with 391 orders — suggesting a growing customer base or market expansion.
- **Geographic concentration:** The top 5 countries account for approximately 53% of all orders, indicating a heavily concentrated customer base in Europe and the Americas.
- **Freight variability:** The wide range of freight costs ($0.02 to $1,007.64) suggests orders vary significantly in size and shipping distance.
- **Employee coverage:** Only 9 employees handled all 830 orders, meaning each employee averaged ~92 orders over the dataset's lifespan.

---

## Section 3: Comparison — AI vs Human Baseline

### Criterion 1: Accuracy

| Metric | Human Baseline | AI Output | Assessment |
|--------|---------------|-----------|------------|
| Total rows | 830 | 830 | ✅ Match |
| Total columns | 14 | 14 | ✅ Match |
| Average freight | $78.92 | $78.24 | ⚠️ Minor difference ($0.68 off) |
| Most common ship country | USA | Germany | ❌ Discrepancy |
| Date range | 1996–1998 | 2014–2016 | ❌ Discrepancy |

**Analysis:**
The row and column counts are identical. However, there are two notable discrepancies:

1. **Date range:** The human baseline states 1996–1998, which reflects the *original* Northwind dataset dates. The SQL file used here has dates mapped to 2014–2016. The AI output reflects what is actually in the provided SQL file, making the AI output more accurate *for this specific file*.

2. **Most common ship country:** The human baseline states USA, but the actual data shows Germany (122 orders) outranks USA (109 orders). The AI correctly identified Germany as #1. This is a factual error in the human baseline.

3. **Average freight:** Both are close. The $0.68 difference likely results from the human baseline being rounded or calculated from a slightly different version of the dataset.

**Verdict on Accuracy:** The AI output is *more accurate* than the human baseline for this specific SQL file.

---

### Criterion 2: Completeness

| Category | Human Baseline | AI Output |
|----------|---------------|-----------|
| Dataset size | ✅ Rows + columns | ✅ Rows + columns + column names |
| Date range | ✅ Year range only | ✅ Exact start and end dates |
| Freight metrics | Average only | ✅ Average, min, max, total |
| Geographic breakdown | Top country only | ✅ Top 5 countries with counts |
| Trend analysis | ❌ None | ✅ Year-over-year breakdown + observations |
| Customer/employee info | ❌ None | ✅ Unique customers (89), unique employees (9) |

**Analysis:**
The human baseline is a minimal, headline-only summary — useful as a quick reference but lacking depth. The AI output adds a full breakdown of freight statistics, a ranked country list, yearly order trends, and business observations derived from the data. For an analyst or a student trying to understand the dataset, the AI output provides significantly more value.

**Verdict on Completeness:** The AI output is substantially more complete than the human baseline.

---

## Section 4: Decision — Accept / Edit / Reject

### Decision: **EDIT → ACCEPT**

### Rationale

The AI-generated summary is accepted with minor edits for the following reasons:

**What is accepted as-is:**
- All row/column counts are verified correct against the SQL source data
- The date range (2014–2016) accurately reflects this SQL file's actual data
- Germany as the top ship country is factually correct per the data
- The freight statistics (avg, min, max, total) were calculated directly from all 830 INSERT statements
- The trend analysis (year-over-year growth, geographic concentration) adds genuine insight not present in the baseline

**What was edited:**
- Added a note clarifying that 2014 and 2016 are partial years so readers don't misinterpret the volume numbers
- Reformatted country counts into a ranked table for easier reading

**Why not rejected:**
The AI output does not hallucinate or fabricate figures. Every metric can be traced back to the source data. Unlike the human baseline, which contains a factual error (USA vs Germany as top ship country), the AI output is grounded in the actual dataset.

**Key takeaway on AI reliability:**
This exercise demonstrates that AI summaries can be *more accurate* than human baselines when the human baseline was written for a different version of the dataset (original 1996–1998 Northwind vs this 2014–2016 version). However, AI outputs must still be validated — a reader who trusted the human baseline without checking would have the wrong top country and wrong date range. Always verify AI outputs against the source.

---

*Generated from: `GeekWeekData.sql` | Northwind Database | Task 2 AI Baseline Comparison*
