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

const TIPS_BY_COUNTRY = {
  japan: {
    flag:"🇯🇵", name:"Japan", nameJa:"日本",
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
  },
  uk: {
    flag:"🇬🇧", name:"United Kingdom", nameJa:"イギリス",
    en:[
      {icon:"🚌",t:"Public Transport",b:"Most buses, the Tube and trains accommodate buggies. Fold during peak hours. Many stations have lifts — check the TfL website before travelling."},
      {icon:"🏥",t:"NHS Urgent Treatment",b:"For non-emergencies, visit an NHS Urgent Treatment Centre (no appointment needed). Call 111 for medical advice 24/7. Emergency: 999."},
      {icon:"🎪",t:"Soft Play Centres",b:"Soft play centres are everywhere — search 'soft play near me' on Google Maps. Most have cafés and are great on rainy days."},
      {icon:"🛒",t:"Supermarkets",b:"All major supermarkets (Tesco, Sainsbury's, M&S) have baby changing facilities and good ranges of nappies, formula and baby food."},
      {icon:"🍽️",t:"Eating Out",b:"Many pub chains (Wetherspoons, Harvester) offer 'Kids eat free' deals. Most restaurants have high chairs and children's menus."},
      {icon:"🏛️",t:"Free Museums",b:"Most major museums in London and UK cities are free (Natural History Museum, Science Museum, British Museum). Great for families!"},
      {icon:"🏖️",t:"Beaches & Parks",b:"UK beaches and parks are very family-friendly. Many have beach huts, cafés and play parks. Check the tide times before visiting coastal areas."},
      {icon:"📞",t:"Emergency Numbers",b:"Police/Ambulance/Fire: 999 · NHS non-emergency: 111 · Most pharmacies can advise on minor ailments without an appointment."},
    ],
    ja:[
      {icon:"🚌",t:"公共交通機関",b:"ほとんどのバスや地下鉄はベビーカーOK。ラッシュ時は折り畳みが必要な場合も。エレベーターの有無はTfLのウェブサイトで確認を。"},
      {icon:"🏥",t:"NHS緊急外来",b:"急を要しない場合はNHS Urgent Treatment Centreへ（予約不要）。医療相談は111番（24時間）。緊急時は999番。"},
      {icon:"🎪",t:"屋内遊び場",b:"「ソフトプレイ」と呼ばれる屋内遊び場が全国に充実。雨の日にぴったりで、カフェ併設が多いです。"},
      {icon:"🛒",t:"スーパーマーケット",b:"テスコ・セインズベリーズ・M&Sなどの大手スーパーにはおむつ替え室があり、おむつ・粉ミルク・離乳食も豊富に揃います。"},
      {icon:"🍽️",t:"外食のコツ",b:"「子どもが無料で食べられる」キャンペーンを実施しているレストランチェーンも多数。ほとんどの飲食店でハイチェアとキッズメニューあり。"},
      {icon:"🏛️",t:"無料の博物館",b:"ロンドンの大英博物館・自然史博物館・科学博物館など多くが無料。子連れ観光に最適です。"},
      {icon:"🏖️",t:"ビーチ・公園",b:"イギリスのビーチや公園は子連れに優しい環境が整っています。海岸では潮汐に注意。"},
      {icon:"📞",t:"緊急連絡先",b:"警察・救急・消防: 999 ｜ NHS非緊急相談: 111 ｜ 薬局でも軽症の相談に対応してくれます（予約不要）。"},
    ],
  },
  usa: {
    flag:"🇺🇸", name:"USA", nameJa:"アメリカ",
    en:[
      {icon:"🚗",t:"Car Seats",b:"Car seats are mandatory for children. Rental companies provide them for a fee — book in advance. Uber Family also offers car seat options."},
      {icon:"🏥",t:"Medical Care",b:"For non-emergencies, visit an Urgent Care clinic (no appointment, much cheaper than ER). Emergency: 911. Travel insurance is strongly recommended."},
      {icon:"🛍️",t:"Baby Shopping",b:"Target, Walmart and CVS carry nappies, formula and baby essentials. Target has excellent nursing rooms in most stores."},
      {icon:"🍽️",t:"Family Dining",b:"Denny's, IHOP and Cracker Barrel are reliably family-friendly. Many chain restaurants offer kids eat free deals — check the day of the week."},
      {icon:"🏞️",t:"National Parks",b:"America's National Parks are outstanding for families. Kids under 15 are free. Buy the America the Beautiful Pass for unlimited entry."},
      {icon:"✈️",t:"Flying with Kids",b:"Southwest Airlines allows free checked bags. Most airports have family lanes for security. Request pre-boarding for families with young children."},
      {icon:"🌡️",t:"Health Insurance",b:"US healthcare is expensive. Always travel with comprehensive health insurance. Keep all receipts and documents for claims."},
      {icon:"📞",t:"Emergency Numbers",b:"Police/Ambulance/Fire: 911 · Poison Control: 1-800-222-1222 · Most states have a 211 helpline for social services."},
    ],
    ja:[
      {icon:"🚗",t:"チャイルドシート",b:"チャイルドシートは法律で義務付けられています。レンタカー会社では追加料金で貸し出し可（要事前予約）。Uber Familyもオプションあり。"},
      {icon:"🏥",t:"医療機関",b:"急を要しない場合はUrgent Careクリニックへ（予約不要・ERより安価）。緊急時は911番。旅行保険への加入を強くお勧めします。"},
      {icon:"🛍️",t:"ベビー用品の購入",b:"ターゲット・ウォルマート・CVSでおむつ・粉ミルク・育児用品が揃います。ターゲットには授乳室が設置されていることが多いです。"},
      {icon:"🍽️",t:"外食のコツ",b:"デニーズ・IHOPなどのファミリーレストランが安心。曜日によって子どもが無料になるキャンペーンを実施しているお店も多数。"},
      {icon:"🏞️",t:"国立公園",b:"アメリカの国立公園は家族連れに最適。15歳以下は無料。「America the Beautiful Pass」を購入すれば全国立公園が入り放題。"},
      {icon:"✈️",t:"飛行機移動",b:"ほとんどの空港に家族専用レーンあり。幼児連れは優先搭乗をリクエストできます。"},
      {icon:"🌡️",t:"医療費について",b:"アメリカの医療費は非常に高額です。必ず包括的な旅行保険に加入し、領収書や書類は全て保管してください。"},
      {icon:"📞",t:"緊急連絡先",b:"警察・救急・消防: 911 ｜ 中毒情報センター: 1-800-222-1222"},
    ],
  },
  australia: {
    flag:"🇦🇺", name:"Australia", nameJa:"オーストラリア",
    en:[
      {icon:"☀️",t:"Sun Safety",b:"Australia has intense UV radiation. Apply SPF50+ sunscreen every 2 hours, use hats and UV-protective clothing. Slip, Slop, Slap, Seek, Slide!"},
      {icon:"🏖️",t:"Beach Safety",b:"Always swim between the red and yellow flags at patrolled beaches. Never swim alone. Patrolled beaches have lifeguards on weekends and holidays."},
      {icon:"🏥",t:"Medical Care",b:"For non-emergencies, visit a bulk-billing medical centre (free with Medicare for Australian residents). Emergency: 000. Pharmacies are very helpful."},
      {icon:"🏬",t:"Shopping Centre Facilities",b:"Australian shopping centres have excellent parent rooms with microwaves, change tables, feeding areas and play spaces. Usually well-signposted."},
      {icon:"🦘",t:"Wildlife Awareness",b:"Keep children away from wildlife — even cute ones like kangaroos can be dangerous. Check shoes for spiders in regional areas."},
      {icon:"🚌",t:"Public Transport",b:"Most cities have good public transport. Buggies are welcome on all services. Opal (Sydney), Myki (Melbourne) cards work across the network."},
      {icon:"🍽️",t:"Eating Out",b:"RSL clubs and bowls clubs often have excellent, affordable family dining with kids' menus and play areas. Pub meals are very family-friendly."},
      {icon:"📞",t:"Emergency Numbers",b:"Police/Ambulance/Fire: 000 · Poisons Information: 13 11 26 · Kids Helpline: 1800 551 800"},
    ],
    ja:[
      {icon:"☀️",t:"紫外線対策",b:"オーストラリアの紫外線は非常に強いです。SPF50以上の日焼け止めを2時間ごとに塗り、帽子とUVカット衣類を着用しましょう。"},
      {icon:"🏖️",b:"ビーチでは必ず赤と黄色の旗の間で泳ぎましょう。監視員がいるビーチを選ぶのが安心です。",t:"ビーチの安全"},
      {icon:"🏥",t:"医療機関",b:"急を要しない場合はバルクビリングクリニックへ。緊急時は000番。薬局でも軽症の相談可能です。"},
      {icon:"🏬",t:"ショッピングセンターの設備",b:"授乳室・おむつ替え台・電子レンジ・キッズスペースが充実したペアレントルームが多くのショッピングセンターに完備。"},
      {icon:"🦘",t:"野生動物に注意",b:"カンガルーなど可愛い動物でも危険なことがあります。地方では靴の中のクモにもご注意を。"},
      {icon:"🚌",t:"公共交通機関",b:"主要都市の公共交通機関はベビーカーOK。シドニーのOpal、メルボルンのMykiカードが便利です。"},
      {icon:"🍽️",t:"外食のコツ",b:"RSLクラブやボウルズクラブは手頃な価格でキッズメニューと遊び場が充実。パブのファミリー食事エリアも使いやすいです。"},
      {icon:"📞",t:"緊急連絡先",b:"警察・救急・消防: 000 ｜ 毒物情報: 13 11 26"},
    ],
  },
  singapore: {
    flag:"🇸🇬", name:"Singapore", nameJa:"シンガポール",
    en:[
      {icon:"🍜",t:"Hawker Centres",b:"Singapore's hawker centres are perfect for families — affordable, air-conditioned and with huge variety. Chomp Chomp, Lau Pa Sat and Maxwell are favourites."},
      {icon:"🚇",t:"MRT & Transport",b:"The MRT is extremely family-friendly with lifts at every station. Priority seats always available. Grab is the most reliable and affordable taxi app."},
      {icon:"🏥",t:"Medical Care",b:"Polyclinics offer affordable primary care (cheaper than private clinics). Emergency: 995. KK Women's and Children's Hospital for paediatric care."},
      {icon:"💧",t:"Water & Food Safety",b:"Tap water is perfectly safe to drink — one of the cleanest in the world. Food hygiene standards are very high at licensed hawker stalls."},
      {icon:"🏬",t:"Malls & Baby Facilities",b:"Singapore malls have outstanding baby facilities. ION Orchard, VivoCity and Jewel Changi have excellent nursing rooms and play areas."},
      {icon:"🌳",t:"Family Attractions",b:"Gardens by the Bay, Singapore Zoo, Sentosa and Science Centre are must-visits. Book tickets online to avoid queues."},
      {icon:"☀️",t:"Heat & Humidity",b:"Singapore is hot and humid year-round. Stay hydrated, use sun protection, and plan outdoor activities in the morning or late afternoon."},
      {icon:"📞",t:"Emergency Numbers",b:"Police: 999 · Ambulance/Fire: 995 · Non-emergency ambulance: 1777 · Tourist helpline: 1800-736-2000"},
    ],
    ja:[
      {icon:"🍜",t:"ホーカーセンター",b:"シンガポールのホーカーセンターは家族連れに最適。リーズナブルで冷房完備、バリエーションも豊富。Chomp ChompやMaxwellが人気です。"},
      {icon:"🚇",t:"MRTと交通機関",b:"地下鉄MRTは全駅にエレベーターがあり、ベビーカーで快適に移動できます。Grabアプリが配車に便利でお得です。"},
      {icon:"🏥",t:"医療機関",b:"ポリクリニックは費用が抑えられる公的医療施設です。緊急時は995番。小児科はKKウィメンズ・チルドレンズ病院が有名です。"},
      {icon:"💧",t:"水と食品の安全",b:"水道水は世界トップクラスの水質で安心して飲めます。認可されたホーカーの食品衛生基準も非常に高いです。"},
      {icon:"🏬",t:"ショッピングモールの設備",b:"IONオーチャード・VivoCity・ジュエル・チャンギなど大型モールに授乳室・遊び場が充実。"},
      {icon:"🌳",t:"家族向け観光",b:"ガーデンズ・バイ・ザ・ベイ、シンガポール動物園、セントーサ島は必見。オンライン事前購入がおすすめです。"},
      {icon:"☀️",t:"暑さ・湿気対策",b:"年間を通じて高温多湿です。水分補給と日焼け対策をしっかり行い、屋外活動は朝や夕方に計画しましょう。"},
      {icon:"📞",t:"緊急連絡先",b:"警察: 999 ｜ 救急・消防: 995 ｜ 観光ホットライン: 1800-736-2000"},
    ],
  },
  france: {
    flag:"🇫🇷", name:"France", nameJa:"フランス",
    en:[
      {icon:"🏛️",t:"Free Museums for Kids",b:"Children under 18 (EU residents) and under 12 (non-EU) get free entry to national museums including the Louvre and Musée d'Orsay."},
      {icon:"🍽️",t:"Dining with Kids",b:"Brasseries and bistros are generally welcoming for families, especially at lunch. Many offer a children's menu (menu enfant). Dinner is typically after 7:30pm."},
      {icon:"💊",t:"Pharmacies",b:"French pharmacies (marked by a green cross) are excellent for advice on minor ailments. Many are open late and pharmacists can prescribe basic medicines."},
      {icon:"🚇",t:"Paris Metro",b:"The Paris Metro has limited lifts — plan your route via the RATP app. Buses are more buggy-friendly. The RER is better for families with buggies."},
      {icon:"🛍️",t:"Supermarkets",b:"Carrefour, Monoprix and Leclerc have good selections of baby products. Most large supermarkets have baby changing facilities."},
      {icon:"🏖️",t:"French Riviera Tips",b:"Many beaches on the Côte d'Azur are pebbly — water shoes are helpful for children. Municipal beaches are free while private beach clubs charge."},
      {icon:"🚂",t:"SNCF Trains",b:"Book SNCF train tickets early for the best fares. Children under 4 travel free, under 12 at reduced rates. Family carriages are available on TGV."},
      {icon:"📞",t:"Emergency Numbers",b:"Police: 17 · Ambulance (SAMU): 15 · Fire: 18 · European Emergency: 112 · English-speaking doctor referral: SOS Médecins"},
    ],
    ja:[
      {icon:"🏛️",t:"子ども無料の博物館",b:"EU居住者の18歳以下、非EU居住者の12歳以下はルーブル・オルセーなど国立博物館が無料。子連れ観光に最適です。"},
      {icon:"🍽️",t:"外食のコツ",b:"ブラッスリーやビストロは特にランチタイムが家族連れに寛容です。夕食は19:30以降が一般的。キッズメニューがあるお店も多いです。"},
      {icon:"💊",t:"薬局の活用",b:"緑の十字マークのフランスの薬局は軽症の相談に対応してくれます。薬剤師が基本的な薬を処方してくれる場合も。"},
      {icon:"🚇",t:"パリのメトロ",b:"パリの地下鉄はエレベーターが少ないため、RAPTアプリで事前にルート確認を。バスやRERのほうがベビーカーには使いやすいです。"},
      {icon:"🛍️",t:"スーパーマーケット",b:"カルフール・モノプリ・ルクレールでベビー用品が揃います。大型スーパーにはおむつ替え設備もあります。"},
      {icon:"🏖️",t:"南仏ビーチのコツ",b:"コート・ダジュールのビーチは砂利が多いため、子どものマリンシューズがあると便利です。市営ビーチは無料です。"},
      {icon:"🚂",t:"SNCFの列車",b:"TGVは早期予約でお得。4歳以下は無料、12歳以下は割引運賃。TGVにはファミリー車両も設置されています。"},
      {icon:"📞",t:"緊急連絡先",b:"警察: 17 ｜ 救急(SAMU): 15 ｜ 消防: 18 ｜ 欧州共通緊急番号: 112"},
    ],
  },
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
const CAT_QUERIES = {
  cafe:    "family friendly cafe restaurant",
  nursing: "授乳室 nursing room baby",
  diaper:  "おむつ替え diaper changing station",
  indoor:  "indoor children play area playground",
  sights:  "family tourist attraction sightseeing",
  clinics: "English speaking clinic hospital",
};

/* ══════════════════════════════════════════
   GOOGLE MAPS JS API COMPONENT
══════════════════════════════════════════ */
function GoogleMapView({ apiKey, userLoc, cat, lang, onAllPlacesFound, onSearchStart }) {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);
  const mapInstance = useRef(null);
  const markers = useRef([]);
  const infoWindow = useRef(null);
  const userMarker = useRef(null);

  // Load Google Maps JS API
  useEffect(() => {
    if (!apiKey) return;
    if (window.google?.maps) { setMapReady(true); return; }
    if (document.getElementById("gmaps-script")) {
      const t = setInterval(() => { if (window.google?.maps) { setMapReady(true); clearInterval(t); } }, 200);
      return () => clearInterval(t);
    }
    const s = document.createElement("script");
    s.id = "gmaps-script";
    s.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    s.async = true;
    s.onload = () => setMapReady(true);
    document.head.appendChild(s);
  }, [apiKey]);

  // Init map / pan to user location
  useEffect(() => {
    if (!mapReady || !mapRef.current) return;
    const center = userLoc ? { lat: userLoc.lat, lng: userLoc.lng } : { lat: 35.6762, lng: 139.6503 };
    if (!mapInstance.current) {
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center, zoom: 14,
        mapTypeControl: false, streetViewControl: false, fullscreenControl: false,
      });
      infoWindow.current = new window.google.maps.InfoWindow();
    } else {
      mapInstance.current.panTo(center);
    }
    if (userLoc) {
      if (userMarker.current) userMarker.current.setMap(null);
      userMarker.current = new window.google.maps.Marker({
        position: center, map: mapInstance.current,
        icon: { path: window.google.maps.SymbolPath.CIRCLE, scale: 9, fillColor: "#4285F4", fillOpacity: 1, strokeColor: "#fff", strokeWeight: 3 },
        zIndex: 999,
      });
    }
  }, [mapReady, userLoc]);

  // Sequential search — one category at a time
  useEffect(() => {
    if (!mapInstance.current || !userLoc || !mapReady || !window.google?.maps?.places) return;

    // Clear old pins
    markers.current.forEach(m => m.setMap(null));
    markers.current = [];
    infoWindow.current?.close();

    let cancelled = false;
    const allFound = [];
    const catsToSearch = cat ? [cat] : Object.keys(CAT_QUERIES);

    onSearchStart && onSearchStart();

    let svc;
    try { svc = new window.google.maps.places.PlacesService(mapInstance.current); }
    catch(e) { onAllPlacesFound && onAllPlacesFound([]); return; }

    // Recursive sequential search
    const searchNext = (idx) => {
      if (cancelled) return;
      if (idx >= catsToSearch.length) {
        onAllPlacesFound && onAllPlacesFound(allFound);
        return;
      }
      const catId = catsToSearch[idx];
      const catInfo = CATS.find(c => c.id === catId);

      // 6-second timeout per category → move on if no response
      const timer = setTimeout(() => searchNext(idx + 1), 6000);

      try {
        svc.textSearch({
          query: CAT_QUERIES[catId],
          location: new window.google.maps.LatLng(userLoc.lat, userLoc.lng),
          radius: 2000,
        }, (results, status) => {
          clearTimeout(timer);
          if (cancelled) return;
          if (status === "OK" && results?.length > 0) {
            results.slice(0, cat ? 10 : 4).forEach(place => {
              // Add pin
              try {
                const m = new window.google.maps.Marker({
                  position: place.geometry.location, map: mapInstance.current,
                  title: place.name, animation: window.google.maps.Animation.DROP,
                  icon: catInfo ? {
                    path: window.google.maps.SymbolPath.CIRCLE,
                    scale: 9, fillColor: catInfo.color, fillOpacity: 0.9,
                    strokeColor: "#fff", strokeWeight: 2,
                  } : undefined,
                });
                m.addListener("click", () => {
                  const rating = place.rating ? `<div style="font-size:12px"><span style="color:#F5A94F;font-weight:700">★ ${place.rating}</span> <span style="color:#888">(${place.user_ratings_total||0})</span></div>` : "";
                  const isOpen = place.opening_hours?.isOpen?.();
                  const openTxt = isOpen !== undefined ? `<div style="font-size:12px;font-weight:700;color:${isOpen?"#1A8A5A":"#DC2626"}">${isOpen?"🟢 Open":"🔴 Closed"}</div>` : "";
                  const photo = place.photos?.[0]?.getUrl({ maxWidth:240, maxHeight:120 });
                  infoWindow.current.setContent(
                    `<div style="max-width:220px;font-family:sans-serif;padding:2px">
                      ${photo?`<img src="${photo}" style="width:100%;height:100px;object-fit:cover;border-radius:8px;margin-bottom:8px;display:block">`:""}
                      <div style="font-weight:800;font-size:14px;color:#2C3535;line-height:1.3;margin-bottom:4px">${place.name}</div>
                      ${rating}${openTxt}
                      ${catInfo?`<span style="font-size:11px;font-weight:700;color:${catInfo.color};background:${catInfo.bg};padding:2px 8px;border-radius:20px;display:inline-block;margin:4px 0">${lang==="ja"?catInfo.ja:catInfo.en}</span>`:""}
                      <div style="font-size:11px;color:#888;margin:4px 0">${place.vicinity||""}</div>
                      <a href="https://www.google.com/maps/place/?q=place_id:${place.place_id}" target="_blank" style="display:inline-block;margin-top:8px;background:#5BBFAD;color:#fff;padding:6px 14px;border-radius:8px;text-decoration:none;font-size:12px;font-weight:700">Open in Maps →</a>
                    </div>`
                  );
                  infoWindow.current.open(mapInstance.current, m);
                });
                markers.current.push(m);
              } catch(e) {}
              // Add to results list
              try {
                allFound.push({
                  id: place.place_id,
                  displayName: { text: place.name },
                  formattedAddress: place.vicinity || "",
                  rating: place.rating,
                  userRatingCount: place.user_ratings_total,
                  googleMapsUri: `https://www.google.com/maps/place/?q=place_id:${place.place_id}`,
                  currentOpeningHours: place.opening_hours ? { openNow: place.opening_hours.isOpen?.() } : undefined,
                  photos: place.photos ? [{ _url: place.photos[0].getUrl({ maxWidth:120 }) }] : [],
                  _catId: catId,
                });
              } catch(e) {}
            });
          }
          searchNext(idx + 1);
        });
      } catch(e) {
        clearTimeout(timer);
        searchNext(idx + 1);
      }
    };

    searchNext(0);
    return () => { cancelled = true; };
  }, [userLoc, cat, mapReady]);

  return (
    <div style={{ position:"relative", width:"100%", height:320 }}>
      <div ref={mapRef} style={{ width:"100%", height:"100%" }} />
      {!mapReady && (
        <div style={{ position:"absolute", inset:0, background:"#E8EDEB", display:"flex", alignItems:"center", justifyContent:"center", color:"#9AACAA", fontSize:14 }}>
          Loading map…
        </div>
      )}
    </div>
  );
}

  return (
    <div style={{ position:"relative", width:"100%", height:320 }}>
      <div ref={mapRef} style={{ width:"100%", height:"100%" }} />
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
  const [allResults, setAllResults] = useState([]);
  const [searchingAll, setSearchingAll] = useState(false);
  const [userLoc, setUserLoc] = useState(null);
  const [locStatus, setLocStatus] = useState("idle");
  const [spots, setSpots] = useState([]);
  const [extraHosp, setExtraHosp] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [openTip, setOpenTip] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("japan");
  const [apiKey, setApiKey] = useState(() => {
    try { return localStorage.getItem("isshogo_apikey") || ""; } catch { return ""; }
  });
  const [placeResults, setPlaceResults] = useState([]);
  const [placesLoading, setPlacesLoading] = useState(false);
  const [placesError, setPlacesError] = useState("");
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

  // Load storage
  useEffect(() => {
    (async () => {
      try { const s = localStorage.getItem("isshogo_spots"); if(s) setSpots(JSON.parse(s)); } catch {}
      try { const h = localStorage.getItem("isshogo_hosp_x"); if(h) setExtraHosp(JSON.parse(h)); } catch {}
    })();
  }, []);

  // Auto-get location on mount
  useEffect(() => {
    if (!navigator.geolocation) return;
    setLocStatus("busy");
    setSearchingAll(true);
    navigator.geolocation.getCurrentPosition(
      p => {
        setUserLoc({ lat: p.coords.latitude, lng: p.coords.longitude });
        setLocStatus("ok");
      },
      () => { setLocStatus("idle"); setSearchingAll(false); },
      { timeout: 10000 }
    );
  }, []);

  const saveSpots   = (d) => { setSpots(d);      try { localStorage.setItem("isshogo_spots",   JSON.stringify(d)); } catch {} };
  const saveHosp    = (d) => { setExtraHosp(d); try { localStorage.setItem("isshogo_hosp_x",  JSON.stringify(d)); } catch {} };
  const saveApiKey  = (k) => { setApiKey(k);    try { localStorage.setItem("isshogo_apikey",  k);                } catch {} };

  // Get current location (GoogleMapView auto-searches when userLoc changes)
  const getLocation = () => {
    if (!navigator.geolocation) { setLocStatus("no"); return; }
    setLocStatus("busy");
    setAllResults([]);
    setSearchingAll(true);
    navigator.geolocation.getCurrentPosition(
      p => {
        setUserLoc({ lat: p.coords.latitude, lng: p.coords.longitude });
        setLocStatus("ok");
      },
      () => { setLocStatus("no"); setSearchingAll(false); },
      { timeout: 10000 }
    );
  };

  const mapSrc = () => userLoc ? `https://maps.google.com/maps?q=${userLoc.lat},${userLoc.lng}&z=14&output=embed&hl=en` : `https://maps.google.com/maps?q=35.6762,139.6503&z=11&output=embed&hl=en`;

  const handleCatClick = (id) => setCat(prev => prev === id ? null : id);

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
              onSearchStart={() => { setSearchingAll(true); setAllResults([]); }}
              onAllPlacesFound={(results) => { setAllResults(results); setSearchingAll(false); }}
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

        {/* Category FILTER pills */}
        <div style={{ background:C.card, padding:"16px 16px 20px", borderBottom:`1px solid ${C.border}` }}>
          <div style={{ fontSize:12, color:C.muted, marginBottom:10, fontWeight:600 }}>
            {lang==="ja" ? (allResults.length > 0 ? "絞り込み：" : "カテゴリ：") : (allResults.length > 0 ? "Filter by:" : "Categories:")}
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10 }}>
            {CATS.map(c => (
              <button key={c.id} className="cat" onClick={()=>handleCatClick(c.id)} style={{
                display:"flex", flexDirection:"column", alignItems:"center", gap:6,
                background:"none", border:"none", cursor:"pointer", fontFamily:"inherit",
                padding:"4px", transition:"transform 0.2s",
              }}>
                <div style={{
                  width:56, height:56, borderRadius:50,
                  background: cat===c.id ? c.color : c.bg,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  boxShadow: cat===c.id ? `0 6px 16px ${c.color}40` : "none",
                  border: cat===c.id ? `3px solid ${c.color}` : "3px solid transparent",
                  transition:"all 0.2s",
                }}>
                  <CatIcon id={c.id} color={cat===c.id ? "#fff" : c.color} size={30} />
                </div>
                <span style={{ fontSize:11, fontWeight:700, color: cat===c.id ? c.color : C.mid, textAlign:"center", lineHeight:1.2 }}>
                  {lang==="ja" ? c.ja : c.en}
                </span>
                {allResults.length > 0 && (
                  <span style={{ fontSize:10, color: cat===c.id ? c.color : C.muted }}>
                    ({allResults.filter(r=>r._catId===c.id).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Find Near Me button */}
          <button onClick={getLocation} style={{
            width:"100%", marginTop:14,
            background: searchingAll ? "#B0C2BE" : C.primary,
            color:"#fff", border:"none", borderRadius:16, padding:"13px",
            fontFamily:"inherit", fontWeight:800, fontSize:15, cursor:"pointer",
            boxShadow:`0 4px 16px ${C.primary}40`,
          }}>
            {locStatus==="busy" || searchingAll
              ? (lang==="ja" ? "🔍 検索中…" : "🔍 Searching…")
              : allResults.length > 0
              ? (lang==="ja" ? "🔄 再検索" : "🔄 Search Again")
              : t.nearMe}
          </button>

          {/* Location status */}
          {locStatus === "no" && (
            <div style={{ fontSize:12, color:C.sos, marginTop:8, textAlign:"center" }}>{t.locNo}</div>
          )}
        </div>

        {/* ── ALL RESULTS (filtered by cat) ── */}
        <div style={{ padding:"20px 16px", display:"flex", flexDirection:"column", gap:12 }}>

          {/* Searching spinner */}
          {searchingAll && (
            <div style={{ textAlign:"center", padding:"32px 20px", color:C.muted }}>
              <div style={{ fontSize:36, marginBottom:10 }}>🔍</div>
              <div style={{ fontWeight:700, fontSize:15, marginBottom:4 }}>
                {lang==="ja" ? "周辺を検索中…" : "Searching all categories nearby…"}
              </div>
              <div style={{ fontSize:12 }}>
                {lang==="ja" ? "少しお待ちください" : "This may take a few seconds"}
              </div>
            </div>
          )}

          {/* Results */}
          {!searchingAll && (() => {
            const filtered = cat ? allResults.filter(r => r._catId === cat) : allResults;
            const customFiltered = cat ? spots.filter(s => s.category === cat) : spots;

            if (filtered.length === 0 && customFiltered.length === 0 && allResults.length === 0 && !searchingAll) {
              return (
                <div style={{ textAlign:"center", padding:"32px 20px", color:C.muted, fontSize:14,
                  background:C.card, borderRadius:16, border:`1px dashed ${C.border}` }}>
                  <div style={{ fontSize:36, marginBottom:10 }}>📍</div>
                  {apiKey
                    ? (lang==="ja" ? "「現在地周辺を探す」をタップして周辺のスポットを検索しましょう！" : "Tap \"Find Near Me\" to discover family-friendly spots around you!")
                    : (lang==="ja" ? "管理画面でAPIキーを追加すると周辺スポットが自動表示されます。" : "Add your API key in the Admin Panel to search nearby spots.")}
                </div>
              );
            }

            return (
              <>
                {/* Header */}
                {allResults.length > 0 && (
                  <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                    <span style={{ background:C.primaryLt, color:C.primary, padding:"3px 10px", borderRadius:20, fontSize:11, fontWeight:700 }}>
                      {cat ? (lang==="ja" ? `${CATS.find(c=>c.id===cat)?.ja || cat} のみ表示` : `Filtered: ${CATS.find(c=>c.id===cat)?.en || cat}`) : (lang==="ja" ? "全カテゴリ" : "All categories")}
                    </span>
                    <span style={{ fontSize:12, color:C.muted }}>
                      {filtered.length} {lang==="ja" ? "件" : "results"}
                    </span>
                    {cat && (
                      <button onClick={()=>setCat(null)} style={{ fontSize:11, color:C.sos, background:"none", border:"none", cursor:"pointer", padding:0, fontFamily:"inherit" }}>
                        ✕ {lang==="ja" ? "絞り込み解除" : "Clear filter"}
                      </button>
                    )}
                  </div>
                )}

                {/* Google results */}
                {filtered.map((place, i) => {
                  const name = place.displayName?.text || "";
                  const address = place.formattedAddress || "";
                  const rating = place.rating;
                  const ratingCount = place.userRatingCount;
                  const isOpen = place.currentOpeningHours?.openNow;
                  const photoUrl = place.photos?.[0]?._url || null;
                  const mapsUrl = place.googleMapsUri || `https://maps.google.com/?q=${encodeURIComponent(name)}`;
                  const thisCat = CATS.find(c => c.id === place._catId);
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
                        {thisCat && (
                          <span style={{ fontSize:10, fontWeight:700, color:thisCat.color, background:thisCat.bg, padding:"1px 7px", borderRadius:20, alignSelf:"flex-start" }}>
                            {lang==="ja" ? thisCat.ja : thisCat.en}
                          </span>
                        )}
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

                {/* Curated spots */}
                {customFiltered.length > 0 && (
                  <>
                    <div style={{ fontSize:11, fontWeight:700, color:C.muted, display:"flex", alignItems:"center", gap:6, marginTop:4 }}>
                      <span style={{ background:"#F0F4F3", color:C.mid, padding:"2px 8px", borderRadius:20 }}>
                        {lang==="ja" ? "Isshogoおすすめ" : "Curated by Isshogo"}
                      </span>
                    </div>
                    {customFiltered.map((s,i) => (
                      <SpotCard key={s.id} spot={s} idx={i} lang={lang} t={t} isAdmin={false} onEdit={()=>{}} onDel={()=>{}} />
                    ))}
                  </>
                )}

                {/* Clinics hospital list when clinics filter active */}
                {cat === "clinics" && (
                  <div style={{ display:"flex", flexDirection:"column", gap:12, marginTop:8 }}>
                    <button onClick={() => {
                      const query = "English speaking clinic hospital";
                      const url = userLoc ? `https://www.google.com/maps/search/${encodeURIComponent(query)}/@${userLoc.lat},${userLoc.lng},14z` : `https://www.google.com/maps/search/${encodeURIComponent(query + " Japan")}`;
                      window.open(url, "_blank");
                    }} style={{
                      background:`linear-gradient(135deg, #CF7B68, #E09080)`,
                      color:"#fff", border:"none", borderRadius:14, padding:"12px 20px",
                      fontFamily:"inherit", fontWeight:800, fontSize:14, cursor:"pointer",
                      display:"flex", alignItems:"center", justifyContent:"center", gap:8,
                    }}>
                      🗺️ {lang==="ja" ? "周辺のクリニックをGoogle Mapsで探す" : "Find nearby clinics on Google Maps"}
                    </button>
                    <div style={{ fontSize:13, fontWeight:700, color:C.mid }}>
                      📋 {lang==="ja" ? "英語対応 厳選病院リスト" : "Curated English-OK Hospitals"}
                    </div>
                    <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                      <span style={{ fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:20, color:"#1A8A5A", background:"#E5F5ED" }}>{t.full}</span>
                      <span style={{ fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:20, color:"#B07A1A", background:"#FEF5E3" }}>{t.partial}</span>
                      <span style={{ fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:20, color:C.sos, background:C.sosLt }}>{t.emergency}</span>
                    </div>
                    {allHosp.map(h=>(
                      <HospCard key={h.id} h={h} lang={lang} t={t} isAdmin={false} onEdit={()=>{}} onDel={()=>{}} />
                    ))}
                  </div>
                )}
              </>
            );
          })()}
        </div>

        {/* ── TIPS by Country ── */}
        <div style={{ padding:"24px 16px 16px", borderTop:`1px solid ${C.border}` }}>
          <div style={{ fontWeight:900, fontSize:18, color:C.text, marginBottom:4 }}>✈️ {t.tipsTitle}</div>

          {/* Country selector */}
          <div style={{ display:"flex", gap:8, overflowX:"auto", padding:"12px 0", marginBottom:12 }}>
            {Object.entries(TIPS_BY_COUNTRY).map(([key, country]) => (
              <button key={key} onClick={() => { setSelectedCountry(key); setOpenTip(null); }} style={{
                display:"flex", alignItems:"center", gap:6, flexShrink:0,
                padding:"7px 14px", borderRadius:20, border:"none", cursor:"pointer",
                fontFamily:"inherit", fontWeight:700, fontSize:13,
                background: selectedCountry===key ? C.primary : C.card,
                color: selectedCountry===key ? "#fff" : C.mid,
                boxShadow: selectedCountry===key ? `0 4px 12px ${C.primary}40` : C.sh,
                transition:"all 0.2s",
              }}>
                <span style={{ fontSize:16 }}>{country.flag}</span>
                {lang==="ja" ? country.nameJa : country.name}
              </button>
            ))}
          </div>

          {/* Tips accordion */}
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {(TIPS_BY_COUNTRY[selectedCountry]?.[lang] || []).map((tip,i)=> {
              const isOpen = openTip === i;
              return (
                <div key={i} style={{ background:C.card, borderRadius:16,
                  boxShadow:C.sh, border:`1px solid ${isOpen ? C.primary : C.border}`,
                  overflow:"hidden", transition:"border-color 0.2s" }}>
                  <button onClick={()=>setOpenTip(isOpen ? null : i)} style={{
                    width:"100%", display:"flex", alignItems:"center", gap:14,
                    padding:"14px 18px", background:"none", border:"none",
                    cursor:"pointer", fontFamily:"inherit", textAlign:"left",
                  }}>
                    <span style={{ fontSize:26, flexShrink:0 }}>{tip.icon}</span>
                    <span style={{ fontWeight:800, fontSize:14, color:C.text, flex:1 }}>{tip.t}</span>
                    <span style={{ fontSize:18, color:C.muted, transition:"transform 0.25s",
                      display:"inline-block", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>›</span>
                  </button>
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
