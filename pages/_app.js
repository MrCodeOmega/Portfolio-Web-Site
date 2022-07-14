import { ThemeProvider } from 'next-themes'
import { fuchsia } from 'tailwindcss/colors'
import '../styles/globals.css'
import '../styles/mainstyle.css'

function MyApp({ Component, pageProps }) {
  return (
     <ThemeProvider enableSystem={true} attribute="class" >
    <Component {...pageProps} />
  </ThemeProvider>
  );
 
}

export default MyApp;
