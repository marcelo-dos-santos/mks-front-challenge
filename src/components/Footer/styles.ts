import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  grid-area: footer;
  height: 34px;
  margin-top: 15px;
  padding: 10px;
  width: 100%;
  background: #eeeeee;
  display: grid;
  align-items: center;
  font-size: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: #000000;
    gap: 6px;
    margin-left: 6px;
  }

  h2 {
    font-size: 12px;
    color: white;
  }
`;
