// Page content type for the ZenCode CLI pilot home page (one per locale).
export interface PilotContent {
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    applyCta: string;
    githubCta: string;
    note: string;
  };
  pilot: {
    heading: string;
    intro: string;
    steps: { title: string; body: string }[];
  };
  benefits: {
    heading: string;
    teamTitle: string;
    teamItems: { strong: string; rest: string }[];
    askTitle: string;
    askItems: { strong: string; rest: string }[];
  };
  install: {
    heading: string;
    intro: string;
    command: string;
    caption: string;
  };
  cost: {
    heading: string;
    intro: string;
    exampleLabel: string;
    example: string;
    note: string;
  };
  who: {
    heading: string;
    items: { strong: string; rest: string }[];
  };
  apply: {
    heading: string;
    intro: string;
    teamLabel: string;
    teamPlaceholder: string;
    sizeLabel: string;
    sizePlaceholder: string;
    sizeOptions: string[];
    stackLabel: string;
    stackPlaceholder: string;
    repoLabel: string;
    repoOptional: string;
    repoPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    submit: string;
    missing: string;
    opening: string;
    note: string;
  };
  faq: {
    heading: string;
    items: { q: string; a: string }[];
  };
  footer: {
    tagline: string;
    builtBy: string;
    github: string;
    license: string;
    contact: string;
  };
}
