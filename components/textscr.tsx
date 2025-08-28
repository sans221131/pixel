"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextScroll = () => {
  const textRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    textRefs.current.forEach((el, i) => {
      if (!el) return;

      gsap.to(el, {
        xPercent: i < 2 ? 100 : -100, // first 2 lines go right, last goes left
        ease: "none",
        scrollTrigger: {
         trigger: el,
         start: "top 90%",        // starts a bit later
         end: "bottom -200%",     // longer scroll distance = slower movement
         scrub: 1.5,                // smooth catch-up (1.5s)
  },
      });
    });
  }, []);

  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        background: "#111",
        color: "#fff",
      }}
    >
      {[
        "🚀 What's Everyone Talking About — What's Everyone Talking About —",
        "🌐 The Future is Here — The Future is Here — The Future is Here —",
        "⚡ Join the Movement — Join the Movement — Join the Movement —",
      ].map((text, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) textRefs.current[i] = el;
          }}
          style={{
            whiteSpace: "nowrap",
            fontSize: "3rem",
            fontWeight: "bold",
            margin: "1rem 0",
          }}
        >
          {text}
        </div>
      ))}
    </section>
  );
};

export default TextScroll;
