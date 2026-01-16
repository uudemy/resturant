export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", marginTop: 22 }}>
      <div style={{ maxWidth: "var(--max)", margin: "0 auto", padding: "26px 18px 34px", display: "flex", gap: 14, justifyContent: "space-between", flexWrap: "wrap" }}>
        <div className="muted">© {new Date().getFullYear()} Meocon Bistro · Tüm hakları saklıdır.</div>
        <div className="muted">Instagram · TikTok · Google</div>
      </div>
    </footer>
  );
}
