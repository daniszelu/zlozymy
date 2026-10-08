import React, { useState } from 'react';
import './App.css';

/* ───────── NAVBAR ───────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <a href="#hero" className="navbar-logo">Złoży<span>my</span>.pl</a>
      <ul className={`navbar-links${open ? ' open' : ''}`} onClick={() => setOpen(false)}>
        <li><a href="#jak-to-dziala">Jak to działa</a></li>
        <li><a href="#uslugi">Usługi</a></li>
        <li><a href="#dlaczego-my">Dlaczego my</a></li>
        <li><a href="#opinie">Opinie</a></li>
        <li><a href="#kontakt" className="navbar-cta">Zamów wycenę</a></li>
      </ul>
      <button className="navbar-burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}

/* ───────── HERO ───────── */
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-badge">📍 Wrocław i okolice</div>
        <h1>
          Złożymy Twoje<br />
          meble IKEA<br />
          <em>szybko i pewnie</em>
        </h1>
        <p className="hero-sub">
          Profesjonalne składanie mebli we Wrocławiu. Przyjedziemy,
          złożymy i posprzątamy po sobie – Ty tylko cieszysz się gotowym wnętrzem.
        </p>
        <div className="hero-buttons">
          <a href="#kontakt" className="btn-primary">📞 Zamów wycenę</a>
          <a href="#jak-to-dziala" className="btn-outline">Jak to działa?</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <strong>500+</strong>
            <span>Złożonych mebli</span>
          </div>
          <div className="hero-stat">
            <strong>5★</strong>
            <span>Ocena klientów</span>
          </div>
          <div className="hero-stat">
            <strong>24h</strong>
            <span>Czas realizacji</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── HOW IT WORKS ───────── */
const STEPS = [
  { num: 1, title: 'Kontakt i wycena', desc: 'Skontaktuj się z nami – podaj listę mebli, a my wyślemy bezpłatną wycenę jeszcze tego samego dnia.' },
  { num: 2, title: 'Umawiamy termin', desc: 'Ustalamy dogodny dla Ciebie termin. Działamy 7 dni w tygodniu, również w weekendy.' },
  { num: 3, title: 'Przyjedziemy i złożymy', desc: 'Nasz fachowiec przyjedzie na czas z pełnym zestawem narzędzi i złoży meble zgodnie z instrukcją.' },
  { num: 4, title: 'Gotowe!', desc: 'Po zakończeniu pracy posprzątamy kartony i opakowania. Możesz natychmiast cieszyć się wnętrzem.' },
];

function HowItWorks() {
  return (
    <section className="how" id="jak-to-dziala">
      <span className="section-label">Jak to działa</span>
      <h2 className="section-title">4 kroki do gotowych mebli</h2>
      <p className="section-desc">
        Prosty i przejrzysty proces – od zamówienia do gotowego umeblowania.
      </p>
      <div className="how-grid">
        {STEPS.map(s => (
          <div className="how-step" key={s.num}>
            <div className="how-step-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── SERVICES ───────── */
const SERVICES = [
  {
    icon: '🛏️',
    title: 'Łóżka i szafy',
    desc: 'Montaż łóżek, szaf przesuwnych i wnękowych. Każde złącze sprawdzamy dwukrotnie.',
    items: ['Łóżka z pojemnikiem', 'Szafy PAX, BRIMNES', 'Szafy wnękowe na wymiar'],
  },
  {
    icon: '🍽️',
    title: 'Meble kuchenne i łazienkowe',
    desc: 'Składamy stoły, krzesła, regały kuchenne i meble łazienkowe IKEA.',
    items: ['Szafki kuchenne METOD', 'Regały i stoliki', 'Meble łazienkowe GODMORGON'],
  },
  {
    icon: '🛋️',
    title: 'Sofy i meble wypoczynkowe',
    desc: 'Montaż sof, kanap narożnych, foteli i rozkładanych mebli.',
    items: ['Sofy i narożniki', 'Fotele i pufy', 'Łóżka rozkładane'],
  },
  {
    icon: '📦',
    title: 'Pakiet Premium – wszystko za Ciebie',
    desc: 'Składamy meble, wieszamy obrazy, ustawiamy sprzęt – kompletna usługa pod klucz.',
    items: ['Sortowanie i wnoszenie mebli', 'Montaż i regulacja', 'Wywóz kartonów i opakowań'],
  },
];

function Services() {
  return (
    <section id="uslugi">
      <span className="section-label">Usługi</span>
      <h2 className="section-title">Co składamy?</h2>
      <p className="section-desc">
        Specjalizujemy się w meblach IKEA – znamy je na pamięć.
        Każde zlecenie realizujemy starannie i zgodnie z instrukcją producenta.
      </p>
      <div className="services-grid">
        {SERVICES.map(s => (
          <div className="service-card" key={s.title}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="service-check">
              {s.items.map(i => <span key={i}>{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── WHY US ───────── */
const WHY = [
  { icon: '⚡', title: 'Szybka realizacja', desc: 'Zazwyczaj działamy w ciągu 24h od zamówienia. Weekend? Żaden problem.' },
  { icon: '🔧', title: 'Profesjonalne narzędzia', desc: 'Elektryczne wkrętarki, poziomice, pełny zestaw narzędzi – przychodzimy przygotowani.' },
  { icon: '🧹', title: 'Sprzątamy po sobie', desc: 'Zabieramy kartony, folię i styropian. Zostaje tylko pięknie złożony mebel.' },
  { icon: '🛡️', title: 'Gwarancja jakości', desc: 'Dajesz znać, jeśli coś nie gra – wrócimy i naprawimy bez dodatkowych kosztów.' },
  { icon: '📱', title: 'Łatwy kontakt', desc: 'Zadzwoń, napisz SMS lub wyślij e-mail. Odpowiadamy w kilkanaście minut.' },
  { icon: '💰', title: 'Uczciwa cena', desc: 'Wycena z góry, bez ukrytych opłat. Płacisz tyle, ile ustaliliśmy na początku.' },
];

function WhyUs() {
  return (
    <section className="why" id="dlaczego-my">
      <span className="section-label">Dlaczego my</span>
      <h2 className="section-title">Złożymy.pl – usługa bez stresu</h2>
      <p className="section-desc">
        Wybierają nas klienci, którzy cenią sobie spokój, punktualność i rzetelność.
      </p>
      <div className="why-grid">
        {WHY.map(w => (
          <div className="why-card" key={w.title}>
            <div className="why-icon">{w.icon}</div>
            <h3>{w.title}</h3>
            <p>{w.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── REVIEWS ───────── */
const REVIEWS = [
  {
    stars: '★★★★★',
    text: 'Szafa PAX złożona w niecałe 2 godziny, a cena bardzo rozsądna. Polecam z całego serca – fachowiec przyjechał punktualnie i od razu zabrał się do pracy.',
    name: 'Marta K.',
    location: 'Wrocław, Krzyki',
  },
  {
    stars: '★★★★★',
    text: 'Pomoc przy przeprowadzce – złożyli nam 3 łóżka, 2 szafy i komodę w jeden dzień. Bezproblemowa komunikacja i świetna robota!',
    name: 'Tomasz W.',
    location: 'Wrocław, Fabryczna',
  },
  {
    stars: '★★★★★',
    text: 'Bardzo profesjonalna obsługa. Zabrali wszystkie kartony, posprzątali i dopilnowali, żeby każda szuflada chodziła idealnie. Zdecydowanie będę korzystał ponownie.',
    name: 'Anna i Piotr S.',
    location: 'Wrocław, Śródmieście',
  },
  {
    stars: '★★★★★',
    text: 'Polecam każdemu, kto nie ma czasu lub chęci na mozolne składanie instrukcji IKEA. Przyjechali na czas, wszystko złożyli szybko i bez nerwów.',
    name: 'Kamila R.',
    location: 'Wrocław, Psie Pole',
  },
];

function Reviews() {
  return (
    <section id="opinie">
      <span className="section-label">Opinie</span>
      <h2 className="section-title">Co mówią nasi klienci?</h2>
      <p className="section-desc">
        Ponad 500 zadowolonych klientów we Wrocławiu. Sprawdź, co o nas piszą.
      </p>
      <div className="reviews-grid">
        {REVIEWS.map(r => (
          <div className="review-card" key={r.name}>
            <div className="review-stars">{r.stars}</div>
            <p className="review-text">"{r.text}"</p>
            <div className="review-author">
              <strong>{r.name}</strong>
              <span>{r.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── CONTACT ───────── */
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact" id="kontakt">
      <span className="section-label">Kontakt</span>
      <h2 className="section-title">Skontaktuj się z nami</h2>
      <p className="section-desc">
        Bezpłatna wycena w ciągu kilku minut. Działamy na terenie Wrocławia i okolic.
      </p>
      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-item-icon">📞</div>
            <div className="contact-item-text">
              <strong>Telefon / SMS</strong>
              <a href="tel:+48886221993">886 221 993</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon">✉️</div>
            <div className="contact-item-text">
              <strong>E-mail</strong>
              <a href="mailto:kontakt@zlozymy.pl">kontakt@zlozymy.pl</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon">📍</div>
            <div className="contact-item-text">
              <strong>Obszar działania</strong>
              <span>Wrocław i okolice (do 30 km)</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon">🕐</div>
            <div className="contact-item-text">
              <strong>Godziny pracy</strong>
              <span>Pon–Nd, 8:00–20:00</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {sent ? (
            <div className="form-success">
              ✅ Dziękujemy! Odezwiemy się do Ciebie najszybciej jak to możliwe.
            </div>
          ) : (
            <>
              <p className="form-title">Wyślij zapytanie – odpowiemy szybko!</p>
              <div className="form-group">
                <label>Imię i nazwisko *</label>
                <input required name="name" value={form.name} onChange={handleChange} placeholder="Jan Kowalski" />
              </div>
              <div className="form-group">
                <label>Numer telefonu *</label>
                <input required name="phone" value={form.phone} onChange={handleChange} placeholder="600 000 000" type="tel" />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input name="email" value={form.email} onChange={handleChange} placeholder="jan@example.com" type="email" />
              </div>
              <div className="form-group">
                <label>Rodzaj usługi</label>
                <select name="service" value={form.service} onChange={handleChange}>
                  <option value="">Wybierz...</option>
                  <option value="lozko">Łóżko</option>
                  <option value="szafa">Szafa</option>
                  <option value="kuchnia">Meble kuchenne</option>
                  <option value="salon">Meble do salonu</option>
                  <option value="inne">Inne</option>
                </select>
              </div>
              <div className="form-group">
                <label>Wiadomość (lista mebli, adres, termin)</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Np. Szafa PAX 200x236, łóżko MALM 160x200, adres Wrocław-Krzyki, preferowany termin: sobota rano..." />
              </div>
              <button type="submit" className="form-submit">📩 Wyślij zapytanie</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

/* ───────── FOOTER ───────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">Złoży<span>my</span>.pl</div>
      <p>© {new Date().getFullYear()} Złożymy.pl – Wrocław. Wszelkie prawa zastrzeżone.</p>
      <ul className="footer-links">
        <li><a href="#jak-to-dziala">Jak to działa</a></li>
        <li><a href="#uslugi">Usługi</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
      </ul>
    </footer>
  );
}

export default function Version1() {
  return (
    <div className="v1-container">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <WhyUs />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
