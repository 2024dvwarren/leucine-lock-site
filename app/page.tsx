export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Leucine Lock DX home">
          <img src="/leucine-lock-logo.png" alt="Leucine Lock DX Diagnostics Inc." />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#technology">Technology</a>
          <a href="#company">Company</a>
          <a href="#approach">Approach</a>
          <a className="nav-cta" href="#contact">Start a conversation</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Biosensor innovation · Since 2008</p>
          <h1>
            Powering sensitive
            <span>and rapid biosensors.</span>
          </h1>
          <p className="hero-lede">
            LeucineLockDX develops biotechnology and medical-device platforms
            designed to help diagnostic teams move from signal to insight with
            speed and precision.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#technology">
              Explore our technology <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#contact">
              Discuss a partnership <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Clinical diagnostic environment">
          <img src="/clinical-diagnostics.jpg" alt="Clinical team working in a modern operating room" />
          <div className="signal-card">
            <span className="pulse" aria-hidden="true" />
            <div>
              <strong>Signal, amplified.</strong>
              <small>Designed for trace-level detection</small>
            </div>
          </div>
        </div>
      </section>

      <section className="proof" aria-label="Company highlights">
        <div className="proof-intro">
          <span>Built for diagnostic performance</span>
          <p>Company-reported milestones across biotechnology and medical-device development.</p>
        </div>
        <div className="metric">
          <strong>15+</strong>
          <span>years of sustained innovation</span>
        </div>
        <div className="metric">
          <strong>01</strong>
          <span>U.S. patent, with more pending</span>
        </div>
        <div className="metric">
          <strong>92%</strong>
          <span>reported platform accuracy*</span>
        </div>
      </section>

      <section className="technology section-shell" id="technology">
        <div className="section-heading">
          <p className="eyebrow">The technology</p>
          <h2>From faint biological signal to decisive information.</h2>
          <p>
            Our biosensor platforms bring enzyme engineering, signal amplification,
            and practical device design together in one focused development approach.
          </p>
        </div>

        <div className="capabilities">
          <article className="capability capability-featured">
            <span className="capability-number">01</span>
            <div className="sensor-mark" aria-hidden="true">
              <i /><i /><i /><i /><i />
            </div>
            <h3>Advanced sensitivity</h3>
            <p>
              Proprietary enzyme engineering and signal amplification are designed
              to detect target biomolecules at trace levels.
            </p>
            <span className="capability-tag">Trace-level detection</span>
          </article>
          <article className="capability">
            <span className="capability-number">02</span>
            <div className="time-mark" aria-hidden="true">00:05</div>
            <h3>Rapid response</h3>
            <p>
              Streamlined biochemical interactions support fast diagnostic results
              while preserving sensitivity and specificity.
            </p>
            <span className="capability-tag">Results in minutes</span>
          </article>
          <article className="capability">
            <span className="capability-number">03</span>
            <div className="device-mark" aria-hidden="true"><i /><i /><i /></div>
            <h3>Integrated devices</h3>
            <p>
              Compatibility and usability guide devices built to fit current
              diagnostic ecosystems and laboratory workflows.
            </p>
            <span className="capability-tag">Workflow ready</span>
          </article>
        </div>
        <p className="claim-note">
          *Accuracy figure is company-reported and may vary by application and study conditions.
        </p>
      </section>

      <section className="approach" id="approach">
        <div className="approach-image">
          <img src="/point-of-care-testing.jpg" alt="Point-of-care diagnostic test in a clinical setting" />
          <span className="image-label">Point-of-care potential</span>
        </div>
        <div className="approach-copy">
          <p className="eyebrow">Our approach</p>
          <h2>Engineered around the people who need the answer.</h2>
          <p className="approach-lede">
            Technology only matters when it works in the real world. We develop
            around the full diagnostic experience—from target detection to a clear,
            repeatable result.
          </p>
          <ol className="steps">
            <li><span>01</span><div><strong>Detect</strong><p>Identify biomolecules at ultra-low concentrations.</p></div></li>
            <li><span>02</span><div><strong>Amplify</strong><p>Strengthen the biological signal with engineered chemistry.</p></div></li>
            <li><span>03</span><div><strong>Integrate</strong><p>Translate the science into practical diagnostic devices.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="company section-shell" id="company">
        <div className="company-statement">
          <p className="eyebrow">LeucineLockDX</p>
          <h2>Innovation with a clear clinical purpose.</h2>
        </div>
        <div className="company-copy">
          <p>
            Since 2008, our team has pursued biotechnology and medical-device
            solutions that make sensitive diagnostics faster, clearer, and more
            useful to healthcare teams.
          </p>
          <p>
            We pair scientific precision with close collaboration—working across
            research, product development, and clinical needs to move promising
            biosensor concepts toward real-world use.
          </p>
        </div>
        <div className="values" aria-label="Company values">
          <div><span>01</span><strong>Innovation</strong><p>Pursuing scientific breakthroughs with practical value.</p></div>
          <div><span>02</span><strong>Precision</strong><p>Holding sensitivity, accuracy, and repeatability to a high standard.</p></div>
          <div><span>03</span><strong>Collaboration</strong><p>Building progress with healthcare and research partners.</p></div>
          <div><span>04</span><strong>Responsibility</strong><p>Developing with care for patients, clinicians, and communities.</p></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-image">
          <img src="/clinical-team.jpg" alt="Clinical specialists collaborating during a procedure" />
        </div>
        <div className="contact-panel">
          <p className="eyebrow">Let’s collaborate</p>
          <h2>Bring your diagnostic challenge into focus.</h2>
          <p>
            Talk with LeucineLockDX about biosensor technologies, custom medical-device
            development, and partnership opportunities.
          </p>
          <a className="button button-light" href="mailto:brian@leucinelockdx.com">
            brian@leucinelockdx.com <span aria-hidden="true">↗</span>
          </a>
          <a className="phone-link" href="tel:+18019437789">+1 801 943 7789</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">LEUCINE LOCK <span>DX</span></div>
        <p>Powering sensitive and rapid biosensors.</p>
        <div className="footer-links">
          <a href="/legal">Legal notice</a>
          <a href="/privacy">Privacy</a>
          <a href="mailto:brian@leucinelockdx.com">Contact</a>
        </div>
        <small>© {new Date().getFullYear()} LeucineLockDX Diagnostics Inc. All rights reserved.</small>
      </footer>
    </main>
  );
}
