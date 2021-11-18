import { AppProps } from 'next/app'
import '../styles/css/main.css'
import '../styles/css/cards.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}