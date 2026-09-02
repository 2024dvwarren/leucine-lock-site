'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <a className="skipLink" href="#main-content">
        Skip to content
      </a>
      <Link className="wordmark" href="/" onClick={closeMenu}>
        LEUCINE LOCK <b>DX</b>
      </Link>
      <button
        aria-controls="site-navigation"
        aria-expanded={menuOpen}
        className="menuButton"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        type="button"
      >
        <span>{menuOpen ? 'Close' : 'Menu'}</span>
        <i aria-hidden="true" />
      </button>
      <nav
        aria-label="Primary navigation"
        className={menuOpen ? 'isOpen' : undefined}
        id="site-navigation"
      >
        <Link href="/technology" onClick={closeMenu}>Technology</Link>
        <Link href="/team" onClick={closeMenu}>Team</Link>
        <Link className="navCta" href="/contact" onClick={closeMenu}>Contact</Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return <footer><div><span className="wordmark">LEUCINE LOCK <b>DX</b></span><p>Powering sensitive and rapid biosensors.</p></div><div className="footerLinks"><Link href="/technology">Technology</Link><Link href="/team">Team</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></div><small>© {new Date().getFullYear()} LLDX, Inc. · Technology under development.</small></footer>;
}

export function Molecule({ compact = false }: { compact?: boolean }) {
  return <div className={`molecule ${compact ? 'compact' : ''}`} aria-label="Animated conceptual model of the Leucine Lock biosensor"><div className="target"><i/><span>Target</span></div><div className="sensor"><i className="arm left"/><i className="arm right"/><i className="lock"/><span>Recognition element</span></div><div className="signal"><i/><i/><i/><i/><i/><span>Amplified signal</span></div></div>;
}
