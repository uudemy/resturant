export default function About() {
  return (
    <>
      <h1>Hakkımızda</h1>
      <p className="muted">Buraya restoran hikayeni yaz: şef, konsept, malzeme felsefesi.</p>

      <div className="grid">
        <div className="card">
          <b>🌿 Yerel & Mevsimsel</b>
          <div className="divider" />
          <p className="muted">Haftalık tedarik ve taze tabaklar.</p>
        </div>
        <div className="card">
          <b>🔥 Açık Mutfak</b>
          <div className="divider" />
          <p className="muted">Şeffaf, canlı, keyifli.</p>
        </div>
        <div className="card">
          <b>🍷 İçecek Seçkisi</b>
          <div className="divider" />
          <p className="muted">İmza kokteyl & şaraplar.</p>
        </div>
      </div>
    </>
  );
}
