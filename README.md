# 事业部智库 · CSSA LSE Careers

一个面向 LSE 学生的中文求职知识平台原型。

## 本地运行

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

## 更新网站内容

主要内容集中在 [`data/content.ts`](./data/content.ts)：

- 公司与招聘信息
- 行业介绍与白皮书
- 薪火文集文章
- 申请与面试资源
- 活动日历

保存文件后，本地网站会自动更新。

## 发布网站

将项目推送到 GitHub 后，在 [Vercel](https://vercel.com) 导入该仓库并部署。之后每次推送到 `main` 分支，Vercel 都会自动更新公开网站。
