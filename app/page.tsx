import {
  CheckIcon,
  StarIcon,
  ArrowRightIcon,
  PlusIcon,
  PinIcon,
  CalendarIcon,
  WalletIcon,
  MapIcon,
  BookmarkIcon,
  BellIcon,
  SparkleIcon,
  CompassIcon,
  HeartIcon,
  HomeIcon,
  WeChatIcon,
  WeiboIcon,
  NotebookIcon,
} from "./icons";
import {
  activities,
  benefits,
  audiences,
  features,
  testimonials,
  tools,
  plans,
  faqs,
} from "../lib/data";

/* =========================================================================
 * 周末去哪儿 · 落地页 (int-landing-page)
 * - Tailwind v4 + design tokens
 * - 字体：Noto Sans SC（中文）+ Inter（数字）
 * - 动效：CSS @keyframes stagger 入场 + btn press 0.97 + lift hover
 * ========================================================================= */

function Navbar() {
  const links = ["活动类型", "适合谁", "会员", "FAQ"];
  return (
    <nav className="sticky top-0 z-50 border-b border-[#E8E8ED] bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-14">
        <div className="flex items-center gap-2.5">
          <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#0066CC] text-white">
            <PinIcon size={20} className="text-white" />
          </div>
          <span className="text-[19px] font-semibold tracking-tight-cn text-[#1D1D1F]">
            周末去哪儿
          </span>
        </div>
        <ul className="flex items-center gap-9">
          {links.map((l) => (
            <li
              key={l}
              className="cursor-pointer text-[15px] text-[#1D1D1F] transition-colors duration-200 hover:text-[#0066CC]"
            >
              {l}
            </li>
          ))}
        </ul>
        <a href="#cta" className="btn btn-primary">
          查看本周推荐
        </a>
      </div>
    </nav>
  );
}

function ActivityCard({
  type,
  title,
  time,
  rating,
  meta,
  price,
  image,
  tall,
}: (typeof activities)[number]) {
  return (
    <article
      className={`lift flex w-[321px] flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.08)]`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          tall ? "h-[150px]" : "h-[118px]"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.04]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-1.5 p-[14px]">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-[#E3EEFB] px-2.5 py-1 text-[12px] font-medium text-[#0066CC]">
            {type}
          </span>
          <span className="text-[12px] text-[#86868B]">{time}</span>
        </div>
        <h3 className="text-[16px] font-semibold tracking-tight-cn text-[#1D1D1F]">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <StarIcon size={12} />
            <span className="text-[12px] text-[#6E6E73]">
              {rating} · {meta}
            </span>
          </div>
          <span className="text-[12px] font-medium text-[#0066CC]">
            {price}
          </span>
        </div>
      </div>
    </article>
  );
}

function Hero() {
  return (
    <section
      id="cta"
      className="fade-in bg-[#F5F5F7] px-14 py-[72px]"
    >
      <div className="mx-auto flex max-w-[1440px] items-center gap-12">
        <div className="flex w-[516px] flex-col gap-5">
          <span className="w-fit rounded-full bg-[#E3EEFB] px-3.5 py-1.5 text-[13px] font-medium text-[#0066CC]">
            城市青年的周末灵感库
          </span>
          <h1 className="text-[44px] font-semibold leading-[1.18] tracking-tight-cn text-[#1D1D1F]">
            不用翻半天，
            <br />
            周末去哪儿已经帮你选好了
          </h1>
          <p className="text-[18px] leading-[1.67] text-[#6E6E73]">
            根据城市、预算、兴趣和同行人群，推荐真正适合你的周末活动。告别选择困难，把时间留给体验。
          </p>
          <div className="flex items-center gap-[18px] pt-1">
            <a href="#cta" className="btn btn-primary btn-store">
              查看本周推荐
            </a>
            <span className="text-[14px] text-[#6E6E73]">
              每周更新 200+ 场活动
            </span>
          </div>
          <div className="flex items-center gap-2.5 pt-2">
            <StarIcon size={16} />
            <span className="text-[14px] text-[#6E6E73]">
              4.9 高分 · 12万+ 城市青年正在使用
            </span>
          </div>
        </div>

        <div className="flex w-[660px] flex-wrap gap-[18px]">
          {activities.map((a, i) => (
            <ActivityCard key={a.title} {...a} />
          ))}
          <a
            href="#"
            className="lift flex h-[220px] w-[321px] items-center justify-center gap-2.5 rounded-[18px] bg-[#E3EEFB] text-[#0066CC]"
          >
            <ArrowRightIcon size={20} className="text-[#0066CC]" />
            <span className="text-[16px] font-semibold">查看全部 38 场活动</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  lead,
  maxWidth = 680,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  maxWidth?: number;
}) {
  return (
    <div className="stagger flex flex-col items-center gap-3.5">
      <span className="text-[13px] font-semibold text-[#0066CC]">{eyebrow}</span>
      <h2 className="text-center text-[36px] font-semibold leading-[1.28] tracking-tight-cn text-[#1D1D1F]">
        {title}
      </h2>
      {lead && (
        <p
          className="text-center text-[18px] leading-[1.67] text-[#6E6E73]"
          style={{ maxWidth }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

function Benefits() {
  return (
    <section className="bg-white px-14 py-[96px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-14">
        <SectionHeader
          eyebrow="为什么选周末去哪儿"
          title="把周末的决定权，交还给体验"
          lead="三个理由，让你不再为「去哪儿」翻遍社交网络。"
        />
        <div className="flex justify-center gap-8">
          {benefits.map((b) => (
            <div
              key={b.no}
              className="flex flex-col gap-3.5"
              style={{
                width:
                  b.no === "01" ? 380 : b.no === "02" ? 300 : 340,
              }}
            >
              <span className="font-[Inter] text-[48px] font-light tracking-tight text-[#0066CC]">
                {b.no}
              </span>
              <h3 className="text-[21px] font-semibold tracking-tight-cn text-[#1D1D1F]">
                {b.title}
              </h3>
              <p className="text-[16px] leading-[1.75] text-[#6E6E73]">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const audienceIcons: Record<string, (p: { className?: string; size?: number }) => JSX.Element> = {
  compass: CompassIcon,
  heart: HeartIcon,
  home: HomeIcon,
};

function Audiences() {
  return (
    <section className="bg-[#F5F5F7] px-14 py-[96px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-14">
        <SectionHeader
          eyebrow="为谁准备"
          title="无论你周末和谁一起，都有合适的方向"
          lead="三组人，三种过法，告别「周末不知去哪」的低效内耗。"
          maxWidth={720}
        />
        <div className="flex justify-center gap-6">
          {audiences.map((a, i) => {
            const Icon = audienceIcons[a.icon];
            const widths = [412, 356, 412];
            return (
              <article
                key={a.title}
                className="lift flex flex-col gap-5 rounded-[24px] bg-white p-8 shadow-[0_6px_18px_-6px_rgba(0,0,0,0.06)]"
                style={{ width: widths[i] }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-[#E3EEFB] text-[#0066CC]">
                  {Icon ? <Icon size={32} className="text-[#0066CC]" /> : null}
                </div>
                <h3 className="text-[22px] font-semibold tracking-tight-cn text-[#1D1D1F]">
                  {a.title}
                </h3>
                <p className="text-[15px] leading-[1.73] text-[#6E6E73]">
                  {a.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const featureIcons: Record<string, (p: { className?: string; size?: number }) => JSX.Element> = {
  calendar: CalendarIcon,
  wallet: WalletIcon,
  map: MapIcon,
  bookmark: BookmarkIcon,
  bell: BellIcon,
};

function Features() {
  return (
    <section className="bg-white px-14 py-[96px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12">
        <SectionHeader
          eyebrow="核心能力"
          title="不只是推荐——是真正能用的周末工具"
          lead="六个能力，覆盖从「发现」到「出发」的每一步。"
        />
        {/* Bento row 1: dark large + two small */}
        <div className="flex justify-center gap-4">
          {features.slice(0, 3).map((f, i) => {
            if (f.dark) {
              return (
                <article
                  key={f.title}
                  className="lift flex h-[360px] w-[640px] flex-col gap-5 rounded-[24px] bg-[#1D1D1F] p-8 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.1)]"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-[#0066CC] text-white">
                    <SparkleIcon size={40} className="text-white" />
                  </div>
                  <h3 className="text-[30px] font-semibold leading-[1.27] tracking-tight-cn text-white">
                    {f.title}
                  </h3>
                  <p className="text-[16px] leading-[1.63] text-[#A0A0A6]">
                    {f.desc}
                  </p>
                  {f.link && (
                    <span className="text-[15px] font-medium text-[#2997FF]">
                      {f.link}
                    </span>
                  )}
                </article>
              );
            }
            const Icon = featureIcons[f.icon ?? ""];
            return (
              <article
                key={f.title}
                className="lift flex h-[172px] w-[320px] flex-col gap-3.5 rounded-[24px] bg-[#F5F5F7] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white text-[#0066CC]">
                  {Icon ? <Icon size={24} className="text-[#0066CC]" /> : null}
                </div>
                <h3 className="text-[19px] font-semibold leading-[1.37] tracking-tight-cn text-[#1D1D1F]">
                  {f.title}
                </h3>
                <p className="text-[14px] leading-[1.57] text-[#6E6E73]">
                  {f.desc}
                </p>
              </article>
            );
          })}
        </div>
        {/* Bento row 2: three small */}
        <div className="flex justify-center gap-4">
          {features.slice(3).map((f) => {
            const Icon = featureIcons[f.icon ?? ""];
            return (
              <article
                key={f.title}
                className="lift flex h-[200px] w-[320px] flex-col gap-3.5 rounded-[24px] bg-[#F5F5F7] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white text-[#0066CC]">
                  {Icon ? <Icon size={24} className="text-[#0066CC]" /> : null}
                </div>
                <h3 className="text-[19px] font-semibold leading-[1.37] tracking-tight-cn text-[#1D1D1F]">
                  {f.title}
                </h3>
                <p className="text-[14px] leading-[1.57] text-[#6E6E73]">
                  {f.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-[#1D1D1F] px-14 py-[96px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-14">
        <div className="flex flex-col items-center gap-3.5">
          <span className="text-[13px] font-semibold text-[#2997FF]">
            用户怎么说
          </span>
          <h2 className="text-center text-[36px] font-semibold leading-[1.28] tracking-tight-cn text-white">
            用过的人，都不想再回到旧方式
          </h2>
          <p
            className="text-center text-[18px] leading-[1.67] text-[#A0A0A6]"
            style={{ maxWidth: 680 }}
          >
            3 位真实用户的话——他们也不是专家，只是爱过周末。
          </p>
        </div>
        <div className="flex justify-center gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="lift flex w-[426px] flex-col gap-5 rounded-[24px] bg-white p-8 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.18)]"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} size={16} />
                ))}
              </div>
              <p className="text-[17px] leading-[1.76] text-[#1D1D1F]">
                {t.quote}
              </p>
              <div className="h-px w-full bg-[#E8E8ED]" />
              <div className="flex items-center gap-3.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[16px] font-semibold text-[#1D1D1F]">
                    {t.name}
                  </span>
                  <span className="text-[13px] text-[#6E6E73]">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsIntegrations() {
  return (
    <section className="bg-white px-14 py-20">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[13px] font-semibold text-[#0066CC]">
            无缝接入你已经在用的应用
          </span>
          <h2 className="text-center text-[32px] font-semibold leading-[1.31] tracking-tight-cn text-[#1D1D1F]">
            从提醒到出行，一站打通
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((t) => (
            <div
              key={t}
              className="lift flex items-center gap-3 rounded-2xl bg-[#F0F6FD] px-5 py-3.5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-white text-[#0066CC]">
                <span className="text-[15px] font-semibold">
                  {t.charAt(0)}
                </span>
              </div>
              <span className="text-[15px] font-medium text-[#1D1D1F]">
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="bg-[#F5F5F7] px-14 py-[96px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12">
        <SectionHeader
          eyebrow="价格方案"
          title="免费开始，按需升级"
          lead="前 7 天 Plus 免费试用，随时取消。"
        />
        <div className="flex justify-center gap-6">
          {plans.map((p) => {
            const isFeatured = p.featured;
            const widths = [380, 420, 380];
            const idx = plans.indexOf(p);
            return (
              <article
                key={p.name}
                className={`flex flex-col gap-6 rounded-[24px] p-9 ${
                  isFeatured
                    ? "border-2 border-[#0066CC] bg-[#1D1D1F] text-white shadow-[0_16px_40px_-10px_rgba(0,102,204,0.18)]"
                    : "border border-[#E8E8ED] bg-white text-[#1D1D1F] shadow-[0_4px_14px_-4px_rgba(0,0,0,0.04)]"
                }`}
                style={{ width: widths[idx] }}
              >
                {p.badge && (
                  <span
                    className={`w-fit rounded-full px-3 py-1.5 text-[12px] font-semibold ${
                      isFeatured
                        ? "bg-[#0066CC] text-white"
                        : "bg-[#E3EEFB] text-[#0066CC]"
                    }`}
                  >
                    {p.badge}
                  </span>
                )}
                <h3
                  className={`text-[22px] font-semibold tracking-tight-cn ${
                    isFeatured ? "text-white" : "text-[#1D1D1F]"
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`text-[14px] leading-[1.57] ${
                    isFeatured ? "text-[#A0A0A6]" : "text-[#6E6E73]"
                  }`}
                >
                  {p.desc}
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span
                    className={`font-[Inter] text-[48px] font-semibold tracking-tight ${
                      isFeatured ? "text-white" : "text-[#1D1D1F]"
                    }`}
                  >
                    {p.price}
                  </span>
                  <span
                    className={`text-[16px] ${
                      isFeatured ? "text-[#A0A0A6]" : "text-[#6E6E73]"
                    }`}
                  >
                    / 月
                  </span>
                </div>
                <div
                  className={`h-px w-full ${
                    isFeatured ? "bg-[#3A3A3C]" : "bg-[#E8E8ED]"
                  }`}
                />
                <ul className="flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckIcon
                        size={18}
                        className={isFeatured ? "text-[#2997FF]" : "text-[#0066CC]"}
                      />
                      <span
                        className={`text-[15px] ${
                          isFeatured ? "text-white" : "text-[#1D1D1F]"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`btn ${
                    p.ctaStyle === "primary"
                      ? "btn-primary"
                      : "btn-secondary"
                  } w-full`}
                >
                  {p.cta}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="bg-white px-14 py-[96px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12">
        <SectionHeader
          eyebrow="常见问题"
          title="在注册之前，你可能想问"
        />
        <div className="mx-auto flex w-[880px] flex-col">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group border-b border-[#E8E8ED] py-6"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-[18px] font-medium text-[#1D1D1F] [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <span className="transition-transform duration-200 group-open:rotate-45">
                  <PlusIcon size={24} className="text-[#1D1D1F]" />
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#6E6E73]">
                我们会在用户问得最多的前 20 个问题里持续更新。如果你有其他疑问，
                <a href="#" className="text-[#0066CC] underline-offset-2 hover:underline">
                  直接联系我们
                </a>
                ，通常 1 个工作日内回复。
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    {
      title: "城市活动",
      links: ["展览", "市集", "Live 演出", "徒步与亲子"],
    },
    {
      title: "会员",
      links: ["免费版", "Plus", "家庭版"],
    },
    {
      title: "合作",
      links: ["主办方入驻", "商务合作", "媒体咨询"],
    },
  ];
  return (
    <footer className="bg-[#1D1D1F] px-14 pb-10 pt-16">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10">
        <div className="flex justify-between gap-10">
          <div className="flex w-[340px] flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#0066CC] text-white">
                <PinIcon size={20} className="text-white" />
              </div>
              <span className="text-[19px] font-semibold tracking-tight-cn text-white">
                周末去哪儿
              </span>
            </div>
            <p className="text-[14px] leading-[1.71] text-[#86868B]">
              为城市年轻人找到更合心意的周末活动。告别「去哪儿」内耗，把时间留给体验。
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="flex w-[160px] flex-col gap-3.5">
              <span className="text-[13px] font-semibold text-white">
                {c.title}
              </span>
              {c.links.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-[14px] text-[#A0A0A6] transition-colors duration-200 hover:text-white"
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="h-px w-full bg-[#3A3A3C]" />
        <div className="flex items-center justify-between">
          <span className="text-[12px] text-[#86868B]">
            Copyright 2026 周末去哪儿 · 保留所有权利
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[12px] text-[#86868B] hover:text-white">
              隐私政策
            </a>
            <a href="#" className="text-[12px] text-[#86868B] hover:text-white">
              服务条款
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            {[
              { Icon: WeChatIcon, label: "微信" },
              { Icon: WeiboIcon, label: "微博" },
              { Icon: NotebookIcon, label: "小红书" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="lift flex h-8 w-8 items-center justify-center rounded-full bg-[#2A2A2C] text-white transition-colors hover:bg-[#0066CC]"
              >
                <Icon size={18} className="text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <Audiences />
      <Features />
      <Testimonials />
      <ToolsIntegrations />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
