import styled from "styled-components";

const SmallAbout = styled.div`
      margin-top: 5rem;
      .imageAbout {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        img{
        height: 22em;
        width: auto;
        margin:0.1rem;
        }
    }
      .text-About{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        h1{
            color: #000;
            font-size: 2rem;
            font-weight: 600;
            margin-top: auto;
            margin-bottom: auto;
        }
        p{
          width: 85%;
          text-align: justify;
          line-height: 1.7rem;
        }
        hr{
          padding: 1rem;
          color:black;
        }
      }

`;
export default SmallAbout;
