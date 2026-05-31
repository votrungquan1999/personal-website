# Infrastructure has moved

The Pulumi Infrastructure as Code for this site (Cloudflare DNS, Vercel projects
and domains) now lives in its own repository:

➡️ **https://github.com/votrungquan1999/personal-infra**

It auto-deploys on push: open a PR to preview the plan, merge to `main` to apply.

## Why it moved

- Independent lifecycle from the app code (infra changes shouldn't require an app
  deploy, and vice versa).
- The IaC manages **all** personal Vercel projects + their domains, not just this
  website — so it no longer belongs inside this one app repo.

## What still lives here

App code only. This repo deploys to Vercel via Vercel's **native Git
integration** (push `main` → Vercel builds & deploys). The custom domain
(`quanvo.dev`) and DNS are managed in the `personal-infra` repo.
