/** @jsx jsx */
import { jsx } from "@emotion/core";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
