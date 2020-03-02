import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 15px auto;
  max-width: 600px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  & > span {
    flex: 1;
    text-align: center;
  }
  button {
    background-color: transparent;
    padding: 10px;
    border: 1px dashed #999;
    border-radius: 4px;
  }
`;
