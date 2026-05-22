import { useEffect, useRef, useState } from "react";
import "./app.css";
import img1 from "./assets/img/img1.png";
import img2 from "./assets/img/Dani.png";
import img3 from "./assets/img/img3.png";

const WPP_LINK =
  "https://wa.me/557998324632?text=Ol%C3%A1%2C+Dani!+Vim+pelo+site+e+gostaria+de+fazer+uma+simula%C3%A7%C3%A3o+gratuita.+Pode+me+ajudar%3F";

const PRODUTOS = [
  { icon: "🚗", title: "Veículos",      desc: "Realize o sonho do carro novo sem pagar juros abusivos. Parcelas que cabem no seu orçamento.", tag: "CARROS • MOTOS • CAMINHÕES" },
  { icon: "🏠", title: "Imóveis",       desc: "Casa própria, terreno, apartamento ou sala comercial. Invista no que é seu, com planejamento.", tag: "CASA • APARTAMENTO • TERRENO" },
  { icon: "📈", title: "Investimentos", desc: "Use o crédito de consórcio como ferramenta de investimento inteligente e seguro.",               tag: "CRÉDITO • PATRIMÔNIO • RETORNO" },
];

const BENEFICIOS = [
  { icon: "🚫", title: "Sem juros",               desc: "Diferente do financiamento tradicional" },
  { icon: "📅", title: "Parcelas acessíveis",     desc: "Cabe no seu planejamento mensal" },
  { icon: "⚡", title: "Contemplação antecipada", desc: "Lance ou sorteio para antecipar" },
  { icon: "💰", title: "Poder à vista",           desc: "Negocie como comprador à vista" },
];

const STEPS = [
  { num: "01", title: "Simulação gratuita",  desc: "Conversamos sobre seus objetivos e simulo o melhor plano para o seu bolso — sem compromisso e sem burocracia." },
  { num: "02", title: "Adesão ao grupo",     desc: "Você entra no grupo de consórcio e começa a pagar parcelas acessíveis, sem juros e sem entrada obrigatória." },
  { num: "03", title: "Contemplação",        desc: "Pelo sorteio mensal ou com um lance estratégico, você recebe a carta de crédito para adquirir o bem desejado." },
  { num: "04", title: "Realização do sonho", desc: "Você vai ao vendedor com poder de compra à vista. Eu te acompanho do início até a assinatura — e continuo presente depois." },
];

const DEPOS = [
  { text: "A Dani me ajudou a conquistar meu apartamento sem estresse. Ela explicou tudo com paciência e esteve presente até eu receber as chaves!", name: "Ana Carla M.", produto: "Imóvel contemplado" },
  { text: "Nunca imaginei que poderia ter um carro zero sem pagar juros. O consórcio com a Dani foi a melhor decisão financeira que já tomei.",       name: "Rafael S.",    produto: "Veículo contemplado" },
  { text: "Profissional incrível, super atenciosa e honesta. Confiança total desde o início. Já indiquei para toda a minha família.",                 name: "Fernanda L.",  produto: "Consórcio de imóvel" },
];

const WppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ArrowDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9B08A" strokeWidth="2" strokeLinecap="round">
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const revealRefs = useRef([]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const r = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  return (
    <>
      {/* NAV */}
      <nav className={`lp-nav${scrolled ? " scrolled" : ""}`}>
        <div className="lp-nav-inner">
          <div className="lp-nav-logo">Dani Lima <span>Consórcio</span></div>
          <a href={WPP_LINK} target="_blank" rel="noopener noreferrer" className="lp-nav-cta">
            Falar agora
          </a>
        </div>
      </nav>

      {/* HERO — sem inner, o padding já está na section */}
      <section className="lp-hero">
        <div className="lp-hero-bg" />
        <img src={img1} alt="Dani Lima" className="lp-hero-img" />

        <div className="lp-hero-shape lp-hero-shape-one" />
        <div className="lp-hero-shape lp-hero-shape-two" />


        <div className="lp-hero-overlay" />

        <div className="lp-hero-content">
          <p className="lp-hero-eyebrow">Especialista em Consórcio</p>
          <h1 className="lp-hero-title">Seu sonho começa <em>aqui.</em></h1>
          <p className="lp-hero-sub">
            Sem juros, com planejamento e com quem realmente entende do assunto.
          </p>
          <a href={WPP_LINK} target="_blank" rel="noopener noreferrer" className="lp-hero-cta">
            <WppIcon /> Quero minha simulação grátis
          </a>
        </div>

        <div className="lp-hero-scroll"><ArrowDown /></div>
      </section>

      {/* STATS */}
      <div className="lp-stats-wrap">
        <div className="lp-stats">
          <div className="lp-stat"><div className="lp-stat-number">+30M</div><div className="lp-stat-label">em créditos vendidos</div></div>
          <div className="lp-stat-divider" />
          <div className="lp-stat"><div className="lp-stat-number">+4</div><div className="lp-stat-label">anos de experiência</div></div>
          <div className="lp-stat-divider" />
          <div className="lp-stat"><div className="lp-stat-number">100%</div><div className="lp-stat-label">sem juros</div></div>
        </div>
      </div>

      {/* SOBRE */}
      <section className="lp-about">
        <div className="lp-about-grid">
          <img src={img2} alt="Daniela Lima" className="lp-about-img" />
          <div ref={r} className="reveal">
            <p className="lp-section-label">Quem é</p>
            <h2 className="lp-section-title">Daniela Lima, <em>a Dani Consórcio</em></h2>
            <p className="lp-about-body">
              Há mais de <strong>4 anos</strong> ajudando pessoas a conquistarem seus bens — carros, imóveis e
              investimentos — através do consórcio. Formada em Design de Interiores, percebeu no caminho que
              sua verdadeira vocação era <strong>realizar sonhos alheios</strong> com planejamento e sem juros.
            </p>
            <p className="lp-about-body">
              Não falo de consórcio apenas como vendedora: <strong>sou cliente do meu próprio produto.</strong>{" "}
              Meu carro foi uma conquista pelo consórcio. Falo com <strong>tanta segurança</strong> porque vivi
              na pele o que ofereço.
            </p>
            <div className="lp-about-badges">
              <span className="lp-about-badge">✅ Especialista ABAC</span>
              <span className="lp-about-badge">🏆 +30M em créditos</span>
              <span className="lp-about-badge">🤝 Acompanhamento completo</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="lp-products">
        <div className="lp-products-inner">
          <div ref={r} className="reveal">
            <p className="lp-section-label">O que oferecemos</p>
            <h2 className="lp-section-title">Carros, imóveis <em>e investimentos</em></h2>
            <p className="lp-product-subtitle">Tudo pelo consórcio — a forma mais inteligente de conquistar um bem sem pagar juros.</p>
          </div>
          <div className="lp-product-cards">
            {PRODUTOS.map((p) => (
              <div key={p.title} ref={r} className="lp-product-card reveal">
                <div className="lp-product-icon">{p.icon}</div>
                <div><h3>{p.title}</h3><p>{p.desc}</p><span className="lp-product-card-tag">{p.tag}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <div className="lp-diferencial">
        <div className="lp-diferencial-inner">
          <p className="lp-diferencial-quote">
            "O consórcio é uma das formas mais inteligentes de conquistar um bem.{" "}
            <strong>Sem juros, com planejamento e com controle financeiro.</strong>"
          </p>
          <p className="lp-diferencial-author">— Dani Lima Consórcio</p>
        </div>
      </div>

      {/* BENEFÍCIOS */}
      <section className="lp-benefits">
        <div className="lp-benefits-inner">
          <div ref={r} className="reveal">
            <p className="lp-section-label">Vantagens</p>
            <h2 className="lp-section-title">Por que o consórcio é a escolha <em>certa?</em></h2>
          </div>
          <div className="lp-benefits-grid">
            {BENEFICIOS.map((b) => (
              <div key={b.title} ref={r} className="lp-benefit-card reveal">
                <span className="lp-benefit-icon">{b.icon}</span>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="lp-how">
        <div className="lp-how-inner">
          <div ref={r} className="reveal">
            <p className="lp-section-label">Passo a passo</p>
            <h2 className="lp-section-title">Como funciona <em>o processo?</em></h2>
          </div>
          <div className="lp-steps">
            {STEPS.map((s) => (
              <div key={s.num} ref={r} className="lp-step reveal">
                <div className="lp-step-num-wrap"><div className="lp-step-num">{s.num}</div></div>
                <div className="lp-step-body"><h4>{s.title}</h4><p>{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="lp-depo">
        <div className="lp-depo-inner">
          <div ref={r} className="reveal">
            <p className="lp-section-label">Depoimentos</p>
            <h2 className="lp-section-title">Sonhos realizados de <em>verdade</em></h2>
          </div>
          <div className="lp-depo-cards">
            {DEPOS.map((d) => (
              <div key={d.name} ref={r} className="lp-depo-card reveal">
                <div className="lp-depo-stars">★★★★★</div>
                <p className="lp-depo-text">"{d.text}"</p>
                <p className="lp-depo-name">{d.name}</p>
                <p className="lp-depo-produto">{d.produto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="lp-cta-final">
        <img src={img3} alt="" aria-hidden="true" className="lp-cta-final-img" />
        <div className="lp-cta-final-inner" ref={r}>
          <h2 className="lp-cta-final-title reveal">Pronto para realizar <em>seu sonho?</em></h2>
          <p className="lp-cta-final-sub">
            Fale agora comigo pelo WhatsApp. A simulação é gratuita e sem compromisso.
            Vamos encontrar o plano perfeito para você.
          </p>
          <a href={WPP_LINK} target="_blank" rel="noopener noreferrer" className="lp-cta-wpp">
            <WppIcon /> Falar com a Dani no WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <p className="lp-footer-copy">
            © {new Date().getFullYear()} Dani Lima Consórcio · Todos os direitos reservados ·{" "}
            <a href={WPP_LINK} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </p>
          <p className="lp-footer-dev">
            Desenvolvido por{" "}
            <a href="https://heverecstudiocode.com/" target="_blank" rel="noopener noreferrer">
              Heverec Studio Code
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}