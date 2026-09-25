import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer, Header, Molecule } from '../components';
export const metadata: Metadata = { title: 'Technology', description: 'How the Leucine Lock biosensor platform converts target recognition into an amplified, flexible diagnostic readout.' };

export default function Technology() { return <main id="main-content"><Header/>
  <section className="pageHero techHero"><div><p className="eyebrow">Technology</p><h1>A molecular switch for faster, more sensitive biosensing.</h1><p className="lead">Leucine Lock is a modular biosensor concept: recognition chemistry finds the target, a controlled molecular interaction activates the system, and an enzyme-linked response amplifies the signal.</p></div><Molecule compact/></section>
  <section className="mechanism section"><div className="sectionIntro"><p className="eyebrow">The mechanism</p><h2>Four engineered layers. One readable answer.</h2></div><div className="mechanismRows">
    <article><span>01</span><div><h3>Target-specific recognition</h3><p>A single-chain variable fragment (scFv)—an engineered antibody fragment—provides the target recognition layer. Changing that recognition element allows the architecture to be adapted for different analytes.</p></div></article>
    <article><span>02</span><div><h3>Leucine Lock control</h3><p>The Leucine Lock motif is designed to control enzyme activity until target binding changes the molecular configuration. That controlled transition links recognition to activation.</p></div></article>
    <article><span>03</span><div><h3>Enzymatic amplification</h3><p>Once activated, the enzyme can produce many detectable output molecules. The deck describes a development target of greater than 10–100× amplification, improving the visibility of low-level biological signals.</p></div></article>
    <article><span>04</span><div><h3>Application-specific readout</h3><p>The amplified result can be coupled to color, luminescence, or electrical detection. This supports simple qualitative tests and instrumented quantitative measurements.</p></div></article>
  </div></section>
  <section className="deepDive" aria-labelledby="architecture-title">
    <div className="deepDiveHeading"><p className="eyebrow">1 / Sensor architecture</p><h2 id="architecture-title">A target-gated molecular switch.</h2><p>The Leucine Lock architecture separates target recognition from signal generation. The target itself acts as a molecular template, positioning two sensor halves at the distance and orientation needed to unlock reporter assembly.</p></div>
    <div className="deepDiveVisual"><img src="/leucine-lock-architecture.png" alt="Diagram showing the target-recognition binder, Leucine Lock motif, and split-enzyme or FRET signal generator"/></div>
    <div className="componentGrid">
      <article><span>01</span><h3>Target recognition</h3><p>An scFv or alternate binder provides specificity by recognizing the analyte of interest. This modular recognition element can be changed for different targets.</p></article>
      <article><span>02</span><h3>Leucine Lock motif</h3><p>Complementary leucine zippers are held in a weak <em>cis</em> hairpin state. Target binding brings the two halves into the correct alignment and allows the switch to lock.</p></article>
      <article><span>03</span><h3>Signal generation</h3><p>A split enzyme or FRET pair activates only when both sensor halves are brought together, converting a specific binding event into a measurable output.</p></article>
    </div>
    <div className="designLogic"><b>Design logic</b><p>No target, no alignment, no assembled reporter. The analyte gates the molecular interaction that produces the signal.</p></div>
  </section>
  <section className="deepDive amplificationDive" aria-labelledby="amplification-title">
    <div className="deepDiveHeading"><p className="eyebrow">2 / Amplification cycle</p><h2 id="amplification-title">One binding event can drive cumulative signal.</h2><p>Target binding does more than turn the sensor on. It initiates a cycle in which the active reporter can persist after the antigen is released, allowing additional complexes to form and the detectable signal to accumulate.</p></div>
    <div className="deepDiveVisual"><img src="/leucine-lock-amplification.png" alt="Diagram showing capture and alignment, Leucine Lock switching, reporter activation, and repeated signal generation"/></div>
    <div className="amplificationSteps">
      <article><span>01</span><div><h3>Capture + align</h3><p>The antigen holds both sensor halves in close proximity and the correct orientation.</p></div></article>
      <article><span>02</span><div><h3>Switch + lock</h3><p>Weak <em>cis</em> interactions reorient into a stronger <em>trans</em>-bound leucine zipper complex, assembling the reporter.</p></div></article>
      <article><span>03</span><div><h3>Release + repeat</h3><p>The active reporter persists after antigen release. The antigen can participate in additional assembly events, creating cumulative output.</p></div></article>
    </div>
    <div className="impactCallout"><strong>10–100×</strong><p>Target sensitivity improvement versus comparable non-locking systems, with fluorescence, chemiluminescence, or colorimetric readouts. Performance remains application-specific and subject to assay validation.</p></div>
  </section>
  <section className="designSpace"><div><p className="eyebrow">Platform design space</p><h2>Tunable where the assay needs it.</h2></div><div className="designGrid"><article><b>Targets</b><span>Bacteria</span><span>Viruses</span><span>Protein analytes</span></article><article><b>Readouts</b><span>Color</span><span>Light</span><span>Electrical</span></article><article><b>Result types</b><span>Qualitative</span><span>Quantitative</span><span>Multiplex panels</span></article><article><b>Formats</b><span>Tube tests</span><span>Portable readers</span><span>Continuous monitors</span></article></div></section>
  <section className="useCases section"><div className="sectionIntro"><p className="eyebrow">Potential applications</p><h2>From a 10–15 minute test.</h2><p className="applicationsCopy">Platform concepts include quantitative insulin detection, viral detection, and respiratory disease panels. Each application requires its own assay development and validation.</p></div><div className="useCaseLine"><div><span>Sample</span></div><i/><div><span>Recognition</span></div><i/><div><span>Amplification</span></div><i/><div><span>Answer</span></div></div></section>
  <section className="contactStrip"><div><p className="eyebrow">Explore an application</p><h2>Bring us the diagnostic challenge.</h2></div><Link className="button light" href="/contact">Start a conversation <span>↗</span></Link></section>
  <Footer/>
</main> }
