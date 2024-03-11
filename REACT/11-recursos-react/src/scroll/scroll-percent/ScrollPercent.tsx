import { CSSProperties, useEffect, useRef, useState } from 'react';
import { FillerContent } from '../../components';

const styleContainer: CSSProperties = {
  height: '100vh',
  overflow: 'scroll'
}

/**
 * Permite obtener el scroll de un elemento y calcular el porcentaje
 */
export const ScrollPercent = () => {
  const [percent, setPercent] = useState(100);

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if(!container || !container.current) return;

      const scrollHeight = container.current.scrollHeight - container.current.clientHeight;
      const scrollY = container.current.scrollTop;
      const percentCurrent = (scrollY * 100) / scrollHeight

      setPercent(100 - percentCurrent);
    };

    if(container && container.current) {
      // Agregar el event listener al objeto window
      container.current.addEventListener('scroll', handleScroll);
    }
    // Limpiar el event listener al desmontar el componente
    return () => {
      if(container && container.current) {
        container.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [])

  return (
    <div className='container' ref={container} style={styleContainer}>
      <div style={{width: '100%', position: 'fixed', top: 0, background: '#2666CF', color: '#F5F2E7'}}>{percent}</div>
      <FillerContent/>
    </div>
  )
}