import React, { useState } from 'react';
import './Version2.css';

/* ───────── CALCULATOR DATA ───────── */
const FURNITURE_ITEMS = [
  { id: 'pax', name: 'Szafa PAX (korpus + drzwi/półki)', basePrice: 160, desc: 'Wycena za 1 moduł korpusu' },
  { id: 'komoda', name: 'Komoda MALM / HEMNES / KULLEN', basePrice: 90, desc: '3 do 6 szuflad, precyzyjne spasowanie' },
  { id: 'lozko', name: 'Łóżko ze stelażem i szufladami', basePrice: 140, desc: 'np. MALM, BRIMNES, SLÄKT' },
  { id: 'kallax', name: 'Regał KALLAX / BILLY / BESTÅ', basePrice: 60, desc: 'Złożenie + ewentualne wkłady' },
  { id: 'biurko', name: 'Biurko MICKE / BEKANT / FREDDE', basePrice: 80, desc: 'Biurka tradycyjne i gamingowe' },
  { id: 'metod', name: 'Szafka kuchenna IKEA METOD', basePrice: 80, desc: 'Cena za 1 szafkę dolną/wiszącą' },
];

const EXTRA_SERVICES = [
  { id: 'wallMount', name: 'Kotwienie do ściany (wiercenie udarowe + kołki)', price: 30 },
  { id: 'carrying', name: 'Wniesienie paczek do mieszkania (winda/schody)', price: 50 },
  { id: 'trash', name: 'Sprzątnięcie i wywóz kartonów / folii / styropianu', price: 40 },
  { id: 'express', name: 'Termin ekspresowy (dziś / do 24h)', price: 0, promo: 'PROMOCJA 0 zł' },
];

const DISTRICTS = [
  'Krzyki', 'Fabryczna', 'Śródmieście', 'Stare Miasto', 'Psie Pole',
  'Jagodno', 'Ołtaszyn', 'Bielany Wr.', 'Klecina', 'Maślice',
  'Gaj', 'Karłowice', 'Oporów', 'Partynice'
];

const FAQS = [
  {
    q: 'Ile orientacyjnie trwa montaż szafy PAX?',
    a: 'Pojedynczy moduł z drzwiami i wyposażeniem (szuflady, drążki, kosze) zajmuje doświadczonemu monterowi około 1,5 do 2 godzin. Dwumodułową szafę składamy najczęściej w 3-4 godziny.'
  },
  {
    q: 'Czy przyjeżdżacie z własnymi narzędziami?',
    a: 'Tak, posiadamy komplet profesjonalnych narzędzi: wkrętarki udarowe z regulacją momentu obrotowego (aby nie uszkodzić płyt IKEA), lasery krzyżowe do pionowania szaf, poziomice oraz odsysacze pyłu.'
  },
  {
    q: 'Co jeśli w paczce IKEA brakuje śrubek lub kołków?',
    a: 'Mamy ze sobą „skrzynkę ratunkową” z zapasem oryginalnych mimośrodów, kołków drewnianych, wkrętów i zawiasów IKEA. Nie musisz przerywać montażu ani jechać do sklepu na Bielany.'
  },
  {
    q: 'Czy dojazd na terenie Wrocławia jest dodatkowo płatny?',
    a: 'Nie, na terenie całego Wrocławia dojeżdżamy za 0 zł. W przypadku miejscowości podwrocławskich (powyżej 15 km od granic miasta) ustalamy jedynie symboliczny zwrot kosztów paliwa.'
  },
  {
    q: 'Jakie formy płatności akceptujecie?',
    a: 'Płatność następuje po skończonej pracy i Twoim odbiorze jakości. Przyjmujemy BLIK, gotówkę oraz przelew ekspresowy.'
  }
];

export default function Version2() {
  // Calculator state
  const [counts, setCounts] = useState({ pax: 1, komoda: 1, lozko: 0, kallax: 0, biurko: 0, metod: 0 });
  const [extras, setExtras] = useState({ wallMount: true, carrying: false, trash: true, express: false });
  
  // Accordion FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: 'Krzyki',
    datePreference: 'Jak najszybciej (1-2 dni)',
    notes: ''
  });
  const [formSent, setFormSent] = useState(false);

  // Calculations
  const totalFurnitureCount = Object.values(counts).reduce((a, b) => a + b, 0);
  
  const furnitureSubtotal = FURNITURE_ITEMS.reduce((sum, item) => {
    return sum + (counts[item.id] || 0) * item.basePrice;
  }, 0);

  const extrasSubtotal = EXTRA_SERVICES.reduce((sum, item) => {
    return sum + (extras[item.id] ? item.price : 0);
  }, 0);

  // 10% discount for 3+ items
  const discount = totalFurnitureCount >= 3 ? Math.round(furnitureSubtotal * 0.1) : 0;
  const totalPrice = Math.max(furnitureSubtotal - discount + extrasSubtotal, 0);

  const updateCount = (id, delta) => {
    setCounts(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const toggleExtra = (id) => {
    setExtras(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const applyCalcToForm = () => {
    const selectedSummary = FURNITURE_ITEMS
      .filter(i => counts[i.id] > 0)
      .map(i => `${i.name}: ${counts[i.id]} szt.`)
      .join(', ');

    const extraSummary = EXTRA_SERVICES
      .filter(i => extras[i.id])
      .map(i => i.name.split(' (')[0])
      .join(', ');

    const generatedNotes = `Wycena z kalkulatora (${totalPrice} zł):\n- Meble: ${selectedSummary || 'Brak'}\n- Dodatki: ${extraSummary || 'Brak'}`;
    
    setFormData(prev => ({ ...prev, notes: generatedNotes }));

    const formElement = document.getElementById('v2-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="v2-wrapper">
      {/* 1. TOP LIVE STATUS BAR */}
      <div className="v2-topbar">
        <div className="v2-status-pill">
          <span className="v2-status-dot"></span>
          <span>Dziś: 2 wolne terminy montażu we Wrocławiu</span>
        </div>
        <div className="v2-topbar-contact">
          <span>Obszar: <strong>Cały Wrocław (dojazd 0 zł)</strong></span>
          <span>Infolinia: <a href="tel:+48886221993">886 221 993</a></span>
        </div>
      </div>

      {/* 2. NAVIGATION */}
      <nav className="v2-nav">
        <a href="#v2-hero" className="v2-logo">
          <span>Złożymy.pl</span>
          <span className="v2-logo-badge">IKEA PRO</span>
        </a>
        <div className="v2-nav-links">
          <a href="#kalkulator">Kalkulator wyceny</a>
          <a href="#dlaczego">Dlaczego my</a>
          <a href="#dzielnice">Zasięg Wrocław</a>
          <a href="#faq">Pytania (FAQ)</a>
          <a href="#v2-form-section" className="v2-nav-cta">Zarezerwuj termin</a>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <header className="v2-hero" id="v2-hero">
        <div className="v2-hero-grid">
          <div>
            <div className="v2-tag">
              ⭐ Certyfikowani monterzy mebli IKEA • Wrocław
            </div>
            <h1>
              Złożymy Twoje meble IKEA <span className="highlight">w 24h i bez stresu.</span>
            </h1>
            <p className="v2-hero-lead">
              Kupiłeś meble w IKEA na Bielanach? My zajmiemy się resztą: wniesiemy, precyzyjnie 
              złożymy, wypoziomujemy laserem i posprzątamy kartony. Płacisz dopiero po odbiorze!
            </p>
            <div className="v2-hero-actions">
              <a href="#kalkulator" className="v2-btn-calc">
                🧮 Oblicz koszt w 60 sekund
              </a>
              <a href="tel:+48886221993" className="v2-btn-call">
                📞 886 221 993
              </a>
            </div>
            <div className="v2-trust-points">
              <div className="v2-trust-item">
                <strong>0 zł</strong>
                Dojazd na terenie Wrocławia
              </div>
              <div className="v2-trust-item">
                <strong>100 000 zł</strong>
                Polisa ubezpieczeniowa OC
              </div>
              <div className="v2-trust-item">
                <strong>100%</strong>
                Regulacja frontów na milimetry
              </div>
            </div>
          </div>

          <div className="v2-hero-card">
            <span className="v2-card-badge">Pakiet Bezpieczny Montaż</span>
            <h3>Co otrzymujesz w standardzie?</h3>
            <ul className="v2-hero-checklist">
              <li>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                Zapasowe mimośrody i śruby IKEA w razie braków
              </li>
              <li>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                Laserowe poziomowanie korpusów i pionów szaf
              </li>
              <li>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                Odkurzanie i zabranie wszystkich odpadów
              </li>
              <li>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                Gwarancja 12 miesięcy na wykonany montaż
              </li>
            </ul>
            <a href="tel:+48886221993" className="v2-btn-apply-calc" style={{ textAlign: 'center', display: 'block', textDecoration: 'none' }}>
              Zadzwoń po termin: 886 221 993
            </a>
          </div>
        </div>
      </header>

      {/* 4. INTERACTIVE PRICE CALCULATOR */}
      <section className="v2-section" id="kalkulator">
        <div className="v2-section-head">
          <span className="v2-subhead">Interaktywny kosztorys</span>
          <h2 className="v2-title">Kalkulator wyceny online</h2>
          <p className="v2-desc">
            Wybierz meble, które chcesz złożyć. Cena kalkuluje się w czasie rzeczywistym – bez ukrytych opłat.
          </p>
        </div>

        <div className="v2-calc-box">
          <div>
            <div className="v2-calc-items">
              {FURNITURE_ITEMS.map(item => (
                <div className="v2-calc-row" key={item.id}>
                  <div className="v2-calc-info">
                    <strong>{item.name}</strong>
                    <span>{item.desc} • {item.basePrice} zł / szt.</span>
                  </div>
                  <div className="v2-counter">
                    <button 
                      className="v2-btn-step" 
                      onClick={() => updateCount(item.id, -1)}
                      disabled={counts[item.id] === 0}
                    >-</button>
                    <span className="v2-counter-val">{counts[item.id]}</span>
                    <button 
                      className="v2-btn-step" 
                      onClick={() => updateCount(item.id, 1)}
                    >+</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Extras */}
            <div className="v2-calc-extras">
              <div className="v2-extras-title">Dodatkowe usługi i wygoda:</div>
              {EXTRA_SERVICES.map(extra => (
                <label className="v2-checkbox-label" key={extra.id}>
                  <input 
                    type="checkbox" 
                    checked={extras[extra.id]} 
                    onChange={() => toggleExtra(extra.id)} 
                  />
                  <span>
                    {extra.name} {extra.promo ? <strong style={{ color: '#34d399' }}>({extra.promo})</strong> : `(+${extra.price} zł)`}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Calculator summary card */}
          <div className="v2-calc-summary">
            <div className="v2-summary-header">
              <span className="v2-card-badge">Podsumowanie live</span>
              <h3>Twoja kalkulacja</h3>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                {totalFurnitureCount} wybranych mebli IKEA
              </p>
            </div>

            <ul className="v2-summary-list">
              {FURNITURE_ITEMS.filter(i => counts[i.id] > 0).map(i => (
                <li key={i.id}>
                  <span>{i.name.split(' (')[0]} × {counts[i.id]}</span>
                  <strong>{counts[i.id] * i.basePrice} zł</strong>
                </li>
              ))}
              {EXTRA_SERVICES.filter(e => extras[e.id] && e.price > 0).map(e => (
                <li key={e.id}>
                  <span>{e.name.split(' (')[0]}</span>
                  <strong>+{e.price} zł</strong>
                </li>
              ))}
              {discount > 0 && (
                <li style={{ color: '#34d399' }}>
                  <span>Rabat wielosztukowy (10%)</span>
                  <strong>-{discount} zł</strong>
                </li>
              )}
            </ul>

            <div className="v2-price-container">
              {discount > 0 && (
                <div className="v2-discount-badge">
                  🎁 Naliczono rabat 10% za pakiet mebli
                </div>
              )}
              <div className="v2-price-label">Orientacyjny koszt montażu:</div>
              <div className="v2-price-val">{totalPrice} zł</div>
              <button className="v2-btn-apply-calc" onClick={applyCalcToForm}>
                Przejdź do rezerwacji z tą kwotą →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DISTRICTS COVERAGE */}
      <section className="v2-section" id="dzielnice">
        <div className="v2-section-head">
          <span className="v2-subhead">Lokalizacja</span>
          <h2 className="v2-title">Dojedziemy w każdy zakątek Wrocławia</h2>
          <p className="v2-desc">
            Brak dodatkowych opłat za dojazd. Działamy na wszystkich osiedlach i w okolicznych miejscowościach.
          </p>
        </div>
        <div className="v2-districts-grid">
          {DISTRICTS.map(d => (
            <div className="v2-district-pill" key={d}>
              📍 {d}
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section className="v2-section" id="faq">
        <div className="v2-section-head">
          <span className="v2-subhead">FAQ</span>
          <h2 className="v2-title">Najczęściej zadawane pytania</h2>
          <p className="v2-desc">
            Wszystko, co musisz wiedzieć przed przyjazdem naszego montażysty.
          </p>
        </div>

        <div className="v2-faq-list">
          {FAQS.map((faq, idx) => (
            <div className={`v2-faq-item ${openFaq === idx ? 'open' : ''}`} key={idx}>
              <button 
                className="v2-faq-question" 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <span className="v2-faq-icon">+</span>
              </button>
              {openFaq === idx && (
                <div className="v2-faq-answer">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. CONTACT & BOOKING FORM */}
      <section className="v2-section" id="v2-form-section">
        <div className="v2-section-head">
          <span className="v2-subhead">Szybki kontakt</span>
          <h2 className="v2-title">Zarezerwuj montaż mebli</h2>
          <p className="v2-desc">
            Wypełnij krótki formularz lub skontaktuj się bezpośrednio przez telefon albo WhatsApp.
          </p>
        </div>

        <div className="v2-contact-grid">
          <div className="v2-direct-cards">
            <a href="tel:+48886221993" className="v2-direct-card">
              <div className="v2-direct-icon icon-phone">📞</div>
              <div className="v2-direct-info">
                <strong>Zadzwoń od razu</strong>
                <span>886 221 993 (dostępni 8:00 - 20:00)</span>
              </div>
            </a>

            <a href="https://wa.me/48886221993" target="_blank" rel="noopener noreferrer" className="v2-direct-card">
              <div className="v2-direct-icon icon-wa">💬</div>
              <div className="v2-direct-info">
                <strong>Napisz na WhatsApp</strong>
                <span>Wyślij zdjęcie mebli lub link z IKEA</span>
              </div>
            </a>

            <a href="mailto:kontakt@zlozymy.pl" className="v2-direct-card">
              <div className="v2-direct-icon icon-mail">✉️</div>
              <div className="v2-direct-info">
                <strong>kontakt@zlozymy.pl</strong>
                <span>Wycena e-mail w 15 minut</span>
              </div>
            </a>
          </div>

          <div className="v2-form">
            {formSent ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ fontSize: '1.4rem', color: '#34d399', marginBottom: '0.5rem' }}>
                  Zgłoszenie zostało wysłane!
                </h3>
                <p style={{ color: '#94a3b8' }}>
                  Oddzwonimy pod numer <strong>{formData.phone}</strong> w ciągu kilkunastu minut, 
                  aby potwierdzić termin.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="v2-form-group">
                  <label>Imię i nazwisko</label>
                  <input 
                    type="text" 
                    required 
                    className="v2-input" 
                    placeholder="np. Michał Nowak"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="v2-form-group">
                  <label>Numer telefonu (do szybkiego kontaktu)</label>
                  <input 
                    type="tel" 
                    required 
                    className="v2-input" 
                    placeholder="886 221 993"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="v2-form-group">
                    <label>Dzielnica Wrocławia</label>
                    <select 
                      className="v2-select"
                      value={formData.district}
                      onChange={e => setFormData({ ...formData, district: e.target.value })}
                    >
                      {DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
                      <option value="okolice">Okolice Wrocławia</option>
                    </select>
                  </div>

                  <div className="v2-form-group">
                    <label>Preferowany termin</label>
                    <select 
                      className="v2-select"
                      value={formData.datePreference}
                      onChange={e => setFormData({ ...formData, datePreference: e.target.value })}
                    >
                      <option value="dziś/jutro">Ekspres (Dziś / Jutro)</option>
                      <option value="weekend">Najbliższy weekend</option>
                      <option value="za_tydzien">W ciągu 7 dni</option>
                      <option value="elastyczny">Termin elastyczny</option>
                    </select>
                  </div>
                </div>

                <div className="v2-form-group">
                  <label>Lista mebli lub notatki (możesz edytować)</label>
                  <textarea 
                    className="v2-textarea" 
                    placeholder="Wpisz nazwy mebli IKEA (np. Szafa PAX 150x236, stół INGATORP)..."
                    value={formData.notes}
                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <button type="submit" className="v2-submit-btn">
                  Wyślij zgłoszenie – bezpłatna rezerwacja
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MOBILE STICKY CALL / CALC BAR */}
      <div className="v2-mobile-bar">
        <a href="tel:+48886221993" className="v2-mobile-btn-call">
          📞 Zadzwoń teraz
        </a>
        <a href="#kalkulator" className="v2-mobile-btn-calc">
          🧮 Kalkulator
        </a>
      </div>
    </div>
  );
}
