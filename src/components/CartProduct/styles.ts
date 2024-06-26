import styled from "styled-components";

export const Container = styled.div`
  width: 379px;
  height: 95px;
  background-color: white;
  box-shadow: -2px 2px 10px 0px #0000000d;
  border: 1px;
  border-radius: 10px;
  margin: 0 34px 0 27px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px;
  gap: 21px;
  margin-bottom: 60px;

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
      max-width: 113px;
    }
  }

  > img {
    margin-top: 18px;
    margin-left: 26px;
    margin-bottom: 14px;
    width: 46px;
    height: 57px;
  }
`;
