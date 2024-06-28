import { Container, ProductDetails, ProductQuant } from "./styles";
import { QuantityButton } from "../QuantityButton/QuantityButton";
import productImg from "../../assets/apple-watch.png";

export function CartProduct({
  title,
  price,
  ...rest
}: {
  title: string;
  price: string;
}) {
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
        <span className="price">R$310</span>
      </ProductDetails>
    </Container>
  );
}
