import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer, Header } from '../../components';
import styles from '../contact.module.css';

export const metadata: Metadata = {
  title: 'Message Received',
  robots: { index: false, follow: false },
};

export default function ContactThanks() {
  return (
    <main id="main-content">
      <Header />
      <section className={styles.successPage}>
        <div className={styles.successCard}>
          <span className={styles.successMark} aria-hidden="true">✓</span>
          <p className="eyebrow">Message received</p>
          <h1>Thank you for reaching out.</h1>
          <p>The Leucine Lock DX team has received your inquiry and will follow up directly.</p>
          <div className="actions">
            <Link className="button primary" href="/">Return home</Link>
            <Link className="button ghost" href="/technology">Explore the technology</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
