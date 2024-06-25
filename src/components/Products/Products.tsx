import { Container, ProductDetails, BuyButtonDiv } from "./styles";
import { BuyButton } from "../BuyButton/BuyButton";
import { PriceTag } from "../PriceTag/PriceTag";
import { FaShoppingBag } from "react-icons/fa";
import productImg from "../../assets/apple-watch.png";

export function Products({
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
          <PriceTag price={`R$399`} />
        </div>
        <div className="details">
          <span>Redesigned from scratch and completely revised.</span>
        </div>
      </ProductDetails>
      <BuyButtonDiv>
        <BuyButton icon={FaShoppingBag} title="COMPRAR" />
      </BuyButtonDiv>
    </Container>
  );
}
