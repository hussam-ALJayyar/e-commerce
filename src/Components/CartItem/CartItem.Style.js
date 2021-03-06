import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../App.Styles";

export const RowContainer = styled(FlexRow)`
  justify-content: flex-end;
`;

export const CardBox = styled(FlexRow)`
  padding-right: 25px;
  background: #fff;
  border-radius: 16px;
  height: 202px;

  opacity: 1;
  margin-bottom: 30px;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`;

export const CardImage = styled.img`
  width: 25%;
  min-width: 200px;
  object-fit: cover;
  height: 100%;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 203px;
  }
`;

export const ContentBox = styled(FlexColumn)`
  width: 70%;
  height: 100%;
  justify-content: start;
  align-items: start;
  @media screen and (max-width: 600px) {
    height: auto;
  }
`;

export const RIcon = styled("span")`
  width: 48px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    border: 1px solid #fcdd06;
  }
`;


export const Contanier = styled(FlexRow)`
  justify-content: space-between;
  height: auto;
  margin: 25px 0;

`;