import type { PilotContent } from './types';

export const en: PilotContent = {
  hero: {
    eyebrow: 'Pilot program · 3–5 teams · 2 weeks',
    title: 'An open-source coding agent that runs any model on your own key.',
    lede: 'ZenCode CLI is a free, MIT-licensed coding agent. Bring any model. Pay less. Trust what runs. We’re inviting 3–5 development teams to use it on real work for two weeks — and measure what it actually saves.',
    applyCta: 'Apply for the pilot',
    githubCta: 'View on GitHub',
    note: 'Free forever for the core. No card. No seat fees.',
  },
  pilot: {
    heading: 'What the pilot is',
    intro: 'Two weeks, your repo, your real tasks. We don’t run a demo for you — you run the tool, and we measure two numbers together.',
    steps: [
      {
        title: 'Use it on real work',
        body: 'Pick your own repo and tasks. Any language, any stack. Two weeks, inside your normal workflow.',
      },
      {
        title: 'Measure two numbers',
        body: 'Hours you save, and your real token cost from zen cost. Nothing else is tracked.',
      },
      {
        title: 'Tell us what happened',
        body: 'Send the numbers and a few lines of feedback at the end. That’s the whole pilot.',
      },
    ],
  },
  benefits: {
    heading: 'What you get',
    teamTitle: 'For your team',
    teamItems: [
      { strong: 'Free use', rest: ' — the core is MIT-licensed and free forever.' },
      { strong: 'Direct support', rest: ' — a direct line to the team building it, while you pilot.' },
      { strong: 'Case-study credit', rest: ' — your team named in the published case study, only if you agree.' },
    ],
    askTitle: 'What we ask',
    askItems: [
      { strong: 'Install it', rest: ' — one command, a few minutes to build from source.' },
      { strong: 'Use it for real work', rest: ' — two weeks, on tasks you’d do anyway.' },
      { strong: 'Share the numbers', rest: ' — your zen cost output and short feedback at the end.' },
    ],
  },
  install: {
    heading: 'Install it in one command',
    intro: 'Linux and macOS. The script clones the repo, builds zen-cli in release mode, and puts the binary in ~/.local/bin/zen. No sudo needed. Inspect the script before running it if you want to.',
    command: 'curl -fsSL https://raw.githubusercontent.com/7enlabs/zencode/main/install.sh | sh',
    caption: 'Windows (PowerShell) and full details: INSTALL.md. You’ll need Git and a Rust toolchain (cargo) first — the build takes a few minutes.',
  },
  cost: {
    heading: 'How we measure cost',
    intro: 'The CLI tracks its own usage. zen cost prints tokens used and what they cost, per model — including a line that says the session cost $0.00 when everything ran on free models.',
    exampleLabel: 'Example output format:',
    example: `$ zen cost
Session cost: <session-id>
  <model> (<provider>)
    12,400 input · 3,100 output tokens · $0.42
Totals: 12,400 input · 3,100 output · 15,500 tokens

Total cost: $0.42`,
    note: 'Machine-readable too: zen cost --json. At the end of the pilot, paste the output — that’s the cost number. Hours saved are your own estimate: note tasks where the CLI did the work, and roughly how long they would have taken by hand.',
  },
  who: {
    heading: 'Who can join',
    items: [
      { strong: 'A dev team doing real work', rest: ' — any language, any stack, anywhere in the world.' },
      { strong: 'Your own repo', rest: ' to work in during the two weeks.' },
      { strong: 'Willing to share the two numbers', rest: ' — hours saved and token cost — at the end.' },
    ],
  },
  apply: {
    heading: 'Apply for the pilot',
    intro: 'Five fields. We reply within a few days — pilot places are limited to 3–5 teams.',
    teamLabel: 'Team name',
    teamPlaceholder: 'e.g. Acme Web Team',
    sizeLabel: 'Team size',
    sizePlaceholder: 'Select…',
    sizeOptions: ['1–3 developers', '4–10 developers', '11–30 developers', '30+ developers'],
    stackLabel: 'Main stack',
    stackPlaceholder: 'e.g. TypeScript + React, Rust, Python/Django',
    repoLabel: 'Repo URL',
    repoOptional: '(optional)',
    repoPlaceholder: 'https://github.com/your-team/your-repo',
    emailLabel: 'Contact email',
    emailPlaceholder: 'you@yourteam.com',
    submit: 'Send application',
    missing: 'Please fill in team name, team size, main stack, and contact email.',
    opening: 'Opening your email client with the application pre-filled…',
    note: 'This opens your email client with the application pre-filled — no account, no tracking, no data stored on this page. Or write to us directly at contact@7en.net.',
  },
  faq: {
    heading: 'FAQ',
    items: [
      {
        q: 'Is ZenCode CLI free?',
        a: 'Yes. The core is MIT-licensed and free forever. There are no seat fees and no paywalled core features.',
      },
      {
        q: 'Where does my code and data go?',
        a: 'Nowhere through us. You bring your own API key (BYOK) — the CLI talks to your model provider directly. We don’t run a server in the middle, and we don’t see your code.',
      },
      {
        q: 'Do I need a card?',
        a: 'No. There is nothing to pay for in the pilot, and the core stays free after it.',
      },
      {
        q: 'What happens after the pilot?',
        a: 'You keep using it. The pilot ends; the CLI stays free. If the numbers are useful, we may publish a case study — only with your permission, and only with the numbers you agree to share.',
      },
    ],
  },
  footer: {
    tagline: 'ZenCode CLI — Bring any model. Pay less. Trust what runs.',
    builtBy: 'Built by 7EN Labs. The core is open source under the MIT License.',
    github: 'GitHub',
    license: 'MIT License',
    contact: 'contact@7en.net',
  },
};
