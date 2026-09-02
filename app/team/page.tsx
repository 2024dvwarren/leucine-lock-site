import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Footer, Header } from '../components';
export const metadata: Metadata = { title: 'Leadership Team', description: 'Meet the leadership team behind Leucine Lock DX.' };
const team = [
  {name:'Brian Bentley', role:'Founder & Chief Executive Officer', image:'/team-brian.png', facts:['Former founder and chairman in healthcare SaaS','30+ years in sales and business development leadership','Experienced angel investor']},
  {name:'Devin Connor', role:'Co-Founder & President', image:'/team-devin.png', facts:['Former co-founder in healthcare SaaS','17+ years in operations, business development, and sales leadership','Company builder focused on execution and growth']},
  {name:'Dr. Jonathon Hill, PhD', role:'Co-Founder & VP, Science & Technology', image:'/team-jonathon.jpeg', facts:['PhD in Genetics; MS in Molecular Biology','Professor at Brigham Young University','Fulbright Scholar and former co-founder and board member']}
];
export default function Team(){return <main id="main-content"><Header/><section className="pageHero teamHero"><div><p className="eyebrow">Leadership team</p><h1>Scientific depth. Commercial discipline.</h1><p className="lead">Leucine Lock DX brings together company-building experience, healthcare commercialization, and molecular biosensor expertise.</p></div></section><section className="teamGrid section">{team.map((person,i)=><article className="person" key={person.name}><div className="portrait"><Image src={person.image} alt={person.name} fill sizes="(max-width: 560px) calc(100vw - 80px), (max-width: 900px) 36vw, 360px"/><span>0{i+1}</span></div><h2>{person.name}</h2><p className="role">{person.role}</p><ul>{person.facts.map(f=><li key={f}>{f}</li>)}</ul></article>)}</section><section className="contactStrip"><div><p className="eyebrow">Connect</p><h2>Meet the team behind the platform.</h2></div><Link className="button light" href="/contact">Contact <span>↗</span></Link></section><Footer/></main>}
