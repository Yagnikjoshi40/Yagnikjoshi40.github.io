'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger as ScrollTriggerPlugin } from 'gsap/ScrollTrigger';

export function ScrollTrigger() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTriggerPlugin);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((item, index) => {
        gsap.fromTo(item, { opacity: 0, y: 32, filter: 'blur(10px)' }, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          delay: index * 0.05,
          scrollTrigger: { trigger: item, start: 'top 85%' }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return null;
}
