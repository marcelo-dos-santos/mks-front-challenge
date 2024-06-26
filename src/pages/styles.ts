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

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 486px;
  height: 100%;
  background-color: #0f52ba;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const CartContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  > h2 {
    color: white;
    margin-bottom: 16px;
    margin: 36px 0 65px 47px;
    max-width: 180px;
    font-size: 27px;
    font-weight: 700;
    line-height: 32.91px;
    text-align: left;
  }
`;
