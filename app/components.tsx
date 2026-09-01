import Link from 'next/link';

export function Header() {
  return <header className="header"><Link className="wordmark" href="/">LEUCINE LOCK <b>DX</b></Link><nav aria-label="Primary navigation"><Link href="/technology">Technology</Link><Link href="/team">Team</Link><a className="navCta" href="mailto:brian@diagnosticventures.net?subject=Leucine%20Lock%20DX%20inquiry">Contact us</a></nav></header>;
}

export function Footer() {
  return <footer><div><span className="wordmark">LEUCINE LOCK <b>DX</b></span><p>Powering sensitive and rapid biosensors.</p></div><div className="footerLinks"><Link href="/technology">Technology</Link><Link href="/team">Team</Link><a href="mailto:brian@diagnosticventures.net">Contact</a><Link href="/privacy">Privacy</Link></div><small>© {new Date().getFullYear()} LLDX, Inc. · Technology under development.</small></footer>;
}

export function Molecule({ compact = false }: { compact?: boolean }) {
  return <div className={`molecule ${compact ? 'compact' : ''}`} aria-label="Animated conceptual model of the Leucine Lock biosensor"><div className="target"><i/><span>Target</span></div><div className="sensor"><i className="arm left"/><i className="arm right"/><i className="lock"/><span>Recognition element</span></div><div className="signal"><i/><i/><i/><i/><i/><span>Amplified signal</span></div></div>;
}
