// 真实感活动数据 — 避免模板化（design-taste "Jane Doe" 反模式）
export const activities = [
  {
    type: "展览",
    title: "敦煌光影艺术展",
    time: "今日开幕 9:00-18:00",
    rating: "4.9",
    meta: "2,341 人想去",
    price: "¥68 起",
    image:
      "https://picsum.photos/seed/exhibition-dunhuang-2026/640/360",
    tall: true,
  },
  {
    type: "市集",
    title: "老城厢周末市集",
    time: "周六-周日 10:00-21:00",
    rating: "4.8",
    meta: "1,862 人去过",
    price: "免费入场",
    image:
      "https://picsum.photos/seed/market-oldtown-weekend/640/300",
    tall: false,
  },
  {
    type: "Live",
    title: "落日飞车 Live 现场",
    time: "今晚 20:00 开演",
    rating: "4.9",
    meta: "余票 128 张",
    price: "¥180 起",
    image: "https://picsum.photos/seed/live-sunset-drive/640/360",
    tall: true,
  },
  {
    type: "徒步",
    title: "郊野公园星空徒步",
    time: "周六 6:30 集合出发",
    rating: "4.8",
    meta: "领队经验 6 年",
    price: "免费",
    image: "https://picsum.photos/seed/hike-stars-2026/640/300",
    tall: false,
  },
  {
    type: "亲子",
    title: "儿童科学实验室开放日",
    time: "周日 10:00-16:00",
    rating: "4.9",
    meta: "3-12 岁适龄",
    price: "¥99/家庭",
    image:
      "https://picsum.photos/seed/family-science-lab/640/320",
    tall: false,
  },
];

export const benefits = [
  {
    no: "01",
    title: "节省筛选时间",
    body: "按兴趣、距离、同行人群和预算，30 秒得到一个真正合适的周末方案。",
  },
  {
    no: "02",
    title: "更少踩雷",
    body: "结合评分、热度与真实反馈，优先展示被反复验证的活动。",
  },
  {
    no: "03",
    title: "适合不同场景",
    body: "约会、朋友聚会、亲子同游，一键切换人群即可重新筛选。",
  },
];

export const audiences = [
  {
    title: "城市年轻人",
    body: "发现新鲜、有趣、不落俗套的周末体验。小众独立展、城市探索路线、独立咖啡 Live，都已经在你的列表里。",
    icon: "compass",
  },
  {
    title: "情侣约会",
    body: "快速找到适合两个人的周末。落日专场、双人 Live、星空徒步、深夜书店——把约会变成期待。",
    icon: "heart",
  },
  {
    title: "亲子家庭",
    body: "筛选安全、轻松、有教育意义的活动。适龄标注、距离、是否需要预约都写得很清楚，少踩很多坑。",
    icon: "home",
  },
];

export const features = [
  {
    title: "个性化推荐",
    desc: "根据你过去喜欢的活动类型、收藏与评分，学习你的口味，下一次刷新更精准。",
    link: "了解推荐逻辑 →",
    dark: true,
    span: "large",
  },
  {
    title: "城市活动日历",
    desc: "一屏看全本周每天的活动，按时间倒序展示。",
    icon: "calendar",
    span: "small",
  },
  {
    title: "预算筛选",
    desc: "0 元到 ¥500+，从免费到深度体验按预算分档。",
    icon: "wallet",
    span: "small",
  },
  {
    title: "路线建议",
    desc: "一键跳转高德 / 百度地图，自动规划出行路线。",
    icon: "map",
    span: "small",
  },
  {
    title: "收藏清单",
    desc: "周末前看一眼收藏，挑出这周想去的活动。",
    icon: "bookmark",
    span: "small",
  },
  {
    title: "活动提醒",
    desc: "开演前 1 小时微信提醒，不再错过喜欢的活动。",
    icon: "bell",
    span: "small",
  },
];

export const testimonials = [
  {
    quote:
      "「终于不用每周五临时问朋友去哪儿了。每次刷新都有点惊喜，我已经 4 周没再开大众点评。」",
    name: "沈屿",
    role: "28 岁 · 产品经理",
    avatar:
      "https://picsum.photos/seed/avatar-shenyu-2026/200/200",
  },
  {
    quote:
      "「推荐比普通榜单更贴合我的兴趣，Live 和独立展这种偏小众的也能精准挖到。回不去了。」",
    name: "林夏",
    role: "26 岁 · 视觉设计师",
    avatar:
      "https://picsum.photos/seed/avatar-linxia-2026/200/200",
  },
  {
    quote:
      "「亲子筛选很实用，少踩很多坑。适龄标签和真实家长反馈，帮我避开了好几个不靠谱的儿童展。」",
    name: "陈韵",
    role: "34 岁 · 全职妈妈",
    avatar:
      "https://picsum.photos/seed/avatar-chenyun-2026/200/200",
  },
];

export const tools = [
  "微信提醒",
  "高德地图",
  "系统日历",
  "在线票务",
  "大麦",
  "小红书",
];

export const plans = [
  {
    name: "免费版",
    desc: "想先看看周末推荐长什么样？",
    price: "¥0",
    features: ["查看本周基础推荐", "城市活动日历浏览", "3 个城市 / 周"],
    cta: "免费开始",
    ctaStyle: "secondary",
  },
  {
    name: "Plus",
    desc: "一个人的周末，也值得被认真安排。",
    price: "¥19",
    badge: "最受欢迎",
    features: [
      "个性化推荐，越用越准",
      "无限收藏清单 + 路线规划",
      "10 个城市 · 微信提醒",
    ],
    cta: "免费试用 7 天",
    ctaStyle: "primary",
    featured: true,
  },
  {
    name: "家庭版",
    desc: "两个人的日程，三个人的周末。",
    price: "¥39",
    features: [
      "Plus 全部能力",
      "亲子筛选 + 适龄标注",
      "4 个偏好 + 专属周末计划",
    ],
    cta: "开始家庭计划",
    ctaStyle: "primary",
  },
];

export const faqs = [
  { q: "目前支持哪些城市？" },
  { q: "推荐里会不会有广告？" },
  { q: "可以按预算筛选活动吗？" },
  { q: "活动信息是实时的吗？会不会过期？" },
  { q: "喜欢的活动能否收藏和分享给朋友？" },
];
