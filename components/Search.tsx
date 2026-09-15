"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { companies, industries, resources, stories } from "@/data/content";

export function GlobalSearch({ compact=false }: {compact?:boolean}) {
  const [q,setQ]=useState(""); const [focused,setFocused]=useState(false);
  const results=useMemo(()=>{ const x=q.trim().toLowerCase(); if(!x)return null; const has=(...v:string[])=>v.join(" ").toLowerCase().includes(x); return {companies:companies.filter(v=>has(v.name,v.industry,v.location)),industries:industries.filter(v=>has(v.name,v.en,...v.tags)),resources:resources.filter(v=>has(v.title,v.summary,v.kind)),stories:stories.filter(v=>has(v.title,v.name,v.background))}},[q]);
  return <div className={'global-search '+(compact?'compact':'')}><label><span className="sr-only">搜索知识库</span><input value={q} onFocus={()=>setFocused(true)} onChange={e=>setQ(e.target.value)} placeholder="搜索公司、行业、申请经验、面试经验、白皮书……"/><b>⌕</b></label>{focused&&results&&<div className="search-results">
    {results.companies.length>0&&<ResultGroup title="公司">{results.companies.map(x=><Link href={`/companies/${x.id}`} key={x.id}><strong>{x.name}</strong><small>{x.industry} · {x.location}</small></Link>)}</ResultGroup>}
    {results.industries.length>0&&<ResultGroup title="行业 / 领域">{results.industries.map(x=><Link href={`/industries/${x.id}`} key={x.id}><strong>{x.name}</strong><small>{x.tags.join(" · ")}</small></Link>)}</ResultGroup>}
    {(results.resources.length>0||results.stories.length>0)&&<ResultGroup title="相关内容">{[...results.resources,...results.stories].slice(0,5).map(x=><Link href={'kind' in x?`/resources/${x.id}`:`/stories/${x.id}`} key={x.id}><strong>{x.title}</strong><small>{'kind' in x?x.kind:x.name}</small></Link>)}</ResultGroup>}
    {!results.companies.length&&!results.industries.length&&!results.resources.length&&!results.stories.length&&<p className="empty">没有找到匹配内容。试试更宽泛的关键词。</p>}
  </div>}</div>
}
function ResultGroup({title,children}:{title:string;children:React.ReactNode}){return <section><em>{title}</em>{children}</section>}
