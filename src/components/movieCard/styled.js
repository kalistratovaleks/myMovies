import styled from "styled-components";

export const MainCard = styled.div`
  width: 350px;
  height: 450px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 20px;
  color: #000;
  > img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
  a {
    width: fit-content;
  }
  h3 {
    margin: 0;
  }
  p {
    margin: 15px 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const IconBlock = styled.div`
  position: absolute;
  right: 25px;
  top: 30px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  width: 24px;
  height: 24px;
  > svg {
    width: 24px;
    height: 24px;
    polygon {
      fill: ${({ active }) => (active ? "gold" : "")};
    }
  }
`;

export const EmptyCard = styled.div`
  width: 350px;
`;
