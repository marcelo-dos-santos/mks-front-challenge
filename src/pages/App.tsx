import { Header } from "../components/Header/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Footer } from "../components/Footer/Footer";
import { CartProduct } from "../components/CartProduct/CartProducts";
import { Container, Content, CartContainer, CartContent } from "./styles";
import { Products } from "../components/Products/Products";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
}

const baseURL =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [productsFromAPI, setProductsFromAPI] = useState<Product[]>([]);
  const [qtdProducts, setQtdProducts] = useState(0);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const addToCart = (product: Product) => {
    setCartProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeFromCart = (productToRemove: Product) => {
    setCartProducts((prevProducts) => {
      return prevProducts.filter((product) => product !== productToRemove);
    });
  };

  const total = cartProducts.reduce((sum, product) => sum + product.price, 0);

  const formattedTotal = total.toFixed(2);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = {
          page: 1,
          rows: 8,
          sortBy: "id",
          orderBy: "DESC",
        };

        const response = await axios.get(`${baseURL}/products`, { params });
        const products = response.data.products.map((product: any) => ({
          ...product,
          price: parseFloat(product.price),
        }));

        setProductsFromAPI(products);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setQtdProducts(cartProducts.length);
  }, [cartProducts]);

  return (
    <Container>
      <Header
        toggleCartVisibility={toggleCartVisibility}
        productQtd={qtdProducts}
      />
      <Content>
        {productsFromAPI.map((product) => (
          <Products
            key={product.id}
            title={product.name}
            price={product.price}
            description={product.description}
            photo={product.photo}
            addToCart={() => addToCart(product)}
          />
        ))}
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
            {cartProducts.map((product) => (
              <CartProduct
                key={product.id}
                name={product.name}
                photo={product.photo}
                price={`R$${product.price}`}
                onRemove={() => removeFromCart(product)}
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
