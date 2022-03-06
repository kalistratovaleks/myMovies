import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 100%;
  a {
    font-size: 20px;
    color: #bcfd4c;
    text-decoration: none;
  }
  img {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const SubInfo = styled.div`
  margin-left: 20px;
  width: 60%;
  div {
    margin-bottom: 25px;
  }
  i {
    font-size: 20px;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 15px 0 0;
    text-align: center;
  }
`;
