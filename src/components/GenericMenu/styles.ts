import styled from "styled-components";
const SmallMenu = styled.div`
    width: 60%;
    margin-left:auto;
    margin-right: auto;
    @media screen and (max-width: 768px){
       width: 90%;
    }
    .text-menu{
       text-align: center;
       margin-top: 3rem;
    }
    .text-menu > h1{
      color: #000;
      font-size: 3.75rem;
      font-weight: 600;
      margin-top: auto;
      margin-bottom: auto;
    @media screen and (max-width: 768px){
       font-size: 2rem;
    }
    }
    .text-menu > h2{
      color: #c21ac1;
      font-size: 3.5rem;
      font-weight: 500;
      margin-top: auto;
      margin-bottom: auto;
      @media screen and (max-width: 768px){
       font-size: 1.5rem;
    }
    }
     .text-menu > p{
      color: #718096;
      font-size: 1rem;
      margin-top: 2rem;
      text-justify: newspaper;
    }
    .button-menu {
     text-align: center;
     margin-top: 2rem;
     button{
        background-color:  #c21ac1;
        border: none;
        border-radius: 2rem;
        padding: 10px 32px;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
      }

    }
`;
export default SmallMenu;
