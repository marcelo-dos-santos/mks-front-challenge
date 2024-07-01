import { Container } from "./styles";

interface BuyButtonProps {
  title: string;
  loading?: boolean;
  icon: any;
  onClick: () => void;
}

export function BuyButton({
  title,
  loading = false,
  icon: Icon,
  onClick,
  ...rest
}: BuyButtonProps) {
  return (
    <Container type="button" disabled={loading} onClick={onClick} {...rest}>
      {Icon && <Icon size={14} />}
      {loading ? "Carregando..." : title}
    </Container>
  );
}
