// app/components/ReelEmbed.js
"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function ReelEmbed() {
  useEffect(() => {
    // Forzar la recarga del embed cuando el componente se monta
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="instagram-reel-container flex justify-center items-center w-full">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/DUizNIADpZp/"
        data-instgrm-version="14"
        data-instgrm-captioned
        style={{ 
          background: '#FFF', 
          border: 0, 
          borderRadius: '3px', 
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
          margin: '1px', 
          maxWidth: '540px', 
          minWidth: '326px', 
          padding: 0, 
          width: 'calc(100% - 2px)'
        }}
      />
      
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          // Procesar el embed cuando el script carga
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        }}
      />
    </div>
  );
}