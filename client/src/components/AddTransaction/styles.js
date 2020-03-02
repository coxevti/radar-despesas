import styled, { keyframes } from "styled-components";

const animatetop = keyframes`from {top:-300px; opacity:0} 
to {top:0; opacity:1}`;

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  display: ${props => (props.show ? "block" : "none")};
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: 0 auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: ${animatetop};
  -webkit-animation-duration: 0.4s;
  animation-name: ${animatetop};
  animation-duration: 0.4s;
  border-radius: 4px;
`;

export const ModalHeader = styled.div`
  color: #333;
  border-top: 5px solid #00a98f;
  display: flex;
  justify-content: space-between;
  padding: 25px 25px 0 25px;
  h2 {
    font-weight: normal;
    flex: 1;
    text-align: center;
  }
  button {
    border: 0;
    padding: 0;
    margin: 0;
    svg {
      font-size: 22px;
      color: #999;
    }
  }
`;

export const ModalBody = styled.div`
  padding: 20px 16px;
  margin: 0 auto;
  text-align: center;
  div {
    display: flex;
    align-items: center;
    margin: 15px 0;
    span {
      border-radius: 4px 0 0 4px;
      border-right: 0;
      margin-right: 15px;
      svg {
        font-size: 30px;
        color: #999;
      }
    }
    input[type="text"],
    input[type="number"],
    input[type="date"] {
      border: 1px solid #dedede;
      border-radius: 0 4px 4px 0;
      padding: 10px;
      width: 100%;
      text-transform: uppercase;
    }
  }
  button {
    border: 0;
    background-color: #00a98f;
    margin-top: 15px;
    padding: 16px 32px;
    color: #fff;
    font-weight: bold;
    font-size: 0.8em;
    text-transform: uppercase;
  }
`;
