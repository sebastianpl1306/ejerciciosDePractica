import type { AppContext, AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme, darkTheme, lightTheme } from '@/themes';
import Cookies from 'js-cookie';

import '@/styles/globals.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useEffect, useState } from 'react';

interface Props extends AppProps{
  theme: string;
}

export default function App({ Component, pageProps, theme }: Props) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light';

    const selectedTheme = cookieTheme === 'light'
    ? lightTheme
    : (cookieTheme === 'dark')
      ? darkTheme
      : customTheme;

    setCurrentTheme( selectedTheme );
  }, [])

  
  return (
    <ThemeProvider theme={ currentTheme }>
      <CssBaseline/>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

// App.getInitialProps = async( appContext: AppContext ) => {

//   const { theme } = appContext.ctx.req ? ( appContext.ctx.req.cookies as any ) : { theme: 'light'}
//   const validThemes = ['light', 'dark', 'custom'];

//   return {
//     theme: validThemes.includes( theme ) ? theme : 'light',
//   }
// }