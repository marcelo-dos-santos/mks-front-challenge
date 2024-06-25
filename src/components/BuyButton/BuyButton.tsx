import { Container } from "./styles";

export function BuyButton({
  title,
  loading = false,
  icon: Icon,
  ...rest
}: {
  title: string;
  loading?: boolean;
  icon: any;
}) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {Icon && <Icon size={14} />}
      {loading ? "Carregando..." : title}
    </Container>
  );
}
