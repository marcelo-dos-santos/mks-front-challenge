import { useState, useEffect } from "react";
import { Container } from "./styles";

interface QuantityButtonProps {
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void;
}

export function QuantityButton({
  initialQuantity,
  onQuantityChange,
}: QuantityButtonProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity < 99 ? prevQuantity + 1 : 99;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity > 0 ? prevQuantity - 1 : 0;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
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
