import React, { useEffect, useState } from "react";
import styles from "./quiz.module.css";
import { Progress } from "antd";
import { arrayShuffler } from "../../tools/tools";

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
      <h3 className={styles.questionText}>{questions[questionNum]?.question}</h3>

      {questions[questionNum]?.answers &&
        arrayShuffler(questions[questionNum]?.answers)?.map((option) => (
          <button key={option.content} className={styles.optionButton} onClick={() => onOptionClick(option?.type)}>
            {option?.content}
          </button>
        ))}

      <Progress percent={(questionNum / questions.length) * 100} showInfo={false} />
      <h4>
        {questionNum} / {questions.length}
      </h4>
    </div>
  );
};

export default Quiz;
//
// 16 Result
// 12(4*3) Questions - Options selection
// E:0 / I:0 ...... / J:0 /P:0
// MBTI Calcul ex. ENFP

// CSS
// Progress bar
// Shuffing answer options
