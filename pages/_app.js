// import Layout from "../components/Layout";
// import store from "../components/redux/store";
// import { Provider } from "react-redux";
import { StyledEngineProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/globals.css"
function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider>
      <Component {...pageProps} />
    </StyledEngineProvider>
  )
}

export default MyApp
