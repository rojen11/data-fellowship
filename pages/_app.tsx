import { AppProps } from 'next/app'
import '../styles/index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
