import styled from 'styled-components'

const SmallFooter = styled.footer`
    background-color: #000;
    width: 100vw;
    bottom:0;
    position: fixed;
    .SmallPages{
      padding: 1.5em;
       li{
        font-size: 1rem;
        display: block;
        margin: 0;
     @media screen and (max-width: 768px){
        font-size: 1rem;
        text-align: center;
        padding-left:0;
    }
     }
    a{
        color: #fff;
    }
    a:hover{
        transform: translateY(-4px);
        color: #e70bd6;
        font-weight: 768;
    }
    }

  .SmallFooterCopyright{
    background-color: #e3dce3;
    width: 100vw;
    bottom: 0;
    padding: 0.8rem;
    p{
        text-align: center;
        color: #000;
        font-size: 1rem;
        font-weight: 600;
    }
  }
  .SmallIcons {
    float: right;
    margin-top:-5rem;
    a.social {
    margin: 0 0.5rem;
    transition: transform 250ms;
    display: inline-block;
    }
    @media screen and (max-width: 768px){
       margin:1rem;
       text-align: center;
       float: none;
    }
    a.social:hover {
    transform: translateY(-4px);
    color: #e70bd6;
    }
    a{
    color: #ffff;
    }
  }

`;


export default SmallFooter;
