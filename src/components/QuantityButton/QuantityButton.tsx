import { useState } from "react";
import { Container } from "./styles";

export function QuantityButton() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => (prevQuantity < 99 ? prevQuantity + 1 : 99));
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  return (
    <Container>
      <span className="minus" onClick={handleDecrement}>
        -
      </span>
      <div className="separator" />
      <span className="quantity">{quantity}</span>
      <div className="separator" />
      <span className="plus" onClick={handleIncrement}>
        +
      </span>
    </Container>
  );
}
