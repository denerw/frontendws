import { MenuHeaderWSProvider } from '../contexts/MenuHeaderWSContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <MenuHeaderWSProvider>
  <Component {...pageProps} />
  </MenuHeaderWSProvider>
  )
  
}

export default MyApp
