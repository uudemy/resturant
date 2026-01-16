export default function Contact() {
  return (
    <>
      <h1>İletişim</h1>
      <p className="muted">Adres, saatler ve harita linki burada.</p>

      <div className="grid">
        <div className="card">
          <b>📍 Adres</b>
          <div className="divider" />
          <p className="muted">Örnek Mah. Örnek Cad. No: 10, İstanbul</p>
          <p className="muted">Her gün 12:00 – 23:30</p>
        </div>
        <div className="card">
          <b>📞 Telefon</b>
          <div className="divider" />
          <p className="muted">+90 (5xx) xxx xx xx</p>
          <p className="muted">rezervasyon@meoconbistro.com</p>
        </div>
        <div className="card">
          <b>🗺️ Harita</b>
          <div className="divider" />
          <p className="muted">Google Maps linki ekleyebilirsin.</p>
          <a className="btn" href="https://maps.google.com" target="_blank" rel="noreferrer">Haritayı Aç</a>
        </div>
      </div>
    </>
  );
}
