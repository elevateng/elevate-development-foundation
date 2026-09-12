"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const sectionSelector = [
  "main > section:not(.home-hero):not(.page-hero)",
  "main > .home-bento",
  "main > .manifesto-strip",
].join(",");

const counterSelector = [
  ".bento-stat strong",
  ".impact-ribbon-grid strong",
  ".proof-line strong",
  ".evidence-card > strong",
  ".project-metrics strong",
  ".report-metric-grid strong",
  ".historic-reach-band strong",
].join(",");

function animateNumber(element: HTMLElement) {
  if (element.dataset.counted === "true") return;

  const original = element.textContent?.trim() ?? "";
  const match = original.match(/^([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return;

  element.dataset.counted = "true";
  const target = Number(match[1].replaceAll(",", ""));
  const suffix = match[2];
  const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const duration = Math.min(1100, 520 + target * 3);
  const started = performance.now();

  const tick = (now: number) => {
    const progress = Math.min(1, (now - started) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = (target * eased).toFixed(decimals);
    element.textContent = `${Number(value).toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
    else element.textContent = original;
  };

  requestAnimationFrame(tick);
}

export function MotionEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const main = document.querySelector("main");
    if (!main) return;

    document.querySelectorAll(".site-header a").forEach((link) => {
      const href = link.getAttribute("href");
      const isCurrent = href === pathname || (href === "/" && pathname === "/");
      if (isCurrent) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    const closeMenu = (event: Event) => {
      const link = (event.target as Element).closest("a");
      if (link) link.closest("details")?.removeAttribute("open");
    };
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu?.addEventListener("click", closeMenu);

    const hero = main.querySelector<HTMLElement>(".home-hero, .page-hero");
    if (!reduceMotion) requestAnimationFrame(() => hero?.classList.add("hero-entered"));

    const sections = Array.from(main.querySelectorAll<HTMLElement>(sectionSelector));
    const counters = Array.from(main.querySelectorAll<HTMLElement>(counterSelector));

    if (reduceMotion || !("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("motion-in"));
      return () => mobileMenu?.removeEventListener("click", closeMenu);
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          target.classList.remove("motion-wait");
          target.classList.add("motion-in");
          sectionObserver.unobserve(target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -7% 0px" },
    );

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) section.classList.add("motion-in");
      else {
        section.classList.add("motion-wait");
        sectionObserver.observe(section);
      }
    });

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateNumber(entry.target as HTMLElement);
          counterObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.55 },
    );
    counters.forEach((counter) => counterObserver.observe(counter));

    return () => {
      sectionObserver.disconnect();
      counterObserver.disconnect();
      mobileMenu?.removeEventListener("click", closeMenu);
    };
  }, [pathname]);

  return null;
}
