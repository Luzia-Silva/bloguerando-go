import styled from "styled-components"

export const QuizTable = styled.div`
    margin-top: 3rem;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    align-items: center;
    display: grid;
  h1{
    margin: 0 2rem;
    max-width: 60rem;
    text-align: center;
  }
  p{
    margin: 1rem 2rem;
    text-align: center;
  }
  .cardQuiz {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    background-color: #fff;
    min-height: 200px;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 10px 10px 20px 10px rgb(0 0 0 / 15%);
    justify-content: space-evenly;
    margin: 0.4rem;
    @media screen and (min-width: 768px){
      display: flex;
      margin: 0;


  }
  }

  .score-section {
    font-size: 20px;
    font-weight: 700;
    display: grid;
    justify-content: center;
    align-items: baseline;
    align-content: stretch;
    justify-items: center;
    iframe{
      margin-top: 0.5rem;
      max-height: 12rem;
    }

  }
  .score-opciones{
    font-size: 16px;
    text-align: center;
    margin: 0;
    color: black;
    font-weight: 700;

  }
  .question-section {
    width: 100%;
    position: relative;
    font-weight: 600;
  }

  .question-count {
    margin-bottom: 20px;
       font-weight: 600;
  }

  .question-count span {
    font-size: 28px;
  }

  .question-text {
    margin-bottom: 12px;
    color: #000;
    font-weight: 100;

  }

  .timer-text {
    background: rgb(230, 153, 12);
    padding: 15px;
    margin-top: 20px;
    margin-right: 20px;
    border: 5px solid rgb(255, 189, 67);
    border-radius: 15px;
    text-align: center;
  }

  /* ANSWERS/RIGHT SECTION */
  .answer-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .correct {
    background-color: #2f922f;
  }

  .incorrect {
    background-color: #ff3333;
  }
`;

export const ButtonQuiz = styled.button`
  width: 100%;
  font-size: 16px;
  color: #000;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  padding: 8px;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid #8714a3;
  cursor: pointer;

  :hover {
    background-color: #8714a3;
    color: white;
  }

  :focus {
    outline: none;
  }

  svg {
    margin-right: 5px;
  }
`;
