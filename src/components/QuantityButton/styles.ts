import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 4px;
  min-width: 60px;
  min-height: 19px;
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;

  > span {
    cursor: pointer;
    user-select: none;
    font-size: 10px;
    font-weight: 700;
  }

  .minus {
    margin-left: 3px;
  }

  .plus {
    margin-right: 3px;
  }

  .quantity {
    cursor: default;
  }

  .separator {
    height: 12px;
    border-left: 1px solid #bfbfbf;
  }
`;
