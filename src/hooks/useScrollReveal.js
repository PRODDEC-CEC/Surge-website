import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const defaultOptions = {
      duration: 0.8,
      y: 50,
      opacity: 0,
      ease: "power2.out",
      delay: 0,
      ...options
    };

    gsap.fromTo(
      element,
      {
        y: defaultOptions.y,
        opacity: defaultOptions.opacity,
      },
      {
        y: 0,
        opacity: 1,
        duration: defaultOptions.duration,
        ease: defaultOptions.ease,
        delay: defaultOptions.delay,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, []);

  return elementRef;
};

export const useScrollRevealBatch = (selector, options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    if (elements.length === 0) return;

    const defaultOptions = {
      duration: 0.6,
      y: 30,
      opacity: 0,
      ease: "power2.out",
      stagger: 0.1,
      ...options
    };

    gsap.fromTo(
      elements,
      {
        y: defaultOptions.y,
        opacity: defaultOptions.opacity,
      },
      {
        y: 0,
        opacity: 1,
        duration: defaultOptions.duration,
        ease: defaultOptions.ease,
        stagger: defaultOptions.stagger,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (elements.includes(trigger.trigger) || trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [selector]);

  return containerRef;
};