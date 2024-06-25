import { Container } from "./styles";

export function PriceTag({ price }: { price: string }) {
  return <Container>{price}</Container>;
}
