import Link from 'next/link';

export default function LegalNotice() {
  return (
    <main className="legal-page" id="main-content">
      <Link className="back-link" href="/">← Back to LeucineLockDX</Link>
      <p className="eyebrow">Company information</p>
      <h1>Legal notice</h1>
      <h2>Site operator</h2>
      <p>LeucineLockDX Diagnostics Inc.</p>
      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:brian@diagnosticventures.net">brian@diagnosticventures.net</a><br />
        Telephone: <a href="tel:+18019437789">+1 801 943 7789</a>
      </p>
      <h2>Website information</h2>
      <p>
        This website provides general information about LeucineLockDX and its
        technology-development activities. It does not provide medical advice,
        diagnosis, or treatment, and it does not replace consultation with a
        qualified healthcare professional.
      </p>
      <h2>Intellectual property</h2>
      <p>
        Unless otherwise noted, the text, branding, and original materials on
        this site are owned by LeucineLockDX Diagnostics Inc. Product names and
        third-party marks remain the property of their respective owners.
      </p>
    </main>
  );
}
