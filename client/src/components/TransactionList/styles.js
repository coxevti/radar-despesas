import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
  & > h3 {
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
    margin: 10px 0 10px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 40px;
    li {
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      box-shadow: var(--box-shadow);
      color: #333;
      border-radius: 4px;
      padding: 10px;
      margin: 10px 0;
      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        span {
          margin-left: 10px;
          h2 {
            text-transform: uppercase;
            font-size: 1.2rem;
          }
          time {
            color: #bbb;
          }
        }
        svg {
          font-size: 40px;
        }
        button {
          border: 0;
          background-color: transparent;
          margin-left: 15px;
          padding-left: 15px;
          svg {
            font-size: 25px;
          }
        }
      }
    }
    li.plus {
      border-right: 5px solid #34bf49;
    }
    li.minus {
      border-right: 5px solid #ff4c4c;
    }
  }
`;
