import styled from "styled-components";

export const PagesNav = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-top: 10px;
  a {
    color: #bcfd4c;
    margin-bottom: 40px;
    text-decoration: none;
    transition: color 0.1s linear;
    &:first-child {
      margin-right: 10px;
    }
    &:last-child {
      margin-left: 10px;
    }
    &:hover {
      color: white;
    }
  }
`;
