
import { useState, useEffect, useRef, RefObject } from 'react';

interface UseElementOnScreenOptions {
  root: Element | null;
  rootMargin: string;
  threshold: number;
}

interface UseElementOnScreenResult<T extends HTMLElement> {
  containerRef: RefObject<T>;
  isVisible: boolean;
}

export const useElementOnScreen = <T extends HTMLElement = HTMLDivElement>(
  options: UseElementOnScreenOptions
): UseElementOnScreenResult<T> => {
  const containerRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return { containerRef, isVisible };
};
