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
      font-size: 3.75rem;
      font-weight:600;
    }
    .text-menu > h2{
      color: #c21ac1;
      font-size: 3.5rem;
      font-weight: 500;
      margin-top: auto;
      margin-bottom: auto;
    }
     .text-menu > p{
      text-align: center;
    }
    .button-menu {
     text-align: center;
     button{
        background-color:  #000;
        border: none;
        border-radius: 2rem;
        padding: 15px 28px;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
      }

    }
`;
export default SmallMenu;
