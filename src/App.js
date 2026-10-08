import React, { useState } from 'react';
import './App.css';

const SERVICES = [
  {
    num: '01',
    name: 'Szafy PAX & Garderoby',
    desc: 'Precyzyjny montaż korpusów, drzwi przesuwnych i uchylnych, systemów szuflad, oświetlenia zintegrowanego oraz wyposażenia KOMPLEMENT.',
    tag: 'PAX / PLATSA'
  },
  {
    num: '02',
    name: 'Kuchnie METOD & ENHET',
    desc: 'Montaż i poziomowanie szafek stojących oraz wiszących, montaż szyn montażowych, blatów, blend, cokołów i precyzyjna regulacja frontów.',
    tag: 'METOD / ENHET'
  },
  {
    num: '03',
    name: 'Sypialnia & Wypoczynek',
    desc: 'Stabilny montaż ram łóżek, mechanizmów podnoszenia, pojemników na pościel, komód oraz stolików nocnych z dbałością o brak skrzypienia.',
    tag: 'MALM / HEMNES'
  },
  {
    num: '04',
    name: 'Regały, Biurka & Salon',
    desc: 'Montaż regałów ściennych, biurek ergonomicznych, szafek RTV BESTÅ oraz mebli modułowych z bezpiecznym kotwieniem do ściany.',
    tag: 'BESTÅ / KALLAX'
  }
];

const PRINCIPLES = [
  {
    num: 'STANDARD 01',
    title: 'Laserowa precyzja',
    desc: 'Wszystkie piony i poziomy wyznaczamy laserem krzyżowym. Każdy front i szufladę regulujemy z dokładnością do milimetra.'
  },
  {
    num: 'STANDARD 02',
    title: 'Czysty montaż',
    desc: 'Pracujemy z zabezpieczeniem podłóg i systemem odsysania pyłu przy wierceniu. Po skończonej pracy zabieramy kartony i odpady.'
  },
  {
    num: 'STANDARD 03',
    title: 'Bezpieczeństwo & OC',
    desc: 'Posiadamy pełne ubezpieczenie odpowiedzialności cywilnej (OC) oraz zapas oryginalnych okuć i złączy montażowych IKEA.'
  }
];

const PRICING = [
  { name: 'Szafa PAX — moduł', detail: 'Korpus + drzwi + wyposażenie', price: 'od 170 zł' },
  { name: 'Komoda (3–6 szuflad)', detail: 'np. MALM, HEMNES, KULLEN', price: 'od 90 zł' },
  { name: 'Rama łóżka ze stelażem', detail: 'Z szufladami lub pojemnikiem', price: 'od 130 zł' },
  { name: 'Regał / Biurko', detail: 'np. KALLAX, BILLY, MICKE', price: 'od 60 zł' },
  { name: 'Zabudowa kuchenna METOD', detail: 'Montaż korpusów i frontów', price: 'Wycena indyw.' },
  { name: 'Dojazd (Wrocław)', detail: 'Wszystkie dzielnice i osiedla', price: '0 zł' }
];

export default function App() {
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#top" className="logo">
            ZŁOŻYMY<span>.PL</span>
          </a>
          <ul className="nav-links">
            <li><a href="#uslugi">Usługi</a></li>
            <li><a href="#standard">Standard</a></li>
            <li><a href="#cennik">Cennik</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
            <li><a href="tel:+48886221993" className="nav-contact-btn">886 221 993</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="top">
        <div className="container">
          <span className="label">Montaż Mebli IKEA • Wrocław</span>
          <h1>
            Precyzyjny montaż.<br />
            Spokój i porządek.
          </h1>
          <p className="hero-desc">
            Świadczymy usługi profesjonalnego montażu mebli IKEA na terenie Wrocławia i okolic.
            Dbamy o geometrię konstrukcji, bezpieczeństwo mocowań oraz czystość po zakończonej pracy.
          </p>
          <div className="hero-actions">
            <a href="#kontakt" className="btn-solid">Zamów wycenę</a>
            <a href="tel:+48886221993" className="btn-ghost">Zadzwoń: 886 221 993</a>
          </div>

          <div className="hero-meta">
            <div className="meta-item">
              <div className="meta-val">24h</div>
              <div className="meta-desc">Czas reakcji i wyceny</div>
            </div>
            <div className="meta-item">
              <div className="meta-val">0 zł</div>
              <div className="meta-desc">Dojazd na terenie Wrocławia</div>
            </div>
            <div className="meta-item">
              <div className="meta-val">100%</div>
              <div className="meta-desc">Gwarancja dopasowania</div>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section className="section" id="uslugi">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="label">Zakres prac</span>
              <h2 className="section-title">Specjalizacja IKEA</h2>
            </div>
            <p className="section-sub">
              Znamy konstrukcję mebli IKEA na wylot. Każde złącze, zawias i prowadnica są montowane zgodnie z normą techniczną producenta.
            </p>
          </div>

          <div className="services-list">
            {SERVICES.map((s) => (
              <div className="service-row" key={s.num}>
                <span className="service-num">{s.num}</span>
                <div className="service-name">{s.name}</div>
                <div className="service-desc">{s.desc}</div>
                <div className="service-tag">{s.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="section" id="standard">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="label">Kultura pracy</span>
              <h2 className="section-title">Standard wykonania</h2>
            </div>
            <p className="section-sub">
              Pracujemy w oparciu o czyste zasady: punktualność, brak ukrytych kosztów i szacunek do Twojej przestrzeni.
            </p>
          </div>

          <div className="principles-grid">
            {PRINCIPLES.map((p) => (
              <div className="principle-card" key={p.num}>
                <span className="principle-num">{p.num}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="cennik">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="label">Przejrzystość</span>
              <h2 className="section-title">Cennik orientacyjny</h2>
            </div>
            <p className="section-sub">
              Stałe, przewidywalne stawki. Płatność dopiero po odbiorze prac — gotówką, BLIKiem lub przelewem.
            </p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-table">
              {PRICING.map((item) => (
                <div className="pricing-row" key={item.name}>
                  <div>
                    <span className="pricing-item-name">{item.name}</span>
                    <span className="pricing-item-detail">{item.detail}</span>
                  </div>
                  <span className="pricing-item-price">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="pricing-note">
              <h4>W cenie każdego zlecenia:</h4>
              <p>
                Nie doliczamy kosztów za dojazd na terenie Wrocławia ani za użycie własnych narzędzi i materiałów montażowych.
              </p>
              <ul className="pricing-check-list">
                <li>Precyzyjna regulacja zawiasów i frontów</li>
                <li>Kotwienie mebli wysokich do ścian</li>
                <li>Zabezpieczenie powierzchni roboczej</li>
                <li>Posprzątanie kartonów i odpadów po montażu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="kontakt">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="label">Rezerwacja terminu</span>
              <h2 className="section-title">Skontaktuj się</h2>
            </div>
            <p className="section-sub">
              Prześlij listę mebli lub zadzwoń. Wycenę otrzymasz najczęściej w ciągu 15 minut.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-direct">
              <div className="contact-box">
                <div className="box-label">Infolinia / SMS / WhatsApp</div>
                <a href="tel:+48886221993" className="box-value">886 221 993</a>
                <div className="box-sub">Czynne codziennie 08:00 – 20:00</div>
              </div>

              <div className="contact-box">
                <div className="box-label">Adres e-mail</div>
                <a href="mailto:kontakt@zlozymy.pl" className="box-value">kontakt@zlozymy.pl</a>
                <div className="box-sub">Możesz przesłać specyfikację lub link z IKEA</div>
              </div>

              <div className="contact-box">
                <div className="box-label">Obszar działalności</div>
                <div className="box-value" style={{ fontSize: '18px' }}>Wrocław & okolice</div>
                <div className="box-sub">Krzyki, Fabryczna, Śródmieście, Psie Pole, Bielany Wr.</div>
              </div>
            </div>

            <div>
              {formSent ? (
                <div className="form-sent-msg">
                  <h4>Wiadomość została wysłana</h4>
                  <p>Oddzwonimy pod podany numer w najkrótszym możliwym czasie.</p>
                </div>
              ) : (
                <form className="minimal-form" onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label>Imię i nazwisko</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="Jan Kowalski"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>Numer telefonu</label>
                    <input 
                      type="tel" 
                      required 
                      className="form-input" 
                      placeholder="886 221 993"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>Lista mebli / Dzielnica / Preferowany termin</label>
                    <textarea 
                      required 
                      className="form-textarea" 
                      placeholder="np. Szafa PAX 150x236, łóżko MALM 160x200. Wrocław-Krzyki, termin: najbliższy weekend."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="form-submit-btn">
                    Wyślij zapytanie o termin
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>© {new Date().getFullYear()} ZŁOŻYMY.PL — MONTAŻ MEBLI WROCŁAW</div>
          <div>
            <a href="mailto:kontakt@zlozymy.pl">kontakt@zlozymy.pl</a>
            <span style={{ margin: '0 12px' }}>•</span>
            <a href="tel:+48886221993">886 221 993</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
