import { Container, ProductDetails, BuyButtonDiv } from "./styles";
import { BuyButton } from "../BuyButton/BuyButton";
import { PriceTag } from "../PriceTag/PriceTag";
import { FaShoppingBag } from "react-icons/fa";
import productImg from "../../assets/apple-watch.png";

interface ProductProps {
  title: string;
  price: number;
  addToCart: (product: { title: string; price: number }) => void;
}

export function Products({ title, price, addToCart, ...rest }: ProductProps) {
  const handleAddToCart = () => {
    addToCart({ title, price });
  };

  return (
    <Container {...rest}>
      <ProductDetails>
        <img src={productImg} alt="" />
        <div className="productTitleAndPrice">
          <h1>{title}</h1>
          <PriceTag price={`R$${price.toFixed(2)}`} />
        </div>
        <div className="details">
          <span>Redesigned from scratch and completely revised.</span>
        </div>
      </ProductDetails>
      <BuyButtonDiv>
        <BuyButton
          icon={FaShoppingBag}
          title="COMPRAR"
          onClick={handleAddToCart}
        />
      </BuyButtonDiv>
    </Container>
  );
}
