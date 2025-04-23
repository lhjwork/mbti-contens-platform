import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/loading.json"; // Adjust the path as necessary
import styles from "./loading.module.css";
import { useNavigate } from "react-router-dom";

const Loading = ({ mbtiScore, currentTest }) => {
  const navigate = useNavigate(); // 오타 수정
  const [finalQuery, setFinalQuery] = useState("");
  const loadingTime = 3700; // 3.7초
  console.log("currentTest", currentTest); // 디버깅용 로그 추가
  useEffect(() => {
    const mbtiPairs = [
      ["E", "I"],
      ["S", "N"],
      ["T", "F"],
      ["J", "P"],
    ];

    let resultType = ""; // 오타 수정: resultTpye -> resultType
    for (let pair of mbtiPairs) {
      const [first, second] = pair;
      resultType += mbtiScore[first] > mbtiScore[second] ? first : second;
    }
    const resultQuery = currentTest?.results?.find((item) => item.type === resultType)?.query;

    setFinalQuery(resultQuery);
  }, [mbtiScore, currentTest]);

  useEffect(() => {
    if (!finalQuery) return; // finalQuery가 설정되지 않으면 실행하지 않음

    const timeout = setTimeout(() => {
      navigate(`/${currentTest?.info?.mainUrl}/result/${finalQuery}`);
    }, loadingTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [finalQuery, loadingTime, navigate]); // 의존성 배열에 finalQuery 추가

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={500} width={500} style={{ marginTop: "20rem" }} />;
};

export default Loading;
