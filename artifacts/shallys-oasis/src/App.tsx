import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wrench,
  X,
  Youtube,
} from 'lucide-react';
import promoThankYou from '@assets/promo-thank-you.png';
import promoNewWeek from '@assets/promo-new-week.png';
import promoNewArrivals from '@assets/promo-new-arrivals.png';
import brandLogo from '@assets/SHALLY_1788203591437.png';

const contactNumber = '+234 808 789 0587';
const contactNumberAlt = '+234 907 040 6967';
const instagramHref = 'https://www.instagram.com/shallysoasisgadgets/';
const socialHubHref = 'https://linktr.ee/shallyoasis';
const whatsappHref =
  'https://wa.me/2348087890587?text=Hello%20Shally%27s%20Oasis%2C%20I%27d%20like%20to%20order%20a%20gadget.';

function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function Wordmark() {
  return (
    <span className="wordmark" aria-label="Shally's Oasis">
      <span className="wordmark-mark" aria-hidden="true" />
      <span className="wordmark-copy">
        <strong>SHALLY&apos;S OASIS</strong>
        <span>GADGETS &amp; ACCESSORIES</span>
      </span>
    </span>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  useReveal();

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="site-wrap noise">
      <div className="top-strip" data-testid="announcement-bar">
        Lagos&apos; trusted gadget stop · new arrivals just dropped
      </div>

      <header className={`site-nav ${mobileOpen ? 'nav-mobile-open' : ''}`}>
        <div className="container-wide nav-inner">
          <a href="#top" onClick={closeMobile} data-testid="link-brand-home">
            <Wordmark />
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a className="nav-link" href="#now-on" onClick={closeMobile} data-testid="link-nav-now-on">Now on</a>
            <a className="nav-link" href="#what-we-do" onClick={closeMobile} data-testid="link-nav-what-we-do">What we do</a>
            <a className="nav-link" href="#the-oasis" onClick={closeMobile} data-testid="link-nav-the-oasis">The Oasis</a>
            <a className="nav-link" href="#how-to-buy" onClick={closeMobile} data-testid="link-nav-how-to-buy">How to buy</a>
            <a className="nav-link" href="#visit" onClick={closeMobile} data-testid="link-nav-visit">Visit us</a>
          </nav>
          <div className="nav-actions">
            <a className="nav-call" href={`tel:${contactNumber.replace(/\s/g, '')}`} data-testid="link-nav-call">
              Call {contactNumber}
            </a>
          </div>
          <button
            className="menu-toggle"
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container-wide hero-grid">
            <div className="hero-copy">
              <div className="eyebrow hero-kicker reveal">It&apos;s a new week</div>
              <h1 className="display-xl hero-title reveal reveal-delay-1">
                New arrivals<br /><span className="yellow">just dropped.</span>
              </h1>
              <p className="body-lg hero-sub reveal reveal-delay-2">
                Great deals. Top brands. Smart savings. The latest iPhones, Samsungs and must-have accessories are here.
              </p>
              <div className="cta-row reveal reveal-delay-3">
                <a className="btn btn-primary" href={whatsappHref} target="_blank" rel="noreferrer" data-testid="link-hero-whatsapp">
                  Order on WhatsApp <ArrowUpRight size={16} />
                </a>
                <a className="btn btn-ghost" href="#now-on" data-testid="link-hero-explore">
                  Explore the Oasis <ChevronRight size={16} />
                </a>
              </div>
              <div className="hero-note reveal reveal-delay-3">
                <span className="note-dot" aria-hidden="true" />
                <span>Original tech essentials. Direct from Omole, Ikeja.</span>
              </div>
            </div>

            <div className="hero-visual reveal reveal-delay-2" aria-label="Shally's Oasis new arrivals feature">
              <div className="orbit" aria-hidden="true" />
              <div className="promo-card">
                <img src={promoNewArrivals} alt="New arrivals just dropped at Shally's Oasis" />
              </div>
              <div className="visual-tag">
                <strong>01</strong>
                <span>Start here</span>
              </div>
            </div>
          </div>
          <div className="hero-foot">
            <div className="container-wide hero-foot-inner">
              <span>Omole Plaza · Omole Phase 1 · Ikeja Lagos</span>
              <span className="scroll-cue"><span className="scroll-line" /> Scroll to discover</span>
            </div>
          </div>
        </section>

        <div className="ticker" aria-label="Shally's Oasis services">
          <div className="ticker-track">
            <div className="ticker-item">Phones</div>
            <div className="ticker-item">Watches</div>
            <div className="ticker-item">Audio &amp; more</div>
            <div className="ticker-item">Laptops</div>
            <div className="ticker-item">Smart gadgets</div>
            <div className="ticker-item">Accessories</div>
            <div className="ticker-item">Repairs</div>
            <div className="ticker-item">Online ordering</div>
            <div className="ticker-item">Phones</div>
            <div className="ticker-item">Watches</div>
            <div className="ticker-item">Audio &amp; more</div>
            <div className="ticker-item">Laptops</div>
            <div className="ticker-item">Smart gadgets</div>
            <div className="ticker-item">Accessories</div>
            <div className="ticker-item">Repairs</div>
            <div className="ticker-item">Online ordering</div>
          </div>
        </div>

        <section id="now-on" className="campaigns section-pad">
          <div className="container-wide">
            <div className="section-intro reveal">
              <div>
                <div className="eyebrow section-label">Now on</div>
                <h2 className="display-lg">This week at<br />the Oasis.</h2>
              </div>
              <p>
                Great deals. Top brands. Smart savings. New arrivals, weekly offers, and a thank you to everyone who sends a friend our way.
              </p>
            </div>
            <div className="campaign-grid">
              <article className="campaign-card reveal">
                <div className="campaign-frame">
                  <img src={promoNewArrivals} alt="New arrivals just dropped at Shally's Oasis" />
                </div>
                <div className="campaign-copy">
                  <span className="eyebrow">Fresh in</span>
                  <h3>New arrivals just dropped</h3>
                  <p>The latest iPhones, Samsungs and must-have accessories are here. Phones, watches, audio and more.</p>
                  <a className="campaign-link" href={whatsappHref} target="_blank" rel="noreferrer" data-testid="link-campaign-arrivals">
                    Ask about what&apos;s in <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
              <article className="campaign-card reveal reveal-delay-1">
                <div className="campaign-frame">
                  <img src={promoNewWeek} alt="It's a new week at Shally's Oasis Gadgets" />
                </div>
                <div className="campaign-copy">
                  <span className="eyebrow">Weekly deals</span>
                  <h3>It&apos;s a new week</h3>
                  <p>Brand-new iPhones and Samsungs, plus laptops built for top performance. Only at Shally&apos;s Oasis Gadgets.</p>
                  <a className="campaign-link" href={whatsappHref} target="_blank" rel="noreferrer" data-testid="link-campaign-week">
                    See this week&apos;s deals <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
              <article className="campaign-card reveal reveal-delay-2">
                <div className="campaign-frame">
                  <img src={promoThankYou} alt="Thank you for your referrals to Shally's Oasis" />
                </div>
                <div className="campaign-copy">
                  <span className="eyebrow">Daalu E Seun</span>
                  <h3>Thank you for the referrals</h3>
                  <p>Your referrals power our growth. We&apos;re truly grateful — Naija&apos;s first choice for gadgets and accessories.</p>
                  <a className="campaign-link" href={whatsappHref} target="_blank" rel="noreferrer" data-testid="link-campaign-thanks">
                    Send a friend our way <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="what-we-do" className="categories section-pad">
          <div className="container-wide">
            <div className="section-intro reveal">
              <div>
                <div className="eyebrow section-label">01 / What we do</div>
                <h2 className="display-lg">Tech that fits<br />your real life.</h2>
              </div>
              <p>
                From the device in your hand to the setup on your desk, find the essentials that keep work, play and everyday life connected.
              </p>
            </div>
            <div className="category-grid">
              <a className="category-card primary reveal" href="#how-to-buy" data-testid="card-category-phones">
                <span className="category-num">01</span>
                <h3>Phones<br />that move<br />with you.</h3>
                <p>Find your next phone with a straightforward route from question to order.</p>
                <span className="device-mark" aria-hidden="true" />
                <span className="category-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
              </a>
              <a className="category-card yellow reveal reveal-delay-1" href="#how-to-buy" data-testid="card-category-laptops">
                <span className="category-num">02</span>
                <h3>Laptops for the long run.</h3>
                <p>For getting things done, wherever the day takes you.</p>
                <span className="laptop-mark" aria-hidden="true" />
                <span className="category-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
              </a>
              <a className="category-card mint reveal reveal-delay-2" href="#how-to-buy" data-testid="card-category-accessories">
                <span className="category-num">03</span>
                <h3>Small things. Big difference.</h3>
                <p>Gadgets and accessories that complete your setup.</p>
                <span className="accessory-mark" aria-hidden="true" />
                <span className="category-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
              </a>
            </div>
          </div>
        </section>

        <section id="the-oasis" className="editorial section-pad">
          <div className="container-wide editorial-grid">
            <div className="editorial-copy reveal">
              <div className="eyebrow">02 / The Oasis</div>
              <h2 className="display-lg">Daalu E Seun.<br />Thank you.</h2>
              <p>
                Naija&apos;s first choice for gadgets and accessories. Your referrals power our growth — we&apos;re truly grateful, and always here for the next device, the next question, the next friend you send our way.
              </p>
              <a className="btn btn-primary" href={whatsappHref} target="_blank" rel="noreferrer" data-testid="link-oasis-whatsapp">
                Start a conversation <MessageCircle size={16} />
              </a>
            </div>
            <div className="artwork-stack reveal reveal-delay-1">
              <div className="artwork artwork-one">
                <img src={promoThankYou} alt="Thank you for your referrals to Shally's Oasis" />
              </div>
              <div className="artwork artwork-two">
                <img src={promoNewWeek} alt="It's a new week at Shally's Oasis Gadgets" />
              </div>
            </div>
          </div>
        </section>

        <section className="values section-pad">
          <div className="container-wide values-grid">
            <div className="values-heading reveal">
              <div className="eyebrow section-label">03 / Why the Oasis</div>
              <h2 className="display-lg">A little more human.</h2>
              <p>
                Good gadgets are only half the story. The rest is knowing there is a real person on the other side of your question.
              </p>
            </div>
            <div className="value-list reveal reveal-delay-1">
              <article className="value-item">
                <span>01</span>
                <div>
                  <h3>Clear from the start</h3>
                  <p>Ask about phones, laptops, gadgets, accessories or repairs without the runaround.</p>
                </div>
                <ShieldCheck size={18} />
              </article>
              <article className="value-item">
                <span>02</span>
                <div>
                  <h3>Close to the community</h3>
                  <p>A Lagos storefront and an online route that meet you where you are.</p>
                </div>
                <MapPin size={18} />
              </article>
              <article className="value-item">
                <span>03</span>
                <div>
                  <h3>Here for the after</h3>
                  <p>When something needs attention, repairs are part of the conversation too.</p>
                </div>
                <Wrench size={18} />
              </article>
            </div>
          </div>
        </section>

        <section id="how-to-buy" className="buy section-pad">
          <div className="container-wide buy-grid">
            <div className="buy-heading reveal">
              <div className="eyebrow section-label">04 / How to buy</div>
              <h2 className="display-lg">No maze. Just ask, choose, order.</h2>
              <p>
                Browse at your pace, then reach us directly. Tell us what you are looking for and we&apos;ll take it from there.
              </p>
              <div className="steps">
                <article className="step">
                  <span className="step-num">01</span>
                  <h3>Tell us what you need</h3>
                  <p>Send a message or call with the device or accessory on your mind.</p>
                </article>
                <article className="step">
                  <span className="step-num">02</span>
                  <h3>Get the details</h3>
                  <p>Have a clear conversation before you make your choice.</p>
                </article>
                <article className="step">
                  <span className="step-num">03</span>
                  <h3>Order your way</h3>
                  <p>Continue online or visit the store at Omole Plaza.</p>
                </article>
              </div>
            </div>
            <aside className="buy-aside reveal reveal-delay-1">
              <div className="eyebrow">Ready when you are</div>
              <h3>Let&apos;s find the right fit.</h3>
              <div className="cta-row">
                <a className="btn btn-primary" href={whatsappHref} target="_blank" rel="noreferrer" data-testid="link-buy-whatsapp">
                  WhatsApp us <MessageCircle size={16} />
                </a>
                <a className="btn btn-ghost" href={`tel:${contactNumber.replace(/\s/g, '')}`} data-testid="link-buy-call">
                  Call us <Phone size={15} />
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section id="visit" className="location section-pad">
          <div className="container-wide location-grid">
            <div className="location-copy reveal">
              <div className="eyebrow">05 / Find us</div>
              <h2 className="display-lg">Come through<br />to the Oasis.</h2>
              <p>
                Visit us in the heart of Omole Phase 1, or start online if that suits your day better.
              </p>
              <div className="location-details">
                <div className="detail">
                  <MapPin size={19} />
                  <div>
                    <strong>Omole Plaza</strong>
                    <span>Omole Phase 1, Ikeja Lagos</span>
                  </div>
                </div>
                <div className="detail">
                  <Phone size={19} />
                  <div>
                    <strong>Call or WhatsApp</strong>
                    <span>
                      <a href={`tel:${contactNumber.replace(/\s/g, '')}`}>{contactNumber}</a>
                      <br />
                      <a href={`tel:${contactNumberAlt.replace(/\s/g, '')}`}>{contactNumberAlt}</a>
                    </span>
                  </div>
                </div>
                <div className="detail">
                  <Clock3 size={19} />
                  <div>
                    <strong>Public listing hours</strong>
                    <span>Monday–Friday, 8:00 am–5:00 pm<br />Saturday–Sunday, closed</span>
                  </div>
                </div>
              </div>
              <a className="btn btn-primary" href="https://linktr.ee/shallyoasis" target="_blank" rel="noreferrer" data-testid="link-location-linktree">
                See our online links <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="location-art reveal reveal-delay-1">
              <div className="eyebrow">Local, accessible, plugged in</div>
              <h3>Make your next move a smart one.</h3>
              <p>SHALLY&apos;S OASIS / OMole plaza / Ikeja Lagos</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container-wide">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#top" data-testid="link-footer-brand"><Wordmark /></a>
              <p>More than just sales. A trusted Lagos home for gadgets, accessories and the next thing you need.</p>
              <div className="footer-logo-panel">
                <img src={brandLogo} alt="Shally's Oasis logo lockup" />
              </div>
            </div>
            <div>
              <h4>Explore</h4>
              <div className="footer-links">
                <a href="#now-on" data-testid="link-footer-now-on">Now on</a>
                <a href="#what-we-do" data-testid="link-footer-what-we-do">What we do</a>
                <a href="#the-oasis" data-testid="link-footer-oasis">The Oasis</a>
                <a href="#how-to-buy" data-testid="link-footer-how-to-buy">How to buy</a>
                <a href="#visit" data-testid="link-footer-visit">Visit us</a>
              </div>
            </div>
            <div>
              <h4>Talk to us</h4>
              <div className="footer-links">
                <a href={`tel:${contactNumber.replace(/\s/g, '')}`} data-testid="link-footer-call">{contactNumber}</a>
                <a href={`tel:${contactNumberAlt.replace(/\s/g, '')}`} data-testid="link-footer-call-alt">{contactNumberAlt}</a>
                <a href={whatsappHref} target="_blank" rel="noreferrer" data-testid="link-footer-whatsapp">WhatsApp ordering</a>
                <a href={instagramHref} target="_blank" rel="noreferrer" data-testid="link-footer-instagram">@shallysoasisgadgets</a>
                <a href={socialHubHref} target="_blank" rel="noreferrer" data-testid="link-footer-linktree">Linktree</a>
              </div>
              <div className="footer-social">
                <a href={instagramHref} target="_blank" rel="noreferrer" aria-label="Instagram" data-testid="link-footer-social-instagram">
                  <Instagram size={16} />
                </a>
                <a href={socialHubHref} target="_blank" rel="noreferrer" aria-label="Facebook" data-testid="link-footer-social-facebook">
                  <Facebook size={16} />
                </a>
                <a href={socialHubHref} target="_blank" rel="noreferrer" aria-label="YouTube" data-testid="link-footer-social-youtube">
                  <Youtube size={16} />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© Shally&apos;s Oasis · Ikeja Lagos</span>
            <span>Phones · watches · audio · laptops · gadgets · accessories · repairs</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;