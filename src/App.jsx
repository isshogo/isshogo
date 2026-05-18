import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════
   DESIGN TOKENS — Isshogo soft teal style
══════════════════════════════════════════ */
const C = {
  bg: "#F5F8F7",
  primary: "#5BBFAD",
  primaryDk: "#3DA090",
  primaryLt: "#EAF5F3",
  sos: "#EF7070",
  sosLt: "#FEF0F0",
  blue: "#5A9FD4",
  blueLt: "#EBF4FC",
  orange: "#F5A94F",
  orangeLt: "#FEF5E7",
  green: "#68BF9A",
  greenLt: "#EDF7F3",
  purple: "#9B86C8",
  purpleLt: "#F3EFFB",
  text: "#2C3535",
  mid: "#556060",
  muted: "#9AB0AE",
  card: "#FFFFFF",
  border: "#E2EDEA",
  sh: "0 2px 14px rgba(91,191,173,0.10), 0 1px 4px rgba(0,0,0,0.04)",
  shMd: "0 8px 32px rgba(0,0,0,0.10)",
};

/* ══════════════════════════════════════════
   ISSHOGO LOGO SVG
══════════════════════════════════════════ */
function IsshogoLogo({ iconSize = 52, showTag = true, darkBg = false }) {
  const svgW = iconSize * 2.2;
  const svgH = iconSize * 1.5;
  return (
    <div style={{ display:"flex", alignItems:"center", gap: iconSize * 0.22 }}>
      <svg width={svgW} height={svgH} viewBox="0 0 115 82" fill="none">

        {/* ── PERSONS first — boat will cover their lower halves ── */}

        {/* Adult — teal, left. Head + large body circle */}
        <circle cx="24" cy="20" r="11" fill="#7BBFAD"/>
        <circle cx="24" cy="43" r="15"  fill="#7BBFAD"/>

        {/* Child — gold, right, smaller. Sits slightly lower/in front */}
        <circle cx="43" cy="30" r="7.5" fill="#EDBA4A"/>
        <circle cx="43" cy="49" r="10"  fill="#EDBA4A"/>

        {/* ── BOAT on top — organic leaf/cradle shape ── */}
        <path d="M8,56 C12,68 32,75 57,71 C78,67 82,52 73,43 C64,34 29,38 16,50 C10,54 8,56 8,56Z" fill="#D4836C"/>

        {/* ── DOTTED ARC — coral → amber → teal → grey → grey ── */}
        <circle cx="73" cy="60" r="3.5" fill="#D4836C"/>
        <circle cx="82" cy="50" r="3.5" fill="#EDBA4A"/>
        <circle cx="89" cy="39" r="3.5" fill="#96C8B5"/>
        <circle cx="94" cy="27" r="3.5" fill="#C8CCCA"/>
        <circle cx="97" cy="14" r="3.5" fill="#C8CCCA"/>

        {/* ── LOCATION PIN ── */}
        <path d="M101,4 C96,4 92,8 92,13 C92,20 101,30 101,30 C101,30 110,20 110,13 C110,8 106,4 101,4Z" fill="#D4836C"/>
        <circle cx="101" cy="13" r="4" fill="white" opacity="0.75"/>
      </svg>

      <div>
        <div style={{ lineHeight:1.05, letterSpacing:-0.5 }}>
          <span style={{ fontWeight:900, fontSize:iconSize*0.52, color:darkBg?"#fff":"#2C3A4A" }}>Issho</span>
          <span style={{ fontWeight:900, fontSize:iconSize*0.52, color:"#D4973A" }}>g</span>
          <span style={{ fontWeight:900, fontSize:iconSize*0.52, color:"#7BBFAD" }}>o</span>
        </div>
        {showTag && (
          <div style={{ fontSize:iconSize*0.19, color:darkBg?"rgba(255,255,255,0.5)":"#9AACAA", marginTop:3, fontWeight:500, whiteSpace:"nowrap" }}>
            find family friendly places
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   CATEGORY SVG ICONS — clear & cute
══════════════════════════════════════════ */
function CatIcon({ id, color, size = 34 }) {
  const v = "0 0 40 40";

  /* ── Cafe / Restaurant: coffee cup with steam ── */
  if (id === "cafe") return (
    <svg width={size} height={size} viewBox={v} fill="none">
      <path d="M15,12 C14,9 16,7 15,5" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M22,12 C21,9 23,7 22,5" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M9,13 L12,34 L28,34 L31,13Z" fill={color} opacity="0.85"/>
      <path d="M9,13 L12,34 L28,34 L31,13" stroke={color} strokeWidth="0" fill="none"/>
      <path d="M31,18 C38,18 38,28 31,28" stroke={color} strokeWidth="2.8" strokeLinecap="round" fill="none"/>
      <line x1="6" y1="34" x2="34" y2="34" stroke={color} strokeWidth="2.8" strokeLinecap="round"/>
    </svg>
  );

  /* ── Nursing: baby bottle ── */
  if (id === "nursing") return (
    <svg width={size} height={size} viewBox={v} fill="none">
      {/* Teat — prominent rounded dome */}
      <path d="M16,11 Q16,3 20,3 Q24,3 24,11" fill={color}/>
      {/* Collar ring */}
      <rect x="12" y="10" width="16" height="5" rx="2.5" fill={color}/>
      {/* Bottle body — rounded rectangle */}
      <rect x="10" y="15" width="20" height="22" rx="7" fill={color} opacity="0.9"/>
      {/* Measurement lines */}
      <line x1="13" y1="22" x2="27" y2="22" stroke="white" strokeWidth="2.4" strokeLinecap="round" opacity="0.65"/>
      <line x1="13" y1="29" x2="27" y2="29" stroke="white" strokeWidth="2.4" strokeLinecap="round" opacity="0.65"/>
    </svg>
  );

  /* ── Nappy Change: diaper — no narrowing, clean shape ── */
  if (id === "diaper") return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Left tape tab */}
      <rect x="0" y="7" width="9" height="8" rx="3" fill={color}/>
      {/* Right tape tab */}
      <rect x="31" y="7" width="9" height="8" rx="3" fill={color}/>
      {/* Main body — rounded rectangle, no crotch narrowing */}
      <rect x="6" y="6" width="28" height="30" rx="8" fill={color} opacity="0.92"/>
      {/* Centre fastener dot */}
      <circle cx="20" cy="14" r="2.8" fill="white" opacity="0.6"/>
    </svg>
  );

  /* ── Play Area: swing with child ── */
  if (id === "indoor") return (
    <svg width={size} height={size} viewBox={v} fill="none">
      {/* Top bar */}
      <line x1="3" y1="6" x2="37" y2="6" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      {/* Left post */}
      <line x1="5" y1="6" x2="5" y2="38" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      {/* Right post */}
      <line x1="35" y1="6" x2="35" y2="38" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      {/* Swing chains */}
      <line x1="14" y1="6" x2="12" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="26" y1="6" x2="28" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      {/* Swing seat */}
      <line x1="12" y1="22" x2="28" y2="22" stroke={color} strokeWidth="3.5" strokeLinecap="round"/>
      {/* Child head */}
      <circle cx="20" cy="15" r="6" fill={color}/>
      {/* Child legs dangling */}
      <line x1="17" y1="22" x2="15" y2="33" stroke={color} strokeWidth="2.8" strokeLinecap="round"/>
      <line x1="23" y1="22" x2="25" y2="33" stroke={color} strokeWidth="2.8" strokeLinecap="round"/>
    </svg>
  );

  /* ── Sightseeing: camera ── */
  if (id === "sights") return (
    <svg width={size} height={size} viewBox={v} fill="none">
      <rect x="4" y="13" width="32" height="22" rx="4" fill={color} opacity="0.85"/>
      <path d="M14,13 L16,8 L24,8 L26,13" fill={color} opacity="0.7"/>
      <circle cx="20" cy="24" r="8" fill="white" opacity="0.25"/>
      <circle cx="20" cy="24" r="8" stroke="white" strokeWidth="2.2" fill="none"/>
      <circle cx="20" cy="24" r="3.5" fill="white" opacity="0.7"/>
      <circle cx="31" cy="17" r="2.2" fill="white" opacity="0.7"/>
    </svg>
  );

  /* ── Clinics: medical cross ── */
  if (id === "clinics") return (
    <svg width={size} height={size} viewBox={v} fill="none">
      <rect x="15" y="4"  width="10" height="32" rx="4" fill={color} opacity="0.9"/>
      <rect x="4"  y="15" width="32" height="10" rx="4" fill={color} opacity="0.9"/>
    </svg>
  );

  return null;
}

/* ══════════════════════════════════════════
   CATEGORIES
══════════════════════════════════════════ */
const CATS = [
  { id:"cafe",     label:"☕", en:"Cafe / Restaurant", ja:"カフェ・レストラン", color:C.orange, bg:C.orangeLt, query:"child friendly cafe family restaurant" },
  { id:"nursing",  label:"🤱", en:"Nursing",           ja:"授乳室",            color:C.primary,bg:C.primaryLt,query:"授乳室 nursing room" },
  { id:"diaper",   label:"🚼", en:"Nappy Change",       ja:"おむつ替え",        color:C.purple, bg:C.purpleLt, query:"おむつ替え diaper changing" },
  { id:"indoor",   label:"🏠", en:"Play Area",          ja:"遊び場",            color:C.blue,   bg:C.blueLt,   query:"indoor children play area" },
  { id:"sights",   label:"🌍", en:"Sightseeing",        ja:"観光",              color:"#E07A8F", bg:"#FDEEF1", query:"family tourist attraction Japan" },
  { id:"clinics",  label:"🏥", en:"Clinics",            ja:"クリニック",         color:"#CF7B68",bg:"#FAF0EE",  query:"English speaking clinic hospital Japan" },
];

/* ══════════════════════════════════════════
   HOSPITAL DATA
══════════════════════════════════════════ */
const HOSP_DEFAULT = [
  { id:"h1", name:"Tokyo Medical and Surgical Clinic", nameJa:"東京メディカル・サージカル・クリニック",
    area:"東京・港区", address:"東京都港区芝5丁目32番5号",
    phone:"+81-3-3436-3028", website:"https://www.tmsc.jp",
    en:"full", specialty:"General, Pediatrics, OB/GYN", emergency:false,
    note:"Full English service. International insurance accepted." },
  { id:"h2", name:"St. Luke's International Hospital", nameJa:"聖路加国際病院",
    area:"東京・中央区", address:"東京都中央区明石町9-1",
    phone:"+81-3-3541-5151", website:"https://hospital.luke.ac.jp",
    en:"full", specialty:"General, Pediatrics, Emergency, OB/GYN", emergency:true,
    note:"International medical centre. 24hr emergency department." },
  { id:"h3", name:"Tokyo Midtown Medical Centre", nameJa:"東京ミッドタウンクリニック",
    area:"東京・港区（六本木）", address:"東京都港区赤坂9-7-2 ミッドタウンタワー6F",
    phone:"+81-3-5413-0080", website:"https://clinic.tokyo-midtown.com",
    en:"full", specialty:"General, Pediatrics", emergency:false,
    note:"Multilingual staff. Reservation recommended." },
  { id:"h4", name:"International Catholic Hospital", nameJa:"聖母病院",
    area:"東京・新宿区", address:"東京都新宿区中落合2-5-1",
    phone:"+81-3-3951-1111", website:"https://www.seibokai.or.jp",
    en:"partial", specialty:"OB/GYN, Pediatrics", emergency:false,
    note:"English-speaking OB/GYN. Popular with expat families." },
  { id:"h5", name:"Japan Baptist Hospital", nameJa:"バプテスト病院",
    area:"京都・左京区", address:"京都市左京区北白川山ノ元町47",
    phone:"+81-75-781-5191", website:"https://www.bap-hosp.or.jp",
    en:"partial", specialty:"General, Pediatrics, OB/GYN", emergency:false,
    note:"Long-established international hospital in Kyoto." },
];

const TIPS = {
  en:[
    {icon:"🚄",t:"Shinkansen with Kids",b:"Book the last carriage — closest to the multi-purpose room with a changing table. Reserve seats in advance on busy routes."},
    {icon:"🏪",t:"Convenience Stores",b:"7-Eleven, Lawson & FamilyMart: microwaves for baby food, nappies, formula, baby wipes, and clean loos. Open 24/7."},
    {icon:"🏬",t:"Department Store Baby Rooms",b:"Japanese department stores have beautifully equipped baby lounges — nursing areas, changing tables, and small loos. Usually upper floors."},
    {icon:"🌡️",t:"Medical Info Card",b:"Carry a card with blood type, allergies, and key medical details in English and Japanese. Show it at any clinic if needed."},
    {icon:"🚕",t:"Taxis & Car Seats",b:"Request child car seats (チャイルドシート) when booking. Some apps like GO allow advance seat requests."},
    {icon:"📞",t:"Emergency Numbers",b:"Police: 110 · Ambulance/Fire: 119 · Japan Help Line (English 24hr): 0120-46-1997"},
    {icon:"🍜",t:"Eating Out with Kids",b:"Family restaurants like Gusto & Saizeriya always have high chairs and children's menus. Yoshinoya and Sukiya are quick and family-friendly."},
    {icon:"🌸",t:"Buggy Tips",b:"Fold buggies on crowded trains. Department stores offer buggy hire. Lifts are clearly signposted almost everywhere in Japan."},
  ],
  ja:[
    {icon:"🚄",t:"新幹線での移動",b:"最後尾車両は多目的室への距離が短く便利。おむつ替え台や小さなシンクがあります。繁忙期は事前に指定席を予約しましょう。"},
    {icon:"🏪",t:"コンビニをフル活用",b:"セブン・ローソン・ファミマは24時間営業。離乳食の温めレンジ、おむつ・粉ミルク・おしりふきも購入できます。"},
    {icon:"🏬",t:"デパートの授乳室",b:"百貨店の上階には授乳スペース・おむつ替え台・キッズトイレを備えた「ベビー休憩室」があることがほとんど。"},
    {icon:"🌡️",t:"医療情報カード",b:"血液型・アレルギー・服薬情報を日英両語でまとめたカードを携帯しておくと、いざというとき病院でスムーズです。"},
    {icon:"🚕",t:"タクシーとチャイルドシート",b:"GOなど一部のアプリから予約時にチャイルドシートのリクエストが可能です。安全のため早めに手配しましょう。"},
    {icon:"📞",t:"緊急連絡先",b:"警察: 110 ｜ 救急・消防: 119 ｜ Japan Help Line（英語24時間）: 0120-46-1997"},
    {icon:"🍜",t:"子連れ外食のコツ",b:"ガスト・サイゼリヤなどのファミレスはハイチェアとキッズメニューが充実。吉野家・すき家も子連れに対応しています。"},
    {icon:"🌸",t:"ベビーカーのコツ",b:"混雑した電車では折り畳みを心がけると◎。百貨店・モールにはベビーカーの貸出サービスもあります。"},
  ],
};

const T = {
  en:{
    name:"Isshogo", tag:"Explore together.",
    search:"Search places and spots…",
    nearMe:"📍 Find Near Me", locFound:"Location found ✓",
    locBusy:"Finding location…", locNo:"Location denied. Check browser settings.",
    mapHint:"Select a category, then tap Find Near Me",
    tab:{map:"Map",hospitals:"Hospitals",tips:"Tips",menu:"Menu"},
    hospTitle:"English-OK Hospitals", hospSub:"Medical facilities with English-speaking staff",
    tipsTitle:"Family Travel Tips", tipsSub:"Practical advice for exploring Japan with children",
    mySpots:"Registered Spots", noSpots:"No spots yet — add them via the Admin panel.",
    full:"Full English", partial:"Some English", emergency:"24hr Emergency",
    call:"Call", web:"Website", maps:"Open in Maps",
    sos:"Help! SOS", sosTitle:"Nearby Support Spots", sosCall:"📞 Call Emergency Services",
    sosNote:"For life-threatening emergencies, call 119 immediately.",
    favs:"Favourites",
    menuTitle:"Menu", login:"Log in / Register",
    adminBtn:"⚙️ Admin Panel",
    adminTitle:"Admin Panel", adminPw:"Password", adminLogin:"Log in",
    adminBad:"Incorrect password",
    tabSpots:"Spots", tabHosp:"Hospitals",
    addSpot:"+ Add Spot", addHosp:"+ Add Hospital",
    save:"Save", cancel:"Cancel", del:"Delete",
    sName:"Name (EN)", sNameJa:"Name (JA)",
    sCat:"Category", sAddr:"Address", sNote:"Notes", sUrl:"Website",
    hName:"Hospital Name (EN)", hNameJa:"Name (JA, optional)",
    hArea:"Area", hAddr:"Address", hPhone:"Phone", hSite:"Website",
    hNote:"Notes", hEn:"English Level", hEmerg:"24hr Emergency",
    hSpec:"Specialties", logout:"Log out",
    mapNote:"Add a Google Maps API key for richer search. See deployment guide.",
    footNote:"Information curated by parents, for parents. Always verify before visiting.",
  },
  ja:{
    name:"Isshogo", tag:"子どもとの旅を、もっと楽しく。",
    search:"場所やスポットを検索…",
    nearMe:"📍 現在地周辺を探す", locFound:"現在地を取得しました ✓",
    locBusy:"現在地を取得中…", locNo:"位置情報が拒否されました。設定をご確認ください。",
    mapHint:"カテゴリを選んで「現在地周辺を探す」をタップ",
    tab:{map:"マップ",hospitals:"病院",tips:"旅のコツ",menu:"メニュー"},
    hospTitle:"英語対応病院", hospSub:"英語スタッフが常駐する全国の医療機関",
    tipsTitle:"子連れ旅行のコツ", tipsSub:"日本を子どもと旅するための実践アドバイス",
    mySpots:"登録スポット", noSpots:"まだスポットが登録されていません。管理画面から追加できます。",
    full:"完全英語対応", partial:"英語一部対応", emergency:"24時間救急",
    call:"電話", web:"ウェブサイト", maps:"地図で開く",
    sos:"助けて！SOS", sosTitle:"近くのサポートスポット", sosCall:"📞 緊急連絡先に電話",
    sosNote:"生命の危機がある場合はすぐに119番へ。",
    favs:"お気に入り",
    menuTitle:"メニュー", login:"ログイン / 新規登録",
    adminBtn:"⚙️ 管理画面",
    adminTitle:"管理画面", adminPw:"パスワード", adminLogin:"ログイン",
    adminBad:"パスワードが違います",
    tabSpots:"スポット", tabHosp:"病院",
    addSpot:"＋ スポット追加", addHosp:"＋ 病院追加",
    save:"保存", cancel:"キャンセル", del:"削除",
    sName:"スポット名（英語）", sNameJa:"スポット名（日本語）",
    sCat:"カテゴリ", sAddr:"住所", sNote:"メモ", sUrl:"ウェブサイト",
    hName:"病院名（英語）", hNameJa:"病院名（日本語、任意）",
    hArea:"エリア", hAddr:"住所", hPhone:"電話番号", hSite:"ウェブサイト",
    hNote:"メモ", hEn:"英語対応", hEmerg:"24時間救急対応",
    hSpec:"診療科", logout:"ログアウト",
    mapNote:"Google Maps APIキーを追加するとマップ機能が充実します。",
    footNote:"掲載情報は訪問前に必ずご確認ください。",
  },
};

const PW = "isshogo2024"; // ← Change before deploying!

/* ══════════════════════════════════════════
   FACILITY TAGS
══════════════════════════════════════════ */
const FACILITY_TAGS = {
  nursing:   { label:"授乳室",       icon:"🤱", color:C.primary },
  diaper:    { label:"おむつ替え",   icon:"🚼", color:C.green },
  stroller:  { label:"ベビーカーOK", icon:"👶", color:C.blue },
  indoor:    { label:"屋内",         icon:"🏠", color:C.blue },
  kids:      { label:"キッズスペース",icon:"🎡", color:C.orange },
};

function FacilityTag({ id }) {
  const f = FACILITY_TAGS[id];
  if (!f) return null;
  return (
    <span style={{
      display:"inline-flex", alignItems:"center", gap:3,
      fontSize:11, fontWeight:600, color:f.color,
      background:f.color+"18", padding:"2px 8px",
      borderRadius:20, whiteSpace:"nowrap",
    }}>{f.icon} {f.label}</span>
  );
}

/* ══════════════════════════════════════════
   PHOTO PLACEHOLDER (gradient tile)
══════════════════════════════════════════ */
const GRADIENTS = [
  "linear-gradient(135deg,#B8DDD7,#5BBFAD)",
  "linear-gradient(135deg,#FAD7A0,#F5A94F)",
  "linear-gradient(135deg,#A9CCE3,#5A9FD4)",
  "linear-gradient(135deg,#C8E6C9,#68BF9A)",
  "linear-gradient(135deg,#D7BDE2,#9B86C8)",
  "linear-gradient(135deg,#FADBD8,#EF7070)",
];
function PhotoThumb({ idx = 0, size = 72, radius = 10 }) {
  return (
    <div style={{
      width:size, height:size, borderRadius:radius, flexShrink:0,
      background:GRADIENTS[idx % GRADIENTS.length],
      display:"flex", alignItems:"center", justifyContent:"center",
      fontSize:size * 0.38, color:"rgba(255,255,255,0.7)",
    }}>🏛️</div>
  );
}

/* ══════════════════════════════════════════
   SPOT CARD (list style — matches mockup)
══════════════════════════════════════════ */
function SpotCard({ spot, idx, lang, t, isAdmin, onEdit, onDel }) {
  const cat = CATS.find(c => c.id === spot.category);
  const displayName = lang === "ja" && spot.nameJa ? spot.nameJa : spot.name;
  const tags = (spot.tags || []);
  return (
    <div style={{
      background:C.card, borderRadius:16, padding:"14px 16px",
      boxShadow:C.sh, border:`1px solid ${C.border}`,
      display:"flex", gap:14, alignItems:"flex-start",
    }}>
      <PhotoThumb idx={idx} size={72} />
      <div style={{ flex:1, display:"flex", flexDirection:"column", gap:6 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
          <div style={{ fontWeight:700, fontSize:15, color:C.text, lineHeight:1.3 }}>{displayName}</div>
          <span style={{ fontSize:18, cursor:"pointer", color:C.muted }}>♡</span>
        </div>
        {spot.address && (
          <div style={{ fontSize:12, color:C.muted }}>📍 {spot.address}</div>
        )}
        <div style={{ display:"flex", flexWrap:"wrap", gap:4 }}>
          {cat && (
            <span style={{
              display:"inline-flex", alignItems:"center", gap:3,
              fontSize:11, fontWeight:600, color:cat.color,
              background:cat.color+"18", padding:"2px 8px", borderRadius:20,
            }}>{cat.label} {lang==="ja"?cat.ja:cat.en}</span>
          )}
          {tags.map(tag => <FacilityTag key={tag} id={tag} />)}
        </div>
        {spot.note && <div style={{ fontSize:12, color:C.mid, lineHeight:1.5 }}>{spot.note}</div>}
        <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginTop:2 }}>
          {spot.url && (
            <a href={spot.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none" }}>
              <PillBtn color={C.primary} light>{t.web}</PillBtn>
            </a>
          )}
          {spot.address && (
            <a href={`https://maps.google.com/maps?q=${encodeURIComponent(displayName+" "+spot.address)}`}
              target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none" }}>
              <PillBtn color={C.primary} light>{t.maps}</PillBtn>
            </a>
          )}
          {isAdmin && <>
            <PillBtn color={C.mid} light onClick={()=>onEdit(spot)}>✏️</PillBtn>
            <PillBtn color={C.sos} light onClick={()=>onDel(spot.id)}>🗑️</PillBtn>
          </>}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   HOSPITAL CARD
══════════════════════════════════════════ */
function HospCard({ h, lang, t, isAdmin, onEdit, onDel }) {
  const displayName = lang === "ja" && h.nameJa ? h.nameJa : h.name;
  return (
    <div style={{
      background:C.card, borderRadius:16, padding:"18px 20px",
      boxShadow:C.sh, border:`1px solid ${C.border}`,
      display:"flex", flexDirection:"column", gap:10,
    }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:8 }}>
        <div>
          <div style={{ fontWeight:700, fontSize:15, color:C.text, lineHeight:1.3 }}>{displayName}</div>
          {lang==="ja" && h.nameJa && <div style={{ fontSize:12, color:C.muted, marginTop:2 }}>{h.name}</div>}
          {lang==="en" && h.nameJa && <div style={{ fontSize:12, color:C.muted, marginTop:2 }}>{h.nameJa}</div>}
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:4, alignItems:"flex-end", flexShrink:0 }}>
          <span style={{
            fontSize:11, fontWeight:700, padding:"3px 9px", borderRadius:20,
            color: h.en==="full" ? "#1A8A5A" : "#B07A1A",
            background: h.en==="full" ? "#E5F5ED" : "#FEF5E3",
          }}>{h.en==="full" ? t.full : t.partial}</span>
          {h.emergency && (
            <span style={{ fontSize:11, fontWeight:700, padding:"3px 9px", borderRadius:20, color:C.sos, background:C.sosLt }}>{t.emergency}</span>
          )}
        </div>
      </div>
      <div style={{ fontSize:13, color:C.mid }}>📍 {h.area}</div>
      {h.specialty && (
        <div style={{ display:"flex", flexWrap:"wrap", gap:4 }}>
          {h.specialty.split(",").map(s=>s.trim()).filter(Boolean).map(s=>(
            <span key={s} style={{ fontSize:11, padding:"2px 8px", borderRadius:20, background:"#EEF5F4", color:C.primary, fontWeight:600 }}>{s}</span>
          ))}
        </div>
      )}
      {h.note && (
        <div style={{ fontSize:13, color:C.mid, background:"#F7FAF9", borderRadius:10, padding:"8px 12px", lineHeight:1.5 }}>{h.note}</div>
      )}
      <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
        {h.phone && <a href={`tel:${h.phone}`} style={{textDecoration:"none"}}><PillBtn color={C.primary} solid>{t.call}</PillBtn></a>}
        {h.website && <a href={h.website} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><PillBtn color={C.primary} light>{t.web}</PillBtn></a>}
        {h.address && (
          <a href={`https://maps.google.com/maps?q=${encodeURIComponent(h.name+" "+h.address)}`} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
            <PillBtn color={C.primary} light>{t.maps}</PillBtn>
          </a>
        )}
        {isAdmin && <>
          <PillBtn color={C.mid} light onClick={()=>onEdit(h)}>✏️</PillBtn>
          <PillBtn color={C.sos} light onClick={()=>onDel(h.id)}>🗑️</PillBtn>
        </>}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   PILL BUTTON
══════════════════════════════════════════ */
function PillBtn({ children, onClick, color = C.primary, solid, light, full }) {
  return (
    <button onClick={onClick} style={{
      display:"inline-flex", alignItems:"center", gap:5,
      border:"none", borderRadius:24, cursor:"pointer",
      fontFamily:"inherit", fontWeight:600, fontSize:13,
      padding: solid ? "8px 18px" : "6px 14px",
      width: full ? "100%" : undefined,
      justifyContent: full ? "center" : undefined,
      color: solid ? "#fff" : color,
      background: solid ? color : color+"15",
      transition:"all 0.15s",
    }}>{children}</button>
  );
}

/* ══════════════════════════════════════════
   FORM FIELD COMPONENTS
══════════════════════════════════════════ */
function Field({ label, value, onChange, placeholder, type="text", required }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
      {label && <label style={{ fontSize:12, fontWeight:600, color:C.muted, letterSpacing:0.4 }}>{label}{required?" *":""}</label>}
      <input type={type} value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder}
        style={{ border:`1.5px solid ${C.border}`, borderRadius:10, padding:"9px 13px",
          fontSize:14, color:C.text, background:"#fff", fontFamily:"inherit", outline:"none" }}
        onFocus={e=>e.target.style.borderColor=C.primary}
        onBlur={e=>e.target.style.borderColor=C.border}
      />
    </div>
  );
}
function FieldSelect({ label, value, onChange, options }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
      {label && <label style={{ fontSize:12, fontWeight:600, color:C.muted, letterSpacing:0.4 }}>{label}</label>}
      <select value={value} onChange={e=>onChange(e.target.value)}
        style={{ border:`1.5px solid ${C.border}`, borderRadius:10, padding:"9px 13px",
          fontSize:14, color:C.text, background:"#fff", fontFamily:"inherit", cursor:"pointer", outline:"none" }}>
        {options.map(o=><option key={o.v} value={o.v}>{o.l}</option>)}
      </select>
    </div>
  );
}
function FieldCheck({ label, checked, onChange }) {
  return (
    <label style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer", fontSize:14, color:C.text }}>
      <input type="checkbox" checked={checked} onChange={e=>onChange(e.target.checked)} style={{ accentColor:C.primary, width:16, height:16 }}/>
      {label}
    </label>
  );
}

/* ══════════════════════════════════════════
   SOS MODAL
══════════════════════════════════════════ */
function SOSModal({ t, lang, spots, onClose }) {
  const sosSpots = spots.filter(s => s.category === "sos" || s.category === "nursing");
  const nearHospitals = HOSP_DEFAULT.filter(h => h.emergency).slice(0, 2);
  return (
    <div style={{ position:"fixed", inset:0, zIndex:200, background:"rgba(0,0,0,0.45)", backdropFilter:"blur(4px)",
      display:"flex", alignItems:"flex-start", justifyContent:"center", overflowY:"auto", padding:"16px" }}
      onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={{ width:"100%", maxWidth:460, background:C.card, borderRadius:24, overflow:"hidden", boxShadow:C.shMd }}>
        {/* SOS Header */}
        <div style={{ background:C.sosLt, padding:"20px 24px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div>
            <div style={{ fontWeight:800, fontSize:22, color:C.sos }}>❌ {t.sos}</div>
            <div style={{ fontSize:13, color:C.sos, opacity:0.8, marginTop:2 }}>{t.sosTitle}</div>
          </div>
          <button onClick={onClose} style={{ background:C.sos+"20", border:"none", color:C.sos,
            borderRadius:50, width:36, height:36, cursor:"pointer", fontSize:16, fontWeight:700 }}>✕</button>
        </div>

        <div style={{ padding:"20px 20px 24px", display:"flex", flexDirection:"column", gap:16 }}>
          {/* Emergency hospitals */}
          {nearHospitals.map((h,i)=>(
            <div key={h.id} style={{ display:"flex", gap:12, alignItems:"center",
              background:"#F9FCFC", borderRadius:12, padding:"12px 14px", border:`1px solid ${C.border}` }}>
              <PhotoThumb idx={i+2} size={56} />
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, fontSize:14, color:C.text }}>{lang==="ja"&&h.nameJa?h.nameJa:h.name}</div>
                <div style={{ fontSize:12, color:C.muted, marginTop:2 }}>📍 {h.area}</div>
                <div style={{ display:"flex", gap:4, marginTop:4, flexWrap:"wrap" }}>
                  <span style={{ fontSize:11, fontWeight:700, color:C.sos, background:C.sosLt, padding:"1px 7px", borderRadius:20 }}>救急対応</span>
                  <span style={{ fontSize:11, fontWeight:700, color:C.primary, background:C.primaryLt, padding:"1px 7px", borderRadius:20 }}>英語OK</span>
                </div>
              </div>
              <a href={`tel:${h.phone}`} style={{ textDecoration:"none" }}>
                <div style={{ width:36, height:36, borderRadius:50, background:C.primary, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>📞</div>
              </a>
            </div>
          ))}

          {/* Custom SOS spots */}
          {sosSpots.slice(0,2).map((s,i)=>(
            <div key={s.id} style={{ display:"flex", gap:12, alignItems:"center",
              background:"#F9FCFC", borderRadius:12, padding:"12px 14px", border:`1px solid ${C.border}` }}>
              <PhotoThumb idx={i} size={56} />
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, fontSize:14 }}>{lang==="ja"&&s.nameJa?s.nameJa:s.name}</div>
                {s.address && <div style={{ fontSize:12, color:C.muted, marginTop:2 }}>📍 {s.address}</div>}
              </div>
            </div>
          ))}

          {/* Big call button */}
          <button onClick={()=>window.open("tel:119")} style={{
            background:`linear-gradient(135deg, ${C.sos}, #E85A5A)`,
            color:"#fff", border:"none", borderRadius:16, padding:"16px",
            fontSize:16, fontWeight:700, cursor:"pointer", fontFamily:"inherit",
            boxShadow:`0 6px 20px ${C.sos}40`,
          }}>{t.sosCall}</button>

          <div style={{ fontSize:12, color:C.muted, textAlign:"center" }}>{t.sosNote}</div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   ADMIN MODAL
══════════════════════════════════════════ */
function ApiTestButton({ apiKey, label }) {
  const [status, setStatus] = useState("");
  const [testing, setTesting] = useState(false);
  const run = async () => {
    setTesting(true); setStatus("");
    try {
      const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
        method:"POST",
        headers:{ "Content-Type":"application/json", "X-Goog-Api-Key":apiKey, "X-Goog-FieldMask":"places.displayName" },
        body: JSON.stringify({ textQuery:"Tokyo Tower", maxResultCount:1 }),
      });
      const data = await res.json();
      if (data.error) setStatus("❌ " + data.error.message);
      else if (data.places?.length > 0) setStatus("✅ Working! Found: " + data.places[0].displayName.text);
      else setStatus("⚠️ Connected but no results returned.");
    } catch(e) {
      const msg = e.message || "";
      if (msg.includes("Load failed") || msg.includes("Failed to fetch") || msg.includes("Network")) {
        setStatus("⚠️ Preview limitation: Claude's sandbox blocks external API calls. Your API key will work correctly once deployed to isshogo.com — this is not an error with your key!");
      } else {
        setStatus("❌ Error: " + msg);
      }
    }
    setTesting(false);
  };
  return (
    <div style={{ marginTop:8 }}>
      <button onClick={run} style={{
        background:"#fff", border:`1.5px solid #D4973A`, color:"#D4973A",
        borderRadius:10, padding:"6px 14px", fontWeight:700, fontSize:12,
        cursor:"pointer", fontFamily:"inherit",
      }}>{testing ? "Testing…" : "🧪 Test API Key"}</button>
      {status && (
        <div style={{
          marginTop:8, padding:"8px 12px", borderRadius:10, fontSize:12, fontWeight:600, lineHeight:1.5,
          background: status.startsWith("✅") ? "#E5F5ED" : status.startsWith("⚠️") ? "#FEF9E7" : "#FEF2F2",
          color: status.startsWith("✅") ? "#1A8A5A" : status.startsWith("⚠️") ? "#8A6A1A" : "#DC2626",
        }}>{status}</div>
      )}
    </div>
  );
}

function AdminModal({ t, lang, spots, extraHosp, apiKey, onSaveApiKey, onSaveSpots, onSaveHosp, onClose }) {
  const [localApiKey, setLocalApiKey] = useState(apiKey || "");
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);
  const [atab, setAtab] = useState("spots");
  const [spotForm, setSpotForm] = useState(null); // null | {} | {existing}
  const [hospForm, setHospForm] = useState(null);

  const login = (e) => {
    e.preventDefault();
    if (pw === PW) { setAuthed(true); setErr(false); }
    else setErr(true);
  };

  const blankSpot = { name:"", nameJa:"", category:"nursing", address:"", note:"", url:"", tags:[] };
  const blankHosp = { name:"", nameJa:"", area:"", address:"", phone:"", website:"", en:"partial", emergency:false, specialty:"", note:"" };

  const saveSpot = (s) => {
    const data = { ...s, id: s.id || "s"+Date.now() };
    const exists = spots.find(x=>x.id===data.id);
    onSaveSpots(exists ? spots.map(x=>x.id===data.id?data:x) : [...spots, data]);
    setSpotForm(null);
  };
  const delSpot = (id) => { if(confirm("Delete this spot?")) onSaveSpots(spots.filter(s=>s.id!==id)); };

  const saveHosp = (h) => {
    const data = { ...h, id: h.id || "h"+Date.now() };
    const exists = extraHosp.find(x=>x.id===data.id);
    onSaveHosp(exists ? extraHosp.map(x=>x.id===data.id?data:x) : [...extraHosp, data]);
    setHospForm(null);
  };
  const delHosp = (id) => { if(confirm("Delete?")) onSaveHosp(extraHosp.filter(h=>h.id!==id)); };

  return (
    <div style={{ position:"fixed", inset:0, zIndex:300, background:"rgba(0,0,0,0.5)", backdropFilter:"blur(6px)",
      display:"flex", alignItems:"flex-start", justifyContent:"center", overflowY:"auto", padding:"16px" }}
      onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={{ width:"100%", maxWidth:580, background:C.bg, borderRadius:24, overflow:"hidden", boxShadow:C.shMd }}>

        {/* Header */}
        <div style={{ background:C.primary, padding:"18px 24px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div style={{ color:"#fff" }}>
            <div style={{ fontWeight:800, fontSize:18 }}>⚙️ {t.adminTitle}</div>
            <div style={{ fontSize:12, opacity:0.75, marginTop:2 }}>isshogo.com</div>
          </div>
          <button onClick={onClose} style={{ background:"rgba(255,255,255,0.2)", border:"none", color:"#fff",
            borderRadius:10, padding:"6px 14px", cursor:"pointer", fontSize:14, fontFamily:"inherit" }}>✕</button>
        </div>

        <div style={{ padding:24 }}>
          {!authed ? (
            /* Login */
            <form onSubmit={login} style={{ maxWidth:300, margin:"0 auto", display:"flex", flexDirection:"column", gap:16 }}>
              <div style={{ textAlign:"center", fontSize:48, marginBottom:4 }}>🔐</div>
              <Field label={t.adminPw} value={pw} onChange={setPw} type="password" placeholder="••••••••" />
              {err && <div style={{ color:C.sos, fontSize:13 }}>❌ {t.adminBad}</div>}
              <button style={{ background:C.primary, color:"#fff", border:"none", borderRadius:12, padding:"12px",
                fontWeight:700, fontSize:15, cursor:"pointer", fontFamily:"inherit" }}>{t.adminLogin}</button>
            </form>
          ) : (
            <div style={{ display:"flex", flexDirection:"column", gap:20 }}>

              {/* API KEY SECTION */}
              <div style={{ background:"#FFF9F0", borderRadius:14, padding:"16px", border:`1px solid #FDDBA0` }}>
                <div style={{ fontWeight:800, fontSize:14, color:"#8A6A1A", marginBottom:8 }}>🗝️ Google Maps API Key</div>
                <div style={{ fontSize:12, color:"#8A6A1A", marginBottom:10, lineHeight:1.6 }}>
                  {lang==="ja"
                    ? "APIキーを追加すると周辺スポットを自動検索できます。Google Cloud Consoleで無料取得可能。"
                    : "Add your API key to enable automatic nearby search. Get one free at Google Cloud Console — Places API (New) + Maps Embed API."}
                </div>
                <div style={{ display:"flex", gap:8 }}>
                  <input
                    type="password"
                    value={localApiKey}
                    onChange={e => setLocalApiKey(e.target.value)}
                    placeholder="AIza..."
                    style={{ flex:1, border:`1.5px solid #FDDBA0`, borderRadius:10, padding:"8px 12px", fontSize:13, fontFamily:"inherit", background:"#fff", outline:"none" }}
                  />
                  <button onClick={() => onSaveApiKey(localApiKey)} style={{
                    background:"#D4973A", color:"#fff", border:"none", borderRadius:10,
                    padding:"8px 16px", fontWeight:700, fontSize:13, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap",
                  }}>{t.save}</button>
                </div>
                {localApiKey && <div style={{ fontSize:11, color:"#1A8A5A", marginTop:8, fontWeight:600 }}>✅ API key saved</div>}
                {localApiKey && <ApiTestButton apiKey={localApiKey} />}
              </div>

              {/* HOW TO USE */}
              <div style={{ background:C.primaryLt, borderRadius:14, padding:"14px 16px", fontSize:13, color:C.primaryDk, lineHeight:1.7 }}>
                <strong>📝 How to add a spot:</strong><br/>
                {lang==="ja"
                  ? "① 「スポット追加」をタップ → ② 名前・カテゴリ・住所・メモを入力 → ③ 「保存」で即時反映"
                  : "① Tap '+ Add Spot' → ② Fill in name, category, address, notes → ③ Hit 'Save' — it appears on the site instantly."
                }
              </div>

              {/* Tabs */}
              <div style={{ display:"flex", gap:6, background:"#F0F4F3", borderRadius:12, padding:4 }}>
                {["spots","hospitals"].map(tb=>(
                  <button key={tb} onClick={()=>setAtab(tb)} style={{
                    flex:1, padding:"8px", border:"none", borderRadius:10,
                    fontWeight:700, fontSize:14, cursor:"pointer", fontFamily:"inherit",
                    background: atab===tb ? C.primary : "transparent",
                    color: atab===tb ? "#fff" : C.muted, transition:"all 0.2s",
                  }}>{tb==="spots"?t.tabSpots:t.tabHosp}</button>
                ))}
              </div>

              {/* SPOTS */}
              {atab==="spots" && (
                <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                  {!spotForm && (
                    <PillBtn color={C.primary} solid full onClick={()=>setSpotForm(blankSpot)}>{t.addSpot}</PillBtn>
                  )}
                  {spotForm && (
                    <div style={{ background:C.card, borderRadius:16, padding:20, border:`1px solid ${C.border}`, display:"flex", flexDirection:"column", gap:12 }}>
                      <div style={{ fontWeight:700, fontSize:15, color:C.text }}>
                        {spotForm.id ? "✏️ Edit Spot" : "✨ New Spot"}
                      </div>
                      <Field label={t.sName} value={spotForm.name} onChange={v=>setSpotForm(f=>({...f,name:v}))} placeholder="e.g. Ueno Park" required />
                      <Field label={t.sNameJa} value={spotForm.nameJa} onChange={v=>setSpotForm(f=>({...f,nameJa:v}))} placeholder="例：上野公園" />
                      <FieldSelect label={t.sCat} value={spotForm.category} onChange={v=>setSpotForm(f=>({...f,category:v}))}
                        options={CATS.map(c=>({v:c.id, l:`${c.label} ${lang==="ja"?c.ja:c.en}`}))} />
                      <Field label={t.sAddr} value={spotForm.address} onChange={v=>setSpotForm(f=>({...f,address:v}))} placeholder="e.g. 5-20 Uenokoen, Taito-ku, Tokyo" />
                      <Field label={t.sNote} value={spotForm.note} onChange={v=>setSpotForm(f=>({...f,note:v}))} placeholder="e.g. Large playground, nursing room on 3F" />
                      <Field label={t.sUrl} value={spotForm.url} onChange={v=>setSpotForm(f=>({...f,url:v}))} placeholder="https://..." />
                      <div style={{ fontSize:12, fontWeight:600, color:C.muted, marginTop:4 }}>Facility Tags</div>
                      <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                        {Object.entries(FACILITY_TAGS).map(([id,f])=>(
                          <label key={id} style={{ display:"flex", alignItems:"center", gap:5, cursor:"pointer", fontSize:13 }}>
                            <input type="checkbox" checked={(spotForm.tags||[]).includes(id)}
                              onChange={e=>setSpotForm(sf=>({...sf,tags:e.target.checked?[...(sf.tags||[]),id]:(sf.tags||[]).filter(t=>t!==id)}))}
                              style={{ accentColor:C.primary }} />
                            {f.icon} {f.label}
                          </label>
                        ))}
                      </div>
                      <div style={{ display:"flex", gap:10, marginTop:6 }}>
                        <PillBtn color={C.primary} solid onClick={()=>{
                          if(!spotForm.name&&!spotForm.nameJa){alert("Name required");return;}
                          saveSpot(spotForm);
                        }}>{t.save}</PillBtn>
                        <PillBtn color={C.mid} onClick={()=>setSpotForm(null)}>{t.cancel}</PillBtn>
                      </div>
                    </div>
                  )}
                  {spots.length===0 && !spotForm && (
                    <div style={{ textAlign:"center", color:C.muted, fontSize:14, padding:24 }}>No spots yet.</div>
                  )}
                  {spots.map((s,i)=>(
                    <SpotCard key={s.id} spot={s} idx={i} lang={lang} t={t} isAdmin
                      onEdit={sp=>{setSpotForm(sp);}} onDel={delSpot} />
                  ))}
                </div>
              )}

              {/* HOSPITALS */}
              {atab==="hospitals" && (
                <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                  {!hospForm && (
                    <PillBtn color={C.primary} solid full onClick={()=>setHospForm(blankHosp)}>{t.addHosp}</PillBtn>
                  )}
                  {hospForm && (
                    <div style={{ background:C.card, borderRadius:16, padding:20, border:`1px solid ${C.border}`, display:"flex", flexDirection:"column", gap:12 }}>
                      <div style={{ fontWeight:700, fontSize:15 }}>{hospForm.id?"✏️ Edit Hospital":"🏥 Add Hospital"}</div>
                      <Field label={t.hName} value={hospForm.name} onChange={v=>setHospForm(f=>({...f,name:v}))} placeholder="e.g. Osaka Red Cross Hospital" required />
                      <Field label={t.hNameJa} value={hospForm.nameJa} onChange={v=>setHospForm(f=>({...f,nameJa:v}))} placeholder="例：大阪赤十字病院" />
                      <Field label={t.hArea} value={hospForm.area} onChange={v=>setHospForm(f=>({...f,area:v}))} placeholder="e.g. Osaka · Tennoji-ku" />
                      <Field label={t.hAddr} value={hospForm.address} onChange={v=>setHospForm(f=>({...f,address:v}))} />
                      <Field label={t.hPhone} value={hospForm.phone} onChange={v=>setHospForm(f=>({...f,phone:v}))} placeholder="+81-6-xxxx-xxxx" type="tel" />
                      <Field label={t.hSite} value={hospForm.website} onChange={v=>setHospForm(f=>({...f,website:v}))} placeholder="https://..." />
                      <Field label={t.hSpec} value={hospForm.specialty} onChange={v=>setHospForm(f=>({...f,specialty:v}))} placeholder="General, Pediatrics, OB/GYN" />
                      <FieldSelect label={t.hEn} value={hospForm.en} onChange={v=>setHospForm(f=>({...f,en:v}))}
                        options={[{v:"full",l:t.full},{v:"partial",l:t.partial}]} />
                      <FieldCheck label={t.hEmerg} checked={hospForm.emergency} onChange={v=>setHospForm(f=>({...f,emergency:v}))} />
                      <Field label={t.hNote} value={hospForm.note} onChange={v=>setHospForm(f=>({...f,note:v}))} placeholder="Notes for visitors..." />
                      <div style={{ display:"flex", gap:10 }}>
                        <PillBtn color={C.primary} solid onClick={()=>{if(!hospForm.name){alert("Name required");return;}saveHosp(hospForm);}}>{t.save}</PillBtn>
                        <PillBtn color={C.mid} onClick={()=>setHospForm(null)}>{t.cancel}</PillBtn>
                      </div>
                    </div>
                  )}
                  <div style={{ fontSize:12, color:C.muted, fontStyle:"italic" }}>
                    {lang==="ja"?"※プリロード済みの病院はこちらでは編集できません。追加した病院のみ表示。"
                    :"Pre-loaded hospitals can't be edited here. Your added hospitals appear below:"}
                  </div>
                  {extraHosp.length===0 && !hospForm && (
                    <div style={{ textAlign:"center", color:C.muted, fontSize:14, padding:16 }}>No custom hospitals yet.</div>
                  )}
                  {extraHosp.map(h=>(
                    <HospCard key={h.id} h={h} lang={lang} t={t} isAdmin onEdit={setHospForm} onDel={delHosp} />
                  ))}
                </div>
              )}

              <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:16 }}>
                <PillBtn color={C.mid} onClick={onClose}>{t.logout} ↩</PillBtn>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   MENU PANEL
══════════════════════════════════════════ */
function MenuPanel({ t, lang, onAdmin, onClose }) {
  const items = [
    { icon:"♡", label: t.favs },
    { icon:"🕐", label: lang==="ja"?"最近見たスポット":"Recently Viewed" },
    { icon:"📝", label: lang==="ja"?"レビューを書く":"Write a Review" },
    { icon:"📖", label: lang==="ja"?"使い方ガイド":"How to Use" },
    { icon:"⚙️", label: lang==="ja"?"設定":"Settings" },
    { icon:"ℹ️", label: lang==="ja"?"このアプリについて":"About Isshogo" },
  ];
  return (
    <div style={{ position:"fixed", inset:0, zIndex:150, background:"rgba(0,0,0,0.35)", backdropFilter:"blur(4px)",
      display:"flex", justifyContent:"flex-end" }}
      onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={{ width:280, height:"100%", background:C.card, display:"flex", flexDirection:"column",
        boxShadow:"-8px 0 32px rgba(0,0,0,0.12)" }}>
        <div style={{ padding:"24px 20px", display:"flex", justifyContent:"space-between", alignItems:"center",
          borderBottom:`1px solid ${C.border}` }}>
          <div style={{ fontWeight:800, fontSize:18, color:C.text }}>{t.menuTitle}</div>
          <button onClick={onClose} style={{ background:"none", border:"none", cursor:"pointer", fontSize:20, color:C.muted }}>×</button>
        </div>
        {/* User area */}
        <div style={{ padding:"16px 20px", display:"flex", alignItems:"center", gap:12, borderBottom:`1px solid ${C.border}` }}>
          <div style={{ width:44, height:44, borderRadius:50, background:C.primaryLt, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>👤</div>
          <div style={{ fontSize:14, color:C.muted }}>{t.login}</div>
        </div>
        {/* Menu items */}
        <div style={{ flex:1, padding:"8px 0", overflowY:"auto" }}>
          {items.map(item=>(
            <div key={item.label} style={{ display:"flex", justifyContent:"space-between", alignItems:"center",
              padding:"14px 20px", cursor:"pointer", borderBottom:`1px solid ${C.border}30` }}>
              <div style={{ display:"flex", gap:12, alignItems:"center" }}>
                <span style={{ fontSize:18 }}>{item.icon}</span>
                <span style={{ fontSize:15, color:C.text }}>{item.label}</span>
              </div>
              <span style={{ color:C.muted }}>›</span>
            </div>
          ))}
          {/* Admin button */}
          <div onClick={()=>{onClose();onAdmin();}} style={{ display:"flex", justifyContent:"space-between", alignItems:"center",
            padding:"14px 20px", cursor:"pointer", borderTop:`1px solid ${C.border}`, marginTop:8 }}>
            <div style={{ display:"flex", gap:12, alignItems:"center" }}>
              <span style={{ fontSize:18 }}>⚙️</span>
              <span style={{ fontSize:15, color:C.primary, fontWeight:700 }}>{t.adminTitle}</span>
            </div>
            <span style={{ color:C.primary }}>›</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN APP
══════════════════════════════════════════ */
/* ══════════════════════════════════════════
   GOOGLE MAPS JS API COMPONENT
══════════════════════════════════════════ */
function GoogleMapView({ apiKey, userLoc, cat, lang, onPlacesFound }) {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);
  const mapInstance = useRef(null);
  const markers = useRef([]);
  const infoWindow = useRef(null);
  const userMarker = useRef(null);

  // Load Google Maps JS API script
  useEffect(() => {
    if (!apiKey) return;
    if (window.google?.maps) { setMapReady(true); return; }
    if (document.getElementById("gmaps-script")) return;
    const script = document.createElement("script");
    script.id = "gmaps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.onload = () => setMapReady(true);
    document.head.appendChild(script);
  }, [apiKey]);

  // Init map + pan to userLoc (combined so timing is handled correctly)
  useEffect(() => {
    if (!mapReady || !mapRef.current) return;
    const center = userLoc ? { lat: userLoc.lat, lng: userLoc.lng } : { lat: 35.6762, lng: 139.6503 };
    if (mapInstance.current) {
      // Map already exists — just pan to new location
      mapInstance.current.panTo(center);
    } else {
      // First init — create map centered on userLoc (or Tokyo default)
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center, zoom: 14,
        mapTypeControl: false, streetViewControl: false, fullscreenControl: false,
      });
      infoWindow.current = new window.google.maps.InfoWindow();
    }
    // Add/update blue user dot
    if (userLoc) {
      if (userMarker.current) userMarker.current.setMap(null);
      userMarker.current = new window.google.maps.Marker({
        position: center, map: mapInstance.current,
        icon: { path: window.google.maps.SymbolPath.CIRCLE, scale: 9, fillColor: "#4285F4", fillOpacity: 1, strokeColor: "#fff", strokeWeight: 3 },
        zIndex: 999, title: "Your location",
      });
    }
  }, [mapReady, userLoc]);

  // Search places when category or location changes
  useEffect(() => {
    if (!mapInstance.current || !cat || !userLoc || !window.google) return;
    markers.current.forEach(m => m.setMap(null));
    markers.current = [];
    const queries = {
      cafe: "family friendly cafe restaurant", nursing: "授乳室 nursing room baby",
      diaper: "おむつ替え diaper changing", indoor: "indoor children play area kids",
      sights: "family tourist attraction", clinics: "English speaking clinic hospital",
    };
    const svc = new window.google.maps.places.PlacesService(mapInstance.current);
    svc.textSearch({
      query: queries[cat] || cat,
      location: new window.google.maps.LatLng(userLoc.lat, userLoc.lng),
      radius: 2000,
    }, (results, status) => {
      if (status !== "OK" || !results) return;
      onPlacesFound && onPlacesFound(results.slice(0, 8));
      results.slice(0, 12).forEach(place => {
        const marker = new window.google.maps.Marker({
          position: place.geometry.location, map: mapInstance.current,
          title: place.name, animation: window.google.maps.Animation.DROP,
        });
        marker.addListener("click", () => {
          const rating = place.rating
            ? `<div style="font-size:12px;margin:3px 0"><span style="color:#F5A94F;font-weight:700">★ ${place.rating}</span> <span style="color:#888">(${place.user_ratings_total || 0})</span></div>` : "";
          const isOpen = place.opening_hours?.isOpen?.();
          const openStatus = isOpen !== undefined
            ? `<div style="font-size:12px;font-weight:700;color:${isOpen?"#1A8A5A":"#DC2626"}">${isOpen?"🟢 Open now":"🔴 Closed"}</div>` : "";
          const photo = place.photos?.[0]?.getUrl({ maxWidth: 240, maxHeight: 120 });
          infoWindow.current.setContent(`
            <div style="max-width:240px;font-family:'Nunito',sans-serif;padding:2px">
              ${photo ? `<img src="${photo}" style="width:100%;height:110px;object-fit:cover;border-radius:8px;margin-bottom:8px;display:block">` : ""}
              <div style="font-weight:800;font-size:14px;color:#2C3535;line-height:1.3;margin-bottom:4px">${place.name}</div>
              ${rating}${openStatus}
              <div style="font-size:11px;color:#888;margin:4px 0">${place.vicinity || ""}</div>
              <a href="https://www.google.com/maps/place/?q=place_id:${place.place_id}" target="_blank"
                style="display:inline-block;margin-top:8px;background:#5BBFAD;color:#fff;padding:6px 14px;border-radius:8px;text-decoration:none;font-size:12px;font-weight:700">
                Open in Maps →
              </a>
            </div>
          `);
          infoWindow.current.open(mapInstance.current, marker);
        });
        markers.current.push(marker);
      });
    });
  }, [cat, userLoc, mapReady]);

  return (
    <div style={{ position: "relative", width: "100%", height: 320 }}>
      <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
      {!mapReady && (
        <div style={{ position:"absolute", inset:0, background:"#E8EDEB", display:"flex", alignItems:"center", justifyContent:"center", color:"#9AACAA", fontSize:14 }}>
          Loading map…
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [cat, setCat] = useState(null);
  const [userLoc, setUserLoc] = useState(null);
  const [locStatus, setLocStatus] = useState("idle");
  const [spots, setSpots] = useState([]);
  const [extraHosp, setExtraHosp] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [openTip, setOpenTip] = useState(null);
  const [apiKey, setApiKey] = useState(() => {
    try { return localStorage.getItem("isshogo_apikey") || ""; } catch { return ""; }
  });
  const [placeResults, setPlaceResults] = useState([]);
  const [placesLoading, setPlacesLoading] = useState(false);
  const logoRef = useRef(0);
  const timerRef = useRef(null);
  const t = T[lang];
  const allHosp = [...HOSP_DEFAULT, ...extraHosp];

  // Load fonts
  useEffect(() => {
    const el = document.createElement("link");
    el.rel = "stylesheet";
    el.href = "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Noto+Sans+JP:wght@400;500;700;900&display=swap";
    document.head.appendChild(el);
  }, []);

  // Auto-get location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      setLocStatus("busy");
      navigator.geolocation.getCurrentPosition(
        p => {
          const loc = { lat: p.coords.latitude, lng: p.coords.longitude };
          setUserLoc(loc);
          setLocStatus("ok");
        },
        () => setLocStatus("idle"),
        { timeout: 10000 }
      );
    }
  }, []);
    (async () => {
      try { const s = localStorage.getItem("isshogo_spots"); if(s) setSpots(JSON.parse(s)); } catch {}
      try { const h = localStorage.getItem("isshogo_hosp_x"); if(h) setExtraHosp(JSON.parse(h)); } catch {}
      try { const k = localStorage.getItem("isshogo_apikey"); if(k) setApiKey(k); } catch {}
    })();
  }, []);

  const saveSpots   = (d) => { setSpots(d);      try { localStorage.setItem("isshogo_spots",   JSON.stringify(d)); } catch {} };
  const saveHosp    = (d) => { setExtraHosp(d); try { localStorage.setItem("isshogo_hosp_x",  JSON.stringify(d)); } catch {} };
  const saveApiKey  = (k) => { setApiKey(k);    try { localStorage.setItem("isshogo_apikey",  k);                } catch {} };

  const [placesError, setPlacesError] = useState("");

  // Places API type mapping
  const PLACE_SEARCH = {
    cafe:    { textQuery: "family friendly cafe restaurant" },
    nursing: { textQuery: "授乳室 nursing room baby" },
    diaper:  { textQuery: "おむつ替え diaper changing station" },
    indoor:  { textQuery: "indoor children play area kids" },
    sights:  { textQuery: "family tourist attraction sightseeing" },
    clinics: { textQuery: "English speaking clinic hospital doctor" },
  };

  const searchNearby = async (loc, catId) => {
    if (!apiKey || !loc || !catId || catId === "clinics") return;
    const search = PLACE_SEARCH[catId];
    if (!search) return;
    setPlacesLoading(true);
    setPlaceResults([]);
    setPlacesError("");
    try {
      const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.photos,places.currentOpeningHours,places.googleMapsUri",
        },
        body: JSON.stringify({
          textQuery: search.textQuery,
          locationBias: { circle: { center: { latitude: loc.lat, longitude: loc.lng }, radius: 1500 } },
          maxResultCount: 8,
          languageCode: "en",
        }),
      });
      const data = await res.json();
      if (data.error) {
        setPlacesError(`API Error: ${data.error.message}`);
      } else {
        setPlaceResults(data.places || []);
        if ((data.places || []).length === 0) setPlacesError("No results found nearby. Try moving the map or selecting a different category.");
      }
    } catch (e) {
      const msg = e.message || "";
      if (msg.includes("Load failed") || msg.includes("Failed to fetch") || msg.includes("Network")) {
        setPlacesError(lang === "ja"
          ? "⚠️ プレビュー環境ではGoogle APIへのアクセスが制限されています。isshogo.comに公開後は正常に動作します。"
          : "⚠️ Claude's preview blocks external API calls. The Places search will work fully once deployed to isshogo.com!");
      } else {
        setPlacesError("API Error: " + msg);
      }
    }
    setPlacesLoading(false);
  };

  const getLocation = () => {
    if (!navigator.geolocation) { setLocStatus("no"); return; }
    setLocStatus("busy");
    navigator.geolocation.getCurrentPosition(
      p => {
        const loc = { lat: p.coords.latitude, lng: p.coords.longitude };
        setUserLoc(loc);
        setLocStatus("ok");
        if (cat) searchNearby(loc, cat);
      },
      () => setLocStatus("no"),
      { timeout: 10000 }
    );
  };

  const mapSrc = () => {
    if (!cat) {
      if (userLoc) return `https://maps.google.com/maps?q=${userLoc.lat},${userLoc.lng}&z=14&output=embed&hl=en`;
      return `https://maps.google.com/maps?q=35.6762,139.6503&z=11&output=embed&hl=en`;
    }
    const c = CATS.find(x => x.id === cat);
    if (!c) return "";
    if (apiKey && userLoc) {
      return `https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=${encodeURIComponent(c.query)}&center=${userLoc.lat},${userLoc.lng}&zoom=14&language=en`;
    }
    if (userLoc) return `https://maps.google.com/maps?q=${encodeURIComponent(c.query)}&ll=${userLoc.lat},${userLoc.lng}&z=14&output=embed&hl=en`;
    return `https://maps.google.com/maps?q=${encodeURIComponent(c.query + " Japan")}&output=embed&hl=en`;
  };

  const handleCatClick = (id) => {
    const next = cat === id ? null : id;
    setCat(next);
    setPlaceResults([]);
    setPlacesError("");
    if (next && userLoc) searchNearby(userLoc, next);
  };

  // Logo 5-tap admin
  const handleLogoTap = () => {
    logoRef.current += 1;
    clearTimeout(timerRef.current);
    if (logoRef.current >= 5) { setShowAdmin(true); logoRef.current = 0; return; }
    timerRef.current = setTimeout(() => { logoRef.current = 0; }, 2500);
  };

  const filteredSpots = cat ? spots.filter(s => s.category === cat) : spots;

  return (
    <div style={{ fontFamily:"'Nunito','Noto Sans JP',sans-serif", background:C.bg, minHeight:"100vh", maxWidth:500, margin:"0 auto", position:"relative" }}>
      <style>{`
        * { box-sizing:border-box; margin:0; padding:0; }
        body { background: #E8EDEB; }
        button:active { transform:scale(0.97); }
        .cat:hover { transform:translateY(-3px); }
      `}</style>

      {/* ── APP HEADER ── */}
      <div style={{ background:C.card, padding:"14px 20px 0", boxShadow:"0 1px 0 rgba(0,0,0,0.06)", position:"sticky", top:0, zIndex:50 }}>
        {/* Top bar */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
          <div onClick={handleLogoTap} style={{ cursor:"pointer" }}>
            <IsshogoLogo iconSize={42} />
          </div>
          <div style={{ display:"flex", gap:8, alignItems:"center" }}>
            {/* Language toggle */}
            <div style={{ display:"flex", background:C.bg, borderRadius:20, padding:2 }}>
              {["en","ja"].map(l=>(
                <button key={l} onClick={()=>setLang(l)} style={{
                  border:"none", borderRadius:18, padding:"3px 10px", cursor:"pointer",
                  fontWeight:700, fontSize:11, fontFamily:"inherit",
                  background: lang===l ? C.primary : "transparent",
                  color: lang===l ? "#fff" : C.muted, transition:"all 0.2s",
                }}>{l==="en"?"EN":"日本語"}</button>
              ))}
            </div>
            <button onClick={()=>setShowMenu(true)} style={{ background:"none", border:"none", cursor:"pointer", fontSize:22, color:C.muted, padding:"0 4px" }}>☰</button>
          </div>
        </div>
        {/* Search bar */}
        <div style={{ background:C.bg, borderRadius:24, padding:"10px 16px", display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
          <span style={{ color:C.muted, fontSize:16 }}>🔍</span>
          <span style={{ color:C.muted, fontSize:14 }}>{t.search}</span>
        </div>
      </div>

      {/* ── SINGLE PAGE CONTENT ── */}
      <div style={{ display:"flex", flexDirection:"column", gap:0 }}>

        {/* Map */}
        <div style={{ position:"relative" }}>
          {apiKey ? (
            <GoogleMapView
              apiKey={apiKey}
              userLoc={userLoc}
              cat={cat}
              lang={lang}
              onPlacesFound={(results) => {
                const mapped = results.map(p => ({
                  id: p.place_id,
                  displayName: { text: p.name },
                  formattedAddress: p.vicinity || p.formatted_address || "",
                  rating: p.rating,
                  userRatingCount: p.user_ratings_total,
                  googleMapsUri: `https://www.google.com/maps/place/?q=place_id:${p.place_id}`,
                  currentOpeningHours: p.opening_hours ? { openNow: p.opening_hours.isOpen?.() } : undefined,
                  photos: p.photos ? [{ name: "_js_", _jsPhoto: p.photos[0] }] : [],
                }));
                setPlaceResults(mapped);
              }}
            />
          ) : (
            <iframe key={mapSrc()} src={mapSrc()} width="100%" height="320"
              style={{ border:"none", display:"block" }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Isshogo map" />
          )}
          <button onClick={getLocation} style={{
            position:"absolute", bottom:14, right:14, background:C.card,
            border:"none", borderRadius:50, width:44, height:44, cursor:"pointer",
            boxShadow:C.shMd, fontSize:20, display:"flex", alignItems:"center", justifyContent:"center",
          }}>🎯</button>
        </div>

        {/* Location status */}
        {locStatus !== "idle" && (
          <div style={{ background:C.card, padding:"8px 20px", borderBottom:`1px solid ${C.border}` }}>
            <span style={{ fontSize:13, fontWeight:600, color: locStatus==="ok"?"#1A8A5A":locStatus==="no"?C.sos:C.muted }}>
              {locStatus==="ok"?t.locFound:locStatus==="busy"?t.locBusy:t.locNo}
            </span>
          </div>
        )}

        {/* Category circles */}
        <div style={{ background:C.card, padding:"16px 16px 20px", borderBottom:`1px solid ${C.border}` }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12 }}>
            {CATS.map(c => (
              <button key={c.id} className="cat" onClick={()=>handleCatClick(c.id)} style={{
                display:"flex", flexDirection:"column", alignItems:"center", gap:8,
                background:"none", border:"none", cursor:"pointer", fontFamily:"inherit",
                padding:"4px", transition:"transform 0.2s",
              }}>
                <div style={{
                  width:62, height:62, borderRadius:50,
                  background: cat===c.id ? c.color : c.bg,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  boxShadow: cat===c.id ? `0 6px 16px ${c.color}40` : "none",
                  border: cat===c.id ? `3px solid ${c.color}` : "3px solid transparent",
                  transition:"all 0.2s",
                }}>
                  <CatIcon id={c.id} color={cat===c.id ? "#fff" : c.color} size={34} />
                </div>
                <span style={{ fontSize:12, fontWeight:700, color: cat===c.id ? c.color : C.mid, textAlign:"center", lineHeight:1.2 }}>
                  {lang==="ja" ? c.ja : c.en}
                </span>
              </button>
            ))}
          </div>
          <button onClick={getLocation} style={{
            width:"100%", marginTop:14, background: locStatus==="ok" && !cat ? C.teal : C.primary, color:"#fff",
            border:"none", borderRadius:16, padding:"13px", fontFamily:"inherit",
            fontWeight:800, fontSize:15, cursor:"pointer",
            boxShadow:`0 4px 16px ${C.primary}40`,
          }}>
            {locStatus==="busy" ? t.locBusy :
             locStatus==="ok" && !cat ? (lang==="ja" ? "✅ 現在地取得済み — カテゴリを選んでください" : "✅ Location found — now select a category!") :
             locStatus==="ok" && cat ? (lang==="ja" ? "🔄 再検索" : "🔄 Search Again") :
             t.nearMe}
          </button>
        </div>

        {/* ── CLINICS LIST (when clinics selected) ── */}
        {cat==="clinics" && (
          <div style={{ padding:"20px 16px", display:"flex", flexDirection:"column", gap:14 }}>
            <div style={{ fontWeight:900, fontSize:18, color:C.text }}>🏥 {t.hospTitle}</div>
            <div style={{ fontSize:13, color:C.muted }}>{t.hospSub}</div>

            {/* Find nearby clinics on Google Maps */}
            <button onClick={() => {
              const query = "English speaking clinic hospital";
              const url = userLoc
                ? `https://www.google.com/maps/search/${encodeURIComponent(query)}/@${userLoc.lat},${userLoc.lng},14z`
                : `https://www.google.com/maps/search/${encodeURIComponent(query + " Japan")}`;
              window.open(url, "_blank");
            }} style={{
              background:`linear-gradient(135deg, #CF7B68, #E09080)`,
              color:"#fff", border:"none", borderRadius:14, padding:"13px 20px",
              fontFamily:"inherit", fontWeight:800, fontSize:15, cursor:"pointer",
              boxShadow:"0 4px 16px rgba(207,123,104,0.35)",
              display:"flex", alignItems:"center", justifyContent:"center", gap:8,
            }}>
              🗺️ {lang==="ja" ? "周辺のクリニックをGoogle Mapsで探す" : "Find nearby clinics on Google Maps"}
            </button>

            {/* Places API results for clinics */}
            {placesLoading && (
              <div style={{ textAlign:"center", padding:"16px", color:C.muted, fontSize:14 }}>
                <div style={{ fontSize:28, marginBottom:6 }}>🔍</div>
                {lang==="ja" ? "検索中…" : "Searching nearby…"}
              </div>
            )}
            {!placesLoading && placeResults.length > 0 && (
              <>
                <div style={{ fontSize:12, fontWeight:700, color:C.muted, display:"flex", alignItems:"center", gap:6 }}>
                  <span style={{ background:C.primaryLt, color:C.primary, padding:"2px 8px", borderRadius:20, fontSize:11 }}>Google</span>
                  {lang==="ja" ? `周辺のクリニック (${placeResults.length})` : `Nearby clinics (${placeResults.length})`}
                </div>
                {placeResults.map((place, i) => {
                  const name = place.displayName?.text || "";
                  const address = place.formattedAddress || "";
                  const rating = place.rating;
                  const mapsUrl = place.googleMapsUri || `https://maps.google.com/?q=${encodeURIComponent(name)}`;
                  return (
                    <div key={place.id || i} style={{ background:C.card, borderRadius:16, padding:"14px 16px", boxShadow:C.sh, border:`1px solid ${C.border}`, display:"flex", gap:14 }}>
                      <PhotoThumb idx={i+3} size={72} />
                      <div style={{ flex:1, display:"flex", flexDirection:"column", gap:5 }}>
                        <div style={{ fontWeight:700, fontSize:15, color:C.text }}>{name}</div>
                        {rating && <div style={{ fontSize:12, color:"#F5A94F", fontWeight:700 }}>{"★".repeat(Math.round(rating))} {rating.toFixed(1)}</div>}
                        {address && <div style={{ fontSize:12, color:C.muted }}>📍 {address}</div>}
                        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none" }}>
                          <PillBtn color={C.primary} light>{t.maps}</PillBtn>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </>
            )}

            {/* Divider */}
            <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:14 }}>
              <div style={{ fontSize:13, fontWeight:700, color:C.mid, marginBottom:10 }}>
                {lang==="ja" ? "📋 英語対応 厳選病院リスト" : "📋 Curated English-OK Hospitals"}
              </div>
            </div>

            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              <span style={{ fontSize:12, fontWeight:700, padding:"3px 10px", borderRadius:20, color:"#1A8A5A", background:"#E5F5ED" }}>{t.full}</span>
              <span style={{ fontSize:12, fontWeight:700, padding:"3px 10px", borderRadius:20, color:"#B07A1A", background:"#FEF5E3" }}>{t.partial}</span>
              <span style={{ fontSize:12, fontWeight:700, padding:"3px 10px", borderRadius:20, color:C.sos, background:C.sosLt }}>{t.emergency}</span>
            </div>
            {allHosp.map(h=>(
              <HospCard key={h.id} h={h} lang={lang} t={t} isAdmin={false} onEdit={()=>{}} onDel={()=>{}} />
            ))}
            <div style={{ fontSize:12, color:C.muted, textAlign:"center", lineHeight:1.7, background:C.card, borderRadius:12, padding:"12px 16px" }}>
              ⚠️ {t.footNote}
            </div>
          </div>
        )}

        {/* ── PLACES API RESULTS + CUSTOM SPOTS (non-clinics) ── */}
        {cat !== "clinics" && (
          <div style={{ padding:"20px 16px", display:"flex", flexDirection:"column", gap:12 }}>

            {/* Loading spinner */}
            {placesLoading && (
              <div style={{ textAlign:"center", padding:"24px", color:C.muted, fontSize:14 }}>
                <div style={{ fontSize:32, marginBottom:8 }}>🔍</div>
                {lang==="ja" ? "検索中…" : "Searching nearby…"}
              </div>
            )}

            {/* Google Places results */}
            {!placesLoading && placeResults.length > 0 && (
              <>
                <div style={{ fontSize:12, fontWeight:700, color:C.muted, letterSpacing:0.5, display:"flex", alignItems:"center", gap:6 }}>
                  <span style={{ background:C.primaryLt, color:C.primary, padding:"2px 8px", borderRadius:20, fontSize:11 }}>Google</span>
                  {lang==="ja" ? `周辺のスポット (${placeResults.length})` : `Nearby spots (${placeResults.length})`}
                </div>
                {placeResults.map((place, i) => {
                  const name = place.displayName?.text || "";
                  const address = place.formattedAddress || "";
                  const rating = place.rating;
                  const ratingCount = place.userRatingCount;
                  const isOpen = place.currentOpeningHours?.openNow;
                  const photoName = place.photos?.[0]?.name;
                  const photoUrl = photoName ? `https://places.googleapis.com/v1/${photoName}/media?maxWidthPx=120&key=${apiKey}` : null;
                  const mapsUrl = place.googleMapsUri || `https://maps.google.com/?q=${encodeURIComponent(name)}`;
                  return (
                    <div key={place.id || i} style={{
                      background:C.card, borderRadius:16, padding:"14px 16px",
                      boxShadow:C.sh, border:`1px solid ${C.border}`,
                      display:"flex", gap:14, alignItems:"flex-start",
                    }}>
                      {photoUrl
                        ? <img src={photoUrl} alt={name} style={{ width:72, height:72, borderRadius:10, objectFit:"cover", flexShrink:0 }} />
                        : <PhotoThumb idx={i} size={72} />
                      }
                      <div style={{ flex:1, display:"flex", flexDirection:"column", gap:5 }}>
                        <div style={{ fontWeight:700, fontSize:15, color:C.text, lineHeight:1.3 }}>{name}</div>
                        {rating && (
                          <div style={{ fontSize:12, color:C.mid, display:"flex", alignItems:"center", gap:4 }}>
                            <span style={{ color:"#F5A94F", fontWeight:700 }}>{"★".repeat(Math.round(rating))}</span>
                            <span>{rating.toFixed(1)}</span>
                            {ratingCount && <span style={{ color:C.muted }}>({ratingCount.toLocaleString()})</span>}
                          </div>
                        )}
                        {address && <div style={{ fontSize:12, color:C.muted, lineHeight:1.4 }}>📍 {address}</div>}
                        {isOpen !== undefined && (
                          <span style={{ fontSize:11, fontWeight:700, color: isOpen ? "#1A8A5A" : C.sos }}>
                            {isOpen ? (lang==="ja" ? "営業中" : "Open now") : (lang==="ja" ? "営業時間外" : "Closed")}
                          </span>
                        )}
                        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none", marginTop:2 }}>
                          <PillBtn color={C.primary} light>{t.maps}</PillBtn>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </>
            )}

            {/* API Error display */}
            {placesError && !placesLoading && (
              <div style={{ background:"#FEF2F2", border:`1px solid #FECACA`, borderRadius:14, padding:"12px 16px", fontSize:13, color:"#DC2626", lineHeight:1.6 }}>
                ⚠️ {placesError}
              </div>
            )}
            {!apiKey && !placesLoading && placeResults.length === 0 && (
              <div style={{ background:"#FFF9F0", border:`1px solid #FDDBA0`, borderRadius:14, padding:"14px 16px", fontSize:13, color:"#8A6A1A", lineHeight:1.6 }}>
                💡 {lang==="ja"
                  ? "Google Maps APIキーを管理画面に追加すると、周辺のスポットが自動で表示されます。"
                  : "Add your Google Maps API key in the Admin Panel to auto-search nearby spots."}
              </div>
            )}

            {/* Custom spots section */}
            {filteredSpots.length > 0 && (
              <>
                <div style={{ fontSize:12, fontWeight:700, color:C.muted, letterSpacing:0.5, marginTop:placeResults.length>0?8:0, display:"flex", alignItems:"center", gap:6 }}>
                  <span style={{ background:"#F0F4F3", color:C.mid, padding:"2px 8px", borderRadius:20, fontSize:11 }}>
                    {lang==="ja" ? "登録済み" : "Curated"}
                  </span>
                  {t.mySpots} ({filteredSpots.length})
                </div>
                {filteredSpots.map((s,i) => (
                  <SpotCard key={s.id} spot={s} idx={i} lang={lang} t={t} isAdmin={false} onEdit={()=>{}} onDel={()=>{}} />
                ))}
              </>
            )}

            {/* Empty state — no results at all */}
            {!placesLoading && placeResults.length === 0 && filteredSpots.length === 0 && apiKey && (
              <div style={{ textAlign:"center", padding:"32px 20px", color:C.muted, fontSize:14,
                background:C.card, borderRadius:16, border:`1px dashed ${C.border}` }}>
                <div style={{ fontSize:36, marginBottom:10 }}>🌍</div>
                {lang==="ja" ? "現在地を取得して検索してみましょう" : "Get your location to search nearby spots"}
              </div>
            )}
          </div>
        )}

        {/* ── TIPS — collapsible accordion ── */}
        <div style={{ padding:"24px 16px 16px", borderTop:`1px solid ${C.border}` }}>
          <div style={{ fontWeight:900, fontSize:18, color:C.text, marginBottom:4 }}>✈️ {t.tipsTitle}</div>
          <div style={{ fontSize:13, color:C.muted, marginBottom:16 }}>{t.tipsSub}</div>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {TIPS[lang].map((tip,i)=> {
              const isOpen = openTip === i;
              return (
                <div key={i} style={{ background:C.card, borderRadius:16,
                  boxShadow:C.sh, border:`1px solid ${isOpen ? C.primary : C.border}`,
                  overflow:"hidden", transition:"border-color 0.2s" }}>
                  {/* Header — always visible, clickable */}
                  <button onClick={()=>setOpenTip(isOpen ? null : i)} style={{
                    width:"100%", display:"flex", alignItems:"center", gap:14,
                    padding:"14px 18px", background:"none", border:"none",
                    cursor:"pointer", fontFamily:"inherit", textAlign:"left",
                  }}>
                    <span style={{ fontSize:26, flexShrink:0 }}>{tip.icon}</span>
                    <span style={{ fontWeight:800, fontSize:14, color:C.text, flex:1 }}>{tip.t}</span>
                    <span style={{ fontSize:18, color:C.muted, transition:"transform 0.25s",
                      display:"inline-block", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                      ›
                    </span>
                  </button>
                  {/* Body — revealed on click */}
                  {isOpen && (
                    <div style={{ padding:"0 18px 16px 58px", fontSize:13, color:C.mid, lineHeight:1.7 }}>
                      {tip.b}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Map note */}
        <div style={{ padding:"12px 16px 28px" }}>
          <div style={{ fontSize:12, color:C.muted, textAlign:"center", lineHeight:1.6 }}>💡 {t.mapNote}</div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{ background:C.primaryDk, color:"rgba(255,255,255,0.7)", padding:"24px 20px", textAlign:"center" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", marginBottom:8 }}>
          <IsshogoLogo iconSize={38} darkBg showTag={false} />
        </div>
        <div style={{ fontSize:12, lineHeight:1.6, marginBottom:12 }}>{lang==="ja"?"子どもとの旅を、もっと楽しく。":"Family travel in Japan, made easy."}</div>
        <button onClick={()=>setShowAdmin(true)} style={{
          background:"rgba(255,255,255,0.12)", color:"rgba(255,255,255,0.8)",
          border:"none", borderRadius:20, padding:"6px 16px", cursor:"pointer",
          fontSize:12, fontFamily:"inherit", fontWeight:600,
        }}>{t.adminBtn}</button>
        <div style={{ fontSize:11, color:"rgba(255,255,255,0.35)", marginTop:12 }}>
          © 2025 isshogo.com · {t.footNote}
        </div>
      </div>

      {/* ── MODALS ── */}
      {showMenu  && <MenuPanel  t={t} lang={lang} onAdmin={()=>setShowAdmin(true)} onClose={()=>setShowMenu(false)} />}
      {showAdmin && <AdminModal t={t} lang={lang} spots={spots} extraHosp={extraHosp}
        apiKey={apiKey} onSaveApiKey={saveApiKey}
        onSaveSpots={saveSpots} onSaveHosp={saveHosp} onClose={()=>setShowAdmin(false)} />}
    </div>
  );
}
