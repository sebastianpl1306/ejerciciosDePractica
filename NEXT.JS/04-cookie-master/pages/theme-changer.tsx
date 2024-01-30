import { ChangeEvent, useState, useEffect } from 'react';
import { GetServerSideProps } from 'next'
import axios from 'axios';
import Cookies from 'js-cookie';
import { Card, CardContent, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { Layout } from '@/components/layouts';

type ThemeChangerPageProps = {
  theme: string
}

const ThemeChangerPage = ({ theme }: ThemeChangerPageProps) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) =>{
    const selectedTheme = event.target.value;
    setCurrentTheme( selectedTheme );
    Cookies.set('theme', selectedTheme );
  }

  const onClick = async () => {
    const { data } = await axios.get('/api/hello');

    console.log(data);

  }

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme])

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup
              value={ currentTheme }
              onChange={ onThemeChange }
            >
              <FormControlLabel value='light' control={<Radio />} label="Light"/>
              <FormControlLabel value='dark' control={<Radio />} label="Dark"/>
              <FormControlLabel value='custom' control={<Radio />} label="Custom"/>
            </RadioGroup>
          </FormControl>
        </CardContent>
        <Button onClick={onClick}>
          petición
        </Button>
      </Card>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = 'light', name = 'no name'} = req.cookies;

  const validThemes = ['light', 'dark', 'custom'];

  return {
    props: {
      theme: validThemes.includes( theme ) ? theme : 'light',
    }
  }
}

export default ThemeChangerPage;