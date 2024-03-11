import { CSSProperties, useEffect, useState } from 'react';
import { FillerContent } from '../../components';

const styleContainer: CSSProperties = {
  height: '100vh',
  overflow: 'scroll'
}

/**
 * Permite obtener el scroll de un elemento usando getElementById y calcular el porcentaje
 */
export const ScrollPercentV2 = () => {
  const [percent, setPercent] = useState(100);

  useEffect(() => {
    const container = document.getElementById('mainContent');

    if(!container) return;

    const handleScroll = () => {
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const scrollY = container.scrollTop;
      const percentCurrent = (scrollY * 100) / scrollHeight

      setPercent(100 - percentCurrent);
    };

    // Agregar el event listener al objeto window
    container.addEventListener('scroll', handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div className='container' id='mainContent' style={styleContainer}>
      <div style={{width: '100%', position: 'fixed', top: 0, background: '#2666CF', color: '#F5F2E7'}}>{percent}</div>
      <FillerContent/>
    </div>
  )
}