import styled from "styled-components";
import * as vars from "../../assets/styles/_variables";
import * as mixins from "../../assets/styles/_mixins";

export const InfoGroupTitle = styled.h2`
  font-weight: ${vars.poppinsSemibold};
  line-height: 43px;
  font-size: 38px;
  margin-bottom: 20px;

  @media (${mixins.breakpoint("desktop-up")}) {
    line-height: 76px;
    font-size: 4.4em;
    margin-bottom: 33px;
  }
`;
export const InfoGroupSubTitle = styled.h3`
  font-weight: ${vars.poppinsSemibold};
  line-height: 1.3em;
  font-size: 1.4em;
  letter-spacing: -0.02em;
  opacity: 0.9;

  @media (${mixins.breakpoint("desktop-up")}) {
    font-size: 2.35em;
  }
`;

export const InfoGroupText = styled.div`
  p {
    font-weight: 300;
    line-height: 22px;
    font-size: 16px;
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 38px;
    }

    @media (${mixins.breakpoint("desktop-up")}) {
      line-height: 32px;
      font-size: 22px;
    }
  }
`;
