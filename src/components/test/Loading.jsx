import React, { useEffect } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/loading.json"; // Adjust the path as necessary
import stylse from "./loading.module.css";
const Loading = ({ mbtiScore, currentTest }) => {
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

    console.log("Result MBTI Type:", resultTpye);
  }, [mbtiScore, currentTest]);

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
