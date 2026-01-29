# Press Aggregator for Artists - Project Brainstorm

## The Idea
A "Bandsintown for press" - a tool that aggregates and surfaces press coverage about artists, with an embeddable widget for artist websites.

## Why It's Interesting
- Clear gap in the market - no affordable, artist-friendly solution exists
- Demonstrates full-stack skills: API design, data pipelines, embeddable widgets
- Real problem that artists face (tracking and displaying press coverage)

## Challenges

### Data Sourcing (The Hard Part)
- Scraping news sites has legal/ToS issues
- News APIs (NewsAPI, etc.) have licensing restrictions for commercial use
- Google News doesn't allow commercial scraping
- Would need partnerships or alternative approaches

### Market Challenges
- Chicken-and-egg: artists won't use without good data, can't get data without scale
- Monetization is tricky - indie artists have low willingness to pay
- Enterprise competitors exist (Chartmetric, Soundcharts) at high price points

---

## Possible Technical Approaches

### 1. RSS/Atom Feed Aggregation
- Curate 50-100 music publications that publish RSS feeds
- Poll feeds regularly
- Use keyword/entity matching to tag articles by artist
- **Pros:** Legal, no scraping needed
- **Cons:** Limited to publications with RSS, may miss coverage

### 2. Social Listening
- Monitor Twitter/Bluesky/Reddit for links being shared about artists
- When someone posts "great review of [band] in [publication]", capture that link
- **Pros:** Crowdsourced discovery, real-time
- **Cons:** Noisy, requires filtering

### 3. Google Alerts Workaround
- Have users forward Google Alerts emails to your service
- Or set up alerts on their behalf and parse the emails
- **Pros:** Leverages Google's indexing
- **Cons:** Hacky, depends on Google's email format

### 4. Artist-Submitted + Enrichment
- Artist submits a URL
- Scrape metadata (headline, publication, date, excerpt, image)
- Normalize and present nicely
- **Pros:** Simple, guaranteed relevance
- **Cons:** Manual effort, less "magic"

### 5. Publication Partnerships
- Pitch indie music blogs: "We'll drive traffic to your reviews if you give us a feed/API"
- **Pros:** Win-win, high quality data
- **Cons:** Requires business development effort

### 6. LLM-Powered Aggregation (Recommended Approach)
**Key insight:** LLMs with web search can already do the aggregation. The product is a wrapper that adds persistence, monitoring, and presentation.

**How it works:**
- Use an LLM with web search (OpenAI, Anthropic, or Perplexity API)
- Prompt: "Find recent press articles about [artist name] [optional: album name]"
- Parse structured output: title, publication, date, URL, summary, image
- Store in database
- Run on a schedule (daily/weekly)
- Diff against previous results to detect new coverage

**What you're building:**
1. Scheduled job that queries LLM for each artist
2. Structured output parser
3. Database to track articles found
4. Change detection → alert artist when new coverage appears
5. UI/widget to display results
6. Optional: Press kit export (PDF, one-pager)

**Value-add over just asking ChatGPT manually:**
- **Persistence** - remembers what's been found
- **Monitoring** - proactive alerts for new coverage
- **Presentation** - embeddable widget, clean press kit
- **History** - track coverage over time, analytics
- **Automation** - artist sets it and forgets it

**Pros:**
- Dramatically simpler architecture than RSS/scraping approaches
- LLM handles entity matching, relevance, summarization
- Can find coverage across the entire web, not just curated sources
- Fast to prototype

**Cons:**
- API costs scale with number of artists × query frequency
- LLM results can be inconsistent (hallucinations, missed articles)
- Dependent on third-party API availability/pricing

**Cost estimate:**
- ~$0.01-0.05 per search query (depending on model/provider)
- Weekly checks for 1000 artists = $40-200/month in API costs
- Very manageable for MVP, need to factor into pricing model

---

## The Real Engineering Challenge
Not any single piece - it's combining multiple imperfect signals into something useful:
- Data pipelines from multiple sources
- Deduplication across sources
- Relevance scoring (is this *about* the artist or just mentions them?)
- Entity recognition / NLP for artist matching
- Keeping data fresh without hammering rate limits

---

## MVP Proposal (LLM-Based)

### Scope
1. Build a simple backend that queries an LLM with web search for artist press
2. Parse and store structured results (title, pub, date, URL, summary)
3. Implement change detection (new article since last check)
4. Simple dashboard for artists to view their coverage
5. Basic embeddable widget
6. Email/webhook alerts for new coverage

### Tech Stack
- **Backend:** Node.js or Python (FastAPI)
- **LLM API:** Perplexity (has built-in web search) or OpenAI with browsing
- **Database:** Postgres (articles, artists, check history)
- **Queue/Scheduler:** Simple cron or BullMQ for scheduled checks
- **Frontend:** Next.js dashboard
- **Widget:** Vanilla JS embed or iframe

### Success Criteria
- Can reliably surface relevant articles for test artists
- New coverage detected within 24-48 hours of publication
- Low hallucination rate (verify URLs are real)
- Widget looks professional on artist sites

### Day 1 Prototype
Literally just:
```python
import openai  # or perplexity

def find_press(artist_name, album_name=None):
    prompt = f"""Find recent press articles and reviews about the band "{artist_name}"
    {f'specifically about their album "{album_name}"' if album_name else ''}
    
    Return as JSON array with fields:
    - title
    - publication
    - url
    - date (YYYY-MM-DD)
    - summary (1-2 sentences)
    """
    # call API, parse response, store in DB
```

---

## Open Questions
- What's the monetization model? Freemium? Per-embed pricing?
- How to handle artist disambiguation (common names)?
- What's the minimum number of sources needed to be useful?
- Build for indie artists or target labels/managers first?

---

## Next Steps
1. **Prototype (1-2 days):** Build the basic LLM query → structured output → database flow
2. **Validate quality:** Run it for Sunday Mourners and a few other artists, verify URLs are real
3. **Add monitoring:** Implement scheduled checks and change detection
4. **Build widget:** Simple embeddable display
5. **User validation:** Would artists pay for this? What's the right price point?

## Potential Differentiators
- **Verification layer:** Check that URLs actually exist and contain the artist name (reduce hallucinations)
- **Sentiment analysis:** Is the coverage positive/negative/neutral?
- **Coverage analytics:** Track press momentum over time, compare to release dates
- **Press kit generator:** One-click export to PDF for booking agents, labels
- **Social proof widget:** "As seen in Bandcamp Daily, Pitchfork, Tinnitist..."
