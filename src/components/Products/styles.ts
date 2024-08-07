import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 272px;
  max-height: 370px;
  width: 272px;
  height: 370px;
  box-shadow: 0px 2px 8px 0px #00000022;
  border: 1px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #ffffff;
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
    gap: 20px;
    align-items: center;
    height: 60px;

    > h1 {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      width: 124px;
    }
  }

  > img {
    margin-top: 18px;
    margin-bottom: 14px;
    width: 111px;
    height: 138px;
  }
`;
