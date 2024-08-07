import { Container } from "./styles";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "../Button/Button";

export function Header({
  toggleCartVisibility,
  productQtd,
}: {
  productQtd: number;
  toggleCartVisibility: () => void;
}) {
  return (
    <Container>
      <div className="header">
        <div className="logo">
          <h1>MKS</h1>
          <h2>Sistemas</h2>
        </div>
        <div className="cart">
          <Button
            icon={FaShoppingCart}
            title={`Pedidos (${productQtd})`}
            onClick={toggleCartVisibility}
          />
        </div>
      </div>
    </Container>
  );
}
