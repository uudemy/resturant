import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="pill">⭐ <span style={{ color: "var(--text)" }}>4.8/5</span> · 2.000+ misafir</div>
          <h1 style={{ marginTop: 12 }}>Şehrin ortasında, premium bir lezzet molası.</h1>
          <p className="muted">
            Mevsimsel ürünler, modern Türk mutfağı ve şık bir atmosfer. Menüye göz at, tek tıkla rezervasyon bırak.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn primary" to="/reservation">Hemen Rezervasyon</Link>
            <Link className="btn" to="/menu">Menüyü Gör</Link>
          </div>

          <div className="card" style={{ marginTop: 14 }}>
            <b>Bugün önerimiz</b>
            <div className="divider" />
            <p className="muted">Köz patlıcanlı beğendi · Nar ekşili salata · Fırın sütlaç</p>
          </div>
        </div>

        <aside className="heroPanel">
          <div className="heroInner">
            <div className="row">
              <span className="tag">Öne Çıkan</span>
              <span className="muted">Her gün 12:00 – 23:30</span>
            </div>
            <h2 style={{ fontSize: 20 }}>Bu akşam masan hazır mı?</h2>
            <p className="muted">Rezervasyon talebini bırak, biz seni arayıp onaylayalım.</p>

            <div className="miniGrid">
              <div className="mini"><b>Konum</b><small>İstanbul</small></div>
              <div className="mini"><b>Mutfak</b><small>Modern Türk</small></div>
              <div className="mini"><b>Ortam</b><small>Şık & Sıcak</small></div>
              <div className="mini"><b>İletişim</b><small>+90 (5xx) xxx xx xx</small></div>
            </div>
          </div>
        </aside>
      </section>

      <section style={{ marginTop: 18 }}>
        <div className="sectionHead">
          <div>
            <h2>Hızlı Keşif</h2>
            <p className="muted">Menü, rezervasyon ve iletişim tek yerde.</p>
          </div>
        </div>

        <div className="grid">
          <div className="card">
            <b>Menü</b>
            <div className="divider" />
            <p className="muted">JSON’dan otomatik geliyor. Kolay güncelle.</p>
            <Link className="btn" to="/menu">Menüye Git</Link>
          </div>
          <div className="card">
            <b>Rezervasyon</b>
            <div className="divider" />
            <p className="muted">Talebini bırak, onay için arayalım.</p>
            <Link className="btn primary" to="/reservation">Rezervasyon</Link>
          </div>
          <div className="card">
            <b>İletişim</b>
            <div className="divider" />
            <p className="muted">Adres, saatler, harita linki.</p>
            <Link className="btn" to="/contact">İletişim</Link>
          </div>
        </div>
      </section>
    </>
  );
}
