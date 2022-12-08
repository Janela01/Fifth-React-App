import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
export const GlobalStyle =createGlobalStyle`
      body {
            margin: 0;
            padding: 0;
            background: #0B2434;
            font-family: Open-Sans, Helvetica, Sans-Serif;
      }
`
export const Div=styled.div`
      background-color:#F5F5F5;
      height:calc(100vh - 12rem);
      width:calc(94vw - 2rem); 
      margin:3rem 3vw;
      border-radius:1rem;
      display:flex;
      flex-direction: column;
      padding:1rem 1rem 3rem 1rem;
      align-items:center;
      justify-content:space-evenly;
`
export const Wrapper=styled.div`
      display:grid;
      grid-template:auto auto / repeat(4,1fr);
      gap:2rem;
`