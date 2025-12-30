const IncubationSteps = [
  {
    title: "Step 01: Application",
    description: "Submit your project for review.",
  },
  {
    title: "Step 02: Grant Support",
    description: "We secure funding.",
  },
  {
    title: "Step 03: Vault Setup",
    description: "Deploy into an Octant vault. We match your deposit 1:1.",
  },
  {
    title: "Step 04: Growth",
    description: "Yields fund your expansion. Principal untouched.",
  },
];

export const GetIncubated = () => (
  <section className="py-24 px-8 border-b border-black/5 bg-white">
    <div className="max-w-4xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none text-[#0a0a14] mb-8">
          Get Incubated
        </h2>
        <p className="text-2xl text-gray-600">
          We help you secure grants, match your capital, and fund your growth.
        </p>
      </div>

      <div className="space-y-6">
        {IncubationSteps.map((step, i) => (
          <div
            key={i}
            className="flex gap-8 p-6 bg-[#F5F5F7] border border-black/5 rounded-sm"
          >
            <span className="text-xl font-serif italic text-[#4a6fa5] shrink-0">
              {step.title.split(":")[0]}
            </span>
            <div>
              <h5 className="font-bold uppercase tracking-widest text-[11px] mb-1">
                {step.title.split(":")[1]}
              </h5>
              <p className="text-sm text-[#8a8a93]">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
