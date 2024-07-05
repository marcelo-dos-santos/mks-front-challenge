# MKS Front End Challenge

Este projeto é uma aplicação de e-commerce desenvolvida para um desafio de empresa, utilizando **React**, **TypeScript**, **Vite** e **styled-components**. A aplicação permite aos usuários visualizar uma lista de produtos tecnológicos, adicionar itens ao carrinho, ajustar quantidades e finalizar a compra.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática ao código.
- **Vite**: Ferramenta de construção rápida para projetos modernos de front-end.
- **styled-components**: Biblioteca para estilização de componentes React utilizando tagged template literals.
- **Axios**: Cliente HTTP baseado em Promises para realizar requisições à API.

## Funcionalidades

- **Integração com API**: Busca produtos de uma API externa e exibe-os na interface.
- **Carrinho de Compras**: Adiciona produtos ao carrinho, permite ajustar quantidades e calcula o preço total.
- **Componentes Reutilizáveis**: Estrutura modular com componentes reutilizáveis para facilitar a manutenção e escalabilidade.

## Estrutura do Projeto

O projeto é organizado de forma modular, separando as responsabilidades em componentes distintos:

- **Header**: Exibe o ícone do carrinho e o número de itens.
- **Products**: Lista todos os produtos disponíveis.
- **CartProduct**: Gerencia as quantidades dos produtos individuais e a remoção do carrinho.
- **QuantityButton**: Lida com o incremento e decremento das quantidades dos produtos.
- **Footer**: Exibe o rodapé da aplicação.

## Configuração do Ambiente

Este template fornece uma configuração mínima para fazer o React funcionar no Vite com HMR e algumas regras do ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utiliza [Babel](https://babeljs.io/) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) utiliza [SWC](https://swc.rs/) para Fast Refresh

## Expandindo a Configuração do ESLint

Se você estiver desenvolvendo uma aplicação de produção, recomendamos atualizar a configuração para habilitar regras de lint conscientes de tipo:

- Configure a propriedade `parserOptions` no nível superior assim:

```js
export default {
  // outras regras...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Como Rodar o Projeto

- Clone o repositório:

```js
  git clone https://github.com/seu-usuario/mks-front-end-challenge.git
```

- Navegue até o diretório do projeto:

```js
cd mks-front-end-challenge
```

- Instale as dependências:

```js
npm install
```

- Inicie o servidor de desenvolvimento:

```js
npm run dev
```

Abra o navegador e acesse:

```js
http://localhost:3000
```

## Exemplo de Código

```js
// Exemplo: Adicionando produtos ao carrinho e atualizando quantidade
const addToCart = (product: Product) => {
  setCartProducts((prevProducts) => {
    const productExists = prevProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productExists) {
      return prevProducts.map((cartProduct) =>
        cartProduct.id === product.id
          ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
          : cartProduct
      );
    }

    return [...prevProducts, { ...product, quantity: 1 }];
  });
};
```

## Contato

Sinta-se à vontade para se conectar comigo no LinkedIn e vamos discutir como posso contribuir para sua equipe!
