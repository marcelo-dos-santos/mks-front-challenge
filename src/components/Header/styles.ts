import styled from "styled-components";

export const Container = styled.div`
  height: 101px;
  background-color: #0f52ba;

  .header {
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 17px;
    margin-left: 65px;

    > h1 {
      font-size: 40px;
      font-weight: 600;
      line-height: 19px;
      color: #ffffff;
    }

    > h2 {
      font-size: 20px;
      margin-top: 15px;
      font-weight: 300;
      line-height: 19px;
      color: #ffffff;
    }
  }

  .cart {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 65px;
    gap: 16px;
    padding: 10px;
  }
`;
