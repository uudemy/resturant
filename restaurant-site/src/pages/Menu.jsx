import { useMemo, useState } from "react";
import menuData from "../data/menu.json";
import MenuSection from "../components/MenuSection.jsx";

export default function Menu() {
  const currency = menuData.currency || "₺";
  const categories = menuData.categories || [];

  const allTags = useMemo(() => {
    const set = new Set();
    for (const c of categories) for (const it of (c.items || [])) for (const t of (it.tags || [])) set.add(t);
    return ["Hepsi", ...Array.from(set)];
  }, [categories]);

  const [q, setQ] = useState("");
  const [tag, setTag] = useState("Hepsi");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return categories.map(cat => {
      const items = (cat.items || []).filter(it => {
        const okQ =
          !query ||
          (it.name || "").toLowerCase().includes(query) ||
          (it.desc || "").toLowerCase().includes(query);
        const okT =
          tag === "Hepsi" || (it.tags || []).includes(tag);
        return okQ && okT;
      });
      return { ...cat, items };
    });
  }, [categories, q, tag]);

  return (
    <>
      <div className="sectionHead">
        <div>
          <h1 style={{ margin: 0 }}>Menü</h1>
          <p className="muted">Arama yap, tag ile filtrele. İçerik: <code>src/data/menu.json</code></p>
        </div>
      </div>

      <div className="card" style={{ display: "grid", gap: 12, gridTemplateColumns: "2fr 1fr", alignItems: "end" }}>
        <div>
          <label className="muted" style={{ display: "block", marginBottom: 6, fontWeight: 800 }}>Arama</label>
          <input className="input" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Örn. somon, risotto, salata..." />
        </div>
        <div>
          <label className="muted" style={{ display: "block", marginBottom: 6, fontWeight: 800 }}>Filtre</label>
          <select className="select" value={tag} onChange={(e) => setTag(e.target.value)}>
            {allTags.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div style={{ gridColumn: "1 / -1", display: "flex", gap: 10, flexWrap: "wrap" }}>
          {allTags.slice(0, 8).map(t => (
            <button key={t} className={t === tag ? "btn primary" : "btn"} onClick={() => setTag(t)}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {filtered.map(cat => (
        <MenuSection key={cat.id} title={cat.title} items={cat.items || []} currency={currency} />
      ))}
    </>
  );
}
