import styled from 'styled-components';
export const Div =styled.div`
      height:4rem;
      width:4rem;
      box-shadow: 0px 2px 2px rgba(0,0,0,0.15);
      display:flex;
      justify-content:center;
      border-radius:1.5rem;
      text-align:center;
      align-items:center;
      background-color:${prop => prop.isHeld ? '#59E391':'white'};
      cursor:pointer;
      
`