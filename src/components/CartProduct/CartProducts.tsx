import { Container, ProductDetails, ProductQuant } from "./styles";
import { QuantityButton } from "../QuantityButton/QuantityButton";
import productImg from "../../assets/apple-watch.png";

interface CartProductProps {
  title: string;
  price: string;
  onRemove: () => void;
}

export function CartProduct({
  title,
  price,
  onRemove,
  ...rest
}: CartProductProps) {
  const handleRemoveClick = () => {
    onRemove();
  };

  return (
    <Container {...rest}>
      <ProductDetails>
        <img src={productImg} alt="" />
        <div className="productTitleAndPrice">
          <h1>{title}</h1>
        </div>
        <ProductQuant>
          <span>Qtd:</span>
          <QuantityButton />
        </ProductQuant>
        <span className="price">{price}</span>
      </ProductDetails>
      <span onClick={handleRemoveClick}>X</span>
    </Container>
  );
}
