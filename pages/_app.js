import '@/styles/globals.scss';

import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800']
});


export default function App({ Component, pageProps }) {
  return <main className={nunitoSans.className + ' vh-100'}>
    <Component {...pageProps} />
  </main>
}
