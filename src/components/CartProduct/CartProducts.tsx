import { Container, ProductDetails } from "./styles";
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
      </ProductDetails>
    </Container>
  );
}
