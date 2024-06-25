import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  min-width: 100%;
  height: 100vh;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

export const Content = styled.div`
  display: grid;
  grid-area: content;
  gap: 16px;
  padding: 16px;
  grid-template-columns: repeat(auto-fit, minmax(218px, 1fr));

  @media (min-width: 768px) {
    max-width: 998px;
    margin: 50px auto;
  }
`;
