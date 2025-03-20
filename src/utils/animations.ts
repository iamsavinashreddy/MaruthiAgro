
import { useEffect, useState, useRef } from 'react';

export function useElementOnScreen(options: IntersectionObserverInit) {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentElement = containerRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return { containerRef, isVisible };
}

export function getAnimationClasses(isVisible: boolean, baseClass: string, delay: number = 0) {
  return isVisible
    ? `${baseClass} opacity-100 transform-none transition-all duration-700 ease-out ${delay ? `delay-${delay}` : ''}`
    : `${baseClass} opacity-0 transform translate-y-8 transition-all duration-700 ease-out ${delay ? `delay-${delay}` : ''}`;
}

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollPos = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress(currentScrollPos / scrollHeight);
      }
    };
    
    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();
    
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);
  
  return scrollProgress;
}
