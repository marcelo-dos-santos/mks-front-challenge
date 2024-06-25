import { styled } from "styled-components";

export const Container = styled.div`
  width: 218px;
  height: 285px;
  box-shadow: 0px 2px 8px 0px #00000022;
  border: 1px;
  border-radius: 10px;
  background: #ffffff;
  margin: 0px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  gap: 14px;
  align-items: center;
  font-size: 18px;
`;

export const BuyButtonDiv = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px;

  .details {
    > span {
      font-size: 12px;
    }
  }

  .price {
    > span {
      font-size: 18px;
    }
  }

  .productTitleAndPrice {
    display: flex;
    justify-content: space-between;

    > h1 {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      margin-bottom: 12px;
      max-width: 124px;
    }
  }

  > img {
    margin-top: 18px;
    margin-bottom: 14px;
    width: 111px;
    height: 138px;
  }
`;
