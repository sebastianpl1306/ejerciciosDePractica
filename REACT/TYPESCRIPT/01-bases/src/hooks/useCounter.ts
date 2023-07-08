import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';

export const useCounter = ({ maxCount = 10 }) =>{
  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<HTMLHeadingElement>(null);
  const tl = useRef(gsap.timeline());

  const handleClick = () =>{
    if( counter >= 10 ) return;
    setCounter( prev => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    if( !elementToAnimate.current ) return;
    tl.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out'})
              .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out'})
              .pause();
  }, [counter]);

  useEffect(() => {
    tl.current.play(0);
  }, [counter])

  return {
    counter,
    elementToAnimate,
    handleClick,
  }
}