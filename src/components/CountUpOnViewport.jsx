import { useState, useEffect, useRef } from 'react';

const CountUpOnViewport = ({ targetNumber }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && count === 0) {
      let start = 0;
      const increment = targetNumber / 50;
      const interval = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(interval);
        } else {
          setCount(Math.ceil(start));
        }
      }, 20);
    }
  }, [isVisible, count, targetNumber]);

  return (
    <span ref={elementRef}>
      {count}
    </span>
  );
};

export default CountUpOnViewport;
