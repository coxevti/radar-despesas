import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  max-width: 350px;
  border-radius: 4px;
  & > div {
    flex: 1;
    text-align: center;
  }
  & > div:first-of-type {
    border-right: 1px solid #dedede;
  }
  .money {
    font-size: 20px;
    letter-spacing: 1px;
    margin: 5px 0;
  }
  .money.plus {
    color: #34bf49;
  }
  .money.minus {
    color: #ff4c4c;
  }
`;
