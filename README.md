# AI API Price Calculator

A small single-page calculator for estimating monthly token costs across overseas AI APIs. Users can enter monthly request volume, average input tokens, average output tokens, and cached input percentage. The page then estimates monthly spend for different models and sorts the result from cheapest to most expensive.

The current version compares selected models from OpenAI, Anthropic, and Google Gemini. Pricing data comes from each provider's official pricing page, with source links and query date shown in the page.

## Live Demo

Add the deployed Vercel, Netlify, or Cloudflare Pages URL here after publishing.

## Tech Stack

- Plain HTML
- CSS
- Vanilla JavaScript

The project does not require a backend service or any API key.

## Run Locally

Open `index.html` directly in a browser, or serve the folder with any static file server:

```bash
npx serve .
```

If Node.js is not installed locally, the whole folder can also be uploaded directly to a static hosting platform.

## Data Sources

Prices are stored as USD per 1M tokens and were checked on June 16, 2026.

- OpenAI API pricing: https://openai.com/api/pricing/
- Anthropic Claude pricing: https://docs.anthropic.com/en/docs/about-claude/pricing
- Google Gemini API pricing: https://ai.google.dev/gemini-api/docs/pricing

## Known Limitations

- The calculator covers text token pricing only and does not include image, audio, or video pricing.
- It does not calculate batch discounts, taxes, free tiers, regional billing differences, or other provider-specific billing details.
- Cached input pricing is simplified into a single percentage-based estimate, so it does not fully model every provider's cache read/write rules.
- AI API pricing changes quickly, so the official pricing pages should be checked again before using this for real budget decisions.
