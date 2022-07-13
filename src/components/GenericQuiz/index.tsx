import React, { useState } from 'react';
import  {QuizTable, ButtonQuiz} from './styles'
import Contact from "../Contact";
import Image from "next/image";

export default function App() {
	const questions = [
		{
			questionText: 'Qual foi o Framework utilizado?',
			answerOptions: [
				{ answerText: 'Bootstrap', isCorrect: false },
				{ answerText: 'AngularJS', isCorrect: false },
				{ answerText: 'Vue.js', isCorrect: false },
				{ answerText: 'Nextjs', isCorrect: true},
			],
		},
		{
			questionText: 'Qual curso a Lu (Luzia) está fazendo ?',
			answerOptions: [
				{ answerText: 'Filosofia', isCorrect: false },
				{ answerText: 'Ciência de dados', isCorrect: true },
				{ answerText: 'Analise e Desenvolvimento de Sistemas', isCorrect: false },
				{ answerText: 'Segurança da Informação', isCorrect: false },
			],
		},
		{
			questionText: 'Quem é o pai/criador do React ?',
			answerOptions: [
				{ answerText: 'Facebook', isCorrect: true },
				{ answerText: 'Twitter', isCorrect: false },
				{ answerText: 'Google', isCorrect: false },
				{ answerText: 'Linkedin', isCorrect: false },
			],
		},
		{
			questionText: 'Quais são os estágios de vida útil de um componente?',
			answerOptions: [
				{ answerText: 'Renderização, Utilização e Destruição', isCorrect:  false },
				{ answerText: 'Inicialização , Elementos e Reutilização', isCorrect: false },
				{ answerText: 'Renderização, Atualização de estados e Destruição ', isCorrect: false },
				{ answerText: 'Inicialização , Atualizações de estados e Destruição', isCorrect: true },
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
      <h1>Você realmente viu o meu post no linkedin e o meu perfil?👱‍♀✨</h1>
      <p>Selecione as alternativas corretas sobre o meu job e outras cositas! </p>
      <div className='cardQuiz'>
        {showScore ? (
                <>
                  <div className='score-section'>
                      Você acertou {score} de {questions.length} {''}{(score <= 2 )?
                    <Image
                      alt="The girl crying."
                      src={"https://media.giphy.com/media/ckGndVa23sCk9pae4l/giphy.gif"
                        || process.env.NEXT_PUBLIC_GIF_CRYNG}
                      width={320}
                      height={180}
                      layout="fixed"
                    />
                      :
                    <Image
                      alt="The guitarist in the concert."
                      src={"https://media.giphy.com/media/8wz2omZEbVzSU/giphy.gif"
                        || process.env.NEXT_PUBLIC_GIF_CONCERT}
                      width={300}
                      height={180}
                      layout="fixed"
                    />
                    }
                  </div>
                  <div>
                    <p className='score-opciones'> {(score < 2 )?
                      'Temos que nos conhecer melhor 🥰 ' : 'Uauuauuaua, quero conhecer você também 😊'}</p>
                    <p className='score-opciones'>Mande uma mensagem  e partiu se conectar 🚀🤘</p>
                    <Contact/>
                  </div>
                </>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Questões {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
              <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOptions) =>
                  <ButtonQuiz key={'e'} onClick={()=>handleAnswerOptionClick(answerOptions.isCorrect)}>{answerOptions.answerText}</ButtonQuiz>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </QuizTable>
	);
}
