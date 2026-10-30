/**
 * POJOX CLASH STORE - GAME ACCOUNT CATALOG & WHATSAPP REDIRECT ENGINE
 * Specifically built for Clash of Clans Account Transactions
 */

// Global Configuration
const CONFIG = {
  defaultPhone: "6285189096899", // Ganti dengan nomor WhatsApp Admin Anda
  storeName: "Azril Store",
  adminPassword: "admin123", // Password login admin lokal (bisa diubah)
};

// Get active phone number from LocalStorage or default
function getAdminPhone() {
  return localStorage.getItem("pojox_wa_phone") || CONFIG.defaultPhone;
}

function setAdminPhone(phone) {
  // Format clean phone number: remove non-digits, ensure starts with 62
  let cleanPhone = phone.replace(/\D/g, "");
  if (cleanPhone.startsWith("0")) {
    cleanPhone = "62" + cleanPhone.slice(1);
  }
  localStorage.setItem("pojox_wa_phone", cleanPhone);
  return cleanPhone;
}

// Database Akun Clash of Clans (Data Bawaan)
const DEFAULT_ACCOUNTS_DATA = [
  {
    id: 0,
    code: "#COC-1801",
    title: "TH 18 Mega Sultan - Dragon Duke & Minion Prince",
    th: 18,
    status: "ready",
    price: 2500000,
    originalPrice: 3200000,
    image: "assets/images/th17-elite.jpg",
    heroes: { bk: 110, aq: 110, gw: 85, rc: 55, mp: 95, dd: 25 },
    gems: "12.500",
    cwlMedals: "2.100",
    changeName: "Gratis (Free)",
    scidStatus: "Clean Email (Siap Pindah)",
    trophies: "6.200 (Legends League)",
    equipment: "Giant Gauntlet Max, Spiky Ball Max, Fireball Max, Frozen Arrow Max",
    pets: "L.A.S.S.I Max, Electro Owl Max, Diggy Max, Phoenix Max, Poison Lizard Max",
    description: "Akun TH 18 Sultan! Semua hero max level termasuk Minion Prince Lv.95 & Dragon Duke Lv.25 yang merupakan hero terbaru CoC. Pertahanan dan tembok super kokoh, skin hero legendaris komplit, equipment epic langka sudah level tinggi. Langka & Eksklusif!"
  },
  {
    id: 1,
    code: "#COC-1701",
    title: "TH 17 Ultra Sultan - Fire & Nature Theme",
    th: 17,
    status: "ready",
    price: 1750000,
    originalPrice: 2200000,
    image: "assets/images/th17-elite.jpg",
    heroes: { bk: 95, aq: 95, gw: 70, rc: 45, mp: 0, dd: 0 },
    gems: "8.740",
    cwlMedals: "1.250",
    changeName: "Gratis (Free)",
    scidStatus: "Clean Email (Siap Pindah)",
    trophies: "3.450 (Master/Titan)",
    equipment: "Giant Gauntlet Max, Spiky Ball Lv.27, Fireball Max",
    pets: "L.A.S.S.I Max, Electro Owl Max, Diggy Max, Phoenix Max",
    description: "Akun Sultan TH 17 siap tempur Clan War League & Legends League! Pertahanan dan tembok super kokoh, skin hero legendaris komplit, equipment epic langka sudah level tinggi."
  },
  {
    id: 2,
    code: "#COC-1602",
    title: "TH 16 Max Defense & Hero - Legend League Ready",
    th: 16,
    status: "ready",
    price: 1250000,
    originalPrice: 1600000,
    image: "assets/images/th16-max.jpg",
    heroes: { bk: 90, aq: 90, gw: 65, rc: 40, mp: 0, dd: 0 },
    gems: "4.520",
    cwlMedals: "850",
    changeName: "500 Gems",
    scidStatus: "Clean Email (Supercell ID Aman)",
    trophies: "5.678 (Legends League)",
    equipment: "Giant Gauntlet Lv.24, Frozen Arrow Lv.25, Healing Tome Max",
    pets: "Unicorn Max, Diggy Max, Frosty Lv.8",
    description: "Base TH 16 full max pertahanan! Tembus Legends League dengan 5.600+ Trophy. Koleksi Magic Items melimpah di inventory. Tinggal ganti email pribadi langsung push rank."
  },
  {
    id: 3,
    code: "#COC-1503",
    title: "TH 15 Semi Max - Crystalline Magic Fortress",
    th: 15,
    status: "ready",
    price: 750000,
    originalPrice: 950000,
    image: "assets/images/th15-semi.jpg",
    heroes: { bk: 68, aq: 72, gw: 54, rc: 25, mp: 0, dd: 0 },
    gems: "1.245",
    cwlMedals: "540",
    changeName: "Gratis (Free)",
    scidStatus: "Supercell ID Clean",
    trophies: "2.257 (Crystal I)",
    equipment: "Giant Gauntlet Lv.18, Rage Vial Max, Invisibility Max",
    pets: "L.A.S.S.I Lv.8, Electro Owl Lv.7",
    description: "Akun TH 15 tema sihir kristal biru! Spell Tower & Monolith aktif. Base rapi dan sangat kuat menahan serangan elektro naga. Harga terjangkau untuk spek tinggi."
  },
  {
    id: 4,
    code: "#COC-1404",
    title: "TH 14 Jungle Beast - Battle Pets Komplit",
    th: 14,
    status: "ready",
    price: 490000,
    originalPrice: 650000,
    image: "assets/images/th14-jungle.jpg",
    heroes: { bk: 70, aq: 75, gw: 50, rc: 25, mp: 0, dd: 0 },
    gems: "985",
    cwlMedals: "420",
    changeName: "Gratis (Free)",
    scidStatus: "Clean Email Aman 100%",
    trophies: "2.315 (Crystal I)",
    equipment: "Earthquake Boots Lv.15, Frozen Arrow Lv.18",
    pets: "L.A.S.S.I Lv.10, Mighty Yak Lv.8, Unicorn Lv.9",
    description: "Akun Town Hall 14 tema suku kuno & hutan rimba! Semua pet tempur sudah terbuka. Pasukan darat dan udara level max untuk perang clan."
  },
  {
    id: 5,
    code: "#COC-1305",
    title: "TH 13 Frozen Ice Citadel - Siap Tempur CWL",
    th: 13,
    status: "sold",
    price: 350000,
    originalPrice: 480000,
    image: "assets/images/th13-ice.jpg",
    heroes: { bk: 65, aq: 65, gw: 40, rc: 15, mp: 0, dd: 0 },
    gems: "1.540",
    cwlMedals: "310",
    changeName: "500 Gems",
    scidStatus: "Terjual ke Buyer Jakarta",
    trophies: "2.800 (Master III)",
    equipment: "Standard Equipment Max Lv",
    pets: "Belum kebuka (Fitur TH14+)",
    description: "[TERJUAL] Akun TH 13 max hero level 65/65/40/15. Pertahanan es kokoh dengan Catapult aktif."
  }
];

// Persistent LocalStorage Loader
function getStoredAccounts() {
  const stored = localStorage.getItem("pojox_accounts_data");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {
      console.error("Gagal membaca stok akun dari LocalStorage:", e);
    }
  }
  return [...DEFAULT_ACCOUNTS_DATA];
}

// Active State
let ACCOUNTS_DATA = getStoredAccounts();

function saveAccountsToStorage() {
  localStorage.setItem("pojox_accounts_data", JSON.stringify(ACCOUNTS_DATA));
  renderAccounts();
  renderAdminStockList();
}

// State Management
let currentFilterTH = "all";
let currentSearchQuery = "";
let currentSort = "recommended";
let activeAccountForModal = null;

// Format Rupiah Currency
function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(number);
}

// Generate WhatsApp Redirect Link
function generateWaLink(account) {
  const phone = getAdminPhone();
  let message = "";

  if (account) {
    message = `Halo Admin ${CONFIG.storeName}, saya tertarik untuk membeli akun Clash of Clans berikut:
━━━━━━━━━━━━━━━━━
📌 Kode Akun : ${account.code}
🏰 Judul     : ${account.title}
💰 Harga     : ${formatRupiah(account.price)}
👑 Hero      : BK ${account.heroes.bk} | AQ ${account.heroes.aq} | GW ${account.heroes.gw} | RC ${account.heroes.rc}${account.heroes.mp ? ` | MP ${account.heroes.mp}` : ''}${account.heroes.dd ? ` | DD ${account.heroes.dd}` : ''}
━━━━━━━━━━━━━━━━━
Apakah akun ini masih READY? Mohon info tata cara pembayarannya. Terima kasih!`;
  } else {
    message = `Halo Admin ${CONFIG.storeName}, saya ingin konsultasi / menanyakan stok akun Clash of Clans yang ready.`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// Direct Buy Handler
function handleDirectBuy(code) {
  const account = ACCOUNTS_DATA.find(acc => acc.code === code);
  if (!account) return;

  if (account.status === "sold") {
    showToast("Akun ini sudah TERJUAL. Silakan pilih akun yang bertanda READY.");
    return;
  }

  const waUrl = generateWaLink(account);
  window.open(waUrl, "_blank");
}

// Render Account Cards
function renderAccounts() {
  const catalogGrid = document.getElementById("catalogGrid");
  const itemCountEl = document.getElementById("itemCount");
  if (!catalogGrid) return;

  // Filter Logic
  let filtered = ACCOUNTS_DATA.filter(account => {
    // TH Filter
    if (currentFilterTH !== "all" && account.th !== parseInt(currentFilterTH)) {
      return false;
    }
    // Search Query Filter (Code, Title, or Town Hall)
    if (currentSearchQuery.trim() !== "") {
      const q = currentSearchQuery.toLowerCase();
      const matchCode = account.code.toLowerCase().includes(q);
      const matchTitle = account.title.toLowerCase().includes(q);
      const matchTH = `th ${account.th}`.includes(q) || `th${account.th}`.includes(q);
      if (!matchCode && !matchTitle && !matchTH) {
        return false;
      }
    }
    return true;
  });

  // Sort Logic
  if (currentSort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "th-desc") {
    filtered.sort((a, b) => b.th - a.th);
  }

  // Update Count
  if (itemCountEl) {
    itemCountEl.textContent = `${filtered.length} Akun`;
  }

  // Empty State
  if (filtered.length === 0) {
    catalogGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-card); border-radius: 1rem; border: 1px dashed rgba(255,255,255,0.1);">
        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="margin: 0 auto 1rem; color: #64748b;">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3 style="color: #fff; margin-bottom: 0.5rem;">Tidak Ada Akun Ditemukan</h3>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.5rem;">Coba ganti filter Town Hall atau cari dengan kata kunci lain.</p>
        <button class="btn btn-outline" onclick="resetFilters()">Reset Semua Filter</button>
      </div>
    `;
    return;
  }

  // Render Cards HTML
  catalogGrid.innerHTML = filtered.map(account => {
    const isSold = account.status === "sold";
    const statusText = isSold ? "TERJUAL" : "READY";
    const statusClass = isSold ? "sold" : "ready";

    return `
      <article class="account-card" id="card-${account.code.replace('#', '')}">
        <!-- Media / Screenshot -->
        <div class="card-media" onclick="openDetailModal('${account.code}')">
          <img src="${account.image}" alt="${account.title}" loading="lazy" />
          
          <div class="card-overlay-badges">
            <span class="status-badge ${statusClass}">
              <span style="display:inline-block; width:7px; height:7px; border-radius:50%; background:currentColor;"></span>
              ${statusText}
            </span>
            <span class="th-badge">TH ${account.th}</span>
          </div>

          <div class="card-quick-view-overlay">
            <span class="quick-view-pill">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Klik Lihat Detail
            </span>
          </div>
        </div>

        <!-- Card Content -->
        <div class="card-content">
          <div class="card-header-row">
            <span class="account-code-tag" onclick="copyAccountCode('${account.code}', event)" title="Klik untuk salin kode">
              ${account.code}
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </span>
            <span class="verified-tag">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Verified SCID
            </span>
          </div>

          <h3 class="card-title">${account.title}</h3>

          <!-- Heroes Level Box -->
          <div class="heroes-grid">
            <div class="hero-stat">
              <div class="hero-name">King</div>
              <div class="hero-level"><span>Lv.</span>${account.heroes.bk}</div>
            </div>
            <div class="hero-stat">
              <div class="hero-name">Queen</div>
              <div class="hero-level"><span>Lv.</span>${account.heroes.aq}</div>
            </div>
            <div class="hero-stat">
              <div class="hero-name">Warden</div>
              <div class="hero-level"><span>Lv.</span>${account.heroes.gw}</div>
            </div>
            <div class="hero-stat">
              <div class="hero-name">Champ</div>
              <div class="hero-level"><span>Lv.</span>${account.heroes.rc}</div>
            </div>
            ${account.heroes.mp ? `<div class="hero-stat" style="background: rgba(139,92,246,0.15); border-color: rgba(139,92,246,0.3);">
              <div class="hero-name" style="color: #a78bfa;">M.Prince</div>
              <div class="hero-level"><span>Lv.</span>${account.heroes.mp}</div>
            </div>` : ''}
            ${account.heroes.dd ? `<div class="hero-stat" style="background: rgba(239,68,68,0.15); border-color: rgba(239,68,68,0.3);">
              <div class="hero-name" style="color: #f87171;">D.Duke</div>
              <div class="hero-level"><span>Lv.</span>${account.heroes.dd}</div>
            </div>` : ''}
          </div>

          <!-- Specs Badges -->
          <div class="specs-list">
            <span class="spec-chip">
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l5.59-5.59L19 10l-7 7z"/>
              </svg>
              Gems: ${account.gems}
            </span>
            <span class="spec-chip">
              <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
              Ganti Nama: ${account.changeName}
            </span>
            <span class="spec-chip">
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email Clean
            </span>
          </div>

          <!-- Card Footer (Price & WA Button) -->
          <div class="card-footer">
            <div class="price-wrapper">
              <span class="price-original">${formatRupiah(account.originalPrice)}</span>
              <span class="price-current">${formatRupiah(account.price)}</span>
            </div>

            <div class="card-actions-row">
              <button class="btn btn-outline btn-sm" onclick="openDetailModal('${account.code}')">
                Detail
              </button>
              <button 
                class="btn ${isSold ? 'btn-outline' : 'btn-whatsapp'} btn-sm" 
                onclick="handleDirectBuy('${account.code}')"
                ${isSold ? 'disabled' : ''}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                ${isSold ? 'Terjual' : 'Beli via WA'}
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Reset Filters
function resetFilters() {
  currentFilterTH = "all";
  currentSearchQuery = "";
  currentSort = "recommended";

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.th === "all");
  });

  const searchInput = document.getElementById("searchAccountInput");
  if (searchInput) searchInput.value = "";

  const sortSelect = document.getElementById("sortAccounts");
  if (sortSelect) sortSelect.value = "recommended";

  renderAccounts();
}

// Open Detail Modal
function openDetailModal(code) {
  const account = ACCOUNTS_DATA.find(acc => acc.code === code);
  if (!account) return;

  activeAccountForModal = account;
  const modalBackdrop = document.getElementById("detailModal");
  if (!modalBackdrop) return;

  const isSold = account.status === "sold";
  const buyBtnHtml = isSold
    ? `<button class="btn btn-outline btn-block" disabled>Akun Ini Telah Terjual</button>`
    : `<button class="btn btn-whatsapp btn-block" onclick="handleDirectBuy('${account.code}')">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        Beli Akun Ini via WhatsApp Langsung
      </button>`;

  document.getElementById("modalImg").src = account.image;
  document.getElementById("modalTitle").textContent = account.title;
  document.getElementById("modalCode").textContent = account.code;
  document.getElementById("modalPrice").textContent = formatRupiah(account.price);
  document.getElementById("modalOriginalPrice").textContent = formatRupiah(account.originalPrice);
  document.getElementById("modalDesc").textContent = account.description;

  document.getElementById("modalBK").textContent = `Lv. ${account.heroes.bk}`;
  document.getElementById("modalAQ").textContent = `Lv. ${account.heroes.aq}`;
  document.getElementById("modalGW").textContent = `Lv. ${account.heroes.gw}`;
  document.getElementById("modalRC").textContent = `Lv. ${account.heroes.rc}`;

  // TH18 heroes (Minion Prince & Dragon Duke)
  const mpSlot = document.getElementById("modalMPSlot");
  const ddSlot = document.getElementById("modalDDSlot");
  if (mpSlot) {
    const hasMp = account.heroes.mp && account.heroes.mp > 0;
    mpSlot.style.display = hasMp ? "" : "none";
    if (hasMp) document.getElementById("modalMP").textContent = `Lv. ${account.heroes.mp}`;
  }
  if (ddSlot) {
    const hasDd = account.heroes.dd && account.heroes.dd > 0;
    ddSlot.style.display = hasDd ? "" : "none";
    if (hasDd) document.getElementById("modalDD").textContent = `Lv. ${account.heroes.dd}`;
  }

  document.getElementById("modalGems").textContent = account.gems;
  document.getElementById("modalCWL").textContent = account.cwlMedals;
  document.getElementById("modalChangeName").textContent = account.changeName;
  document.getElementById("modalSCID").textContent = account.scidStatus;
  document.getElementById("modalTrophies").textContent = account.trophies;
  document.getElementById("modalEquipment").textContent = account.equipment;
  document.getElementById("modalPets").textContent = account.pets;

  document.getElementById("modalActionArea").innerHTML = buyBtnHtml;

  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDetailModal() {
  const modalBackdrop = document.getElementById("detailModal");
  if (modalBackdrop) {
    modalBackdrop.classList.remove("open");
  }
  document.body.style.overflow = "";
}

// Copy Account Code
function copyAccountCode(code, event) {
  if (event) event.stopPropagation();
  navigator.clipboard.writeText(code).then(() => {
    showToast(`Kode akun ${code} berhasil disalin!`);
  }).catch(() => {
    showToast(`Kode: ${code}`);
  });
}

// Toast Notification
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("globalToast");
  const toastMsg = document.getElementById("toastMsg");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// ============================================================
// ADMIN PANEL ENGINE (TAMBAH & KELOLA STOK)
// ============================================================

// ============================================================
// ADMIN LOGIN MODAL (Password Lokal)
// ============================================================

function openAdminLogin() {
  const modal = document.getElementById("adminLoginModal");
  if (!modal) return;
  const errMsg = document.getElementById("loginErrorMsg");
  const pwInput = document.getElementById("localAdminPassword");
  if (errMsg) errMsg.style.display = "none";
  if (pwInput) pwInput.value = "";
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(() => pwInput && pwInput.focus(), 300);
}

function closeAdminLogin() {
  const modal = document.getElementById("adminLoginModal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

function verifyAdminLogin() {
  const pwInput = document.getElementById("localAdminPassword");
  const errMsg = document.getElementById("loginErrorMsg");
  if (!pwInput) return;

  const entered = pwInput.value;
  const correct = localStorage.getItem("pojox_admin_password") || CONFIG.adminPassword;

  if (entered === correct) {
    closeAdminLogin();
    openAdminPanel();
  } else {
    if (errMsg) errMsg.style.display = "block";
    pwInput.value = "";
    pwInput.focus();
  }
}

function openAdminPanel(targetPane = "paneAddStock") {
  const modal = document.getElementById("adminPanelModal");
  if (!modal) return;

  // Set current WhatsApp Phone in input
  const phoneInput = document.getElementById("adminPhoneInput");
  if (phoneInput) phoneInput.value = getAdminPhone();

  // Pre-fill Supabase URL & Key if already saved
  const sbUrl = localStorage.getItem("pojox_supabase_url") || "";
  const sbKey = localStorage.getItem("pojox_supabase_anon_key") || "";
  const urlField = document.getElementById("supabaseUrlInput");
  const keyField = document.getElementById("supabaseKeyInput");
  if (urlField) urlField.value = sbUrl;
  if (keyField) keyField.value = sbKey;

  // Suggest next code in add stock form
  const codeInput = document.getElementById("addCode");
  if (codeInput && !codeInput.value) {
    const nextNum = ACCOUNTS_DATA.length + 1;
    codeInput.value = `#COC-TH${document.getElementById("addTH")?.value || 16}-0${nextNum}`;
  }

  renderAdminStockList();
  switchAdminTab(targetPane);

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeAdminPanel() {
  const modal = document.getElementById("adminPanelModal");
  if (modal) {
    modal.classList.remove("open");
  }
  document.body.style.overflow = "";
}

// Backward compatibility alias
function openAdminSettings() {
  openAdminPanel("paneWaConfig");
}
function closeAdminSettings() {
  closeAdminPanel();
}

// Switch Tab in Admin Panel
function switchAdminTab(paneId) {
  document.querySelectorAll(".admin-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.pane === paneId);
  });

  document.querySelectorAll(".admin-content-pane").forEach(pane => {
    pane.classList.toggle("active", pane.id === paneId);
  });

  const dialog = document.querySelector(".admin-modal-dialog");
  if (dialog) dialog.scrollTop = 0;
}

// Select Preset Image Thumbnail
function selectPresetImg(el) {
  document.querySelectorAll(".preset-thumb").forEach(t => t.classList.remove("selected"));
  el.classList.add("selected");
  const imgPath = el.dataset.img;
  document.getElementById("addSelectedImg").value = imgPath;
}

// Handle Custom Screenshot File Upload
function handleCustomFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    document.getElementById("addSelectedImg").value = dataUrl;
    // Deselect preset thumbnails to indicate custom upload
    document.querySelectorAll(".preset-thumb").forEach(t => t.classList.remove("selected"));
    showToast("Screenshot kustom berhasil dimuat!");
  };
  reader.readAsDataURL(file);
}

// Form Submit: Tambah Stok Akun Baru
function handleFormAddStock(e) {
  e.preventDefault();

  const code = document.getElementById("addCode").value.trim().toUpperCase();
  const th = parseInt(document.getElementById("addTH").value);
  const title = document.getElementById("addTitle").value.trim();
  const status = document.getElementById("addStatus").value;
  const price = parseInt(document.getElementById("addPrice").value) || 0;
  const originalPrice = parseInt(document.getElementById("addOriginalPrice").value) || price;

  const bk = parseInt(document.getElementById("addBK").value) || 0;
  const aq = parseInt(document.getElementById("addAQ").value) || 0;
  const gw = parseInt(document.getElementById("addGW").value) || 0;
  const rc = parseInt(document.getElementById("addRC").value) || 0;
  const mp = parseInt(document.getElementById("addMP")?.value) || 0;
  const dd = parseInt(document.getElementById("addDD")?.value) || 0;

  const gems = document.getElementById("addGems").value.trim() || "1.000";
  const trophies = document.getElementById("addTrophies").value.trim() || "3.000";
  const changeName = document.getElementById("addChangeName").value;
  const image = document.getElementById("addSelectedImg").value || "assets/images/th16-max.jpg";
  const description = document.getElementById("addDescription").value.trim();

  // Check duplicate code
  const exists = ACCOUNTS_DATA.some(acc => acc.code.toLowerCase() === code.toLowerCase());
  if (exists) {
    alert(`Kode akun ${code} sudah terdaftar! Silakan gunakan kode unik yang berbeda.`);
    return;
  }

  // Construct New Account Object
  const newAccount = {
    id: Date.now(),
    code,
    title,
    th,
    status,
    price,
    originalPrice,
    image,
    heroes: { bk, aq, gw, rc, mp, dd },
    gems,
    cwlMedals: "600",
    changeName,
    scidStatus: "Clean Email (Supercell ID Aman)",
    trophies,
    equipment: "Hero Equipment Lengkap",
    pets: th >= 14 ? "Battle Pets Tersedia" : "Belum terbuka (Fitur TH14+)",
    description
  };

  // Add to beginning of stock list
  ACCOUNTS_DATA.unshift(newAccount);
  saveAccountsToStorage();

  showToast(`✅ Akun ${code} berhasil diterbitkan ke katalog!`);

  // Reset form
  document.getElementById("formAddStock").reset();
  document.getElementById("addSelectedImg").value = "assets/images/th16-max.jpg";
  document.querySelectorAll(".preset-thumb").forEach((t, i) => {
    t.classList.toggle("selected", i === 0);
  });

  // Switch to Manage Stock view so admin sees the new item
  switchAdminTab("paneManageStock");
}

// Toggle Stock Status (READY / SOLD)
function toggleStockStatus(code) {
  const account = ACCOUNTS_DATA.find(acc => acc.code === code);
  if (!account) return;

  account.status = account.status === "ready" ? "sold" : "ready";
  saveAccountsToStorage();

  const newStatusText = account.status === "ready" ? "READY (Tersedia)" : "TERJUAL (Sold)";
  showToast(`Status ${code} diubah menjadi: ${newStatusText}`);
}

// Delete Stock Account
function deleteStockAccount(code) {
  if (!confirm(`Apakah Anda yakin ingin menghapus akun ${code} dari katalog toko?`)) {
    return;
  }

  ACCOUNTS_DATA = ACCOUNTS_DATA.filter(acc => acc.code !== code);
  saveAccountsToStorage();
  showToast(`Akun ${code} berhasil dihapus dari sistem.`);
}

// Reset Stock to Default
function resetStockToDefault() {
  if (!confirm("Peringatan: Reset akan mengembalikan semua data akun ke daftar bawaan awal. Lanjutkan?")) {
    return;
  }

  ACCOUNTS_DATA = [...DEFAULT_ACCOUNTS_DATA];
  saveAccountsToStorage();
  showToast("Daftar stok akun berhasil direset ke bawaan!");
}

// Render Admin Stock Management List
function renderAdminStockList() {
  const container = document.getElementById("adminStockList");
  const badgeCount = document.getElementById("adminStockBadgeCount");
  if (!container) return;

  if (badgeCount) {
    badgeCount.textContent = ACCOUNTS_DATA.length;
  }

  if (ACCOUNTS_DATA.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: #94a3b8;">
        <p>Belum ada stok akun yang tersedia.</p>
        <button class="btn btn-primary btn-sm" style="margin-top: 0.75rem;" onclick="switchAdminTab('paneAddStock')">
          + Tambah Akun Pertama
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = ACCOUNTS_DATA.map(account => {
    const isSold = account.status === "sold";
    return `
      <div class="stock-item-row">
        <div class="stock-item-info">
          <img src="${account.image}" alt="${account.title}" class="stock-item-thumb" />
          <div class="stock-item-meta">
            <div class="stock-item-title">${account.title}</div>
            <div class="stock-item-details">
              <span style="color: var(--gold-bright); font-weight: 700;">${account.code}</span>
              <span>TH ${account.th}</span>
              <span>${formatRupiah(account.price)}</span>
            </div>
          </div>
        </div>

        <div class="stock-item-actions">
          <button 
            class="btn-status-toggle ${isSold ? 'is-sold' : 'is-ready'}" 
            onclick="toggleStockStatus('${account.code}')" 
            title="Klik untuk ubah status akun"
          >
            ${isSold ? '🔴 TERJUAL' : '🟢 READY'}
          </button>
          <button 
            class="btn-delete-stock" 
            onclick="deleteStockAccount('${account.code}')" 
            title="Hapus akun dari katalog"
          >
            Hapus
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// ============================================================
// SUPABASE CONFIG MANAGEMENT
// ============================================================

function updateSupabaseStatusBadge(connected, message) {
  const badge = document.getElementById("supabaseStatusBadge");
  const statusTitle = document.getElementById("supabaseStatusTitle");
  const statusMsg = document.getElementById("supabaseStatusMsg");
  const statusCard = document.getElementById("supabaseStatusCard");

  if (badge) {
    badge.className = "supabase-status-badge " + (connected ? "online" : "offline");
    const dot = badge.querySelector(".status-dot");
    const text = badge.querySelector(".status-text");
    if (dot) dot.style.background = connected ? "#34d399" : "#f87171";
    if (text) text.textContent = connected ? "DB Online" : "Offline";
  }

  if (statusTitle) statusTitle.textContent = connected ? "✅ Database Terhubung" : "❌ Database Belum Terhubung";
  if (statusTitle) statusTitle.style.color = connected ? "#34d399" : "#f87171";
  if (statusMsg) statusMsg.textContent = message || (connected ? "Supabase berhasil terhubung dan data akan disinkronkan." : "Belum terhubung. Masukkan kredensial Supabase di bawah.");
  if (statusCard) statusCard.style.borderColor = connected ? "rgba(52,211,153,0.3)" : "rgba(248,113,113,0.2)";
}

function saveSupabaseConfig() {
  const url = document.getElementById("supabaseUrlInput")?.value.trim();
  const key = document.getElementById("supabaseKeyInput")?.value.trim();

  if (!url || !key) {
    showToast("⚠️ Harap isi URL dan Anon Key Supabase terlebih dahulu!");
    return;
  }

  if (!url.startsWith("https://") || !url.includes(".supabase.co")) {
    showToast("⚠️ Format URL tidak valid. Contoh: https://xyz.supabase.co");
    return;
  }

  const ok = saveSupabaseCredentials(url, key);

  if (ok) {
    updateSupabaseStatusBadge(true, "Supabase berhasil terhubung! Data akan disinkronkan ke cloud.");
    showToast("✅ Supabase berhasil dihubungkan!");
    // Reload accounts from Supabase
    apiGetAccounts().then(data => {
      if (data && data.length > 0) {
        ACCOUNTS_DATA = data;
        renderAccounts();
        renderAdminStockList();
        showToast(`✅ ${data.length} akun berhasil dimuat dari Supabase!`);
      }
    }).catch(err => {
      showToast("⚠️ Koneksi berhasil tapi gagal muat data. Cek table 'accounts' di Supabase.");
      console.warn(err);
    });
  } else {
    updateSupabaseStatusBadge(false, "Gagal menginisialisasi. Pastikan URL dan Key benar.");
    showToast("❌ Gagal menghubungkan Supabase. Periksa URL & Key.");
  }
}

async function testSupabaseConnection() {
  const btn = document.getElementById("btnTestConnection");
  if (btn) { btn.textContent = "⏳ Menguji..."; btn.disabled = true; }

  const url = document.getElementById("supabaseUrlInput")?.value.trim() ||
               localStorage.getItem("pojox_supabase_url") || "";
  const key = document.getElementById("supabaseKeyInput")?.value.trim() ||
               localStorage.getItem("pojox_supabase_anon_key") || "";

  if (!url || !key) {
    showToast("⚠️ Isi URL dan Key dulu sebelum test koneksi.");
    if (btn) { btn.textContent = "🔌 Test Koneksi"; btn.disabled = false; }
    return;
  }

  // Save & init temporarily
  const ok = saveSupabaseCredentials(url, key);

  if (!ok) {
    updateSupabaseStatusBadge(false, "Gagal inisialisasi. Periksa URL dan Key.");
    if (btn) { btn.textContent = "🔌 Test Koneksi"; btn.disabled = false; }
    return;
  }

  try {
    const data = await apiGetAccounts();
    updateSupabaseStatusBadge(true, `Berhasil! ${data.length} akun ditemukan di database.`);
    showToast(`✅ Koneksi berhasil! ${data.length} akun di database.`);
  } catch (e) {
    updateSupabaseStatusBadge(false, "Koneksi gagal. Pastikan tabel 'accounts' sudah dibuat di Supabase.");
    showToast("❌ Koneksi gagal. Cek konsol untuk detail error.");
    console.error("Supabase connection test failed:", e);
  }

  if (btn) { btn.textContent = "🔌 Test Koneksi"; btn.disabled = false; }
}

function clearSupabaseConfig() {
  if (!confirm("Hapus kredensial Supabase? Data akan kembali menggunakan LocalStorage.")) return;
  localStorage.removeItem("pojox_supabase_url");
  localStorage.removeItem("pojox_supabase_anon_key");
  const urlField = document.getElementById("supabaseUrlInput");
  const keyField = document.getElementById("supabaseKeyInput");
  if (urlField) urlField.value = "";
  if (keyField) keyField.value = "";
  supabaseClient = null;
  updateSupabaseStatusBadge(false, "Kredensial dihapus. Menggunakan LocalStorage.");
  showToast("🗑️ Kredensial Supabase berhasil dihapus.");
}

async function handleAdminLoginSupabase() {
  const email = document.getElementById("adminEmailInput")?.value.trim();
  const pass = document.getElementById("adminPassInput")?.value;
  const statusEl = document.getElementById("adminLoginStatus");

  if (!email || !pass) {
    if (statusEl) { statusEl.textContent = "⚠️ Isi email dan password terlebih dahulu."; statusEl.style.color = "#fbbf24"; }
    return;
  }

  if (!isSupabaseActive()) {
    if (statusEl) { statusEl.textContent = "❌ Hubungkan Supabase terlebih dahulu di atas."; statusEl.style.color = "#f87171"; }
    return;
  }

  try {
    if (statusEl) { statusEl.textContent = "⏳ Login..."; statusEl.style.color = "#94a3b8"; }
    await apiAdminLogin(email, pass);
    if (statusEl) { statusEl.textContent = "✅ Login berhasil! Anda masuk sebagai Admin Supabase."; statusEl.style.color = "#34d399"; }
    showToast("✅ Login Admin Supabase berhasil!");
  } catch (err) {
    if (statusEl) { statusEl.textContent = "❌ Login gagal: " + (err.message || "Email/password salah."); statusEl.style.color = "#f87171"; }
    console.error("Admin login error:", err);
  }
}

// Save Admin WhatsApp Phone
function saveAdminPhone() {
  const input = document.getElementById("adminPhoneInput");
  if (!input) return;

  const raw = input.value.trim();
  if (!raw) {
    alert("Silakan masukkan nomor WhatsApp yang valid!");
    return;
  }

  const saved = setAdminPhone(raw);
  closeAdminPanel();
  showToast(`Nomor WhatsApp berhasil diupdate ke: +${saved}`);
  updateAllWaButtons();
}

function updateAllWaButtons() {
  const floatingWa = document.getElementById("floatingWaBtn");
  if (floatingWa) {
    floatingWa.href = generateWaLink(null);
  }
  const navWa = document.getElementById("navWaBtn");
  if (navWa) {
    navWa.href = generateWaLink(null);
  }
  const heroWa = document.getElementById("heroWaBtn");
  if (heroWa) {
    heroWa.href = generateWaLink(null);
  }
}

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", async () => {
  // Init Supabase if configured
  if (typeof initSupabase === "function") {
    const connected = initSupabase();
    updateSupabaseStatusBadge(connected, connected
      ? "Supabase terhubung dari konfigurasi tersimpan."
      : "Kredensial Supabase belum dikonfigurasi."
    );
  }

  // Asynchronously sync from Supabase database (or fallback)
  if (typeof apiGetAccounts === "function") {
    try {
      const fetched = await apiGetAccounts();
      if (fetched && fetched.length > 0) {
        ACCOUNTS_DATA = fetched;
      }
    } catch (e) {
      console.warn("Could not fetch remote accounts, using local:", e);
    }
  }

  // Initial Render
  renderAccounts();
  updateAllWaButtons();
  if (typeof renderAdminStockList === "function") {
    renderAdminStockList();
  }

  // TH Filter Buttons
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilterTH = btn.dataset.th;
      renderAccounts();
    });
  });

  // Search Input Listener
  const searchInput = document.getElementById("searchAccountInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value;
      renderAccounts();
    });
  }

  // Sort Select Listener
  const sortSelect = document.getElementById("sortAccounts");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderAccounts();
    });
  }

  // FAQ Accordion
  document.querySelectorAll(".faq-header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains("active");

      // Close all
      document.querySelectorAll(".faq-item").forEach(i => {
        i.classList.remove("active");
        i.querySelector(".faq-body").style.maxHeight = null;
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add("active");
        const body = item.querySelector(".faq-body");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  // Navbar Scroll Background Effect
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  // Close Modals on Backdrop Click
  window.addEventListener("click", (e) => {
    const detailModal = document.getElementById("detailModal");
    const adminPanelModal = document.getElementById("adminPanelModal");
    const adminLoginModal = document.getElementById("adminLoginModal");

    if (e.target === detailModal) {
      closeDetailModal();
    }
    if (e.target === adminPanelModal) {
      closeAdminPanel();
    }
    if (e.target === adminLoginModal) {
      closeAdminLogin();
    }
  });

  // Close on Escape Key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDetailModal();
      closeAdminPanel();
      closeAdminLogin();
    }
  });

  // Secret triple-click on logo brand to show Admin Login button
  let logoClickCount = 0;
  let logoClickTimer = null;
  const navBrand = document.getElementById("navBrandLogo");
  if (navBrand) {
    navBrand.addEventListener("click", (e) => {
      e.preventDefault();
      logoClickCount++;
      clearTimeout(logoClickTimer);
      logoClickTimer = setTimeout(() => { logoClickCount = 0; }, 600);
      if (logoClickCount >= 3) {
        logoClickCount = 0;
        const adminBtn = document.getElementById("adminLoginBtn");
        if (adminBtn) {
          adminBtn.style.display = adminBtn.style.display === "none" ? "flex" : "none";
          if (adminBtn.style.display !== "none") showToast("🔐 Mode Admin aktif. Klik tombol Admin untuk masuk.");
        }
      }
    });
  }
});

