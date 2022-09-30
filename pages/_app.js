import '../styles/globals.css'
import {MoralisProvider} from 'react-moralis'
import { AdrexProvider } from '../context/AdrexContext'

export const envData = {
  serverUrl: process.env.NEXT_PUBLIC_MORALIS_APP_SERVER,
  appId: process.env.NEXT_PUBLIC_MORALIS_APP_ID,
}

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider 
      appId={envData.appId}
      serverUrl={envData.serverUrl}
    >
      <AdrexProvider>
        <Component {...pageProps} />
      </AdrexProvider>
    </MoralisProvider>
  )
}

export default MyApp
