export type Industry = { id:string; name:string; en:string; tags:string[]; intro:string };
export type Resource = { id:string; title:string; kind:"行业分享"|"白皮书"|"申请指南"|"面试指南"; industry:string; summary:string; date:string; takeaway?:string };
export type Story = { id:string; title:string; name:string; background:string; industry:string; excerpt:string; year:string };
export type Company = { id:string; name:string; industry:string; location:string; description:string; opportunity:{ title:string; type:string; openDate:string; deadline:string; status:string; applicationUrl:string }; process:string; tips:string; storyIds:string[]; resourceIds:string[] };
export type Event = { id:string; title:string; date:string; time:string; location:string; description:string; organiser:string; signupUrl:string };

export const industries: Industry[] = [
  {id:"law",name:"法律",en:"LAW",tags:["Magic Circle","US Firms","UK Firms","IP","Disputes"],intro:"法律职业不止于律所。从交易、争议解决到知识产权，理解业务与招聘节奏，是找到适合自己路径的开始。"},
  {id:"finance",name:"金融",en:"FINANCE",tags:["Investment Banking","Asset Management","Private Equity","FinTech"],intro:"金融行业以快速、严谨和高度协作为底色，申请前需要先判断自己更适合市场、交易还是长期投资。"},
  {id:"consulting",name:"咨询",en:"CONSULTING",tags:["Strategy","Operations","Public Sector","Analytics"],intro:"咨询以问题解决为核心；出色的候选人既能拆解复杂问题，也能与人共同把答案落地。"},
  {id:"technology",name:"科技",en:"TECH",tags:["Product","Data","Software","AI"],intro:"科技行业覆盖产品、数据和商业角色。持续学习与展示真实项目经验，比熟记术语更重要。"},
  {id:"accounting",name:"会计与专业服务",en:"PROFESSIONAL SERVICES",tags:["Audit","Tax","Deals","Risk"],intro:"从审计到交易咨询，专业服务提供了系统的商业训练和清晰的能力成长路径。"},
  {id:"retail",name:"消费品与零售",en:"CONSUMER",tags:["Brand","E-commerce","Luxury","Supply Chain"],intro:"消费者洞察、品牌叙事和商业执行共同构成这个贴近真实市场的行业。"},
  {id:"media",name:"媒体与娱乐",en:"MEDIA",tags:["Publishing","Film","Gaming","Marketing"],intro:"内容、受众与商业模式在此相遇，需要敏锐的文化判断与扎实的执行力。"},
  {id:"realestate",name:"房地产与基础设施",en:"REAL ESTATE",tags:["Development","Investment","Infrastructure"],intro:"从城市更新到基础设施投资，长期视角和跨学科沟通尤为关键。"},
  {id:"health",name:"医疗与生命科学",en:"LIFE SCIENCES",tags:["Pharma","Biotech","Healthcare"],intro:"严谨的科学与实际的患者需求，共同驱动医疗与生命科学的职业机会。"},
  {id:"public",name:"公共部门与国际组织",en:"PUBLIC & IO",tags:["Policy","Development","Research"],intro:"在政策、研究和国际发展中，把复杂议题转化为有影响力的行动。"}
];
export const resources: Resource[] = [
  {id:"law-recruiting",title:"英国律所申请：从认识行业到投递策略",kind:"行业分享",industry:"law",date:"2026.08",summary:"拆解 Vacation Scheme 与 Training Contract 的招聘逻辑，并说明如何建立一份真正有用的目标律所清单。",takeaway:"先建立判断框架，再开始海投。"},
  {id:"law-report",title:"2026 英国法律职业观察",kind:"白皮书",industry:"law",date:"2026.07",summary:"一份面向学生的行业地图：业务趋势、律所招聘偏好与毕业生应关注的能力变化。"},
  {id:"finance-map",title:"金融职业地图：前台、投资与市场岗位",kind:"行业分享",industry:"finance",date:"2026.08",summary:"以工作内容而非职位名称为入口，帮助你区分投行、资管、私募和销售交易。",takeaway:"职位名称相似，日常工作可能截然不同。"},
  {id:"finance-report",title:"金融求职准备白皮书",kind:"白皮书",industry:"finance",date:"2026.06",summary:"关于申请时间线、商业认知和技术准备的实用路线图。"},
  {id:"cv-start",title:"从经历盘点开始写一份有说服力的 CV",kind:"申请指南",industry:"all",date:"2026.09",summary:"把零散经历映射成岗位所需能力；先找证据，再打磨措辞。"},
  {id:"application-form",title:"网申问题：把每一道题当作判断力测试",kind:"申请指南",industry:"all",date:"2026.09",summary:"从动机、能力到商业认知，建立可复用但不模板化的回答结构。"},
  {id:"video-interview",title:"Video Interview：镜头前也要有真实的对话感",kind:"面试指南",industry:"all",date:"2026.08",summary:"准备结构、语速、眼神与时间分配，避开背稿式回答的常见误区。"},
  {id:"case-study",title:"Case Study：如何把模糊问题讲清楚",kind:"面试指南",industry:"consulting",date:"2026.08",summary:"一套从澄清问题、搭建框架到表达结论的练习方法。"}
];
export const stories: Story[] = [
  {id:"magic-circle",title:"从 LSE 到 Magic Circle：我的求职经历",name:"林知夏",background:"LSE · Law · 2026 · London",industry:"law",year:"2026",excerpt:"从选择 Vacation Scheme 到最终拿到 offer，我是如何规划整个申请周期的……"},
  {id:"gs-story",title:"不只刷题：我的投行暑期实习准备",name:"陈逸航",background:"LSE · Finance · 2025 · London",industry:"finance",year:"2025",excerpt:"最有价值的准备，是尽早认识自己的叙事和真正感兴趣的业务方向。"},
  {id:"consulting-story",title:"从政策研究转向咨询，我重新认识了 case",name:"周安然",background:"LSE · International Relations · 2026 · London",industry:"consulting",year:"2026",excerpt:"我把研究训练转化成问题拆解能力，也学会用更简洁的方式表达。"},
  {id:"tech-story",title:"产品实习不是工程师的专属赛道",name:"顾婉宁",background:"LSE · Management · 2025 · London",industry:"technology",year:"2025",excerpt:"跨学科背景不是短板；关键是能否证明你理解用户与产品决策。"}
];
export const companies: Company[] = [
  {id:"goldman-sachs",name:"Goldman Sachs",industry:"finance",location:"London",description:"全球性金融机构，业务涵盖投资银行、全球市场、资产与财富管理。对申请者而言，理解业务线的真实工作比泛泛而谈的品牌动机更重要。",opportunity:{title:"2027 Summer Internship",type:"Internship",openDate:"1 Sep 2026",deadline:"15 Oct 2026",status:"示例信息",applicationUrl:"https://example.com/apply/goldman-sachs"},process:"Online application → Online assessment → Interviews",tips:"用一两个具体行业观点说明你的商业认知，并清晰连接到申请的业务部门。",storyIds:["gs-story"],resourceIds:["finance-map","finance-report","video-interview"]},
  {id:"ao-shearman",name:"A&O Shearman",industry:"law",location:"London",description:"国际商事律所，业务覆盖公司并购、资本市场、金融与争议解决。申请中应把对客户、交易和团队协作的理解说得具体。",opportunity:{title:"2027 Vacation Scheme",type:"Internship",openDate:"2 Sep 2026",deadline:"30 Nov 2026",status:"示例信息",applicationUrl:"https://example.com/apply/ao-shearman"},process:"Application form → Online assessment → Assessment centre",tips:"将律所的跨境业务与自己关心的行业或议题建立真实连接。",storyIds:["magic-circle"],resourceIds:["law-recruiting","law-report","video-interview"]},
  {id:"bain",name:"Bain & Company",industry:"consulting",location:"London",description:"专注于战略咨询与客户合作的全球咨询公司。高质量申请应呈现结构化思考、团队协作和对客户问题的好奇心。",opportunity:{title:"Associate Consultant Internship",type:"Internship",openDate:"15 Sep 2026",deadline:"20 Oct 2026",status:"示例信息",applicationUrl:"https://example.com/apply/bain"},process:"Application → Online test → Case interview",tips:"练习时不要只追求答案；先练习如何让面试官听懂你的思考。",storyIds:["consulting-story"],resourceIds:["case-study","application-form"]}
];
export const events: Event[] = [
  {id:"autumn-chinese-career-fair-2026",title:"秋季大型华人招聘会",date:"17 OCT",time:"待公布",location:"LSE校内",description:"面向华人学生与求职者的大型线上线下招聘活动。",organiser:"CSSALSE Careers",signupUrl:"https://example.com/events/autumn-career-fair"}
];
export const industryName = (id:string) => industries.find(x=>x.id===id)?.name ?? id;
