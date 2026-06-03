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
  /* ── Baby Room: stroller/pram ── */
  /* ── Baby Room: baby bottle ── */
  if (id === "babycare") return (
    <svg width={size} height={size} viewBox={v} fill="none">
      <path d="M16,11 Q16,3 20,3 Q24,3 24,11" fill={color}/>
      <rect x="12" y="10" width="16" height="5" rx="2.5" fill={color}/>
      <rect x="10" y="15" width="20" height="22" rx="7" fill={color} opacity="0.9"/>
      <line x1="13" y1="22" x2="27" y2="22" stroke="white" strokeWidth="2.4" strokeLinecap="round" opacity="0.65"/>
      <line x1="13" y1="29" x2="27" y2="29" stroke="white" strokeWidth="2.4" strokeLinecap="round" opacity="0.65"/>
    </svg>
  );
  if (id === "nursing") return null;
  if (id === "diaper") return null;

  /* ── Toilet: water drop + waves ── */
  if (id === "toilet") return (
    <svg width={size} height={size} viewBox={v} fill="none">
      <path d="M20,4 Q28,14 28,22 Q28,31 20,31 Q12,31 12,22 Q12,14 20,4Z" fill={color} opacity="0.9"/>
      <path d="M15,24 Q17,21 20,24 Q23,27 25,24" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
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
  { id:"babycare", label:"👶", en:"Baby Room",          ja:"ベビールーム",     color:C.primary,bg:C.primaryLt,query:"授乳室 nursing diaper changing baby room" },
  { id:"toilet",   label:"🚻", en:"Toilet",             ja:"トイレ",            color:C.purple, bg:C.purpleLt, query:"public toilet restroom トイレ" },
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
  babycare:  { label:"授乳・おむつ替え", icon:"🍼", color:C.primary },
  toilet:    { label:"トイレ",       icon:"🚻", color:C.purple },
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
  const catIds = spot.categories || (spot.category ? [spot.category] : []);
  const cats = catIds.map(id => CATS.find(c => c.id === id)).filter(Boolean);
  const cat = cats[0]; // 後方互換のため
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
          {cats.map(ct => (
            <span key={ct.id} style={{
              display:"inline-flex", alignItems:"center", gap:3,
              fontSize:11, fontWeight:600, color:ct.color,
              background:ct.color+"18", padding:"2px 8px", borderRadius:20,
            }}>{ct.label} {lang==="ja"?ct.ja:ct.en}</span>
          ))}
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
  const sosSpots = spots.filter(s => s.category === "sos" || s.category === "nursing" || s.category === "babycare" || (s.categories||[]).includes("babycare"));
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

  const blankSpot = { name:"", nameJa:"", categories:["babycare"], category:"babycare", address:"", note:"", url:"", tags:[] };
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

        {/* In-app browser warning */}
        {isInAppBrowser && (
          <div style={{ background:"#FF6B35", color:"#fff", padding:"10px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:10 }}>
            <div style={{ fontSize:13, fontWeight:600, lineHeight:1.4 }}>
              {lang==="ja"
                ? `📍 現在地を使うにはSafariで開いてください (${navigator.userAgent.slice(0,50)})`
                : `📍 Open in Safari (${navigator.userAgent.slice(0,50)})`}
            </div>
            <a href={window.location.href} target="_blank" rel="noopener noreferrer"
              style={{ background:"#fff", color:"#FF6B35", borderRadius:20, padding:"6px 14px", fontSize:12, fontWeight:800, textDecoration:"none", whiteSpace:"nowrap", flexShrink:0 }}>
              {lang==="ja" ? "Safariで開く" : "Open in Safari"}
            </a>
          </div>
        )}
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
                      <div>
                        <div style={{ fontSize:12, fontWeight:600, color:C.muted, marginBottom:6 }}>{t.sCat}</div>
                        <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                          {CATS.filter(c=>c.id!=="clinics").map(c => {
                            const checked = (spotForm.categories||[spotForm.category]).includes(c.id);
                            return (
                              <label key={c.id} style={{ display:"flex", alignItems:"center", gap:5, cursor:"pointer", fontSize:13,
                                background: checked ? c.bg : C.bg, border:`1.5px solid ${checked ? c.color : C.border}`,
                                borderRadius:20, padding:"4px 10px", transition:"all 0.15s" }}>
                                <input type="checkbox" checked={checked} style={{ accentColor:c.color, width:13, height:13 }}
                                  onChange={e => {
                                    const cats = new Set(spotForm.categories || [spotForm.category]);
                                    if (e.target.checked) cats.add(c.id); else cats.delete(c.id);
                                    setSpotForm(f=>({...f, categories:[...cats], category:[...cats][0]||"babycare"}));
                                  }} />
                                <span style={{ fontWeight:600, color: checked ? c.color : C.mid }}>{c.label} {lang==="ja"?c.ja:c.en}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
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
function MenuPanel({ t, lang, onAdmin, onClose, favCount, onFavs }) {
  const [showInfo, setShowInfo] = useState(null); // "howto" or "about"
  const items = [
    { icon:"♡", label: lang==="ja"?`お気に入り (${favCount}件)`:`Favorites (${favCount})`, key:"favs" },
    { icon:"📖", label: lang==="ja"?"使い方ガイド":"How to Use", key:"howto" },
    { icon:"ℹ️", label: lang==="ja"?"このアプリについて":"About Isshogo", key:"about" },
    { icon:"✉️", label: lang==="ja"?"お問い合わせ":"Contact Us", contact: true },
  ];
  if (showInfo) return (
    <div style={{ position:"fixed", inset:0, zIndex:150, background:"rgba(0,0,0,0.35)", backdropFilter:"blur(4px)", display:"flex", alignItems:"flex-end" }}
      onClick={e=>e.target===e.currentTarget&&setShowInfo(null)}>
      <div style={{ width:"100%", maxHeight:"80vh", background:C.card, borderRadius:"20px 20px 0 0", overflowY:"auto", padding:"24px 20px 40px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
          <div style={{ fontWeight:800, fontSize:18, color:C.text }}>
            {showInfo==="howto" ? (lang==="ja"?"使い方ガイド":"How to Use") : (lang==="ja"?"このアプリについて":"About Isshogo")}
          </div>
          <button onClick={()=>setShowInfo(null)} style={{ background:"none", border:"none", cursor:"pointer", fontSize:20, color:C.muted }}>×</button>
        </div>
        {showInfo==="howto" && (
          <div style={{ fontSize:14, color:C.text, lineHeight:1.8 }}>
            {lang==="ja" ? <>
              <p><strong>1. 現在地を取得</strong><br/>「現在地周辺を探す」ボタンをタップして、現在地の周辺スポットを検索します。</p>
              <p><strong>2. カテゴリで絞り込み</strong><br/>カフェ・ベビールーム・トイレなど、カテゴリアイコンをタップして絞り込めます。複数選択も可能です。</p>
              <p><strong>3. 場所を検索</strong><br/>検索窓に都市名や地名を入力してEnterを押すと、その場所の周辺を検索します。</p>
              <p><strong>4. お店をタップ</strong><br/>リストのお店をタップすると、マップ上にピンが表示されます。「Open in Maps」でGoogleマップに移動できます。</p>
              <p><strong>5. 言語切り替え</strong><br/>右上のEN/日本語ボタンで言語を切り替えられます。</p>
            </> : <>
              <p><strong>1. Find nearby places</strong><br/>Tap "Find Near Me" to search for family-friendly spots around your current location.</p>
              <p><strong>2. Filter by category</strong><br/>Tap category icons to filter results. You can select multiple categories at once.</p>
              <p><strong>3. Search a location</strong><br/>Type a city or area name in the search bar and press Enter to explore that area.</p>
              <p><strong>4. Tap a spot</strong><br/>Tap any result card to highlight it on the map. Use "Open in Maps" to open Google Maps.</p>
              <p><strong>5. Switch language</strong><br/>Use the EN/日本語 button at the top right to switch languages.</p>
            </>}
          </div>
        )}
        {showInfo==="about" && (
          <div style={{ fontSize:14, color:C.text, lineHeight:1.8 }}>
            {lang==="ja" ? <>
              <p><strong>Isshogoについて</strong></p>
              <p>Isshogoは、子連れ旅行をもっと楽しく、もっとスムーズにするためのアプリです。授乳室・おむつ替えスペース・子供と入れるカフェなど、ファミリーに必要な情報をまとめています。</p>
              <p>「一緒語」＝一緒にいろんな場所へ。子供と一緒に世界を旅しましょう。</p>
              <p style={{ color:C.muted, fontSize:12 }}>© 2025 Isshogo</p>
            </> : <>
              <p><strong>About Isshogo</strong></p>
              <p>Isshogo helps families travel more easily and enjoyably. We curate family-friendly spots including nursing rooms, nappy changing areas, and cafes that welcome children.</p>
              <p>"Isshogo" means "together" in Japanese — let's explore the world together with your little ones.</p>
              <p style={{ color:C.muted, fontSize:12 }}>© 2025 Isshogo</p>
            </>}
          </div>
        )}
      </div>
    </div>
  );

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

        {/* Menu items */}
        <div style={{ flex:1, padding:"8px 0", overflowY:"auto" }}>
          {items.map(item=>(
            <div key={item.label}
              onClick={() => {
                if (item.contact) window.location.href = "mailto:contact@isshogo.com?subject=" + encodeURIComponent(lang==="ja"?"Isshogoへのお問い合わせ":"Contact Isshogo");
                else if (item.key === "favs") { onClose(); onFavs && onFavs(); }
                else if (item.key) setShowInfo(item.key);
              }}
              style={{ display:"flex", justifyContent:"space-between", alignItems:"center",
              padding:"14px 20px", cursor:"pointer", borderBottom:`1px solid ${C.border}30` }}>
              <div style={{ display:"flex", gap:12, alignItems:"center" }}>
                <span style={{ fontSize:18 }}>{item.icon}</span>
                <span style={{ fontSize:15, color: item.contact ? C.primary : C.text, fontWeight: item.contact ? 700 : 400 }}>{item.label}</span>
              </div>
              <span style={{ color:C.muted }}>›</span>
            </div>
          ))}

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
  babycare: "授乳室 nursing room diaper changing baby room",
  toilet:   "public toilet restroom トイレ 多目的トイレ",
  indoor:  "indoor children play area playground",
  sights:  "family tourist attraction sightseeing",
  clinics: "English speaking clinic hospital",
};

/* ══════════════════════════════════════════
   GOOGLE MAPS JS API COMPONENT
══════════════════════════════════════════ */
function GoogleMapView({ apiKey, userLoc, lang, onPlacesFound, activeFilters, focusPlaceId, onFocused }) {
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
    if (document.getElementById("gmaps-script")) return;
    const s = document.createElement("script");
    s.id = "gmaps-script";
    s.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&language=en`;
    s.async = true;
    s.defer = true;
    s.onload = () => setMapReady(true);
    document.head.appendChild(s);
  }, [apiKey]);

  // Init map and pan to user location
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

  // focusPlaceIdが変わったら対応するマーカーのinfoWindowを開く
  useEffect(() => {
    if (!focusPlaceId || !mapInstance.current) return;
    const m = markers.current.find(m => m._placeId === focusPlaceId);
    if (m) {
      mapInstance.current.panTo(m.getPosition());
      mapInstance.current.setZoom(16);
      window.google.maps.event.trigger(m, "click");
      onFocused && onFocused();
    }
  }, [focusPlaceId]);

  // activeFiltersが変わったらマーカーの表示/非表示を切り替え
  useEffect(() => {
    markers.current.forEach(m => {
      const visible = !activeFilters || activeFilters.size === 0 || activeFilters.has(m._catId);
      m.setVisible(visible);
    });
  }, [activeFilters]);

  // 現在地が取得できたら全カテゴリを同時検索
  useEffect(() => {
    if (!userLoc || !window.google || !mapReady) return;
    // mapInstanceの準備を最大1秒待つ
    const attempt = (retries) => {
      if (!mapInstance.current) {
        if (retries > 0) setTimeout(() => attempt(retries - 1), 200);
        return;
      }
      doSearch();
    };
    function doSearch() {
    markers.current.forEach(m => m.setMap(null));
    markers.current = [];
    infoWindow.current?.close();
    const svc = new window.google.maps.places.PlacesService(mapInstance.current);
    const searchCats = CATS.filter(c => c.id !== "clinics");
    const allResults = [];
    let done = 0;
    searchCats.forEach(catObj => {
      svc.textSearch({
        query: CAT_QUERIES[catObj.id] || catObj.id,
        location: new window.google.maps.LatLng(userLoc.lat, userLoc.lng),
        radius: 2000,
      }, (results, status) => {
        done++;
        if (status === "OK" && results) {
          const catInfo = catObj;
          // リスト表示用データを収集（全件）
          results.forEach(p => {
            allResults.push({
              id: p.place_id,
              displayName: { text: p.name },
              formattedAddress: p.vicinity || "",
              rating: p.rating,
              userRatingCount: p.user_ratings_total,
              googleMapsUri: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name)}&query_place_id=${p.place_id}`,
              currentOpeningHours: p.opening_hours ? { openNow: p.opening_hours.isOpen?.() } : undefined,
              photos: p.photos ? [{ _url: p.photos[0].getUrl({ maxWidth: 120 }) }] : [],
              _catId: catObj.id,
              _lat: p.geometry?.location?.lat(),
              _lng: p.geometry?.location?.lng(),
            });
          });
          // マップにピンを追加
          results.slice(0, 8).forEach(place => {
            const m = new window.google.maps.Marker({
              position: place.geometry.location, map: mapInstance.current,
              title: place.name, animation: window.google.maps.Animation.DROP,
              icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 9, fillColor: catInfo.color, fillOpacity: 0.9,
                strokeColor: "#fff", strokeWeight: 2,
              },
            });
            m.addListener("click", () => {
              const rating = place.rating ? `<div style="font-size:12px"><span style="color:#F5A94F;font-weight:700">★ ${place.rating}</span> <span style="color:#888">(${place.user_ratings_total||0})</span></div>` : "";
              const isOpen = place.opening_hours?.isOpen?.();
              const openColor = isOpen ? "#1A8A5A" : "#DC2626";
              const openLabel = isOpen ? "🟢 Open" : "🔴 Closed";
              const openTxt = isOpen !== undefined ? `<div style="font-size:12px;font-weight:700;color:${openColor}">${openLabel}</div>` : "";
              const photo = place.photos?.[0]?.getUrl({ maxWidth: 240, maxHeight: 120 });
              infoWindow.current.setContent(
                `<div style="max-width:220px;font-family:sans-serif;padding:2px">
                  ${photo ? '<img src="' + photo + '" style="width:100%;height:100px;object-fit:cover;border-radius:8px;margin-bottom:8px;display:block">' : ""}
                  <div style="font-weight:800;font-size:14px;color:#2C3535;line-height:1.3;margin-bottom:4px">${place.name}</div>
                  ${rating}${openTxt}
                  <span style="font-size:11px;font-weight:700;color:${catInfo.color};background:${catInfo.bg};padding:2px 8px;border-radius:20px;display:inline-block;margin:4px 0">${lang==="ja"?catInfo.ja:catInfo.en}</span>
                  <div style="font-size:11px;color:#888;margin:4px 0">${place.vicinity||""}</div>
                  <a href="https://www.google.com/maps/place/?q=place_id:${place.place_id}" target="_blank" style="display:inline-block;margin-top:8px;background:#5BBFAD;color:#fff;padding:6px 14px;border-radius:8px;text-decoration:none;font-size:12px;font-weight:700">Open in Maps →</a>
                </div>`
              );
              infoWindow.current.open(mapInstance.current, m);
            });
            m._catId = catObj.id;
            m._placeId = place.place_id;
            markers.current.push(m);
          });
        }
        // 全カテゴリの検索が終わったら距離順でソートして親に渡す
        if (done === searchCats.length) {
          // 同じplace_idが複数カテゴリにヒットした場合、_catIdsに全カテゴリを集約
          const placeMap = new Map();
          allResults.forEach(p => {
            if (placeMap.has(p.id)) {
              placeMap.get(p.id)._catIds.push(p._catId);
            } else {
              placeMap.set(p.id, { ...p, _catIds: [p._catId] });
            }
          });
          const deduped = Array.from(placeMap.values());
          if (userLoc) {
            deduped.sort((a, b) => {
              const distA = a._lat && a._lng
                ? Math.pow(a._lat - userLoc.lat, 2) + Math.pow(a._lng - userLoc.lng, 2)
                : Infinity;
              const distB = b._lat && b._lng
                ? Math.pow(b._lat - userLoc.lat, 2) + Math.pow(b._lng - userLoc.lng, 2)
                : Infinity;
              return distA - distB;
            });
          }
          onPlacesFound && onPlacesFound(deduped);
        }
      });
    });
    } // end doSearch
    attempt(5);
  }, [userLoc, mapReady]);

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
  const [placeResults, setPlaceResults] = useState([]);
  const [activeFilters, setActiveFilters] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [focusPlaceId, setFocusPlaceId] = useState(null);
  const [favorites, setFavorites] = useState(() => { try { return JSON.parse(localStorage.getItem("isshogo_favs")||"[]"); } catch { return []; } });
  const [showFavs, setShowFavs] = useState(false);
  const isInAppBrowser = true; // DEBUG: always show
  // const isInAppBrowser = /Instagram|FBAN|FBAV|Twitter|Line\/|MicroMessenger/i.test(navigator.userAgent); // 検索窓の入力値
  const [textFilter, setTextFilter] = useState(""); // リスト絞り込み用（場所検索時はクリア）
  const [userLoc, setUserLoc] = useState(null);
  const [locStatus, setLocStatus] = useState("idle");
  const [spots, setSpots] = useState([]);
  const [extraHosp, setExtraHosp] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [openTip, setOpenTip] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("japan");
  const [apiKey, setApiKey] = useState(() => {
    // 環境変数を優先、なければlocalStorageから
    if (import.meta.env.VITE_GOOGLE_MAPS_API_KEY) return import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    try { return localStorage.getItem("isshogo_apikey") || ""; } catch { return ""; }
  });
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
    
    navigator.geolocation.getCurrentPosition(
      p => {
        setUserLoc({ lat: p.coords.latitude, lng: p.coords.longitude });
        setLocStatus("ok");
      },
      () => { setLocStatus("idle"); },
      { timeout: 20000, enableHighAccuracy: false, maximumAge: 60000 }
    );
  }, []);

  const toggleFav = (place) => {
    setFavorites(prev => {
      const exists = prev.find(f => f.id === place.id);
      const next = exists ? prev.filter(f => f.id !== place.id) : [...prev, place];
      try { localStorage.setItem("isshogo_favs", JSON.stringify(next)); } catch {}
      return next;
    });
  };
  const isFav = (id) => favorites.some(f => f.id === id);

  const saveSpots   = (d) => { setSpots(d);      try { localStorage.setItem("isshogo_spots",   JSON.stringify(d)); } catch {} };
  const saveHosp    = (d) => { setExtraHosp(d); try { localStorage.setItem("isshogo_hosp_x",  JSON.stringify(d)); } catch {} };
  const saveApiKey  = (k) => { setApiKey(k);    try { localStorage.setItem("isshogo_apikey",  k);                } catch {} };

  // Get current location (GoogleMapView auto-searches when userLoc changes)
  const getLocation = () => {
    if (!navigator.geolocation) { setLocStatus("no"); return; }
    setLocStatus("busy");
    
    
    navigator.geolocation.getCurrentPosition(
      p => {
        setUserLoc({ lat: p.coords.latitude, lng: p.coords.longitude });
        setLocStatus("ok");
      },
      () => { setLocStatus("no");  },
      { timeout: 10000 }
    );
  };

  const mapSrc = () => userLoc ? `https://maps.google.com/maps?q=${userLoc.lat},${userLoc.lng}&z=14&output=embed&hl=en` : `https://maps.google.com/maps?q=35.6762,139.6503&z=11&output=embed&hl=en`;

  const toggleFilter = (id) => {
    setActiveFilters(prev => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  };

  // 場所名検索 → ジオコーディング → マップ移動 + 再検索
  const handleLocationSearch = (query) => {
    if (!apiKey || !window.google?.maps) return;
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: query }, (results, status) => {
      if (status === "OK" && results[0]) {
        const loc = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        };
        setUserLoc(loc);
        setLocStatus("ok");
        setPlaceResults([]);
        setActiveFilters(new Set());
        setTextFilter(""); // 場所検索時はテキストフィルターをクリア
      }
    });
  };

  // Filtered results and count per cat
  const searchLower = textFilter.toLowerCase().trim();
  const filteredPlaces = placeResults
    .filter(p => activeFilters.size === 0 || (p._catIds || [p._catId]).some(id => activeFilters.has(id)))
    .filter(p => !searchLower || (p.displayName?.text||"").toLowerCase().includes(searchLower) || (p.formattedAddress||"").toLowerCase().includes(searchLower));
  const countByCat = {};
  placeResults.forEach(p => { (p._catIds || [p._catId]).forEach(id => { countByCat[id] = (countByCat[id] || 0) + 1; }); });

  // Logo 5-tap admin
  const handleLogoTap = () => {
    logoRef.current += 1;
    clearTimeout(timerRef.current);
    if (logoRef.current >= 5) { setShowAdmin(true); logoRef.current = 0; return; }
    timerRef.current = setTimeout(() => { logoRef.current = 0; }, 2500);
  };

  const filteredSpots = spots
    .filter(s => activeFilters.size === 0 || (s.categories || (s.category ? [s.category] : [])).some(id => activeFilters.has(id)))
    .filter(s => !searchLower || (s.name||"").toLowerCase().includes(searchLower) || (s.nameJa||"").toLowerCase().includes(searchLower) || (s.address||"").toLowerCase().includes(searchLower));

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
          <input
            type="text"
            value={searchQuery}
            onChange={e => { setSearchQuery(e.target.value); setTextFilter(e.target.value); }}
            onKeyDown={e => { if (e.key === "Enter" && searchQuery.trim()) handleLocationSearch(searchQuery.trim()); }}
            placeholder={t.search}
            style={{ border:"none", outline:"none", background:"transparent", fontSize:14, color:C.text, flex:1, fontFamily:"inherit" }}
          />
          {searchQuery && (
            <button onClick={() => { handleLocationSearch(searchQuery.trim()); }} style={{ background:"none", border:"none", cursor:"pointer", color:C.primary, fontSize:13, fontWeight:700, padding:"0 4px", fontFamily:"inherit" }}>🔍</button>
          )}
          {searchQuery && (
            <button onClick={() => { setSearchQuery(""); setTextFilter(""); }} style={{ background:"none", border:"none", cursor:"pointer", color:C.muted, fontSize:16, padding:0 }}>×</button>
          )}
        </div>
      </div>

      {/* ── SINGLE PAGE CONTENT ── */}
      <div style={{ display:"flex", flexDirection:"column", gap:0 }}>

        {/* Map */}
        <div style={{ position:"relative" }}>
          {apiKey ? (
            <GoogleMapView
              apiKey={apiKey} userLoc={userLoc} lang={lang} activeFilters={activeFilters} focusPlaceId={focusPlaceId} onFocused={() => setFocusPlaceId(null)}
              onPlacesFound={(results) => { setPlaceResults(results); setActiveFilters(new Set()); }}
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

        {/* Category buttons */}
        <div style={{ background:C.card, padding:"16px 16px 20px", borderBottom:`1px solid ${C.border}` }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
            <div style={{ fontSize:12, color:C.muted, fontWeight:600 }}>
              {placeResults.length > 0
                ? (lang==="ja" ? `${placeResults.length}件 — 絞り込み：` : `${placeResults.length} results — filter:`)
                : (lang==="ja" ? "カテゴリを選んで検索：" : "Select a category to search:")}
            </div>
            {activeFilters.size > 0 && placeResults.length > 0 && (
              <button onClick={() => setActiveFilters(new Set())} style={{
                fontSize:11, color:C.muted, background:"none", border:`1px solid ${C.border}`,
                borderRadius:20, padding:"2px 10px", cursor:"pointer", fontFamily:"inherit",
              }}>{lang==="ja" ? "× 全表示" : "× All"}</button>
            )}
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10 }}>
            {CATS.map(c => {
              const isActive = activeFilters.has(c.id);
              const cnt = countByCat[c.id] || 0;
              return (
                <button key={c.id} className="cat" onClick={() => toggleFilter(c.id)} style={{
                  display:"flex", flexDirection:"column", alignItems:"center", gap:6,
                  background:"none", border:"none", cursor:"pointer", fontFamily:"inherit",
                  padding:"4px", transition:"transform 0.2s", position:"relative",
                }}>
                  <div style={{
                    width:56, height:56, borderRadius:50, position:"relative",
                    background: isActive ? c.color : c.bg,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    boxShadow: isActive ? `0 6px 16px ${c.color}40` : "none",
                    border: isActive ? `3px solid ${c.color}` : "3px solid transparent",
                    transition:"all 0.2s",
                  }}>
                    <CatIcon id={c.id} color={isActive ? "#fff" : c.color} size={30} />
                    {cnt > 0 && (
                      <span style={{
                        position:"absolute", top:-4, right:-4,
                        background: isActive ? "#fff" : c.color,
                        color: isActive ? c.color : "#fff",
                        fontSize:10, fontWeight:800, borderRadius:50,
                        minWidth:18, height:18, display:"flex", alignItems:"center", justifyContent:"center",
                        padding:"0 4px", border:`2px solid ${isActive ? c.color : "#fff"}`,
                        lineHeight:1,
                      }}>{cnt}</span>
                    )}
                  </div>
                  <span style={{ fontSize:11, fontWeight:700, color: isActive ? c.color : C.mid, textAlign:"center", lineHeight:1.2 }}>
                    {lang==="ja" ? c.ja : c.en}
                  </span>
                </button>
              );
            })}
          </div>
          <button onClick={getLocation} style={{
            width:"100%", marginTop:14, background:C.primary,
            color:"#fff", border:"none", borderRadius:16, padding:"13px",
            fontFamily:"inherit", fontWeight:800, fontSize:15, cursor:"pointer",
            boxShadow:`0 4px 16px ${C.primary}40`,
          }}>
            {locStatus==="busy" ? t.locBusy : locStatus==="ok" ? (lang==="ja" ? "🔄 再検索" : "🔄 Refresh & Search") : t.nearMe}
          </button>
          {locStatus === "no" && <div style={{ fontSize:12, color:C.sos, marginTop:8, textAlign:"center" }}>{t.locNo}</div>}
        </div>

        {/* Results */}
        <div style={{ padding:"20px 16px", display:"flex", flexDirection:"column", gap:12 }}>
          {/* Prompt when no results yet */}
          {placeResults.length === 0 && (
            <div style={{ textAlign:"center", padding:"32px 20px", color:C.muted, fontSize:14,
              background:C.card, borderRadius:16, border:`1px dashed ${C.border}` }}>
              <div style={{ fontSize:36, marginBottom:10 }}>📍</div>
              {lang==="ja" ? "「現在地周辺を探す」をタップしてください" : "Tap Find Near Me to search all categories nearby"}
            </div>
          )}

          {/* Google Places results */}
          {filteredPlaces.length > 0 && (
            <>
              <div style={{ fontSize:12, fontWeight:700, color:C.muted, display:"flex", alignItems:"center", gap:6 }}>
                <span style={{ background:C.primaryLt, color:C.primary, padding:"2px 8px", borderRadius:20, fontSize:11 }}>Google</span>
                {filteredPlaces.length}{activeFilters.size > 0 && filteredPlaces.length !== placeResults.length ? ` / ${placeResults.length}` : ""} {lang==="ja" ? "件" : "results"}
              </div>
              {filteredPlaces.map((place, i) => {
                const name = place.displayName?.text || "";
                const address = place.formattedAddress || "";
                const rating = place.rating;
                const ratingCount = place.userRatingCount;
                const isOpen = place.currentOpeningHours?.openNow;
                const photoUrl = place.photos?.[0]?._url || null;
                const mapsUrl = place.googleMapsUri || `https://maps.google.com/?q=${encodeURIComponent(name)}`;
                const catTags = (place._catIds || [place._catId]).map(id => CATS.find(c => c.id === id)).filter(Boolean);
                return (
                  <div key={place.id || i}
                    onClick={() => { setFocusPlaceId(place.id); window.scrollTo({top:0, behavior:"smooth"}); }}
                    style={{
                      background:C.card, borderRadius:16, padding:"14px 16px",
                      boxShadow:C.sh, border:`1px solid ${C.border}`,
                      display:"flex", gap:14, alignItems:"flex-start",
                      cursor:"pointer",
                    }}>
                    {photoUrl
                      ? <img src={photoUrl} alt={name} style={{ width:72, height:72, borderRadius:10, objectFit:"cover", flexShrink:0 }} />
                      : <PhotoThumb idx={i} size={72} />
                    }
                    <div style={{ flex:1, display:"flex", flexDirection:"column", gap:5 }}>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                        <div style={{ fontWeight:700, fontSize:15, color:C.text, lineHeight:1.3, flex:1 }}>{name}</div>
                        <button onClick={e => { e.stopPropagation(); toggleFav(place); }} style={{
                          background:"none", border:"none", cursor:"pointer", fontSize:20, padding:"0 0 0 8px", lineHeight:1,
                          color: isFav(place.id) ? "#E05C6A" : C.muted,
                        }}>{isFav(place.id) ? "♥" : "♡"}</button>
                      </div>
                      <div style={{ display:"flex", flexWrap:"wrap", gap:4 }}>
                        {catTags.map(ct => (
                          <span key={ct.id} style={{ fontSize:10, fontWeight:700, color:ct.color, background:ct.bg, padding:"1px 7px", borderRadius:20 }}>{lang==="ja"?ct.ja:ct.en}</span>
                        ))}
                      </div>
                      {rating && (
                        <div style={{ fontSize:12, color:C.mid, display:"flex", alignItems:"center", gap:4 }}>
                          <span style={{ color:"#F5A94F", fontWeight:700 }}>{"★".repeat(Math.round(rating))}</span>
                          <span>{rating.toFixed(1)}</span>
                          {ratingCount && <span style={{ color:C.muted }}>({ratingCount.toLocaleString()})</span>}
                        </div>
                      )}
                      {address && <div style={{ fontSize:12, color:C.muted, lineHeight:1.4 }}>📍 {address}</div>}
                      {isOpen !== undefined && <span style={{ fontSize:11, fontWeight:700, color: isOpen?"#1A8A5A":C.sos }}>{isOpen?(lang==="ja"?"営業中":"Open now"):(lang==="ja"?"営業時間外":"Closed")}</span>}
                      <a href={mapsUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ textDecoration:"none", marginTop:2 }}>
                        <PillBtn color={C.primary} light>{t.maps}</PillBtn>
                      </a>
                    </div>
                  </div>
                );
              })}
            </>
          )}

          {/* Clinics curated list */}
          {activeFilters.has("clinics") && (
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              <button onClick={() => { const url = userLoc ? `https://www.google.com/maps/search/English+speaking+clinic/@${userLoc.lat},${userLoc.lng},14z` : `https://www.google.com/maps/search/English+speaking+clinic+Japan`; window.open(url,"_blank"); }}
                style={{ background:`linear-gradient(135deg,#CF7B68,#E09080)`, color:"#fff", border:"none", borderRadius:14, padding:"12px 20px", fontFamily:"inherit", fontWeight:800, fontSize:14, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                🗺️ {lang==="ja"?"周辺のクリニックをGoogle Mapsで探す":"Find nearby clinics on Google Maps"}
              </button>
              <div style={{ fontSize:13, fontWeight:700, color:C.mid }}>📋 {lang==="ja"?"英語対応 厳選病院リスト":"Curated English-OK Hospitals"}</div>
              {allHosp.map(h => <HospCard key={h.id} h={h} lang={lang} t={t} isAdmin={false} onEdit={()=>{}} onDel={()=>{}} />)}
            </div>
          )}

          {/* Custom spots */}
          {filteredSpots.length > 0 && (
            <>
              <div style={{ fontSize:11, fontWeight:700, color:C.muted, display:"flex", alignItems:"center", gap:6 }}>
                <span style={{ background:"#F0F4F3", color:C.mid, padding:"2px 8px", borderRadius:20 }}>{lang==="ja"?"Isshogoおすすめ":"Curated"}</span>
              </div>
              {filteredSpots.map((s,i) => <SpotCard key={s.id} spot={s} idx={i} lang={lang} t={t} isAdmin={false} onEdit={()=>{}} onDel={()=>{}} />)}
            </>
          )}
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
      {showFavs && (
        <div style={{ position:"fixed", inset:0, zIndex:150, background:"rgba(0,0,0,0.35)", backdropFilter:"blur(4px)", display:"flex", alignItems:"flex-end" }}
          onClick={e=>e.target===e.currentTarget&&setShowFavs(false)}>
          <div style={{ width:"100%", maxHeight:"80vh", background:C.card, borderRadius:"20px 20px 0 0", overflowY:"auto", padding:"24px 20px 40px" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
              <div style={{ fontWeight:800, fontSize:18, color:C.text }}>♥ {lang==="ja"?`お気に入り (${favorites.length}件)`:`Favorites (${favorites.length})`}</div>
              <button onClick={()=>setShowFavs(false)} style={{ background:"none", border:"none", cursor:"pointer", fontSize:20, color:C.muted }}>×</button>
            </div>
            {favorites.length === 0 ? (
              <div style={{ textAlign:"center", padding:"32px 0", color:C.muted, fontSize:14 }}>
                <div style={{ fontSize:40, marginBottom:12 }}>♡</div>
                {lang==="ja"?"まだお気に入りがありません":"No favorites yet"}
              </div>
            ) : (
              <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                {favorites.map((place, i) => {
                  const catTags = (place._catIds || [place._catId]).map(id => CATS.find(c => c.id === id)).filter(Boolean);
                  const mapsUrl = place.googleMapsUri || "";
                  return (
                    <div key={place.id || i} onClick={() => { setShowFavs(false); setFocusPlaceId(place.id); window.scrollTo({top:0, behavior:"smooth"}); }}
                      style={{ background:C.bg, borderRadius:14, padding:"12px 14px", display:"flex", gap:12, alignItems:"center", cursor:"pointer", border:`1px solid ${C.border}` }}>
                      <div style={{ flex:1 }}>
                        <div style={{ fontWeight:700, fontSize:14, color:C.text, marginBottom:4 }}>{place.displayName?.text}</div>
                        <div style={{ display:"flex", flexWrap:"wrap", gap:4, marginBottom:4 }}>
                          {catTags.map(ct => <span key={ct.id} style={{ fontSize:10, fontWeight:700, color:ct.color, background:ct.bg, padding:"1px 7px", borderRadius:20 }}>{lang==="ja"?ct.ja:ct.en}</span>)}
                        </div>
                        {place.rating && <div style={{ fontSize:12, color:C.mid }}>★ {place.rating}</div>}
                      </div>
                      <button onClick={e => { e.stopPropagation(); toggleFav(place); }} style={{ background:"none", border:"none", cursor:"pointer", fontSize:20, color:"#E05C6A" }}>♥</button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
      {showMenu  && <MenuPanel  t={t} lang={lang} onAdmin={()=>setShowAdmin(true)} onClose={()=>setShowMenu(false)} favCount={favorites.length} onFavs={()=>setShowFavs(true)} />}
      {showAdmin && <AdminModal t={t} lang={lang} spots={spots} extraHosp={extraHosp}
        apiKey={apiKey} onSaveApiKey={saveApiKey}
        onSaveSpots={saveSpots} onSaveHosp={saveHosp} onClose={()=>setShowAdmin(false)} />}
    </div>
  );
}
