// ZaerYar (زائریار) Application Logic & Database

// ==========================================
// 1. PLACES DATABASE (اطلاعات اماکن اطراف حرم)
// ==========================================
const placesDatabase = [
  // 1. اماکن متبرکه داخل حرم
  {
    id: "shrine_main",
    name: "روضه منوره و ضریح مطهر حضرت رضا (ع)",
    category: "shrine",
    lat: 36.2878,
    lng: 59.6158,
    address: "صحن آزادی، روضه منوره مطهره",
    description:
      "بقعه و مرقد شریف امام علی بن موسی الرضا (ع) که محل عبادت زائرین از سراسر جهان است.",
    phone: "۰۵۱۳۲۰۰۳۳۳۳",
  },
  {
    id: "shrine_goharshad",
    name: "مسجد گوهرشاد حرم مطهر",
    category: "shrine",
    lat: 36.2869,
    lng: 59.6152,
    address: "ضلع جنوبی حرم مطهر رضوی",
    description:
      "یکی از شاهکارهای معماری دوره تیموری و پربازدیدترین مسجد تاریخی مشهد.",
    phone: "۰۵۱۳۲۰۰۳۳۳۳",
  },
  {
    id: "shrine_babalreza",
    name: "باب الرضا (ع) - ورودی اصلی",
    category: "shrine",
    lat: 36.2858,
    lng: 59.6166,
    address: "ضلع جنوب شرقی حرم، ابتدای خیابان امام رضا (ع)",
    description:
      "از شلوغ‌ترین و آشناترین ورودی‌های حرم مطهر رضوی برای زائرین گرامی.",
    phone: "-",
  },
  {
    id: "shrine_babaljavad",
    name: "باب الجواد (ع) - ورودی غربی",
    category: "shrine",
    lat: 36.2861,
    lng: 59.6133,
    address: "ضلع جنوب غربی حرم، ابتدای خیابان خسروی نو",
    description:
      "ورودی زیبا و معروف حرم مطهر ملقب به نام فرزند گرامی امام رضا (ع).",
    phone: "-",
  },

  // 2. اقامتگاه‌ها و هتل‌ها
  {
    id: "lodge_darvish",
    name: "هتل مجلل درویشی مشهد",
    category: "lodging",
    lat: 36.2778,
    lng: 59.619,
    address: "خیابان امام رضا (ع)، بین امام رضا ۲۴ و ۲۶",
    description:
      "یکی از لوکس‌ترین و بلندمرتبه‌ترین هتل‌های پنج ستاره مشهد در نزدیکی حرم.",
    phone: "۰۵۱۳۸۰۸۰",
  },
  {
    id: "lodge_atrak",
    name: "هتل اترک مشهد",
    category: "lodging",
    lat: 36.2852,
    lng: 59.6174,
    address: "میدان بیت المقدس (فلکه آب)، اول خیابان بازار رضا",
    description:
      "یکی از قدیمی‌ترین و باکیفیت‌ترین هتل‌های چهار ستاره مشهد در فاصله چند قدمی از حرم.",
    phone: "۰۵۱۳۳۶۴۷۰۹۳",
  },
  {
    id: "lodge_camping",
    name: "کمپ زائر غدیر مشهد",
    category: "lodging",
    lat: 36.2412,
    lng: 59.645,
    address: "بزرگراه کلانتری، میدان غدیر",
    description:
      "مجموعه اقامتی ارزان قیمت و صحرایی شهرداری ویژه اسکان زائران با چادر مسافرتی.",
    phone: "۰۵۱۳۳۴۴۴۴۰۰",
  },

  // 3. رستوران‌ها و غذاخوری‌ها
  {
    id: "dining_shrine",
    name: "مهمانسرای حضرت رضا (ع) - باب الهادی",
    category: "dining",
    lat: 36.2882,
    lng: 59.6141,
    address: "صحن غدیر، ورودی باب الهادی (ع)",
    description:
      "توزیع غذای متبرک حضرت رضا (ع) بین زائران گرامی (نیازمند دعوت‌نامه در برنامه نسیم رضوان).",
    phone: "۰۵۱۳۲۰۰۳۳۳۳",
  },
  {
    id: "dining_pesaran",
    name: "رستوران پسران کریم مشهد",
    category: "dining",
    lat: 36.312,
    lng: 59.589,
    address: "انتهای خیابان خیام شمالی، مجتمع مروارید",
    description:
      "از قدیمی‌ترین و معروف‌ترین رستوران‌های مشهد با چلو ماهیچه‌های بسیار پرطرفدار.",
    phone: "۰۵۱۳۷۶۸۵۰۵۳",
  },
  {
    id: "dining_reza",
    name: "غذای سنتی رضوی",
    category: "dining",
    lat: 36.2848,
    lng: 59.6171,
    address: "میدان بیت المقدس، نبش خیابان امام رضا (ع) ۱",
    description:
      "ارائه انواع غذاهای ایرانی، شیشلیک و چلوکباب با کیفیت مطلوب نزدیک حرم.",
    phone: "۰۵۱۳۳۶۸۲۳۴۵",
  },

  // 4. حمل و نقل و پایانه‌ها
  {
    id: "transit_airport",
    name: "فرودگاه بین‌المللی شهید هاشمی‌نژاد",
    category: "transit",
    lat: 36.2355,
    lng: 59.641,
    address: "انتهای بلوار فرودگاه مشهد",
    description:
      "دومین فرودگاه پرتردد کشور با پروازهای داخلی و بین‌المللی شبانه‌روزی.",
    phone: "۰۵۱۹۹",
  },
  {
    id: "transit_train",
    name: "ایستگاه راه آهن مشهد",
    category: "transit",
    lat: 36.2995,
    lng: 59.6305,
    address: "بلوار شهید کامیاب، میدان راه آهن",
    description:
      "یکی از مجهزترین ایستگاه‌های ریلی کشور با جابجایی مداوم مسافران ریلی.",
    phone: "۰۵۱۳۲۲۲۴۶۸۱",
  },
  {
    id: "transit_terminal",
    name: "پایانه مسافربری امام رضا (ع) (ترمینال)",
    category: "transit",
    lat: 36.262,
    lng: 59.612,
    address: "بلوار خرمشهر، میدان امام رضا (ع)",
    description:
      "بزرگترین پایانه اتوبوس‌رانی مشهد جهت تردد مسافران جاده‌ای کشور.",
    phone: "۰۵۱۳۸۵۹۹۰۰۱",
  },
  {
    id: "transit_metro",
    name: "ایستگاه مترو بسیج (خط ۱)",
    category: "transit",
    lat: 36.2798,
    lng: 59.6198,
    address: "میدان بسیج (فلکه برق)، مشهد",
    description:
      "نزدیک‌ترین ایستگاه قطار شهری خط ۱ به خیابان امام رضا (ع) و حرم مطهر.",
    phone: "۰۵۱۳۳۲۰۰",
  },

  // 5. درمانی و بهداشتی
  {
    id: "med_daralshafa",
    name: "دارالشفاء امام رضا (ع)",
    category: "medical",
    lat: 36.2885,
    lng: 59.6175,
    address: "دوربرگردان خیابان شیرازی، حاشیه حرم مطهر",
    description:
      "مرکز درمانی شبانه‌روزی آستان قدس رضوی مجهز به پزشکان عمومی، تخصصی و اورژانس.",
    phone: "۰۵۱۳۲۲۴۴۳۰۰",
  },
  {
    id: "med_musa",
    name: "بیمارستان فوق تخصصی موسوی بن جعفر (ع)",
    category: "medical",
    lat: 36.2811,
    lng: 59.6232,
    address: "خیابان امام رضا (ع)، امام رضا ۳",
    description:
      "بیمارستان تخصصی نزدیک به حرم جهت خدمات اورژانسی و بستری زائرین.",
    phone: "۰۵۱۳۸۵۴۳۳۰۰",
  },

  // 6. مراکز خرید
  {
    id: "shop_reza",
    name: "بازار تاریخی رضا مشهد",
    category: "shopping",
    lat: 36.2842,
    lng: 59.6195,
    address: "میدان بیت المقدس (فلکه آب) تا میدان ۱۷ شهریور",
    description:
      "معروف‌ترین بازار سنتی مشهد مخصوص خرید سوغاتی، زرشک و زعفران، عقیق و تسبیح.",
    phone: "-",
  },
  {
    id: "shop_almas",
    name: "مجتمع تجاری الماس شرق مشهد",
    category: "shopping",
    lat: 36.365,
    lng: 59.5765,
    address: "بلوار بهارستان، منطقه گردشگری سپاد",
    description:
      "مجموعه چند طبقه تجاری و تفریحی بزرگ با بازارها، شهربازی و سینمای پنج بعدی.",
    phone: "۰۵۱۳۶۹۸۶۵۸۰",
  },
];

// ==========================================
// 2. INITIALIZE MAP (راه‌اندازی نقشه)
// ==========================================
let map;
let markersLayer;
const shrineCoordinates = [36.2878, 59.6158]; // Center: Imam Reza Holy Shrine

function initMap() {
  // Initialize Leaflet map centered on Imam Reza Shrine
  map = L.map("map", {
    scrollWheelZoom: true,
    zoomControl: false, // custom position
  }).setView(shrineCoordinates, 14);

  // Add OpenStreetMap tile layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 19,
  }).addTo(map);

  // Custom zoom control
  L.control
    .zoom({
      position: "topleft",
    })
    .addTo(map);

  // Initialize LayerGroup for dynamic markers filtering
  markersLayer = L.layerGroup().addTo(map);

  // Plot initial markers
  plotMarkers("all");
}

// Generate colored HTML markers based on place category
function getMarkerIcon(category) {
  let color = "#3b82f6"; // Blue
  let icon = "fa-location-dot";

  if (category === "shrine") {
    color = "#D4AF37"; // Gold
    icon = "fa-mosque";
  } else if (category === "lodging") {
    color = "#2563eb"; // Blue dark
    icon = "fa-hotel";
  } else if (category === "dining") {
    color = "#059669"; // Green
    icon = "fa-utensils";
  } else if (category === "transit") {
    color = "#4f46e5"; // Indigo
    icon = "fa-bus";
  } else if (category === "medical") {
    color = "#dc2626"; // Red
    icon = "fa-kit-medical";
  } else if (category === "shopping") {
    color = "#9333ea"; // Purple
    icon = "fa-bag-shopping";
  }

  // Beautiful custom SVG pointer marker with FontAwesome inside
  const markerHtml = `
    <div class="flex flex-col items-center justify-center relative" style="width: 32px; height: 32px;">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter drop-shadow">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="${color}"/>
      </svg>
      <div class="absolute text-white" style="top: 6px;">
        <i class="fa-solid ${icon} text-[10px]"></i>
      </div>
    </div>
  `;

  // Return Leaflet divIcon
  return L.divIcon({
    html: markerHtml,
    iconSize: [32, 32],
    iconAnchor: [16, 28],
    popupAnchor: [0, -28],
    className: "custom-leaflet-icon",
  });
}

// Plot Markers to map with filtering support
function plotMarkers(categoryFilter) {
  // Clear previous markers
  markersLayer.clearLayers();

  placesDatabase.forEach((place) => {
    if (categoryFilter === "all" || place.category === categoryFilter) {
      const icon = getMarkerIcon(place.category);

      const popupContent = `
        <div class="text-right font-vazir text-xs">
          <h4 class="font-black text-sm text-shrine-greendark mb-1">${place.name}</h4>
          <p class="text-slate-600 mb-1.5 leading-relaxed">${place.description}</p>
          <div class="text-[10px] text-slate-500 mb-1">
            <i class="fa-solid fa-map-pin text-slate-400"></i> ${place.address}
          </div>
          ${
            place.phone !== "-"
              ? `
            <div class="text-[10px] text-slate-500 mb-1">
              <i class="fa-solid fa-phone text-slate-400"></i> تلفن: <a href="tel:${place.phone}" class="text-blue-600 font-bold">${place.phone}</a>
            </div>
          `
              : ""
          }
          <button onclick="zoomToPlace(${place.lat}, ${place.lng}, true)" class="w-full mt-2 bg-shrine-green text-white font-bold py-1.5 rounded hover:bg-shrine-greendark text-[10px] transition-colors flex items-center justify-center gap-1">
            <i class="fa-solid fa-crosshairs"></i> مسیریابی و تمرکز روی نقشه
          </button>
        </div>
      `;

      const marker = L.marker([place.lat, place.lng], { icon: icon }).bindPopup(
        popupContent,
      );

      markersLayer.addLayer(marker);
    }
  });
}

// Map quick filter actions
function filterMap(category) {
  // Plot filtered markers
  plotMarkers(category);

  // Update visual selection of map filter buttons
  const buttonsContainer = document.getElementById("map-category-filters");
  const buttons = buttonsContainer.getElementsByTagName("button");

  for (let btn of buttons) {
    if (
      btn.innerText.includes(
        category === "shrine"
          ? "اماکن"
          : category === "lodging"
            ? "اقامتگاه"
            : category === "dining"
              ? "غذاخوری"
              : category === "transit"
                ? "حمل"
                : category === "medical"
                  ? "درمانی"
                  : category === "shopping"
                    ? "مراکز"
                    : "همه",
      )
    ) {
      btn.className =
        "px-2.5 py-1 text-xs font-bold rounded-lg transition-all bg-shrine-green text-white";
    } else {
      btn.className =
        "px-2.5 py-1 text-xs font-bold rounded-lg transition-all bg-slate-100 text-slate-600 hover:bg-slate-200";
    }
  }

  // Center map on the Shrine when switching categories
  resetMapCenter();
}

// Reset map center to the Holy Shrine
function resetMapCenter() {
  if (map) {
    map.setView(shrineCoordinates, 14, { animate: true });
  }
}

// Zoom and focus on specific latitude and longitude
function zoomToPlace(lat, lng, openPopup = false) {
  if (map) {
    map.setView([lat, lng], 17, { animate: true });
    if (openPopup) {
      // Find and trigger the popup for this location
      markersLayer.eachLayer((layer) => {
        const markerLatLng = layer.getLatLng();
        if (markerLatLng.lat === lat && markerLatLng.lng === lng) {
          setTimeout(() => {
            layer.openPopup();
          }, 300);
        }
      });
    }
  }
}
// Append chatbot and directory logic to app.js

// ==========================================
// 3. SMART PILGRIM CHATBOT (چت‌بات هوشمند)
// ==========================================
const chatMessagesContainer = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const suggestionsContainer = document.getElementById("chat-suggestions");

// Predefined knowledge base with Farsi patterns & answers
const botKnowledge = [
  {
    keywords: ["سلام", "درود", "صبح بخیر", "عصر بخیر", "شب بخیر"],
    answer:
      "سلام! زیارتتان قبول باشد. من همیار و دستیار زائر شما در مشهد الرضا هستم. هر سوالی در رابطه با حرم مطهر، آداب تشرف، راه‌ها، آب و هوا، جاهای دیدنی یا خدمات حرم دارید بفرمایید تا راهنمایی‌تان کنم.",
  },
  {
    keywords: ["آدرس", "مسیر", "ورودی", "باب", "بست", "چگونه بروم", "مسیریابی"],
    answer:
      "حرم مطهر رضوی دارای چندین ورودی و صحن اصلی است:\n۱. <b>باب‌الرضا (ع):</b> واقع در ضلع جنوب شرقی (ابتدای خیابان امام رضا) که پرترددترین ورودی است.\n۲. <b>باب‌الجواد (ع):</b> واقع در ضلع جنوب غربی (ابتدای خیابان خسروی نو).\n۳. <b>بست طوسی و ورودی شیرازی:</b> در ضلع شمالی و غربی.\n۴. <b>بست حر عاملی:</b> در ضلع شرقی (بلوار طبرسی).\nاگر مایلید موقعیت دقیق هرکدام را ببینید، روی نقشه یا دایرکتوری در تب بغل کلیک کنید.",
  },
  {
    keywords: ["غذا", "رستوران", "مهمانسرا", "ناهار", "شام", "گرسنه"],
    answer:
      "برای غذاخوری در مشهد چندین گزینه عالی دارید:\n۱. <b>مهمانسرای حضرت (غذای متبرک):</b> واقع در صحن غدیر و صحن حر عاملی. برای دریافت فیش غذای متبرک، باید با استفاده از نرم‌افزار «نسیم رضوان» در قرعه‌کشی روزانه شرکت کنید.\n۲. <b>رستوران پسران کریم:</b> یکی از قدیمی‌ترین رستوران‌ها در انتهای خیابان خیام شمالی معروف به چلو ماهیچه‌های لذیذ.\n۳. <b>غذای سنتی رضوی:</b> در نزدیکی فلکه آب برای صرف کباب و غذاهای سنتی.\nمی‌توانید از فیلتر «غذاخوری‌ها» در نقشه برای دیدن موقعیت دقیق این اماکن استفاده کنید.",
  },
  {
    keywords: ["زیارتنامه", "دعا", "امین الله", "صلوات خاصه", "خواندن"],
    answer:
      "برای زیارت حضرت رضا (ع)، خواندن «زیارت امین الله» و «صلوات خاصه» بسیار توصیه شده است. شما می‌توانید در همین نرم‌افزار به <b>تب «همراه معنوی و زیارتنامه»</b> مراجعه کنید تا متن عربی به همراه ترجمه فارسی روان و همچنین صوت زیبای صلوات خاصه را به صورت آنلاین گوش دهید یا بخوانید.",
  },
  {
    keywords: ["آب و هوا", "باران", "هوا", "دما", "سرد", "گرم"],
    answer:
      "هوای فعلی مشهد مقدس ۱۸ درجه سانتی‌گراد و صاف پیش‌بینی می‌شود. در ویجت پایین سمت راست، پیش‌بینی ۴ روزه را قرار داده‌ایم که نشان می‌دهد روز دوشنبه احتمال بارش باران وجود دارد. پیشنهاد می‌کنیم چتر یا لباس گرم به همراه داشته باشید!",
  },
  {
    keywords: [
      "تفریح",
      "گردش",
      "جاهای دیدنی",
      "کجا برم",
      "الماس شرق",
      "پارک آبی",
      "کوهسنگی",
    ],
    answer:
      "مشهد جاذبه‌های تفریحی و گردشگری بی‌نظیری دارد:\n۱. <b>کوهسنگی:</b> زیباترین پارک کوهستانی و سنتی مشهد با استخر بزرگ و مسیر کوهنوردی آسان.\n۲. <b>منطقه سپاد (الماس شرق):</b> دارای مجتمع‌های تجاری بزرگ، شهربازی، آکواریوم و سینما.\n۳. <b>شاندیز و طرقبه:</b> ییلاقات خوش آب و هوا در خارج شهر جهت صرف ششلیک معروف مشهدی.\n۴. <b>مجموعه‌های موج‌های آبی:</b> بزرگترین پارک‌های آبی سرپوشیده خاورمیانه.",
  },
  {
    keywords: ["آداب", "چگونه مشرف شوم", "غسل", "احترام", "حرم"],
    answer:
      "آداب زیارت امام رضا (ع) شامل موارد زیر است:\n۱. غسل زیارت و پوشیدن لباس پاکیزه و معطر.\n۲. حرکت به سمت حرم با پای برهنه، وقار و گفتن ذکر تکبیر و تسبیح.\n۳. اذن دخول خواندن قبل از ورود به روضه منوره.\n۴. خواندن زیارتنامه (مانند امین‌الله) و دو رکعت نماز زیارت هدیه به امام معصوم.\n۵. رعایت ادب و حقوق دیگر زائران و پرهیز از ایجاد شلوغی در اطراف ضریح مطهر.",
  },
  {
    keywords: ["اسکان", "هتل", "مسافرخانه", "جا", "خواب", "کمپ"],
    answer:
      "برای اسکان و اقامت گزینه‌های متعددی متناسب با بودجه شما وجود دارد:\n۱. <b>هتل‌های لوکس:</b> مانند هتل پنج ستاره درویشی در خیابان امام رضا.\n۲. <b>هتل‌های اقتصادی:</b> مانند هتل اترک نزدیک فلکه آب.\n۳. <b>اسکان ارزان:</b> کمپ زائر غدیر که توسط شهرداری برای برپایی چادر و اسکان موقت تجهیز شده است.\nتمام این موارد در تب نقشه و دایرکتوری در دسترس شما هستند.",
  },
];

// Quick suggestion chips
const chatSuggestionsList = [
  "مسیر ورودی‌های حرم؟",
  "چطور غذای حضرتی بگیرم؟",
  "زیارتنامه امین الله کجاست؟",
  "جاهای دیدنی و ییلاقی مشهد؟",
];

function initChatSuggestions() {
  suggestionsContainer.innerHTML = "";
  chatSuggestionsList.forEach((text) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className =
      "px-3 py-1 bg-white hover:bg-slate-100 text-[11px] text-slate-700 font-bold rounded-full border border-slate-200 transition-colors shrink-0";
    chip.innerText = text;
    chip.onclick = () => {
      chatInput.value = text;
      document.getElementById("chat-form").dispatchEvent(new Event("submit"));
    };
    suggestionsContainer.appendChild(chip);
  });
}

function sendChatMessage(event) {
  event.preventDefault();
  const query = chatInput.value.trim();
  if (!query) return;

  // Add user bubble
  appendChatBubble(query, "user");
  chatInput.value = "";

  // Show typing simulator
  const typingId = showTypingIndicator();

  // Find smart response
  setTimeout(() => {
    removeTypingIndicator(typingId);
    const reply = findBotReply(query);
    appendChatBubble(reply, "bot");
  }, 800);
}

function appendChatBubble(text, sender) {
  const wrapper = document.createElement("div");
  wrapper.className = `flex gap-2 items-start max-w-[85%] ${sender === "user" ? "mr-auto flex-row-reverse" : "ml-auto"}`;

  const bubble = document.createElement("div");
  if (sender === "user") {
    bubble.className =
      "bg-shrine-green text-white p-2.5 rounded-2xl rounded-tl-none border border-emerald-700 shadow-sm font-medium";
    const userLabel = document.createElement("p");
    userLabel.className = "font-bold text-yellow-300 text-[10px] mb-1";
    userLabel.textContent = "شما";
    bubble.appendChild(userLabel);

    const textNode = document.createTextNode(text);
    bubble.appendChild(textNode);
  } else {
    bubble.className =
      "bg-emerald-50 text-emerald-950 p-2.5 rounded-2xl rounded-tr-none border border-emerald-100 shadow-sm";
    const botLabel = document.createElement("p");
    botLabel.className = "font-extrabold text-shrine-golddark text-[10px] mb-1";
    botLabel.textContent = "زائریار هوشمند";
    bubble.appendChild(botLabel);

    const botContent = document.createElement("div");
    botContent.innerHTML = text; // The bot replies contain HTML formatting (e.g. <b>, <ul>, etc.)
    bubble.appendChild(botContent);
  }

  wrapper.appendChild(bubble);
  chatMessagesContainer.appendChild(wrapper);
  chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

function findBotReply(query) {
  const normalized = query.toLowerCase();

  // Search knowledgebase
  for (let item of botKnowledge) {
    for (let key of item.keywords) {
      if (normalized.includes(key)) {
        return item.answer;
      }
    }
  }

  // Fallback general response
  return "پوزش می‌خواهم، متوجه این سوال دقیق نشدم. من درباره راه‌ها، ورودی‌های حرم، نحوه دریافت غذای متبرک، زیارتنامه‌ها، هتل‌ها و غذاخوری‌ها تخصص دارم. لطفاً سوال دیگری بپرسید یا دکمه‌های راهنما را امتحان کنید!";
}

function showTypingIndicator() {
  const id = "typing-" + Date.now();
  const wrapper = document.createElement("div");
  wrapper.id = id;
  wrapper.className =
    "flex gap-2 items-start max-w-[80%] ml-auto animate-pulse";

  const bubble = document.createElement("div");
  bubble.className =
    "bg-emerald-50 text-emerald-950 p-2.5 rounded-2xl rounded-tr-none border border-emerald-100 shadow-sm flex items-center gap-1";
  bubble.innerHTML = `
    <span class="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></span>
    <span class="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
    <span class="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style="animation-delay: 0.4s"></span>
  `;

  wrapper.appendChild(bubble);
  chatMessagesContainer.appendChild(wrapper);
  chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
  return id;
}

function removeTypingIndicator(id) {
  const indicator = document.getElementById(id);
  if (indicator) {
    indicator.remove();
  }
}

function clearChat() {
  chatMessagesContainer.innerHTML = `
    <div class="flex gap-2 items-start max-w-[85%]">
      <div class="bg-emerald-50 text-emerald-950 p-2.5 rounded-2xl rounded-tr-none border border-emerald-100 shadow-sm">
        <p class="font-extrabold text-shrine-golddark text-[10px] mb-1">زائریار هوشمند</p>
        تاریخچه چت پاک شد. چه کمکی در زیارت امام رضا (ع) می‌توانم به شما بکنم؟
      </div>
    </div>
  `;
}

// ==========================================
// 4. MASHHAD SERVICES DIRECTORY (بانک اطلاعات خدمات)
// ==========================================
let activeDirCategory = "all";

function renderDirectory() {
  const container = document.getElementById("directory-list-container");
  container.innerHTML = "";

  const searchQuery = document.getElementById("dir-search").value.toLowerCase();

  const filteredPlaces = placesDatabase.filter((place) => {
    const matchesCategory =
      activeDirCategory === "all" || place.category === activeDirCategory;
    const matchesSearch =
      place.name.toLowerCase().includes(searchQuery) ||
      place.description.toLowerCase().includes(searchQuery) ||
      place.address.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filteredPlaces.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-6 text-center text-slate-400 text-xs font-bold">
        <i class="fa-solid fa-face-frown text-xl mb-1.5 block"></i> موردی یافت نشد. عبارت دیگری را جستجو کنید.
      </div>
    `;
    return;
  }

  filteredPlaces.forEach((place) => {
    let catIcon = "fa-location-dot";
    let catColor = "text-blue-500";
    if (place.category === "shrine") {
      catIcon = "fa-gopuram";
      catColor = "text-amber-500";
    } else if (place.category === "lodging") {
      catIcon = "fa-hotel";
      catColor = "text-blue-600";
    } else if (place.category === "dining") {
      catIcon = "fa-utensils";
      catColor = "text-emerald-600";
    } else if (place.category === "transit") {
      catIcon = "fa-bus";
      catColor = "text-indigo-600";
    } else if (place.category === "medical") {
      catIcon = "fa-kit-medical";
      catColor = "text-red-600";
    } else if (place.category === "shopping") {
      catIcon = "fa-bag-shopping";
      catColor = "text-purple-600";
    }

    const card = document.createElement("div");
    card.className =
      "bg-slate-50 hover:bg-slate-100/80 border border-slate-100 rounded-xl p-3 flex flex-col justify-between transition-colors shadow-sm";
    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-1">
          <span class="font-extrabold text-xs text-slate-800 flex items-center gap-1.5">
            <i class="fa-solid ${catIcon} ${catColor}"></i> ${place.name}
          </span>
          <span class="text-[9px] px-1.5 py-0.5 rounded-full bg-white text-slate-500 border border-slate-200">
            ${place.category === "shrine" ? "حرم مطهر" : place.category === "lodging" ? "اقامتگاه" : place.category === "dining" ? "غذاخوری" : place.category === "transit" ? "حمل و نقل" : place.category === "medical" ? "درمانی" : "مرکز خرید"}
          </span>
        </div>
        <p class="text-[10px] text-slate-500 mb-2 leading-relaxed">${place.description}</p>
      </div>
      <div class="flex items-center justify-between border-t border-slate-200/50 pt-2 text-[10px]">
        <span class="text-slate-400 truncate max-w-[140px]" title="${place.address}"><i class="fa-solid fa-map-pin"></i> ${place.address}</span>
        <button onclick="zoomToPlace(${place.lat}, ${place.lng}, true)" class="bg-white hover:bg-slate-200 text-shrine-green font-extrabold border border-slate-200 px-2 py-1 rounded transition-all">
          <i class="fa-solid fa-location-crosshairs"></i> مشاهده روی نقشه
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterDirCategory(category) {
  activeDirCategory = category;

  // Highlight active directory category pill
  const categories = ["all", "lodging", "dining", "medical", "transit"];
  categories.forEach((cat) => {
    const el = document.getElementById(`dir-cat-${cat}`);
    if (el) {
      if (cat === category) {
        el.className =
          "px-3 py-1.5 text-xs font-bold rounded-lg bg-shrine-green text-white shrink-0";
      } else {
        el.className =
          "px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 shrink-0";
      }
    }
  });

  renderDirectory();
}

function searchDirectory() {
  renderDirectory();
}
// Append spiritual prayers, virtual pilgrimage, planner & checklist, and widget logic to app.js

// ==========================================
// 5. SPIRITUAL LIBRARY & MEDIA (همراه معنوی و ادعیه)
// ==========================================
const prayersDatabase = {
  ameen: {
    title: "زیارت امین الله",
    arabic:
      "السَّلامُ عَلَيْكَ يا أَمِينَ اللهِ فِي أَرْضِهِ، وَحُجَّتَهُ عَلَى عِبادِهِ، السَّلامُ عَلَيْكَ يا أَمِيرَ الْمُؤْمِنِينَ، أَشْهَدُ أَنَّكَ جاهَدْتَ فِي اللهِ حَقَّ جِهادِهِ، وَعَمِلْتَ بِكِتابِهِ، وَاتَّبَعْتَ سُنَنَ نَبِيِّهِ صَلَّى اللهُ عَلَيْهِ وَآلِهِ، حَتَّى دَعاکَ اللهُ إِلى جِوارِهِ...",
    persian:
      "سلام بر تو ای امانتدار خدا در زمینش و حجت او بر بندگانش! سلام بر تو ای امیرالمؤمنین! شهادت می‌دهم که تو در راه خدا آن‌چنان‌که باید جهاد کردی و به کتاب خدا عمل نمودی و سنت‌های پیامبرش را پیروی کردی...",
  },
  salawat: {
    title: "صلوات خاصه امام رضا (ع)",
    arabic:
      "اللَّهُمَّ صَلِّ عَلَى عَلِيِّ بْنِ مُوسَى الرِّضَا الْمُرْتَضَى الْإِمَامِ التَّقِيِّ النَّقِيِّ وَ حُجَّتِكَ عَلَى مَنْ فَوْقَ الْأَرْضِ وَ مَنْ تَحْتَ الثَّرَى الصِّدِّيقِ الشَّهِيدِ صَلَاةً كَثِيرَةً تَامَّةً زَاكِيَةً مُتَوَاصِلَةً مُتَوَاتِرَةً مُتَرَادِفَةً كَأَفْضَلِ مَا صَلَّيْتَ عَلَى أَحَدٍ مِنْ أَوْلِيَائِكَ.",
    persian:
      "بار الها درود فرست بر علی بن موسی الرضای پسندیده، آن پیشوای با تقوا و پاکیزه، و حجت تو بر هر که روی زمین و زیر خاک است، آن راستگوی شهید؛ درودی بسیار، کامل، پاک، پیوسته و پیاپی همچون بهترین درودی که بر یکی از اولیایت فرستادی.",
  },
};

let activePrayer = "ameen";
let isTranslationVisible = true;

function renderPrayerText() {
  const arabicEl = document.getElementById("prayer-arabic");
  const persianEl = document.getElementById("prayer-persian");
  const prayer = prayersDatabase[activePrayer];

  arabicEl.innerHTML = prayer.arabic;
  if (isTranslationVisible) {
    persianEl.innerHTML = prayer.persian;
    persianEl.style.display = "block";
  } else {
    persianEl.style.display = "none";
  }
}

function selectPrayer(prayerId) {
  activePrayer = prayerId;

  // Update button classes
  const ameenBtn = document.getElementById("btn-prayer-ameen");
  const salawatBtn = document.getElementById("btn-prayer-salawat");

  if (prayerId === "ameen") {
    ameenBtn.className =
      "py-2 rounded-lg font-bold transition-all border border-shrine-green bg-emerald-50 text-shrine-green";
    salawatBtn.className =
      "py-2 rounded-lg font-bold transition-all border border-slate-200 bg-white text-slate-600 hover:bg-slate-50";

    // Update simulated audio info
    document.getElementById("audio-title").innerText = "زیارت امین الله (صوتی)";
    document.getElementById("audio-time").innerText = "۰۰:۰۰";
    document.getElementById("audio-progress").style.width = "0%";
    stopAudioSimulation();
  } else {
    salawatBtn.className =
      "py-2 rounded-lg font-bold transition-all border border-shrine-green bg-emerald-50 text-shrine-green";
    ameenBtn.className =
      "py-2 rounded-lg font-bold transition-all border border-slate-200 bg-white text-slate-600 hover:bg-slate-50";

    // Update simulated audio info
    document.getElementById("audio-title").innerText =
      "صلوات خاصه امام رضا (ع)";
    document.getElementById("audio-time").innerText = "۰۰:۰۰";
    document.getElementById("audio-progress").style.width = "0%";
    stopAudioSimulation();
  }

  renderPrayerText();
}

function toggleTranslation() {
  isTranslationVisible = !isTranslationVisible;
  const btnText = document.getElementById("translation-btn-text");
  btnText.innerText = isTranslationVisible
    ? "پنهان کردن ترجمه فارسی"
    : "نمایش ترجمه فارسی";
  renderPrayerText();
}

// Simulated Audio Player Logic
let isAudioPlaying = false;
let audioInterval = null;
let audioSeconds = 0;
const audioMaxSeconds = 165; // 2:45 total duration

function toggleAudio() {
  const btn = document.getElementById("btn-audio-play");
  const wave = document.getElementById("audio-wave");
  const liveIndicator = document.getElementById("live-indicator");

  isAudioPlaying = !isAudioPlaying;

  if (isAudioPlaying) {
    btn.innerHTML = '<i class="fa-solid fa-pause text-sm"></i>';
    btn.className =
      "bg-shrine-gold hover:bg-amber-500 text-slate-900 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all pulse-playing";
    liveIndicator.className =
      "fa-solid fa-circle text-xs text-emerald-400 animate-pulse";

    // Animate audio waveform bars
    wave.classList.add("pulse-playing");

    startAudioSimulation();
  } else {
    btn.innerHTML = '<i class="fa-solid fa-play text-sm"></i>';
    btn.className =
      "bg-shrine-gold hover:bg-amber-500 text-slate-900 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all";
    liveIndicator.className =
      "fa-solid fa-circle text-xs text-red-500 animate-pulse";
    wave.classList.remove("pulse-playing");

    stopAudioSimulation();
  }
}

function startAudioSimulation() {
  if (audioInterval) clearInterval(audioInterval);

  audioInterval = setInterval(() => {
    audioSeconds++;
    if (audioSeconds > audioMaxSeconds) {
      audioSeconds = 0;
      toggleAudio(); // Reset at the end
      return;
    }

    // Format time (MM:SS)
    const minutes = Math.floor(audioSeconds / 60);
    const seconds = audioSeconds % 60;
    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    // Convert to Persian numbers
    const farsiTime = formattedTime
      .replace(/0/g, "۰")
      .replace(/1/g, "۱")
      .replace(/2/g, "۲")
      .replace(/3/g, "۳")
      .replace(/4/g, "۴")
      .replace(/5/g, "۵")
      .replace(/6/g, "۶")
      .replace(/7/g, "۷")
      .replace(/8/g, "۸")
      .replace(/9/g, "۹");

    document.getElementById("audio-time").innerText = farsiTime;

    // Update progress bar
    const percentage = (audioSeconds / audioMaxSeconds) * 100;
    document.getElementById("audio-progress").style.width = `${percentage}%`;

    // Randomize waveform values slightly to simulate live feed
    const spans = document
      .getElementById("audio-wave")
      .getElementsByTagName("span");
    for (let span of spans) {
      const randomHeight = Math.floor(Math.random() * 24) + 6;
      span.style.height = `${randomHeight}px`;
    }
  }, 1000);
}

function stopAudioSimulation() {
  if (audioInterval) {
    clearInterval(audioInterval);
    audioInterval = null;
  }
  const spans = document
    .getElementById("audio-wave")
    .getElementsByTagName("span");
  for (let span of spans) {
    span.style.height = "10px";
  }
}

function switchAudioSource() {
  // Toggle between ameen and salawat
  if (activePrayer === "ameen") {
    selectPrayer("salawat");
  } else {
    selectPrayer("ameen");
  }
  toggleAudio();
}

// ==========================================
// 6. VIRTUAL PILGRIMAGE (زیارت نیابتی)
// ==========================================
function submitVirtualPilgrimage(event) {
  event.preventDefault();
  const name = document.getElementById("vp-name").value.trim();
  const phone = document.getElementById("vp-phone").value.trim();
  const msg = document.getElementById("vp-message").value.trim();

  if (!name || !phone) return;

  // Generate randomized reference number (e.g., ZY-4921)
  const refNum = "ZY-" + Math.floor(Math.random() * 9000 + 1000);

  // Set values to success modal
  document.getElementById("modal-vp-name").innerText = name;
  document.getElementById("modal-vp-ref").innerText = refNum;

  // Show success modal
  const modal = document.getElementById("modal-success");
  modal.style.display = "flex";
  modal.classList.remove("hidden");

  // Trigger custom Chatbot automated response congratulating
  setTimeout(() => {
    appendChatBubble(
      `زیارت نیابتی به نام زائر گرامی «${name}» با موفقیت و شماره پیگیری ${refNum} در سیستم آستان قدس ثبت شد. خادمان گرامی به زودی زیارتنامه را به نیابت از ایشان قرائت خواهند کرد. التماس دعا!`,
      "bot",
    );
  }, 1500);

  // Reset form
  document.getElementById("virtual-pilgrim-form").reset();
}

function closeSuccessModal() {
  const modal = document.getElementById("modal-success");
  modal.style.display = "none";
  modal.classList.add("hidden");
}

// ==========================================
// 7. TRAVEL PLANNER & CHECKLIST (برنامه‌ریزی و چک‌لیست)
// ==========================================
const plannerDatabase = {
  1: [
    {
      time: "۰۸:۰۰",
      title: "غسل زیارت و ورود از باب الرضا (ع)",
      desc: "تشرف به صحن جامع رضوی و اذن دخول جهت اولین زیارت گروهی.",
    },
    {
      time: "۱۱:۳۰",
      title: "نماز جماعت ظهر در صحن گوهرشاد",
      desc: "اقامه نماز پر فیض جماعت و زیارت مرقد شیخ بهایی در راهروی خروجی.",
    },
    {
      time: "۱۶:۰۰",
      title: "خرید سوغات در بازار تاریخی رضا",
      desc: "تهیه زعفران، زرشک، نبات رضوی و نگین‌های اصل عقیق و فیروزه.",
    },
  ],
  2: [
    {
      time: "۰۹:۳۰",
      title: "صبحانه و گشت و گذار در پارک کوهسنگی",
      desc: "پیاده‌روی تفریحی در میان آبشارهای سنگی زیبای کوهسنگی و بازدید از موزه بزرگ خراسان.",
    },
    {
      time: "۱۳:۰۰",
      title: "رزرو غذای متبرک مهمانسرای حضرت",
      desc: "بررسی قرعه‌کشی نرم‌افزار نسیم رضوان و مراجعه به مهمانسرای باب الهادی.",
    },
    {
      time: "۱۸:۰۰",
      title: "زیارت و قرائت زیارت امین الله در صحن آزادی",
      desc: "خلوت معنوی روبروی پنجره فولاد صحن انقلاب اسلامی.",
    },
  ],
  3: [
    {
      time: "۱۰:۰۰",
      title: "تفریح و هیجان در الماس شرق (منطقه سپاد)",
      desc: "خرید مدرن، بازدید از شهربازی سرزمین عجایب یا باغ پرندگان مشهد.",
    },
    {
      time: "۱۵:۳۰",
      title: "موزه مرکزی آستان قدس رضوی",
      desc: "تماشای سکه‌های تاریخی، فرش‌های نفیس قدیمی و گنجینه تمبر و هدایای رهبری.",
    },
    {
      time: "۲۰:۰۰",
      title: "زیارت وداع و اقامه نماز زیارت",
      desc: "خداحافظی معنوی و ثبت درخواست زیارت نیابتی برای سفر بعدی.",
    },
  ],
};

let activeDay = 1;

function selectDay(dayNum) {
  activeDay = dayNum;

  // Highlight active day pill
  for (let d = 1; d <= 3; d++) {
    const el = document.getElementById(`btn-day-${d}`);
    if (el) {
      if (d === dayNum) {
        el.className =
          "flex-1 py-1.5 text-xs font-extrabold rounded-md transition-all bg-white text-blue-600 shadow-sm";
      } else {
        el.className =
          "flex-1 py-1.5 text-xs font-extrabold rounded-md transition-all text-slate-600 hover:bg-slate-200";
      }
    }
  }

  renderPlanner();
}

function renderPlanner() {
  const container = document.getElementById("planner-content");
  container.innerHTML = "";

  const activities = plannerDatabase[activeDay];
  activities.forEach((act) => {
    const item = document.createElement("div");
    item.className =
      "flex items-start gap-2.5 border-r-2 border-blue-500 pr-3 pb-2 last:pb-0";
    item.innerHTML = `
      <div class="bg-blue-100 text-blue-800 text-[10px] font-black px-1.5 py-0.5 rounded shrink-0">${act.time}</div>
      <div>
        <h5 class="font-extrabold text-[11px] text-slate-800">${act.title}</h5>
        <p class="text-[10px] text-slate-500 leading-relaxed">${act.desc}</p>
      </div>
    `;
    container.appendChild(item);
  });
}

// Checklist logic
let checklist = [
  { id: 1, text: "کارت شناسایی و شناسنامه", checked: true },
  { id: 2, text: "دفترچه بیمه و داروهای شخصی", checked: false },
  { id: 3, text: "سجاده، چادر نماز و مفاتیح الجنان کوچک", checked: true },
  { id: 4, text: "شارژر گوشی و پاور بانک", checked: false },
];

function renderChecklist() {
  const container = document.getElementById("checklist-items");
  container.innerHTML = "";

  if (checklist.length === 0) {
    container.innerHTML = `<div class="text-center text-slate-400 py-4 text-[10px] font-bold">هیچ موردی در لیست لوازم وجود ندارد.</div>`;
    updateChecklistProgress();
    return;
  }

  checklist.forEach((item) => {
    const row = document.createElement("div");
    row.className =
      "flex items-center justify-between bg-white border border-slate-100 rounded-lg p-1.5 shadow-sm hover:border-slate-200 transition-colors";

    const label = document.createElement("label");
    label.className = "flex items-center gap-2 cursor-pointer flex-1 min-w-0";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    if (item.checked) checkbox.checked = true;
    checkbox.setAttribute("onchange", `toggleChecklistItem(${item.id})`);
    checkbox.className =
      "rounded text-shrine-green focus:ring-shrine-green h-3.5 w-3.5 border-slate-300";

    const textSpan = document.createElement("span");
    textSpan.className = `text-[11px] font-bold truncate ${item.checked ? "line-through text-slate-400" : "text-slate-700"}`;
    textSpan.textContent = item.text;

    label.appendChild(checkbox);
    label.appendChild(textSpan);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("onclick", `deleteChecklistItem(${item.id})`);
    deleteBtn.className =
      "text-slate-400 hover:text-red-500 px-1 transition-colors";
    deleteBtn.title = "حذف";
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can text-[10px]"></i>`;

    row.appendChild(label);
    row.appendChild(deleteBtn);
    container.appendChild(row);
  });

  updateChecklistProgress();
}

function toggleChecklistItem(id) {
  const item = checklist.find((x) => x.id === id);
  if (item) {
    item.checked = !item.checked;
    renderChecklist();
  }
}

function addChecklistItem() {
  const input = document.getElementById("checklist-input");
  const text = input.value.trim();
  if (!text) return;

  const newItem = {
    id: Date.now(),
    text: text,
    checked: false,
  };

  checklist.push(newItem);
  input.value = "";
  renderChecklist();
}

function deleteChecklistItem(id) {
  checklist = checklist.filter((x) => x.id !== id);
  renderChecklist();
}

function updateChecklistProgress() {
  const total = checklist.length;
  const completed = checklist.filter((x) => x.checked).length;
  const progressEl = document.getElementById("checklist-progress");

  if (progressEl) {
    progressEl.innerText = `${completed} از ${total} مورد انجام شده`;
  }
}

// ==========================================
// 8. GLOBAL INITIALIZER & TABS SYSTEM
// ==========================================
function switchTab(tabId) {
  const tabs = ["spiritual", "directory", "planner", "virtual-pilgrim"];

  // Update nav buttons
  tabs.forEach((t) => {
    const btn = document.getElementById(`tab-btn-${t}`);
    const panel = document.getElementById(`tab-panel-${t}`);

    if (t === tabId) {
      btn.className =
        "px-4 py-3 font-bold text-sm text-shrine-green border-b-2 border-shrine-green whitespace-nowrap flex items-center gap-2 bg-white/40";
      panel.classList.remove("hidden");
      panel.classList.add("block");
    } else {
      btn.className =
        "px-4 py-3 font-bold text-sm text-slate-600 border-b-2 border-transparent hover:text-shrine-green whitespace-nowrap flex items-center gap-2";
      panel.classList.add("hidden");
      panel.classList.remove("block");
    }
  });

  // Perform custom triggers if needed when switching
  if (tabId === "directory") {
    renderDirectory();
  } else if (tabId === "planner") {
    renderPlanner();
    renderChecklist();
  }
}

// Live Countdown widget helper (اوقات شرعی بعدی)
function startPrayerTimesCountdown() {
  const countdownEl = document.getElementById("countdown-text");

  const prayers = [
    { name: "اذان صبح", time: "۰۴:۴۸", hour: 4, min: 48 },
    { name: "اذان ظهر", time: "۱۱:۵۶", hour: 11, min: 56 },
    { name: "اذان مغرب", time: "۱۸:۲۳", hour: 18, min: 23 },
  ];

  setInterval(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();

    // Find next prayer
    let nextPrayer = prayers[0];
    for (let p of prayers) {
      if (
        currentHour < p.hour ||
        (currentHour === p.hour && currentMin < p.min)
      ) {
        nextPrayer = p;
        break;
      }
    }

    // Simple mockup of countdown time
    let diffHours = nextPrayer.hour - currentHour;
    let diffMins = nextPrayer.min - currentMin;
    if (diffMins < 0) {
      diffMins += 60;
      diffHours--;
    }
    if (diffHours < 0) {
      diffHours += 24;
    }

    const hourStr = diffHours.toString().padStart(2, "0");
    const minStr = diffMins.toString().padStart(2, "0");

    // convert numbers to Persian
    const hourFarsi = hourStr
      .replace(/0/g, "۰")
      .replace(/1/g, "۱")
      .replace(/2/g, "۲")
      .replace(/3/g, "۳")
      .replace(/4/g, "۴")
      .replace(/5/g, "۵")
      .replace(/6/g, "۶")
      .replace(/7/g, "۷")
      .replace(/8/g, "۸")
      .replace(/9/g, "۹");
    const minFarsi = minStr
      .replace(/0/g, "۰")
      .replace(/1/g, "۱")
      .replace(/2/g, "۲")
      .replace(/3/g, "۳")
      .replace(/4/g, "۴")
      .replace(/5/g, "۵")
      .replace(/6/g, "۶")
      .replace(/7/g, "۷")
      .replace(/8/g, "۸")
      .replace(/9/g, "۹");

    countdownEl.innerHTML = `مانده تا ${nextPrayer.name}: <span class="font-bold text-yellow-300 font-mono">${hourFarsi}:${minFarsi}</span>`;
  }, 1000);
}

// Document Ready Initialization
window.addEventListener("DOMContentLoaded", () => {
  // Initialize Leaflet Map
  initMap();

  // Load initial prayer text (ameen)
  renderPrayerText();

  // Initialize Chat suggestions chips
  initChatSuggestions();

  // Start times widget countdown
  startPrayerTimesCountdown();

  // Force render check lists
  renderChecklist();
});
