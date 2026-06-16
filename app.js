const models = [
  {
    provider: "OpenAI",
    model: "GPT-5 mini",
    input: 0.25,
    cachedInput: 0.025,
    output: 2,
    source: "https://openai.com/api/pricing/",
  },
  {
    provider: "OpenAI",
    model: "GPT-5",
    input: 1.25,
    cachedInput: 0.125,
    output: 10,
    source: "https://openai.com/api/pricing/",
  },
  {
    provider: "Anthropic",
    model: "Claude Sonnet 4.5",
    input: 3,
    cachedInput: 0.3,
    output: 15,
    source: "https://docs.anthropic.com/en/docs/about-claude/pricing",
  },
  {
    provider: "Anthropic",
    model: "Claude Haiku 3.5",
    input: 0.8,
    cachedInput: 0.08,
    output: 4,
    source: "https://docs.anthropic.com/en/docs/about-claude/pricing",
  },
  {
    provider: "Google",
    model: "Gemini 2.5 Flash",
    input: 0.3,
    cachedInput: 0.075,
    output: 2.5,
    source: "https://ai.google.dev/gemini-api/docs/pricing",
  },
  {
    provider: "Google",
    model: "Gemini 2.5 Pro",
    input: 1.25,
    cachedInput: 0.31,
    output: 10,
    source: "https://ai.google.dev/gemini-api/docs/pricing",
  },
];

const form = document.querySelector("#usageForm");
const resultsBody = document.querySelector("#resultsBody");
const totalTokensEl = document.querySelector("#totalTokens");
const cacheValueEl = document.querySelector("#cacheValue");

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

function readNumber(id) {
  return Math.max(0, Number(document.querySelector(`#${id}`).value) || 0);
}

function formatMillions(value) {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(2)} 十亿`;
  return `${(value / 1_000_000).toFixed(1)} 百万`;
}

function calculate() {
  const requests = readNumber("requests");
  const inputTokens = readNumber("inputTokens");
  const outputTokens = readNumber("outputTokens");
  const cacheShare = readNumber("cacheShare") / 100;
  const inputTotal = requests * inputTokens;
  const cachedInputTotal = inputTotal * cacheShare;
  const freshInputTotal = inputTotal - cachedInputTotal;
  const outputTotal = requests * outputTokens;

  cacheValueEl.textContent = `${Math.round(cacheShare * 100)}%`;
  totalTokensEl.textContent = formatMillions(inputTotal + outputTotal);

  const rows = models
    .map((item) => {
      const cost =
        (freshInputTotal / 1_000_000) * item.input +
        (cachedInputTotal / 1_000_000) * item.cachedInput +
        (outputTotal / 1_000_000) * item.output;
      return { ...item, cost };
    })
    .sort((a, b) => a.cost - b.cost);

  resultsBody.innerHTML = rows
    .map((item, index) => {
      const best = index === 0 ? '<span class="tag">最低</span>' : "";
      return `
        <tr>
          <td class="provider">${item.provider}${best}</td>
          <td class="model">${item.model}</td>
          <td>${currency.format(item.input)}，缓存 ${currency.format(item.cachedInput)}</td>
          <td>${currency.format(item.output)}</td>
          <td class="cost">${currency.format(item.cost)}</td>
        </tr>
      `;
    })
    .join("");
}

form.addEventListener("input", calculate);
calculate();
