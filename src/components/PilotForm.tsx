import { useState } from 'react';
import type { PilotContent } from '../content/types';

// Signup form: no backend, no tracking. Builds a mailto: with the
// application pre-filled and opens the visitor's own email client.
// Destination: contact@7en.net.
export function PilotForm({ content }: { content: PilotContent['apply'] }) {
  const [status, setStatus] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const v = (name: string) => {
      const el = form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | null;
      return el ? el.value.trim() : '';
    };
    const team = v('team');
    const size = v('size');
    const stack = v('stack');
    const repo = v('repo');
    const email = v('email');
    if (!team || !size || !stack || !email) {
      setStatus(content.missing);
      return;
    }
    const subject = `ZenCode CLI pilot application — ${team}`;
    const body = [
      `Team name: ${team}`,
      `Team size: ${size}`,
      `Main stack: ${stack}`,
      `Repo URL: ${repo || '(not shared)'}`,
      `Contact email: ${email}`,
      '',
      'We would like to join the 2-week ZenCode CLI pilot.',
    ].join('\n');
    window.location.href =
      `mailto:contact@7en.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(content.opening);
  };

  return (
    <>
      <form id="pilot-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="f-team">{content.teamLabel}</label>
          <input id="f-team" name="team" type="text" required autoComplete="organization" placeholder={content.teamPlaceholder} />
        </div>
        <div>
          <label htmlFor="f-size">{content.sizeLabel}</label>
          <select id="f-size" name="size" required defaultValue="">
            <option value="" disabled>
              {content.sizePlaceholder}
            </option>
            {content.sizeOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="f-stack">{content.stackLabel}</label>
          <input id="f-stack" name="stack" type="text" required placeholder={content.stackPlaceholder} />
        </div>
        <div>
          <label htmlFor="f-repo">
            {content.repoLabel} <span className="opt">{content.repoOptional}</span>
          </label>
          <input id="f-repo" name="repo" type="url" placeholder={content.repoPlaceholder} />
        </div>
        <div>
          <label htmlFor="f-email">{content.emailLabel}</label>
          <input id="f-email" name="email" type="email" required autoComplete="email" placeholder={content.emailPlaceholder} />
        </div>
        <div>
          <button className="btn btn-primary" type="submit">
            {content.submit}
          </button>
        </div>
        <p id="form-status" role="status">
          {status}
        </p>
      </form>
      <p className="form-note">
        {content.note.split('contact@7en.net')[0]}
        <a href="mailto:contact@7en.net">contact@7en.net</a>
        {content.note.split('contact@7en.net')[1] ?? ''}
      </p>
    </>
  );
}
