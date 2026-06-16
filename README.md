# AI API 价格计算器

这是一个用于估算海外 AI API 月度 token 成本的单页小工具。用户可以输入每月请求数、平均输入 token、平均输出 token 和缓存输入占比，页面会自动计算不同模型的大致月度成本，并按价格从低到高排序。

当前页面对比了 OpenAI、Anthropic 和 Google Gemini 的部分模型。价格数据来自各厂商官方价格页面，并在页面中标注了来源和查询日期。

## 在线演示

部署完成后，把 Vercel、Netlify 或 Cloudflare Pages 的公开访问链接填在这里。

## 技术栈

- 原生 HTML
- CSS
- Vanilla JavaScript

项目不需要后端服务，也不需要任何 API key。

## 本地运行

可以直接用浏览器打开 `index.html`，也可以用任意静态文件服务器启动：

```bash
npx serve .
```

如果本地没有安装 Node.js，也可以把整个项目文件夹上传到静态部署平台后直接访问。

## 数据来源

价格按美元 / 100 万 token 记录，查询日期为 2026 年 6 月 16 日。

- OpenAI API 价格：https://openai.com/api/pricing/
- Anthropic Claude 价格：https://docs.anthropic.com/en/docs/about-claude/pricing
- Google Gemini API 价格：https://ai.google.dev/gemini-api/docs/pricing

## 已知限制

- 当前只覆盖文本 token 价格，不包含图片、音频、视频等多模态计费。
- 没有计算批量折扣、税费、免费额度、地区差异等费用。
- 缓存输入价格被简化为统一比例估算，不完全覆盖各平台的缓存读写规则。
- AI API 价格变化很快，正式用于预算前需要重新核对官方价格页面。
