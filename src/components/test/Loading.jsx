import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/loading.json"; // Adjust the path as necessary
import stylse from "./loading.module.css";
import { useNavigate } from "react-router-dom";
const Loading = ({ mbtiScore, currentTest }) => {
  const natigate = useNavigate();
  const [finalQuery, setFinalQuery] = useState("");
  const loadingTime = 3700;
  // loadingTime -> 3.7초
  useEffect(() => {
    const mbtiPairs = [
      ["E", "I"],
      ["S", "N"],
      ["T", "F"],
      ["J", "P"],
    ];

    let resultTpye = "";
    for (let pair of mbtiPairs) {
      const [first, second] = pair;
      resultTpye += mbtiScore[first] > mbtiScore[second] ? first : second;
    }
    const resultQuery = currentTest?.result?.find((item) => item.type === resultTpye)?.query;
    setFinalQuery(resultQuery);
  }, [mbtiScore, currentTest, currentTest?.info?.mainUrl, finalQuery]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      //resultQuery 활용해서 결과 페이지로 라우팅하기]
      finalQuery && natigate(`/${currentTest?.info?.mainUrl}/result/${finalQuery}`);
    }, loadingTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [loadingTime, natigate]);

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

// Loading Animation
// mbtiScore Calcul -> Result MBTI Type ex. ENFP
// N초 -> Result Page Routing
// base_url/psersonalColor/result/:resultParam
