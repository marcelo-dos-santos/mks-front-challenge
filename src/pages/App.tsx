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
  quantity: number;
}

const baseURL =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [productsFromAPI, setProductsFromAPI] = useState<Product[]>([]);
  const [qtdProducts, setQtdProducts] = useState(0);

  const handleFinishBuy = () => {
    alert("Produtos comprados com sucesso!");
    setCartProducts([]);
    setIsCartVisible(false);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const addToCart = (product: Product) => {
    setCartProducts((prevProducts) => {
      const productExists = prevProducts.find(
        (cartProduct) => cartProduct.id === product.id
      );

      if (productExists) {
        return prevProducts.map((cartProduct) =>
          cartProduct.id === product.id
            ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
            : cartProduct
        );
      }

      return [...prevProducts, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productToRemove: Product) => {
    setCartProducts((prevProducts) => {
      return prevProducts.filter(
        (product) => product.id !== productToRemove.id
      );
    });
  };

  const updateProductQuantity = (productId: number, newQuantity: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  const total = cartProducts.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

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
          quantity: 0,
        }));

        setProductsFromAPI(products);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setQtdProducts(
      cartProducts.reduce((sum, product) => sum + product.quantity, 0)
    );
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
                quantity={product.quantity}
                onRemove={() => removeFromCart(product)}
                onQuantityChange={(newQuantity) =>
                  updateProductQuantity(product.id, newQuantity)
                }
              />
            ))}
          </div>
          <div className="total">
            <span>Total:</span>
            <span>R${formattedTotal}</span>
          </div>
          <button className="checkout" onClick={handleFinishBuy}>
            <span>Finalizar Compra</span>
          </button>
        </CartContent>
      </CartContainer>
      <Footer />
    </Container>
  );
}

export default App;
