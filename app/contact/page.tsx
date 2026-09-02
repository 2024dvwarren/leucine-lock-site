import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer, Header } from '../components';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation with the Leucine Lock DX team.',
};

export default function Contact() {
  return (
    <main id="main-content">
      <Header />
      <section className={styles.contactPage}>
        <div className={styles.intro}>
          <p className="eyebrow">Contact</p>
          <h1>Bring us the diagnostic challenge.</h1>
          <p className={styles.lead}>
            Tell us about the target, use case, or partnership you have in mind.
            Our team will review your note and follow up directly.
          </p>
          <div className={styles.note}>
            <span>What happens next</span>
            <p>The Leucine Lock DX team will receive your inquiry by email.</p>
          </div>
        </div>

        <form
          action="https://formsubmit.co/brian@diagnosticventures.net"
          className={styles.form}
          method="POST"
        >
          <input name="_subject" type="hidden" value="New Leucine Lock DX website inquiry" />
          <input name="_next" type="hidden" value="https://leucinelockdx.com/contact/thanks" />
          <input name="_template" type="hidden" value="table" />
          <input name="_url" type="hidden" value="https://leucinelockdx.com/contact" />
          <label className={styles.honey} aria-hidden="true">
            Leave this field empty
            <input autoComplete="off" name="_honey" tabIndex={-1} type="text" />
          </label>

          <div className={styles.twoColumns}>
            <label>
              <span>Name</span>
              <input autoComplete="name" name="name" placeholder="Your name" required type="text" />
            </label>
            <label>
              <span>Email</span>
              <input autoComplete="email" name="email" placeholder="you@company.com" required type="email" />
            </label>
          </div>

          <label>
            <span>Organization <em>Optional</em></span>
            <input autoComplete="organization" name="organization" placeholder="Company or institution" type="text" />
          </label>

          <label>
            <span>What would you like to discuss?</span>
            <select defaultValue="" name="inquiry_type" required>
              <option disabled value="">Select a topic</option>
              <option>Technology partnership</option>
              <option>Investment</option>
              <option>Research collaboration</option>
              <option>Media or speaking</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            <span>Message</span>
            <textarea name="message" placeholder="Tell us a little about your inquiry." required rows={6} />
          </label>

          <div className={styles.formFooter}>
            <p>
              Please do not include patient information or other sensitive medical
              data. See our <Link href="/privacy">privacy notice</Link>.
            </p>
            <button className="button primary" type="submit">
              Send inquiry <span>→</span>
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </main>
  );
}
