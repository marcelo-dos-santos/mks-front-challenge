import { Container } from "./styles";

export function Button({
  title,
  loading = false,
  icon: Icon,
  ...rest
}: {
  title: string;
  loading?: boolean;
  icon: any;
  onClick: () => void
}) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {Icon && <Icon size={25} />}
      {loading ? "Carregando..." : title}
    </Container>
  );
}
