import React, { useEffect, useState } from "react";

const Quiz = ({ questions, mbtiScore, setMbitiScore, setMode }) => {
  const [questionNum, setQuestionNum] = useState(0);

  const onOptionClick = (type) => {
    mbtiScore[type] += 1;
    setMbitiScore({ ...mbtiScore });
    setQuestionNum((prev) => prev + 1);
  };

  useEffect(() => {
    if (questionNum === questions.length) {
      setMode("loading");
    }
  }, [questionNum, questions.length, setMode]);

  return (
    <div>
      <h3>{questions[questionNum]?.question}</h3>
      <button onClick={() => onOptionClick(questions[questionNum]?.answers[0]?.type)}>
        {questions[questionNum]?.answers[0]?.content}
      </button>
      <button onClick={() => onOptionClick(questions[questionNum]?.answers[1]?.type)}>
        {questions[questionNum]?.answers[1]?.content}
      </button>
      <div>프로그레스 바</div>
    </div>
  );
};

export default Quiz;

// 16 Result
// 12(4*3) Questions - Options selection
// E:0 / I:0 ...... / J:0 /P:0
// MBTI Calcul ex. ENFP

// CSS
// Progress bar
// Shuffing answer options
