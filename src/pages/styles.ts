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

  .cartContainer {
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;

    &.visible {
      transform: translateX(0);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-area: content;
  gap: 16px;
  padding: 16px;
  grid-template-columns: repeat(auto-fit, minmax(218px, 1fr));

  @media (min-width: 768px) {
    max-width: 1183px;
    margin: 5px auto;
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
`;

export const CartContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 97px;

  .cartProducts {
    max-height: 555px;
    padding: 16px;
    overflow-y: auto;
  }

  .cartProducts::-webkit-scrollbar {
    width: 6px;
  }

  .cartProducts::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 10px;
  }

  .cartProducts::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .cartProducts {
    scrollbar-width: thin;
    scrollbar-color: black transparent;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > span {
      font-size: 28px;
      font-weight: 400;
      line-height: 15px;
      color: #ffffff;
      padding: 15px;
      border: 1px solid black;
      border-radius: 25px;
      background-color: black;
      background-clip: padding-box;
      margin-bottom: 49px;
      margin-right: 29px;
      cursor: pointer;
    }

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
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 47px 16px 47px; /* Adjusted margin-bottom */
    padding-top: 16px;
    border-top: 1px solid #fff; /* Optional: add a separator line */

    > span {
      color: white;
      font-size: 28px;
      font-weight: 700;
      line-height: 15px;
    }
  }

  .checkout {
    width: 100%;
    height: 97px;
    position: absolute;
    bottom: 0;
    background-color: #000000;

    > span {
      color: white;
      font-size: 28px;
      font-weight: 700;
      line-height: 15px;
      text-align: center;
    }
  }
`;
