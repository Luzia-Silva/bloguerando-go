import styled from "styled-components"


const QuizTable = styled.div`
    margin-top: 3rem;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    align-items: center;
    display: grid;
  h1{
    margin: 0 2rem;
  }
  p{
    margin: 1rem 2rem;
  }
  .cardQuiz {
    background-color: #fff;
    min-height: 200px;
    height: min-content;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 10px 10px 20px 10px rgb(0 0 0 / 15%);
    justify-content: space-evenly;
  }
  .score-section {
    font-size: 24px;
    text-align: center;
    margin-top: 4rem;
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

  button {
    width: 100%;
    font-size: 16px;
    color: #000;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    padding: 5px;
    justify-content: flex-start;
    align-items: center;
    border: 5px solid #8714a3;
    cursor: pointer;
  }

  .correct {
    background-color: #2f922f;
  }

  .incorrect {
    background-color: #ff3333;
  }

  button:hover {
    background-color: #8714a3;
    color: white;
  }

  button:focus {
    outline: none;
  }

  button svg {
    margin-right: 5px;
  }
`;
export default QuizTable
