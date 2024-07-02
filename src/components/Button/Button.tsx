import { Container } from "./styles";
import { ReactNode } from "react";

interface ButtonProps {
  title: ReactNode;
  loading?: boolean;
  icon: any;
  onClick: () => void;
}

export function Button({
  title,
  loading = false,
  icon: Icon,
  ...rest
}: ButtonProps) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {Icon && <Icon size={25} />}
      {loading ? "Carregando..." : title}
    </Container>
  );
}
