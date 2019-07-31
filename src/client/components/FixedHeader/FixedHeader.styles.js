import styled from 'styled-components';
import * as mixins from '../../assests/styles/_mixins';

export const FixedHeader = styled.header`
  position: fixed;
  top: 2%;
  right: 3%;
  z-index: 2;

  @media(${mixins.breakpoint('tablet-portrait-up')}) {
    top: 5%;
    right: 10%;
  }
}`;

export const FixedHeaderButtonWrapper = styled.div`
  display: none;
  visibility: hidden;
  opacity: 0;
  z-index: 4;

  &.fixed-header__button-wrapper--show{
    display: block;
    visibility: visible;
    opacity: 1;
  }

  button {
    cursor: pointer;
    position: relative;
    top: 0px;
    box-shadow: 0px 10px 20px rgba(0,0,0,0.2);
    transition: box-shadow 0.3s, top 0.3s;

    &:hover{
      box-shadow: 0px 5px 10px rgba(0,0,0,0.5);
      top: 5px;
    }

    @media(${mixins.breakpoint('desktop-up')}) {
      font-size: 1.1em;
      padding: 16px 25px;
      border-radius: 100px;
      
    }
  }
}`;
