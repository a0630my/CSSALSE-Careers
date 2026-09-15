import Link from "next/link";
import { GlobalSearch } from "@/components/Search";
import { events } from "@/data/content";

const gateways=[
  ["行业探索","从行业趋势、职业路径到真实求职经验，建立你的行业认知。","/industries","01"],
  ["申请准备","从搜索公司到准备材料，再到面试，系统梳理求职流程。","/companies","02"],
  ["学长学姐经验","阅读来自 LSE 学生和毕业生的真实求职与职业经验。","/stories","03"],
  ["求职信箱","一个更开放的职业交流空间，连接问题、经验与同行。","/mailbox","04"]
];
export default function Home(){return <main><section className="hero"><p className="eyebrow">A CAREER KNOWLEDGE PLATFORM</p><h1>事业部智库</h1><p className="subbrand">CSSA LSE Careers</p><p className="tagline">把零散的求职信息，变成一套可用的知识。</p><GlobalSearch/></section><section className="event-home"><div className="section-head"><div><p className="eyebrow">UPCOMING</p><h2>活动日历</h2></div><Link href="/events">查看完整活动日历 →</Link></div><div className="event-list">{events.slice(0,2).map(e=><article className="event-row" key={e.id}><time>{e.date}</time><div><h3>{e.title}</h3><p>{e.time} · {e.location}</p></div><a href={e.signupUrl} target="_blank">报名 →</a></article>)}</div></section><section className="gateway"><p className="eyebrow">从这里开始</p><div className="gateway-grid">{gateways.map(([title,body,href,num])=><Link href={href} className="gateway-card" key={title}><small>{num}</small><h2>{title}</h2><p>{body}</p><span>进入 →</span></Link>)}</div></section></main>}
