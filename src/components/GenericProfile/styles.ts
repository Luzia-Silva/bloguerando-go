import styled from 'styled-components';
const SmallProfile = styled.div`
    margin-top: 2rem;
    align-items: center;
    .imageProfile img{
      border-radius: 10rem;
      margin-left: 3rem;
      float: left;
      margin-right: 2rem;
      margin-top:2rem;
      width: 300px;
    }
    #informationProfile
    { color: #000;
      background-color: #e81cd896;
    > h1 {
      text-align: center;
      font-weight: 500;
      font-size: 1.5rem;
      padding-top: 1rem;
      font-family: 'Tahoma', Tahoma, Geneva, Verdana, sans-serif;
    }
    > ul{
      font-size: 1.1rem;
      font-weight: 400;
      margin:auto;

    }
    > li{
     list-style-type: none;
    }
    }
    .informationAcademic{
      padding: 1rem;
      background-color:#3a9ae68f;
    }
    .informationObject{
      padding: 1rem;
      background-color: #5484dbfa;
    }
    .informationCourse{
      padding: 1rem;
      background-color: #eeeeee9e;

   > i{
    color: #000;
    font-size: 3.4rem;
    padding: 2.2rem;
    }
    > i:hover{
    transform: translateY(-4px);
    color: #8714a3;
    }
  }
`;

export default SmallProfile;
