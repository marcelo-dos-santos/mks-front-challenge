import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Container, Content } from "./styles";
import { Products } from "../components/Products/Products";

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Products title="Apple Watch Series 4 GPS" price="49,97" />
        <Products title="Apple Watch Series 4 GPS" price="49,97" />
        <Products title="Apple Watch Series 4 GPS" price="49,97" />
        <Products title="Apple Watch Series 4 GPS" price="49,97" />
        <Products title="Apple Watch Series 4 GPS" price="49,97" />
        <Products title="Apple Watch Series 4 GPS" price="49,97" />
        <Products title="Apple Watch Series 4 GPS" price="49,97" />
        <Products title="Apple Watch Series 4 GPS" price="49,97" />
      </Content>
      <Footer />
    </Container>
  );
}

export default App;
