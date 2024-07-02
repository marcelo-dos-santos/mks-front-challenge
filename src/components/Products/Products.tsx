import { Container, ProductDetails, BuyButtonDiv } from "./styles";
import { BuyButton } from "../BuyButton/BuyButton";
import { PriceTag } from "../PriceTag/PriceTag";
import { FaShoppingBag } from "react-icons/fa";

interface ProductProps {
  title: string;
  price: number;
  description: string;
  photo: string;
  addToCart: (product: { title: string; price: number }) => void;
}

export function Products({
  title,
  price,
  description,
  photo,
  addToCart,
  ...rest
}: ProductProps) {
  const handleAddToCart = () => {
    addToCart({ title, price });
  };

  return (
    <Container {...rest}>
      <ProductDetails>
        <img src={photo} alt="" />
        <div className="productTitleAndPrice">
          <h1>{title}</h1>
          <PriceTag price={`R$${price.toFixed(2)}`} />
        </div>
        <div className="details">
          <span>{description}</span>
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
