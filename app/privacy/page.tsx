import Link from 'next/link';

export default function Privacy() {
  return (
    <main className="legal-page" id="main-content">
      <Link className="back-link" href="/">← Back to LeucineLockDX</Link>
      <p className="eyebrow">Your information</p>
      <h1>Privacy</h1>
      <p>
        This informational website does not use a contact form, advertising
        cookies, or third-party analytics. If you choose to contact us by email
        or telephone, we use the information you provide only to respond to your
        inquiry and manage the resulting business relationship.
      </p>
      <h2>Information you provide</h2>
      <p>
        This may include your name, contact details, organization, and the content
        of your message. Please do not send sensitive medical or patient information
        through ordinary email.
      </p>
      <h2>Retention and sharing</h2>
      <p>
        We retain correspondence only as long as reasonably necessary for the
        purpose for which it was provided, legal obligations, and ordinary business
        records. We do not sell personal information.
      </p>
      <h2>Questions</h2>
      <p>
        For questions or requests concerning your information, email{' '}
        <a href="mailto:brian@diagnosticventures.net">brian@diagnosticventures.net</a>.
      </p>
      <p>Last updated: September 1, 2026.</p>
    </main>
  );
}
