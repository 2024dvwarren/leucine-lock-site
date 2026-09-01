import Link from 'next/link';
import { Footer, Header, Molecule } from './components';

export default function Home() {
  return <main><Header/>
    <section className="hero">
      <div className="heroGlow"/><div className="heroCopy"><p className="eyebrow">A programmable biosensor platform</p><h1>Fast answers.<br/><span>Amplified by design.</span></h1><p className="lead">Leucine Lock DX is developing biosensors that combine target-specific recognition with enzyme-powered signal amplification—designed to preserve sensitivity while delivering practical results in minutes.</p><div className="actions"><Link className="button primary" href="/technology">See how it works <span>→</span></Link><a className="button ghost" href="mailto:brian@diagnosticventures.net?subject=Leucine%20Lock%20DX%20partnership">Discuss a partnership</a></div></div>
      <Molecule/>
    </section>

    <section className="band"><div><strong>10 min</strong><span>Target field-test workflow*</span></div><div><strong>10–100×</strong><span>Designed signal amplification*</span></div><div><strong>1 platform</strong><span>Color, light, or electrical readout</span></div><p>*Platform targets and company-reported development goals; performance varies by assay and requires validation.</p></section>

    <section className="explain section"><div className="sectionIntro"><p className="eyebrow">The core idea</p><h2>Turn target binding into a much louder signal.</h2><p>Traditional rapid tests often force a tradeoff between speed and sensitivity. The Leucine Lock platform is being engineered to address both through a molecular switch coupled to an amplifying enzyme response.</p></div><div className="flow">
      <article><span>01</span><div className="flowIcon recognize"/><h3>Recognize</h3><p>An engineered antibody fragment is selected to bind a specific bacterium, virus, or protein analyte.</p></article>
      <article><span>02</span><div className="flowIcon unlock"/><h3>Unlock</h3><p>Target binding changes the sensor configuration, releasing the Leucine Lock-controlled activity.</p></article>
      <article><span>03</span><div className="flowIcon amplify"/><h3>Amplify</h3><p>The activated enzyme generates many signal molecules from one recognition event, strengthening the readout.</p></article>
      <article><span>04</span><div className="flowIcon read"/><h3>Read</h3><p>The output can be designed as color, light, or an electrical signal—qualitative or quantitative.</p></article>
    </div><Link className="textLink" href="/technology">Explore the complete technology story →</Link></section>

    <section className="possibilities"><div><p className="eyebrow">One architecture, many possibilities</p><h2>A flexible route to rapid testing.</h2></div><div className="possibilityGrid"><article><strong>Field-ready formats</strong><p>Simple tube-based tests designed around a clear positive or negative result.</p></article><article><strong>Quantitative monitoring</strong><p>Instrument-based formats for measuring protein analytes such as insulin.</p></article><article><strong>Disease panels</strong><p>Multiplex concepts that could distinguish several respiratory targets in a single workflow.</p></article><article><strong>Tunable performance</strong><p>Kinetics, recognition chemistry, amplification, and readout can be tailored to the application.</p></article></div></section>

    <section className="teamTeaser section"><div><p className="eyebrow">Leadership</p><h2>Built by operators, scientists, and company builders.</h2></div><p>Our leadership combines healthcare entrepreneurship, commercial execution, molecular biology, genetics, and biosensor research.</p><Link className="button primary" href="/team">Meet the team <span>→</span></Link></section>
    <section className="contactStrip"><div><p className="eyebrow">Partners & investors</p><h2>Let’s build the next rapid test.</h2></div><a className="button light" href="mailto:brian@diagnosticventures.net?subject=Leucine%20Lock%20DX%20inquiry">Contact Brian <span>↗</span></a></section>
    <Footer/>
  </main>;
}
