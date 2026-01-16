import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import Link from "next/link";
import { Icon } from "@/components/UI";

const EMAIL = "info@athenax.co";
const BRAND_PDF_URL = "https://athenax.mypinx.store/Brand/Brand%20Guidelines.pdf";

export default function BrandPage() {
   return (
      <div className="pt-12 -mb-20">
         {/* Top Section: Guidelines and Licensing */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-start">
            {/* Left: Brand Guidelines */}
            <div className="space-y-8">
               <h1
                  className="text-5xl md:text-6xl leading-[0.85] text-ink uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-londrina), cursive" }}
               >
                  AthenaX <br />
                  Brand Guidelines
               </h1>

               <ul
                  className="space-y-2 text-base"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
               >
                  {["Symbols", "Palettes", "Typography"].map((item, i) => (
                     <li key={i} className="flex items-center gap-4">
                        <span className="size-4 bg-ink" />
                        <span className="font-medium">{item}</span>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Right: Brand Licensing */}
            <div className="space-y-6">
               <h2
                  className="text-3xl md:text-4xl leading-[0.9] text-ink uppercase"
                  style={{ fontFamily: "var(--font-londrina), cursive" }}
               >
                  Brand Licensing
               </h2>

               <div
                  className="space-y-6 text-ink/70 leading-relaxed text-sm md:text-base"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
               >
                  <p>
                     The AthenaX brand represents trust in decentralized coordination and long-term
                     ecosystem alignment. It signals legitimacy, builder-first values, and
                     structured partnership.
                  </p>
                  <p>
                     AthenaX brand assets are released under CC0. No rights reserved. You are free
                     to use, modify, and distribute them without authorization.
                  </p>
                  <p>
                     Misrepresentation or any activity falsely implying official partnership or
                     endorsement is prohibited.
                  </p>
               </div>
            </div>
         </div>

         {/* Middle Section: Brand Assets Heading */}
         <div className="text-center space-y-4 pt-28 pb-20">
            <h2
               className="text-3xl md:text-4xl text-ink uppercase"
               style={{ fontFamily: "var(--font-londrina), cursive" }}
            >
               Brand Assets
            </h2>
            <p
               className="text-ink/70 max-w-xl mx-auto text-base leading-snug"
               style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
               AthenaX branding may appear in multiple color configurations. Preferred colors are
               Blue, Black, and White. Consistency and clarity take precedence over creative
               variation.
            </p>
         </div>

         {/* Primary Mark Section - Full Bleed White Background */}
         <section className="bg-white w-screen relative left-1/2 -translate-x-1/2">
            <div className="max-w-5xl mx-auto px-6 py-20">
               <div className="flex flex-col items-center space-y-8">
                  <Badge>Primary Mark</Badge>

                  <div className="text-center space-y-4 max-w-2xl mx-auto">
                     <p
                        className="text-ink/70 leading-relaxed font-medium"
                        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                     >
                        The AthenaX symbol combines mathematical precision
                        <br className="hidden md:block" />
                        with fluid dynamics, representing both logic and adaptability.
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                     {/* Logo Card */}
                     <Card className="aspect-4/3 flex items-center justify-center p-12">
                        <Image
                           src="https://athenax.mypinx.store/Brand/Logo.svg"
                           alt="AthenaX Logo"
                           width={800}
                           height={400}
                           className="w-full h-auto max-w-75"
                        />
                     </Card>

                     {/* Clear Space Card */}
                     <Card
                        variant="yellow"
                        className="aspect-4/3 flex items-center justify-center p-12"
                     >
                        <Image
                           src="https://athenax.mypinx.store/Brand/Logo_Outline.png"
                           alt="AthenaX Logo Outline"
                           width={400}
                           height={200}
                           className="w-full h-auto"
                        />
                     </Card>

                     {/* Icon Description Card */}
                     <Card className="min-h-40">
                        <CardHeader>
                           <CardTitle>Icon</CardTitle>
                           <CardDescription>
                              The icon represents infinity and continuity—core principles of
                              long-term ecosystem building.
                           </CardDescription>
                        </CardHeader>
                     </Card>

                     {/* Clear Space Description Card */}
                     <Card className="min-h-40">
                        <CardHeader>
                           <CardTitle>Clear Space</CardTitle>
                           <CardDescription>
                              The symbol requires breathing room equal to the height of the inner{" "}
                              &ldquo;X&rdquo; element on all sides. Never compromise this clear
                              space.
                           </CardDescription>
                        </CardHeader>
                     </Card>
                  </div>

                  {/* Download Button */}
                  <Link href={BRAND_PDF_URL} download target="_blank" rel="noopener noreferrer">
                     <Button rotate={"right"} className="mt-10">
                        Download All
                     </Button>
                  </Link>
               </div>
            </div>
         </section>

         {/* Lock-up Section - Full Bleed White Background */}
         <section>
            <div className="max-w-5xl mx-auto px-6 py-20">
               <div className="flex flex-col items-center space-y-8">
                  <Badge>Lock-up</Badge>

                  <div className="text-center space-y-4 max-w-2xl mx-auto">
                     <p
                        className="text-ink/70 leading-relaxed font-medium"
                        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                     >
                        Use the full lock-up when displaying the complete AthenaX brand.{" "}
                        <br className="hidden md:block" />
                        Suitable for horizontally-aligned applications.
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                     {[
                        { src: "Logo_Dark.svg", alt: "Dark", variant: undefined },
                        { src: "Logo_White.svg", alt: "White", variant: "dark" as const },
                        { src: "Logo_Red.svg", alt: "Red", variant: "red" as const },
                        { src: "Logo_Yellow.svg", alt: "Yellow", variant: "dark" as const },
                        { src: "Logo_Dark.svg", alt: "Dark on Blue", variant: "blue" as const },
                        {
                           src: "Logo_Yellow_Outline.png",
                           alt: "Outline",
                           variant: "dark" as const,
                           fullWidth: true,
                        },
                     ].map((logo, i) => (
                        <Card
                           key={i}
                           variant={logo.variant}
                           className={`aspect-4/2 flex items-center justify-center ${logo.fullWidth ? "" : "p-12"}`}
                        >
                           <Image
                              src={`https://athenax.mypinx.store/Brand/${logo.src}`}
                              alt={logo.alt}
                              width={logo.fullWidth ? 1000 : 320}
                              height={logo.fullWidth ? 500 : 160}
                              className={logo.fullWidth ? "w-full h-auto" : ""}
                           />
                        </Card>
                     ))}
                  </div>

                  {/* Download Button */}
                  <Link href={BRAND_PDF_URL} download target="_blank" rel="noopener noreferrer">
                     <Button rotate={"left"} className="mt-10">
                        Download All
                     </Button>
                  </Link>
               </div>
            </div>
         </section>

         {/* Color System Section */}
         <section className="bg-white w-screen relative left-1/2 -translate-x-1/2 px-6 py-20">
            <div className="flex flex-col items-center space-y-8 max-w-5xl mx-auto">
               <Badge>Color System</Badge>

               <div className="text-center space-y-4 max-w-2xl mx-auto">
                  <p
                     className="text-ink/70 leading-relaxed font-medium"
                     style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                     The color palette balances technical precision with approachable design.{" "}
                     <br className="hidden md:block" />
                     Each color serves a specific purpose in the visual hierarchy.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {[
                     {
                        variant: "cream" as const,
                        name: "Color-Cream",
                        hex: "#fdfbf7",
                        usage: "For background and UI elements",
                        textColor: "text-ink",
                     },
                     {
                        variant: "ink" as const,
                        name: "color-ink",
                        hex: "#1f2937",
                        usage: "For text and borders",
                        textColor: "text-white/80",
                     },
                     {
                        variant: "red-solid" as const,
                        name: "color-accent-red",
                        hex: "#e63636",
                        usage: "For buttons and highlights",
                        textColor: "text-white/80",
                     },
                     {
                        variant: "yellow-solid" as const,
                        name: "color-accent-yellow",
                        hex: "#fde68a",
                        usage: "For highlights and accents",
                        textColor: "text-ink",
                     },
                     {
                        variant: "blue-solid" as const,
                        name: "color-accent-blue",
                        hex: "#dbeafe",
                        usage: "For links and accents",
                        textColor: "text-ink",
                        fullWidth: true,
                     },
                  ].map((color, i) => (
                     <Card
                        key={i}
                        variant={color.variant}
                        className={`min-h-30 ${color.fullWidth ? "md:col-span-2 max-w-md mx-auto w-full" : ""}`}
                     >
                        <CardHeader>
                           <CardTitle className="text-lg">
                              <span className=" lowercase">{color.name}</span>: {color.hex}
                           </CardTitle>
                           <CardDescription className={color.textColor}>
                              * {color.usage} *
                           </CardDescription>
                        </CardHeader>
                     </Card>
                  ))}
               </div>
            </div>
         </section>

         {/* Typography Section - Full Bleed White Background */}
         <section>
            <div className="max-w-5xl mx-auto px-6 py-20">
               <div className="flex flex-col items-center space-y-8">
                  <Badge>Typography</Badge>

                  <div className="text-center space-y-4 max-w-2xl mx-auto">
                     <p
                        className="text-ink/70 leading-relaxed font-medium"
                        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                     >
                        AthenaX uses modern, readable typefaces that convey clarity
                        <br className="hidden md:block" />
                        and consistency across all communications.
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                     {[
                        {
                           label: "Logo Primary font",
                           name: "Londrina Solid",
                           fontFamily: "var(--font-londrina), cursive",
                           samples: [
                              {
                                 text: "abcdefghijklmnopqrstuvwxyz",
                                 className: "text-xl md:text-2xl uppercase",
                              },
                              {
                                 text: "abcdefghijklmnopqrstuvwxyz",
                                 className: "text-base md:text-xl",
                              },
                              { text: "1234567890", className: "text-xl md:text-2xl" },
                              {
                                 text: '\'?""!(%) [#]{@}/&\\<-+÷×=>:;,. *',
                                 className: "text-base md:text-xl",
                              },
                           ],
                        },
                        {
                           label: "Content Secondary font",
                           name: "Inter",
                           weight: "Medium",
                           fontFamily: "var(--font-inter), sans-serif",
                           samples: [
                              {
                                 text: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                                 className: "text-base md:text-xl",
                              },
                              {
                                 text: "abcdefghijklmnopqrstuvwxyz",
                                 className: "text-sm md:text-lg",
                              },
                              {
                                 text: "1234567890",
                                 className: "text-sm md:text-lg",
                              },
                              {
                                 text: '\'?""!(%) [#]{@}/&\\<—+÷×⇒:;,. *',
                                 className: "text-sm md:text-lg",
                              },
                           ],
                        },
                     ].map((font, i) => (
                        <Card key={i} variant="blue" className="p-10 flex flex-col gap-8">
                           <div className="space-y-1">
                              <p className="text-xs text-ink/60 font-medium">{font.label}</p>
                              <h4
                                 className="text-3xl md:text-4xl text-ink"
                                 style={{ fontFamily: font.fontFamily }}
                              >
                                 {font.name}{" "}
                                 {font.weight && (
                                    <span className="font-normal opacity-70 text-xl">
                                       {font.weight}
                                    </span>
                                 )}
                              </h4>
                           </div>
                           <div
                              className="space-y-2 text-ink break-all"
                              style={{ fontFamily: font.fontFamily }}
                           >
                              {font.samples.map((sample, j) => (
                                 <p key={j} className={sample.className}>
                                    {sample.text}
                                 </p>
                              ))}
                           </div>
                        </Card>
                     ))}
                  </div>

                  {/* Download Button */}
                  <Link href={BRAND_PDF_URL} download target="_blank" rel="noopener noreferrer">
                     <Button rotate={"right"} className="mt-10">
                        Download All
                     </Button>
                  </Link>
               </div>
            </div>
         </section>

         {/* Standards & Violations Section - Full Bleed White Background */}
         <section className="bg-white w-screen relative left-1/2 -translate-x-1/2">
            <div className="max-w-5xl mx-auto px-6 py-20">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  <div className="space-y-6">
                     <div className="flex justify-center md:justify-start md:ml-10">
                        <Badge>Implementation Standards</Badge>
                     </div>
                     <div className="space-y-6">
                        {[
                           "Use provided asset files without modification",
                           "Maintain contrast ratios for accessibility",
                           "Apply colors only from the approved palette",
                           "Preserve the original aspect ratio",
                        ].map((text, i) => {
                           const rotations = ["-rotate-4", "rotate-6", "-rotate-2", "rotate-4"];
                           return (
                              <div key={i} className="flex items-center gap-6 group">
                                 <div
                                    className={`size-12 bg-cream border-2 border-ink rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${rotations[i]}`}
                                 >
                                    <Icon name="check" size={24} className="text-accent-red" />
                                 </div>
                                 <span className="text-base font-medium text-ink/80">{text}</span>
                              </div>
                           );
                        })}
                     </div>
                  </div>

                  <div className="space-y-6">
                     <div className="flex justify-center md:justify-start md:ml-10">
                        <Badge>Common Violations</Badge>
                     </div>
                     <div className="space-y-6">
                        {[
                           "Rotating or skewing the symbol",
                           "Creating unofficial color variations",
                           "Combining with unapproved graphics",
                           "Using outdated or recreated versions",
                        ].map((text, i) => {
                           const rotations = ["rotate-6", "-rotate-4", "rotate-4", "-rotate-6"];
                           return (
                              <div key={i} className="flex items-center gap-6 group">
                                 <div
                                    className={`size-12 bg-cream border-2 border-ink rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${rotations[i]}`}
                                 >
                                    <Icon name="x" size={24} className="text-accent-red" />
                                 </div>
                                 <span className="text-base font-medium text-ink/80">{text}</span>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Downloads Section - Full Bleed White Background */}
         <section>
            <div className="max-w-5xl mx-auto px-6 py-20">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {[
                     {
                        badge: "Download Assets",
                        description:
                           "All official brand materials are available for download. Assets are CC0 and free to use.",
                        hasEmail: false,
                        rotate: "left" as const,
                     },
                     {
                        badge: "Usage Guidelines",
                        description:
                           "Download the full AthenaX brand guidelines for detailed documentation on colors, assets, and typography. For questions, contact",
                        hasEmail: true,
                        rotate: "right" as const,
                     },
                  ].map((item, i) => (
                     <div key={i} className="flex flex-col items-center space-y-6 text-center">
                        <Badge>{item.badge}</Badge>
                        <p className="text-ink/70 max-w-sm">
                           {item.description}
                           {item.hasEmail && (
                              <>
                                 {" "}
                                 <Link href={`mailto:${EMAIL}`} className="underline">
                                    {EMAIL}
                                 </Link>
                                 .
                              </>
                           )}
                        </p>
                        <Link
                           href={BRAND_PDF_URL}
                           download
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <Button rotate={item.rotate}>Download PDF</Button>
                        </Link>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Partnerships & Ecosystem Section - Full Bleed White Background */}
         <section className="bg-white w-screen relative left-1/2 -translate-x-1/2">
            <div className="max-w-5xl mx-auto px-6 py-20">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {[
                     {
                        badge: "Partnerships",
                        description:
                           "An official partnership with AthenaX means structured collaboration on ecosystem growth. This might include:",
                        items: [
                           "Integration of your product into the AthenaX incubation pipeline",
                           "Co-marketing efforts with AthenaX",
                           "Strategic collaboration on distribution ",
                        ],
                        footer:
                           "Partners may use AthenaX branding as needed but must not modify the logo.",
                     },
                     {
                        badge: "Ecosystem",
                        description:
                           "If you're building with AthenaX without an official partnership, you're an ecosystem contributor. This might include:",
                        items: [
                           "Integration of AthenaX branding into your project",
                           "A creative project designed by and for the AthenaX community",
                        ],
                        footer:
                           "Logo modification is discouraged but permitted for creative purposes. The brand cannot be used to imply official partnership with AthenaX or NounsDAO.",
                     },
                  ].map((section, i) => (
                     <div key={i} className="flex flex-col h-full">
                        <div className="flex justify-center mb-8">
                           <Badge>{section.badge}</Badge>
                        </div>
                        <div className="flex flex-col items-center grow">
                           <p className="text-ink/70 max-w-sm text-center mb-10">
                              {section.description}
                           </p>
                           <div className="space-y-8 w-full max-w-sm">
                              {section.items.map((text, j) => (
                                 <div key={j} className="flex gap-4 items-start">
                                    <span
                                       className="text-4xl text-ink leading-none"
                                       style={{ fontFamily: "var(--font-londrina), cursive" }}
                                    >
                                       {String(j + 1).padStart(2, "0")}.
                                    </span>
                                    <span className="text-base font-medium pt-1 text-left">
                                       {text}
                                    </span>
                                 </div>
                              ))}
                           </div>
                           {section.footer && (
                              <p className="text-ink/70 max-w-sm text-center text-sm leading-relaxed mt-auto pt-16">
                                 {section.footer}
                              </p>
                           )}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
}
