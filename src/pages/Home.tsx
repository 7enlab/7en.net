import type { PilotContent } from '../content/types';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PilotForm } from '../components/PilotForm';

export interface HomeProps {
  lang: 'en' | 'vi';
  content: PilotContent;
  languageLabel: string;
  languageHref: string;
}

export function Home({ lang, content, languageLabel, languageHref }: HomeProps) {
  return (
    <>
      <Header lang={lang} languageLabel={languageLabel} languageHref={languageHref} />
      <main className="wrap">
        <div className="hero">
          <span className="eyebrow">{content.hero.eyebrow}</span>
          <h1>{content.hero.title}</h1>
          <p className="lede">{content.hero.lede}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#apply">
              {content.hero.applyCta}
            </a>
            <a className="btn btn-ghost" href="https://github.com/7enlabs/zencode">
              {content.hero.githubCta}
            </a>
          </div>
          <p className="hero-note">{content.hero.note}</p>
        </div>

        <section id="pilot">
          <h2>{content.pilot.heading}</h2>
          <p className="section-intro">{content.pilot.intro}</p>
          <div className="steps">
            {content.pilot.steps.map((step, i) => (
              <div className="step" key={step.title}>
                <span className="step-num">{i + 1}</span>
                <h3>{step.title}</h3>
                <p>
                  {step.body.split('zen cost').map((part, j) =>
                    j === 0 ? (
                      part
                    ) : (
                      <span key={j}>
                        <code>zen cost</code>
                        {part}
                      </span>
                    ),
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>{content.benefits.heading}</h2>
          <div className="cols">
            <div className="card">
              <h3>{content.benefits.teamTitle}</h3>
              <ul className="check-list">
                {content.benefits.teamItems.map((item) => (
                  <li key={item.strong}>
                    <strong>{item.strong}</strong>
                    {item.rest}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>{content.benefits.askTitle}</h3>
              <ul className="check-list">
                {content.benefits.askItems.map((item) => (
                  <li key={item.strong}>
                    <strong>{item.strong}</strong>
                    {item.rest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>{content.install.heading}</h2>
          <p className="section-intro">
            {content.install.intro.split('zen-cli').map((part, j) =>
              j === 0 ? (
                part
              ) : (
                <span key={j}>
                  <code>zen-cli</code>
                  {part}
                </span>
              ),
            )}
          </p>
          <pre>{content.install.command}</pre>
          <p className="code-caption">
            {content.install.caption.split('INSTALL.md')[0]}
            <a href="https://github.com/7enlabs/zencode/blob/main/INSTALL.md">INSTALL.md</a>
            {content.install.caption.split('INSTALL.md')[1]}
          </p>
        </section>

        <section>
          <h2>{content.cost.heading}</h2>
          <p className="section-intro">
            {content.cost.intro.split('zen cost').map((part, j) =>
              j === 0 ? (
                part
              ) : (
                <span key={j}>
                  <code>zen cost</code>
                  {part}
                </span>
              ),
            )}
          </p>
          <p className="code-caption">{content.cost.exampleLabel}</p>
          <pre>{content.cost.example}</pre>
          <p className="code-caption">
            {content.cost.note.split('zen cost --json').map((part, j) =>
              j === 0 ? (
                part
              ) : (
                <span key={j}>
                  <code>zen cost --json</code>
                  {part}
                </span>
              ),
            )}
          </p>
        </section>

        <section>
          <h2>{content.who.heading}</h2>
          <ul className="check-list">
            {content.who.items.map((item) => (
              <li key={item.strong}>
                <strong>{item.strong}</strong>
                {item.rest}
              </li>
            ))}
          </ul>
        </section>

        <section id="apply">
          <h2>{content.apply.heading}</h2>
          <p className="section-intro">{content.apply.intro}</p>
          <PilotForm content={content.apply} />
        </section>

        <section>
          <h2>{content.faq.heading}</h2>
          {content.faq.items.map((item) => (
            <div className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer content={content.footer} />
    </>
  );
}
