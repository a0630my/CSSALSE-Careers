"use client";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><Link href="/" className="brand">事业部智库 <i>CSSA LSE Careers</i></Link><button className="menu" onClick={() => setOpen(!open)} aria-label="打开菜单">{open ? "×" : "菜单"}</button><nav className={open ? "open" : ""}><Link href="/industries">行业探索</Link><Link href="/companies">申请准备</Link><Link href="/stories">学长学姐经验</Link><Link href="/mailbox">求职信箱</Link><Link href="/events">活动日历</Link></nav></header>;
}
