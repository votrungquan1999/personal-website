# Infrastructure & Deployment

## Infrastructure as Code lives in a separate repo

The Pulumi IaC (Cloudflare DNS, Vercel projects, custom domains) was moved out of
this repo into its own auto-deploying repository:

➡️ **https://github.com/votrungquan1999/personal-infra**

That repo manages DNS + **all** personal Vercel projects and their domains (not
just this site). It deploys via GitOps: open a PR to preview the plan, merge to
`main` to apply.

## How this app deploys

This repository contains **app code only**. It deploys through Vercel's **native
Git integration**: pushing to the production branch triggers a Vercel build and
deployment automatically. No Pulumi or manual deploy step is involved here.

| Concern | Where it's managed |
|---|---|
| App build & deploy | Vercel native Git integration (push this repo) |
| Custom domain (`quanvo.dev`, `www`) + DNS | `personal-infra` repo |
| Vercel project settings + GitHub link | `personal-infra` repo |
| Function region (currently `sin1` / Singapore) | `personal-infra` repo |
| Environment variables / secrets | Vercel dashboard (intentionally not in IaC) |

## History

This repo previously contained an `infrastructure/` Pulumi project. It was
extracted so infra and app code have independent lifecycles, and because the IaC
manages all personal projects — not just this one. The `infrastructure/` folder
now holds only a pointer README.

## Related Files

- [architecture.md](./architecture.md) - Frontend architecture details
