// Aktif menü linki
(function setActiveNav(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('nav a[data-page]').forEach(a=>{
    if(a.getAttribute("data-page") === path) a.classList.add("active");
  });
})();

// Basit "açık/kapalı" durumu (12:00–23:30)
(function openClosed(){
  const el = document.getElementById("openStatus");
  if(!el) return;
  function tick(){
    const now = new Date();
    const h = now.getHours() + now.getMinutes()/60;
    const isOpen = h >= 12 && h <= 23.5;
    el.textContent = isOpen ? "Şu an açık" : "Şu an kapalı";
    el.style.color = isOpen ? "#9ef0a1" : "#ff9aa2";
  }
  tick();
  setInterval(tick, 60000);
})();

// Footer yılı
(function year(){
  const y = document.getElementById("year");
  if(y) y.textContent = new Date().getFullYear();
})();

// Toast helper
function showToast(title, msg){
  const toast = document.getElementById("toast");
  if(!toast) return;
  const t = document.getElementById("toastTitle");
  const m = document.getElementById("toastMsg");
  if(t) t.textContent = title;
  if(m) m.textContent = msg;
  toast.classList.add("show");
  setTimeout(()=> toast.classList.remove("show"), 3500);
}

// Rezervasyon formu varsa bağla (demo)
(function reservationForm(){
  const form = document.getElementById("resForm");
  if(!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("Rezervasyon talebi:", data);
    showToast("Talep alındı ✅", "Sizi en kısa sürede arayıp onaylayacağız.");
    form.reset();
  });
})();
