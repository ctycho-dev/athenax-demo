import type { Metadata } from "next";

const title = "AthenaX";
const desc =
   "AthenaX is a NounsDAO-powered engine for public goods. We don't do pitch decks; we do proof of work.";
const banner_img = "https://athenax.mypinx.store/channels4_banner.jpg";

const METADATA: Metadata = {
   title: title,
   description: desc,
   openGraph: {
      title: title,
      description: desc,
      siteName: title,
      type: "website",
      images: [
         {
            url: banner_img,
            width: 1280,
            height: 720,
            alt: `"${title} Banner"`,
         },
      ],
   },
   twitter: {
      card: "summary_large_image",
      title: title,
      description: desc,
      images: [banner_img],
   },
};

export default METADATA;
