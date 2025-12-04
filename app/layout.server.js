export const metadata = {
  metadataBase: new URL("https://www.lacreatisala.com"),

  title: {
    default: "La Creatisala",
    template: "%s | La Creatisala"
  },

  description:
    "La Creatisala te ayuda a dar forma a tus ideas: clases de música, creatividad y producción. Aprende guitarra, bajo, canto, piano, batería y más.",

  openGraph: {
    title: "La Creatisala",
    description:
      "Te ayudamos a dar forma a tus ideas con clases de música, creatividad y producción.",
    url: "https://lacreatisala.com",
    siteName: "La Creatisala",
    images: [
      {
        url: "/logoC.png",
        width: 512,
        height: 512,
        alt: "Logo de La Creatisala"
      }
    ],
    locale: "es_CL",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "La Creatisala",
    description:
      "Clases de música y creatividad.",
    images: ["/logoC.png"]
  },

  icons: {
    icon: "/logoC.png",
    shortcut: "/logoC.png",
    apple: "/logoC.png"
  },

  applicationName: "La Creatisala",
  keywords: [
    "clases de música",
    "guitarra",
    "batería",
    "piano",
    "creatividad",
    "producción musical",
    "La Creatisala"
  ]
};
