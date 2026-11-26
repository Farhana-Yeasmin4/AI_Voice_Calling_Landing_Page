# Shrobon AI Calling: landing page

Marketing landing page for **Shrobon AI Calling by Oleyn**, an AI receptionist that answers calls when a business can't, then emails a summary and adds a row to the owner's Google Sheet.

It is a single self-contained file, `ai-receptionist-landing.html`, with three views switched in the page:

- **Home**: hero, when it answers, features, how it works, sample call, rules, who it's for, plans, FAQ
- **Features** (`#/features`): call flow, on the call, after the call, owner dashboard, reliable and safe, coming soon
- **Plans** (`#/plans`): Starter, Pro and Enterprise, comparison table, how minutes work

## View it

Open `ai-receptionist-landing.html` in any browser. No build step.

## Share it on your local network

Needs [Node.js](https://nodejs.org). Double-click `Share landing page.cmd` (or run `node share-landing-server.js 8080`). The window shows a link like `http://192.168.x.x:8080` that anyone on the same WiFi can open. It serves only the landing page. Keep the window open while sharing.
