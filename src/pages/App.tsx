import { Header } from "../components/Header/Header";
import { useState } from "react";
import { Footer } from "../components/Footer/Footer";
import { CartProduct } from "../components/CartProduct/CartProducts";
import { Container, Content, CartContainer, CartContent } from "./styles";
import { Products } from "../components/Products/Products";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <Container>
      <Header toggleCartVisibility={toggleCartVisibility} />
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
      <CartContainer
        className={`cartContainer ${isCartVisible ? "visible" : ""}`}
      >
        <CartContent>
          <div className="title">
            <h2>Carrinho de compras</h2>
            <span onClick={toggleCartVisibility}>X</span>
          </div>
          <div className="cartProducts">
            <CartProduct title="Apple Watch Series 4 GPS" price="R$399" />
            <CartProduct title="Apple Watch Series 4 GPS" price="R$399" />
          </div>
          <div className="total">
            <span>Total:</span>
            <span>R$798</span>
          </div>
          <button className="checkout">
            <span>Finalizar Compra</span>
          </button>
        </CartContent>
      </CartContainer>
      <Footer />
    </Container>
  );
}

export default App;
