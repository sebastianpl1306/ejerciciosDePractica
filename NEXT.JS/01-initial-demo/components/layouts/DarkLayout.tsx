import { FC } from 'react';

type DarkLayoutProps = {
  children: JSX.Element[]
}

const DarkLayout: FC<DarkLayoutProps> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      padding: '10px',
      borderRadius: '5px'
    }}>
      <h3>Dark</h3>
      <div>
          { children }
      </div>
    </div>
  )
}

export default DarkLayout;