import { useState } from "react";

export default function Reservation() {
  const [done, setDone] = useState(false);

  function submit(e){
    e.preventDefault();
    setDone(true);
    setTimeout(()=> setDone(false), 3500);
    e.target.reset();
  }

  return (
    <>
      <h1>Rezervasyon</h1>
      <p className="muted">Şimdilik demo. İstersen WhatsApp’a otomatik mesaj attırabiliriz.</p>

      <div className="card">
        <form onSubmit={submit} style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(2, 1fr)" }}>
          <div>
            <label className="muted" style={{ display: "block", marginBottom: 6, fontWeight: 800 }}>Ad Soyad</label>
            <input className="input" required placeholder="Örn. Ayşe Yılmaz" />
          </div>
          <div>
            <label className="muted" style={{ display: "block", marginBottom: 6, fontWeight: 800 }}>Telefon</label>
            <input className="input" required placeholder="+90 5xx xxx xx xx" />
          </div>
          <div>
            <label className="muted" style={{ display: "block", marginBottom: 6, fontWeight: 800 }}>Tarih</label>
            <input className="input" type="date" required />
          </div>
          <div>
            <label className="muted" style={{ display: "block", marginBottom: 6, fontWeight: 800 }}>Saat</label>
            <input className="input" type="time" required />
          </div>

          <div style={{ gridColumn: "1 / -1" }}>
            <label className="muted" style={{ display: "block", marginBottom: 6, fontWeight: 800 }}>Not</label>
            <textarea className="textarea" placeholder="Alerji, masa tercihi, özel gün..." />
          </div>

          <div style={{ gridColumn: "1 / -1", display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <button className="btn primary" type="submit">Talep Gönder</button>
            {done ? <span className="pill">✅ Talep alındı</span> : <span className="muted">Ortalama dönüş: 10–30 dk</span>}
          </div>
        </form>
      </div>
    </>
  );
}
