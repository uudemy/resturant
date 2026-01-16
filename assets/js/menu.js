async function loadMenu() {
  const root = document.getElementById("menuRoot");
  const nav = document.getElementById("menuNav");
  const errorBox = document.getElementById("menuError");

  try {
    const res = await fetch("assets/data/menu.json", { cache: "no-store" });
    if (!res.ok) throw new Error("menu.json okunamadı (HTTP " + res.status + ")");
    const data = await res.json();

    const currency = data.currency || "₺";
    const categories = Array.isArray(data.categories) ? data.categories : [];

    // Kategori hızlı linkleri
    if (nav) {
      nav.innerHTML = categories
        .map(c => `<a class="btn" href="#cat-${c.id}">${c.title}</a>`)
        .join(" ");
    }

    // Kategori + ürün kartları
    root.innerHTML = categories.map(cat => {
      const items = Array.isArray(cat.items) ? cat.items : [];
      const cards = items.map(item => {
        const tags = (item.tags || []).map(t => `<span class="tag">${t}</span>`).join(" ");
        const desc = item.desc ? `<p class="muted">${item.desc}</p>` : "";
        const price = (item.price ?? "").toString();
        return `
          <div class="card">
            <div class="row">
              <b>${item.name || "Ürün"}</b>
              <span class="price">${currency} ${price}</span>
            </div>
            <div class="divider"></div>
            ${desc}
            ${tags ? `<div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:10px;">${tags}</div>` : ""}
          </div>
        `;
      }).join("");

      return `
        <section id="cat-${cat.id}" style="margin-top: 14px;">
          <div class="section-head">
            <div>
              <h2>${cat.title || "Kategori"}</h2>
              ${cat.subtitle ? `<p class="muted">${cat.subtitle}</p>` : `<p class="muted"> </p>`}
            </div>
          </div>
          <div class="grid">${cards || `<div class="card"><p class="muted">Bu kategoride ürün yok.</p></div>`}</div>
        </section>
      `;
    }).join("");

  } catch (err) {
    console.error(err);
    if (errorBox) {
      errorBox.style.display = "block";
      errorBox.textContent =
        "Menü yüklenemedi. Dosya yolu doğru mu? (assets/data/menu.json) — Hata: " + err.message;
    }
  }
}

loadMenu();
