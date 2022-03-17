import styled from 'styled-components'

const SmallNavbar = styled.div`
     padding: 1rem;
     background-color: #000;
     #Nav-Head  a{
      color: #fff;
      font-size: 1.1rem;

      padding: 1rem;
      }
      #Nav-Head a:hover {
      transform: translateY(-4px);
      color: #e70bd6;
      font-weight: 500;
    }
    #Logo a{
      color: #fff;
      font-size: 1rem;
      float: right;
      margin-top: -1rem;
    }
`;
export default SmallNavbar;
