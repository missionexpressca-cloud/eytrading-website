// Simple bilingual toggle: English (default) and Simplified Chinese.

const dict = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_network: "Network",
    nav_store: "Online Store",
    nav_contact: "Contact",

    hero_kicker: "Last-mile & regional logistics in Saskatchewan",
    hero_title: "We bring the world to your doorstep",
    hero_sub:
      "Mission Go connects e‑commerce, freight partners, and local communities with reliable last‑mile delivery across Regina, Saskatoon, Prince Albert, Moose Jaw and beyond.",
    btn_get_quote: "Get a quote",
    btn_view_services: "View services",
    btn_contact_us: "Contact us",
    metric_days: "Days a week",
    metric_parcels: "Parcel & bulk deliveries",
    metric_cities: "Key cities: Moose Jaw & Regina",

    home_highlights_title: "Why partners choose Mission Go",
    home_highlights_intro:
      "Built for e-commerce platforms, carriers, and local businesses looking for a reliable Saskatchewan delivery partner.",
    home_card1_title: "Professional last-mile delivery",
    home_card1_body:
      "Same-day and next-day solutions for parcels, 20kg+ packages, and local distribution.",
    home_card2_title: "Carrier & platform friendly",
    home_card2_body:
      "We integrate with your systems and respect SLAs, branding, and customer experience.",
    home_card3_title: "Pickup points & micro-hubs",
    home_card3_body:
      "Neighborhood pickup locations and local hubs designed to reduce failed deliveries.",

    home_flow_title: "Simple, transparent delivery flow",
    home_flow_1_label: "1. Connect",
    home_flow_1_body:
      "We integrate with your platform or receive daily manifests from your warehouse or carrier.",
    home_flow_2_label: "2. Sort & route",
    home_flow_2_body:
      "Parcels are scanned, sorted by postal code and zone, and routed to our driver app.",
    home_flow_3_label: "3. Deliver & confirm",
    home_flow_3_body:
      "Drivers complete doorstep or pickup-point deliveries with proof of delivery and status updates.",

    home_cta_title: "Looking for a Saskatchewan delivery partner?",
    home_cta_body:
      "Talk to us about last-mile, local distribution, or operating a pickup point in Moose Jaw or Regina.",

    footer_note:
      "Mission Go is the last-mile brand of Mission Express Logistics Inc., based in Moose Jaw, Saskatchewan, Canada.",

    about_title: "About Mission Go",
    about_intro:
      "Mission Go is the last-mile and local distribution brand of Mission Express Logistics Inc., founded in Saskatchewan to serve real businesses and real communities.",
    about_story_title: "Our story",
    about_story_body1:
      "We started in Moose Jaw with a simple idea: international parcels, e-commerce orders, and local shipments should not get 'lost' between major carriers and the customer’s front door.",
    about_story_body2:
      "Mission Go focuses on the last stretch of the journey – from regional hubs and local warehouses to homes, small businesses, and pickup points across the city.",
    about_focus_title: "What we focus on",
    about_focus_1: "Last-mile parcel delivery for e-commerce and freight partners",
    about_focus_2: "Neighborhood pickup points for flexible customer pickup",
    about_focus_3: "Route design and driver app workflows that reduce failed deliveries",
    about_values_title: "Our principles",
    about_values_1_title: "Local & human",
    about_values_1_body:
      "We are based in Saskatchewan, speak the language of local businesses, and value long-term partnerships over one-time transactions.",
    about_values_2_title: "Reliable operations",
    about_values_2_body:
      "Clear cut-off times, predictable routes, and a structured delivery process ensure consistent service.",
    about_values_3_title: "Transparent communication",
    about_values_3_body:
      "We keep carriers, merchants, and end customers informed with status updates and direct support.",

    services_title: "Services",
    services_intro:
      "From international inbound parcels to local B2B runs, Mission Go provides structured last-mile and regional delivery services.",
    services_card1_title: "Last-mile parcel delivery",
    services_card1_body:
      "Doorstep delivery for standard parcels and 20kg+ packages, with clear time windows and status reporting back to your platform or carrier.",
    services_card1_b1: "Same-day / next-day options by zone",
    services_card1_b2: "Driver app with scan-to-deliver workflow",
    services_card1_b3: "Photo / signature proof of delivery where required",
    services_card2_title: "Pickup point & counter services",
    services_card2_body:
      "We operate or partner with neighborhood pickup points so customers can collect parcels at convenient times and locations.",
    services_card2_b1: "Parcel check-in / check-out with ID or code",
    services_card2_b2: "Storage rules and time limits agreed in advance",
    services_card2_b3: "Signage and basic customer support in English & Chinese",
    services_card3_title: "Line-haul & local distribution",
    services_card3_body:
      "Our core service area covers Saskatchewan, including Saskatoon, Regina, Prince Albert, Moose Jaw, and surrounding communities, with scheduled B2B routes for local businesses.",
    services_card3_b1: "Fixed routes with agreed departure / arrival windows",
    services_card3_b2: "Option to combine with last-mile delivery in each city",
    services_card3_b3: "Flexible vehicle sizes depending on volume",
    services_partner_title: "Partner with us",
    services_partner_body:
      "We are happy to discuss pilot projects, dedicated routes, and co-branded pickup points for platforms and carriers entering Saskatchewan.",

    network_title: "Service network",
    network_intro:
      "Mission Go provides delivery coverage across Saskatchewan, including Saskatoon, Regina, Moose Jaw, and nearby communities, with routes and service areas that can be expanded as demand grows.",
    network_cities_title: "Current focus cities",
    network_cities_1:
      "Saskatoon – Regina corridor — scheduled regional line-haul between Saskatoon and Regina, with zone-based pickup & last-mile delivery across intermediate communities.",
    network_cities_2:
      "Regina – regional line-haul from Moose Jaw and last-mile delivery by defined zones.",
    network_cities_3:
      "Moose Jaw – local delivery and pickup-point operations, including neighborhood parcel counters.",
    network_map_note:
      "Map placeholder: indicate Moose Jaw and Regina, plus planned coverage areas. Your technical team can later replace this with an interactive Google Map using the API keys we created.",
    network_expand_title: "Expansion & custom routes",
    network_expand_body:
      "We can design new routes and service areas based on your parcel volume, postal codes, and time window requirements. Talk to us early so we can build a scalable plan.",

    contact_title: "Contact us",
    contact_intro:
      "Whether you are a carrier, e-commerce platform, or local business, we are happy to discuss how Mission Go can support your delivery needs.",
    contact_business_title: "Business & partnership",
    contact_company_name_label: "Company:",
    contact_location_label: "Location:",
    contact_phone_label: "Phone:",
    contact_note:
      "Please include a short description of your business, approximate monthly parcel volume, and the cities or postal codes you would like to cover.",
    contact_form_title: "Send us a message",
    contact_form_note:
      "We will get back to you shortly.",
    contact_form_name: "Name",
    contact_form_email: "Email",
    contact_form_message: "Message",
    contact_form_button: "Send message",
    contact_prealert_tag: "[🇨🇳🇨🇦 China→Canada Consolidation]",
contact_prealert_title: "",
contact_prealert_btn: "Parcel Pre-Alert",
contact_store_tag: "[Courier Platform]",
contact_store_title: "Platform Portal",
contact_store_btn: "Enter Platform",
    cc_ship_title: "China–Canada Consolidation Shipping",
cc_ship_intro: "Ship your China online purchases to our China consolidation warehouse. We photo/weigh on arrival, optional repacking, then send via LCL sea freight to Canada. After customs clearance, we deliver from Moose Jaw.",
cc_ship_subtitle: "Service details",
cc_ship_1_label: "1. How to place an order:",
cc_ship_1_line1: "Ship your China online orders directly to our China consolidation warehouse.",
cc_ship_1_line2: "Consignee: Chris · +86 15015428263 · 510445",
cc_ship_2_label: "2. Process:",
cc_ship_2_flow: "Customer order → Send tracking number to us → Arrive at China warehouse → Photo & weigh → Repack/merge (optional) → Confirm charges → Pack & dispatch → LCL sea freight → Canada customs/inspection → Arrive station → Moose Jaw delivery → Completed",
cc_ship_3_label: "3. Pricing rule:",
cc_ship_3_text: "Charged by actual weight or volumetric weight, whichever is higher (warehouse measurement prevails).",
cc_ship_4_label: "4. Transit time:",
cc_ship_4_text: "LCL sea freight is affected by sailing schedule, customs, and weather. No guaranteed arrival date.",
cc_ship_5_label: "5. Duties & inspection:",
cc_ship_5_text: "DDP (tax included). Customs is uncontrollable; if seized by customs, we compensate up to ¥19/kg. For valuables, buy insurance or use express courier.",
cc_ship_6_label: "6. Prohibited items:",
cc_ship_6_text: "See “Prohibited list” below. Losses caused by prohibited items or misdeclaration are borne by the customer.",
cc_ship_7_label: "7. General cargo rate:",
cc_ship_7_text: "1–15kg ¥28/kg; 15kg+ ¥22/kg."

  },
  zh: {
    nav_home: "首页",
    nav_about: "关于我们",
    nav_services: "服务项目",
    nav_network: "服务网络",
    nav_store: "网上商城",
    nav_contact: "联系合作",

    hero_kicker: "萨斯喀彻温省本地与区域配送",
    hero_title: "把世界送到你的家门口",
    hero_sub:
      "Mission Go 连接跨境电商、货运代理与本地社区，在里贾纳、萨斯卡通、阿尔伯塔王子城、穆斯乔等地提供稳定可靠的本地与末端派送服务。",
    btn_get_quote: "获取报价",
    btn_view_services: "查看服务",
    btn_contact_us: "联系我们",
    metric_days: "每周运营天数",
    metric_parcels: "包裹与大件派送",
    metric_cities: "重点服务城市：穆斯乔 & 里贾纳",

    home_highlights_title: "合作伙伴为什么选择 Mission Go",
    home_highlights_intro:
      "为跨境电商平台、快递与货代公司以及本地商家打造的萨省本地配送合作伙伴。",
    home_card1_title: "专业末端派送",
    home_card1_body: "支持标包与 20kg+ 大件，本地当日 / 次日派送与区域分拨。",
    home_card2_title: "友好的平台与承运商对接",
    home_card2_body:
      "可按需对接系统，尊重平台时效、品牌形象与客户体验要求。",
    home_card3_title: "自提点与微型中转仓",
    home_card3_body: "建设社区自提点与本地中转仓，减少投递失败与二次上门。",

    home_flow_title: "清晰透明的派送流程",
    home_flow_1_label: "1. 对接",
    home_flow_1_body:
      "与您的平台系统对接，或按日接收清单与货物，约定交接时间与方式。",
    home_flow_2_label: "2. 分拣与规划路线",
    home_flow_2_body:
      "按邮编与区域分拣包裹，通过司机 App 自动生成路线与装车顺序。",
    home_flow_3_label: "3. 派送与回传结果",
    home_flow_3_body:
      "完成上门或自提点交付，并回传签收情况、照片或签名等送达证明。",

    home_cta_title: "正在寻找萨省本地配送合作伙伴？",
    home_cta_body:
      "欢迎洽谈末端派送、本地分拨，或在穆斯乔、里贾纳合作运营自提点。",

    footer_note:
      "Mission Go 为 Mission Express Logistics Inc. 旗下末端派送品牌，总部位于加拿大萨省穆斯乔。",

    about_title: "关于 Mission Go",
    about_intro:
      "Mission Go 是 Mission Express Logistics Inc. 的末端派送与本地分拨品牌，诞生于萨省，服务真实的企业与社区。",
    about_story_title: "我们的故事",
    about_story_body1:
      "我们从穆斯乔起步，只想解决一个简单的问题：跨境包裹、电商订单和本地货物，不应该在“大公司”和客户家门之间迷路。",
    about_story_body2:
      "Mission Go 专注于“最后一公里”，从区域枢纽和本地仓库，把货物安全送达居民、商铺和自提点。",
    about_focus_title: "我们的重点方向",
    about_focus_1: "跨境与电商末端派送",
    about_focus_2: "社区自提点与门店代收",
    about_focus_3: "减少投递失败的路线与系统设计",
    about_values_title: "我们的原则",
    about_values_1_title: "本地 · 有温度",
    about_values_1_body:
      "扎根萨省，懂得本地商家的语言，更重视长期合作关系而非一次性交易。",
    about_values_2_title: "稳定的运营",
    about_values_2_body:
      "明确截单时间、固定线路与标准化作业流程，让服务可预期。",
    about_values_3_title: "透明的沟通",
    about_values_3_body:
      "及时向承运商、商家和收件人反馈状态，有问题可以直接沟通。",

    services_title: "服务项目",
    services_intro:
      "从入境包裹到本地 B2B 配送，Mission Go 提供结构化的末端派送与区域运输服务。",
    services_card1_title: "末端派送服务",
    services_card1_body:
      "面向电商与货代的上门派送服务，支持 20kg+ 大件，并按约定回传签收结果。",
    services_card1_b1: "按区域提供当日 / 次日服务",
    services_card1_b2: "配合司机 App 的扫码装车与投递流程",
    services_card1_b3: "可选照片 / 签名等送达证明",
    services_card2_title: "自提点与门店代收",
    services_card2_body:
      "运营或合作社区自提点，让收件人可以自选时间与地点取件。",
    services_card2_b1: "按身份证或提货码办理取件",
    services_card2_b2: "提前约定包裹存放规则与时限",
    services_card2_b3: "可提供中英双语的基础咨询服务",
    services_card3_title: "区域运输与本地分拨",
    services_card3_body:
      "我们的核心服务范围覆盖萨斯喀彻温省，包括萨斯卡通、里贾纳、艾伯特王子城、穆斯乔及周边社区，并为本地企业提供定期的 B2B 配送线路。",
    services_card3_b1: "固定线路与约定班次时间",
    services_card3_b2: "可与两地末端派送衔接",
    services_card3_b3: "可根据货量选择合适车型",
    services_partner_title: "期待与您合作",
    services_partner_body:
      "欢迎就试点项目、固定线路或联合品牌自提点与我们沟通，共同服务萨省用户。",

    network_title: "服务网络",
    network_intro:
      "Mission Go 提供覆盖萨斯喀彻温省的配送服务，包括萨斯卡通、里贾纳、莫斯乔及附近社区，并可随着需求增长扩展运输线路和服务区域。",
    network_cities_title: "当前重点城市",
    network_cities_1:
      "萨斯卡通：萨斯卡通和里贾纳之间的定期区域干线运输，沿途社区提供基于区域的取货和最后一公里配送服务",
    network_cities_2:
      "里贾纳：穆斯乔与里贾纳之间的区域运输，以及分区派送服务。",
    network_cities_3:
      "穆斯乔：本地派送与社区自提点运营，包括门店代收。",
    network_map_note:
      "此处为示意地图区域。后续可由技术团队接入 Google Maps，在官网上展示真实路线与自提点位置。",
    network_expand_title: "线路扩展与定制",
    network_expand_body:
      "可根据您的包裹量、目标邮编和时效要求设计新线路，欢迎提前沟通，共同规划可扩展的网络。",

    contact_title: "联系合作",
    contact_intro:
      "无论您是承运商、跨境电商平台还是本地商家，都欢迎与我们沟通合作方式。",
    contact_business_title: "商务合作",
    contact_company_name_label: "公司：",
    contact_location_label: "所在城市：",
    contact_phone_label: "电话：",
    contact_note:
      "发邮件时，建议简单说明业务类型、月度（或每日）包裹量，以及希望覆盖的城市或邮编范围。",
    contact_form_title: "给我们留言",
    contact_form_note:
      "我们会尽快回复您。",
    contact_form_name: "姓名",
    contact_form_email: "邮箱",
    contact_form_message: "留言内容",
    contact_form_button: "发送",
    contact_prealert_tag: "【🇨🇳🇨🇦中加集运】",
contact_prealert_title: "",
contact_prealert_btn: "包裹预报",
contact_store_tag: "【物流平台】",
contact_store_title: "平台入口",
contact_store_btn: "进入平台",
    cc_ship_title: "中加集运",
cc_ship_intro: "国内网购直接寄到我们中国集运仓，到仓后入库拍照/称重，可拆包合箱（可选），再海运拼箱到加拿大，清关后由 Moose Jaw 本地派送。",
cc_ship_subtitle: "服务说明",
cc_ship_1_label: "1. 下单方式：",
cc_ship_1_line1: "国内网购直接寄到我们中国集运仓。",
cc_ship_1_line2: "收件信息：Chris  15015428263  510445",
cc_ship_2_label: "2. 流程：",
cc_ship_2_flow: "客户网购下单 → 客户报运单号给我 → 到达中国集运仓 → 入库拍照/称重 → 拆包合箱（可选） → 计费确认 → 出库装箱 → 海运拼箱 → 加拿大清关/查验 → 到站 → Moose Jaw 派送 → 完成",
cc_ship_3_label: "3. 计费规则：",
cc_ship_3_text: "按重量或体积择大计费（仓库实测为准）。",
cc_ship_4_label: "4. 时效：",
cc_ship_4_text: "海运属于拼箱运输，受船期/清关/天气影响，不承诺固定到达日。",
cc_ship_5_label: "5. 税费/查验：",
cc_ship_5_text: "双清包税，但由于海关属于不可控因素，如遇被海关查扣情况，我司愿意按 ¥19/kg 补偿。贵重物建议购买保险或走商业快递。",
cc_ship_6_label: "6. 禁运物品：",
cc_ship_6_text: "见下方“禁运清单”，违禁/瞒报造成的损失由客户承担。",
cc_ship_7_label: "7. 普货价格：",
cc_ship_7_text: "普货 1–15kg ¥28/kg；15kg 起 ¥22/kg。"

  }
};

function applyLang(lang) {
document.documentElement.setAttribute("lang", lang);
  
  const strings = dict[lang];
  if (!strings) return;
  document
    .querySelectorAll("[data-i18n]")
    .forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (strings[key]) {
        el.textContent = strings[key];
      }
    });

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.textContent = lang === "en" ? "中文" : "EN";
  }
  localStorage.setItem("missiongo_lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const saved = localStorage.getItem("missiongo_lang") || "en";
  applyLang(saved);

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = localStorage.getItem("missiongo_lang") || "en";
      applyLang(current === "en" ? "zh" : "en");
    });
  }
});
