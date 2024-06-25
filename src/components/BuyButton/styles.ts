import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: #0f52ba;
  color: white;
  height: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  gap: 11px;
  border: 0;
  padding: 0 30px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  font-weight: 400;

  &:disabled {
    opacity: 0.5;
  }
`;
