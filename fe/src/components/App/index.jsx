import GlobalStyles from "../../assets/styles/global"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../../assets/styles/themes/default'
import { Container } from './styles'
import Header from "../Header"
import Routes from "../../Routes"
import ToastContainer from "../Toast/ToastContainer"

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}


