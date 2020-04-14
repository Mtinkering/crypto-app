/** @jsx jsx */
import { jsx } from "@emotion/core";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import { ThemeProvider } from 'emotion-theming';

const theme = {
  color: {
    darkGreen: "#356223",
    lightGreen: "#4d960a",
    lightGrey: "#877f87",
    darkGrey: "#eccc70",
    lightYellow: "#f8daa2",
    darkYellow: "#949012",
    lightOrange: "#deab1c",
    darkOrange: "#ffe94d"
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContainer />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
