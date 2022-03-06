import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #bcfd4c;
  height: 70px;
  width: 100%;
  padding: 0 50px;
  display: flex;
  align-items: center;
  > a {
    margin-right: 20px;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    color: #1a2238;
    transition: color 0.1s linear;
    &:hover {
      color: #fff;
    }
  }
`;
