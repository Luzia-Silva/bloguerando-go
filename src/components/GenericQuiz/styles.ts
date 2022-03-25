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
    margin:2rem;
  }
  .cardQuiz {
    background-color: #fff;
    width:50rem;
    min-height: 200px;
    height: min-content;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: space-evenly;
  }

  .score-section {
    display: flex;
    font-size: 24px;
    align-items: center;
  }

  /* QUESTION/TIMER/LEFT SECTION */
  .question-section {
    width: 100%;
    position: relative;
  }

  .question-count {
    margin-bottom: 20px;
  }

  .question-count span {
    font-size: 28px;
  }

  .question-text {
    margin-bottom: 12px;
    color: #000;
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
