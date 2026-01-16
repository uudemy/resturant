import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, backdropFilter: "blur(10px)", background: "rgba(11,15,20,.65)", borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: "var(--max)", margin: "0 auto", padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 900 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: "linear-gradient(135deg,var(--brand),var(--brand2))", display: "grid", placeItems: "center", color: "#1b1200" }}>M</div>
          <div>
            <div>Meocon Bistro</div>
            <div className="muted" style={{ fontSize: 12, fontWeight: 800 }}>Modern Türk Mutfağı</div>
          </div>
        </div>

        <nav style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <NavLink to="/" className="btn" style={({ isActive }) => ({ opacity: isActive ? 1 : .85 })}>Ana Sayfa</NavLink>
          <NavLink to="/menu" className="btn" style={({ isActive }) => ({ opacity: isActive ? 1 : .85 })}>Menü</NavLink>
          <NavLink to="/about" className="btn" style={({ isActive }) => ({ opacity: isActive ? 1 : .85 })}>Hakkımızda</NavLink>
          <NavLink to="/reservation" className="btn primary">Rezervasyon</NavLink>
          <NavLink to="/contact" className="btn" style={({ isActive }) => ({ opacity: isActive ? 1 : .85 })}>İletişim</NavLink>
        </nav>
      </div>
    </header>
  );
}
