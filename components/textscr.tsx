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
        xPercent: i < 2 ? 100 : -100, // first 2 lines move right, last moves left
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom -200%",
          scrub: 1.5,
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
      background: "#f9eade",
      }}
    >
      {[
      { text: "WHAT'S", color: "black" },
      { text: "EVERYONE", color: "#ee6530" },
      { text: "TALKING", color: "black" },
      ].map((item, i) => (
      <div
        key={i}
        ref={(el) => {
        if (el) textRefs.current[i] = el;
        }}
        style={{
        whiteSpace: "nowrap",
        fontSize: "13rem",
        fontWeight: "bold",
        margin: "1rem 0",
        color: item.color,
        fontFamily: "inherit",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        }}
      >
        <b>{item.text}</b>
      </div>
      ))}
    </section>
  );
};

export default TextScroll;
