# AI API Price Calculator

A small single-page calculator for comparing estimated monthly token costs across OpenAI, Anthropic, and Google Gemini APIs.

The page lets a user enter monthly request volume, average input tokens, average output tokens, and cached input percentage. It then estimates monthly spend for several models and sorts the result from cheapest to most expensive.

## Live Demo

Add the deployed URL here after publishing with Vercel, Netlify, or Cloudflare Pages.

## Tech Stack

- Plain HTML
- CSS
- Vanilla JavaScript

No framework, backend, or API key is required.

## Run Locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
npx serve .
```

## Data Sources

Prices are stored as USD per 1M tokens and were checked on June 16, 2026.

- OpenAI API pricing: https://openai.com/api/pricing/
- Anthropic Claude pricing: https://docs.anthropic.com/en/docs/about-claude/pricing
- Google Gemini API pricing: https://ai.google.dev/gemini-api/docs/pricing

## Known Limitations

- The calculator covers text token pricing only.
- It does not include batch discounts, taxes, free tiers, regional billing differences, or image/audio/video pricing.
- Prompt cache write costs are simplified into a cached-input read estimate.
- Pricing can change, so the source pages should be checked before using this for real budget decisions.
