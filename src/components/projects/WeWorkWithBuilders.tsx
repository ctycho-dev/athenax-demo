const WorkWith = [
  "AI",
  "DeSci",
  "DeFi",
  "Infrastructure",
  "Consumer",
  "RWA",
  "DePIN",
];

export const WeWorkWithBuilders = () => (
  <section className="py-24 px-6 bg-[#F5F5F7]">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12">We Work With All Builders</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {WorkWith.map((cat) => (
          <span
            key={cat}
            className="px-8 py-4 bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all rounded-full text-lg font-bold shadow-sm group"
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  </section>
);
