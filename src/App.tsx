import React, { useState } from 'react';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Quizapp from './components/quizapp';
import Logo from './components/Logo';
import Score from './components/score';

function App() {
  const questions = [
    {
      question: "HTML Stands For _________",
      options: [
        "Anchor Text Language",
        "HTML",
        "Case Cading Style Sheet",
        "HyperText markup language",
      ],
      correctAns: "HyperText markup language",
    },
    {
      question: "CSS Stands For _________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "JS Stands For _________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "DOM Stands For _________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "RAM Stands For _________",
      options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
      correctAns: "Random Access Memory",
    },
    {
      question: "ROM Stands For _________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleOptionClick = (e:any) => {
    
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      if (questions[currentQuestionIndex].correctAns === e.target.value) {
        let newScore = score + 1;
        setScore(newScore);
      
    }
  };

  const aginbtn=()=>{
    setCurrentQuestionIndex(0)
    setScore(0)
  }

  return (
    <div className='maindiv'>
      <Container>
        <Row>
          <Col>
            <Logo />
            <div className='d-flex flex-row justify-content-between text-white'>
            {(currentQuestionIndex >= questions.length) ? <Score scor={score} question={questions} aginbtn={aginbtn}></Score>:
            <>
              <h2>Total Questions: {questions.length}</h2>
              <h3>{currentQuestionIndex + 1}</h3>
              <h3>{score}</h3>
            </>
            }
            </div>
            {currentQuestionIndex < questions.length && (
              <Quizapp
                q={questions[currentQuestionIndex].question}
                opt={questions[currentQuestionIndex].options}
                click={handleOptionClick}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;


