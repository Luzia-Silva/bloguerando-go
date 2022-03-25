import React, { useState } from 'react';
import QuizTable from './styles'
export default function App() {
	const questions = [
		{
			questionText: 'Quem Foi a Primeira Programador(a) do Mundo?',
			answerOptions: [
				{ answerText: 'Pitágoras', isCorrect: false },
				{ answerText: 'Grace Hopper', isCorrect: false },
				{ answerText: 'Ada Lovelace', isCorrect: true },
				{ answerText: 'Alan Turing', isCorrect: false },
			],
		},
		{
			questionText: 'Em GameOfThrones Jon Snow é o que de Daenerys Targaryen?',
			answerOptions: [
				{ answerText: 'Filho', isCorrect: false },
				{ answerText: 'Sobrinho', isCorrect: true },
				{ answerText: 'Amigo', isCorrect: false },
				{ answerText: 'Peguete', isCorrect: false },
			],
		},
		{
			questionText: 'Como é o nome do caracol de Bob Esponja ?',
			answerOptions: [
				{ answerText: 'Gary', isCorrect: true },
				{ answerText: 'Luck', isCorrect: false },
				{ answerText: 'Juca', isCorrect: false },
				{ answerText: 'Toninho', isCorrect: false },
			],
		},
		{
			questionText: 'Quem é o dono da Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect:  false },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Lary Page', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
			],
		},
	];

  const [showScore, setShowScore] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
      if(isCorrect === true) {
        setScore(score + 1);
      }
      const nextQuestion = currentQuestion + 1;
      if(nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      }else{
        setShowScore(true);
      }
  }

	return (
    <QuizTable>
      <h1>Tire 3min para responder o Quiz da Lu✨👱‍♀️</h1>
      <div className='cardQuiz'>
        {showScore ? (
           <div className='score-section'>Você acertou {score} de {questions.length} 🤘✨😁</div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Questões {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOptions) =>
                <button onClick={()=>handleAnswerOptionClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
              )}
            </div>
          </>
        )}
      </div>
    </QuizTable>
	);
}
