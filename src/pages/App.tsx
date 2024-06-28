import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CartProduct } from "../components/CartProduct/CartProducts";
import { Container, Content, CartContainer, CartContent } from "./styles";
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
      <CartContainer className="cartContainer">
        <CartContent>
          <div className="title">
            <h2>Carrinho de compras</h2>
            <span>X</span>
          </div>
          <CartProduct title="Apple Watch Series 4 GPS" price="49,97" />
          <CartProduct title="Apple Watch Series 4 GPS" price="49,97" />
        </CartContent>
      </CartContainer>
      <Footer />
    </Container>
  );
}

export default App;
