import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: #ffffff;
  color: black;
  height: 48px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  border: 0;
  padding: 0 30px;
  border-radius: 5px;
  font-weight: 400;

  &:disabled {
    opacity: 0.5;
  }
`;
