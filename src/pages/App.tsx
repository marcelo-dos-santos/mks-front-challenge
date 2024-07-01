import { Header } from "../components/Header/Header";
import { useState } from "react";
import { Footer } from "../components/Footer/Footer";
import { CartProduct } from "../components/CartProduct/CartProducts";
import { Container, Content, CartContainer, CartContent } from "./styles";
import { Products } from "../components/Products/Products";

interface Product {
  title: string;
  price: number;
}

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const addToCart = (product: Product) => {
    setCartProducts((prevProducts) => [...prevProducts, product]);
  };

  const total = cartProducts.reduce((sum, product) => sum + product.price, 0);

  const formattedTotal = total.toFixed(2);

  return (
    <Container>
      <Header toggleCartVisibility={toggleCartVisibility} />
      <Content>
        <Products
          title="Apple Watch Series 4 GPS"
          price={49.97}
          addToCart={addToCart}
        />
        <Products
          title="Apple Watch Series 4 GPS"
          price={49.97}
          addToCart={addToCart}
        />
        <Products
          title="Apple Watch Series 4 GPS"
          price={49.97}
          addToCart={addToCart}
        />
        <Products
          title="Apple Watch Series 4 GPS"
          price={49.97}
          addToCart={addToCart}
        />
        <Products
          title="Apple Watch Series 4 GPS"
          price={49.97}
          addToCart={addToCart}
        />
        <Products
          title="Apple Watch Series 4 GPS"
          price={49.97}
          addToCart={addToCart}
        />
        <Products
          title="Apple Watch Series 4 GPS"
          price={49.97}
          addToCart={addToCart}
        />
        <Products
          title="Apple Watch Series 4 GPS"
          price={49.97}
          addToCart={addToCart}
        />
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
            {cartProducts.map((product, index) => (
              <CartProduct
                key={index}
                title={product.title}
                price={`R$${product.price}`}
              />
            ))}
          </div>
          <div className="total">
            <span>Total:</span>
            <span>R${formattedTotal}</span>
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
