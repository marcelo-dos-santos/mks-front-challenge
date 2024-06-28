import { Container } from "./styles";

export function QuantityButton() {
  return (
    <Container>
      <span className="minus">-</span>
      <div className="separator" />
      <span className="quantity">1</span>
      <div className="separator" />
      <span className="plus">+</span>
    </Container>
  );
}
