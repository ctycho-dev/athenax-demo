import {IconBrandDiscord, IconBrandX, IconBrandTelegram} from "@tabler/icons-react"

export const ConnectWithUs = () => (
  <section className="py-24 px-6 bg-[#F5F5F7]">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-16">Connect With Us</h2>
      <div className="flex justify-center gap-10">
        <div className="flex flex-col items-center gap-4 cursor-pointer hover:text-blue-600 transition-colors">
          <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100">
            <IconBrandX size={24} />
          </div>
          <span className="font-bold uppercase tracking-widest text-xs">
            X (Twitter)
          </span>
        </div>
        <div className="flex flex-col items-center gap-4 cursor-pointer hover:text-blue-600 transition-colors">
          <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100">
            <IconBrandDiscord />
          </div>
          <span className="font-bold uppercase tracking-widest text-xs">
            Discord
          </span>
        </div>
        <div className="flex flex-col items-center gap-4 cursor-pointer hover:text-blue-600 transition-colors">
          <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100">
            <IconBrandTelegram />
          </div>
          <span className="font-bold uppercase tracking-widest text-xs">
            Telegram
          </span>
        </div>
      </div>
    </div>
  </section>
);
