const useCasesRow1 = [
  "✉️ Organize your inbox",
  "🌐 Translate messages in real time",
  "🎫 Answer support tickets",
  "📄 Summarize long documents",
  "📊 Do your taxes",
];

const useCasesRow2 = [
  "💰 Track expenses and receipts",
  "🛡️ Compare insurance quotes",
  "📦 Manage subscriptions",
  "⏰ Remind me of deadlines",
  "🎟️ Find coupons",
];

const useCasesRow3 = [
  "🔍 Find best prices online",
  "💸 Find discount codes",
  "📉 Price-drop alerts",
  "📋 Compare product specs",
  "📝 Create presentations from bullet points",
];

const useCasesRow4 = [
  "✈️ Book travel and hotels",
  "🍳 Find recipes from ingredients",
  "📱 Draft social posts",
  "🎯 Set and track goals",
  "📧 Screen cold outreach",
];

const useCasesRow5 = [
  "💼 Draft job descriptions",
  "📈 Run standup summaries",
  "📊 Track OKRs and KPIs",
  "🗓️ Manage your calendar",
  "✅ Check in for flights",
];

export default function UseCases() {
  const row1Items = [...useCasesRow1, ...useCasesRow1, ...useCasesRow1];
  const row2Items = [...useCasesRow2, ...useCasesRow2, ...useCasesRow2];
  const row3Items = [...useCasesRow3, ...useCasesRow3, ...useCasesRow3];
  const row4Items = [...useCasesRow4, ...useCasesRow4, ...useCasesRow4];
  const row5Items = [...useCasesRow5, ...useCasesRow5, ...useCasesRow5];

  return (
    <section className="relative z-10 mx-auto mt-24 max-w-6xl px-6">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          What can OpenClaw do for you?
        </h2>
        <p className="mt-3 text-xl text-slate-400">
          One assistant, thousands of use cases
        </p>
      </div>

      <div className="relative mt-12 overflow-hidden before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-24 before:bg-gradient-to-r before:from-[#060810] before:to-transparent after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-24 after:bg-gradient-to-l after:from-[#060810] after:to-transparent">
        <div className="space-y-4">
          {/* Row 1 */}
          <div className="usecase-track">
            {row1Items.map((item, index) => (
              <span
                key={`r1-${index}`}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Row 2 */}
          <div className="usecase-track reverse">
            {row2Items.map((item, index) => (
              <span
                key={`r2-${index}`}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Row 3 */}
          <div className="usecase-track">
            {row3Items.map((item, index) => (
              <span
                key={`r3-${index}`}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Row 4 */}
          <div className="usecase-track reverse">
            {row4Items.map((item, index) => (
              <span
                key={`r4-${index}`}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Row 5 */}
          <div className="usecase-track">
            {row5Items.map((item, index) => (
              <span
                key={`r5-${index}`}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-sm italic text-slate-500">
        PS. You can add as many use cases as you want via natural language
      </p>
    </section>
  );
}
