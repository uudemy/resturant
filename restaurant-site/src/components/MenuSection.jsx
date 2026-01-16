export default function MenuSection({ title, items, currency }) {
  return (
    <section style={{ marginTop: 14 }}>
      <div className="sectionHead">
        <div>
          <h2>{title}</h2>
          <p className="muted">Taze, dengeli, şef dokunuşu.</p>
        </div>
      </div>

      <div className="grid">
        {items.length === 0 ? (
          <div className="card"><p className="muted">Bu kategoride eşleşen ürün yok.</p></div>
        ) : items.map((it, idx) => (
          <article key={idx} className="card">
            <div className="row">
              <b>{it.name}</b>
              <span style={{ fontWeight: 900 }}>{currency} {it.price}</span>
            </div>
            <div className="divider" />
            {it.desc ? <p className="muted">{it.desc}</p> : null}
            {Array.isArray(it.tags) && it.tags.length ? (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
                {it.tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
