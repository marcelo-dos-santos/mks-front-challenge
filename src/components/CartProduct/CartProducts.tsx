import { Container, ProductDetails, ProductQuant } from "./styles";
import { QuantityButton } from "../QuantityButton/QuantityButton";

interface CartProductProps {
  name: string;
  price: string;
  photo: string;
  quantity: number;
  onRemove: () => void;
  onQuantityChange: (quantity: number) => void;
}

export function CartProduct({
  name,
  price,
  photo,
  quantity,
  onRemove,
  onQuantityChange,
  ...rest
}: CartProductProps) {
  const handleRemoveClick = () => {
    onRemove();
  };

  return (
    <Container {...rest}>
      <ProductDetails>
        <img src={photo} alt="" />
        <div className="productTitleAndPrice">
          <h1>{name}</h1>
        </div>
        <ProductQuant>
          <span>Qtd:</span>
          <QuantityButton
            initialQuantity={quantity}
            onQuantityChange={onQuantityChange}
          />
        </ProductQuant>
        <span className="price">{price}</span>
      </ProductDetails>
      <span onClick={handleRemoveClick}>X</span>
    </Container>
  );
}
