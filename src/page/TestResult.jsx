import React, { useEffect } from "react";
import TestResultRenderer from "../components/testResult/TestResultRenderer";
import ShareButtonGroup from "../components/testResult/ShareButtonGroup";
import ResultButtonGroup from "../components/testResult/ResultButtonGroup";
import ResultThumbnailList from "../components/testResult/ResultThumbnailList";
import { useNavigate, useParams } from "react-router-dom";
import { TESTS } from "../data/TESTS";

const TestResult = () => {
  const navigate = useNavigate();
  const { testParam, resultParam } = useParams();
  useEffect(() => {
    const testInfo = TESTS.find((test) => test.info.mainUrl === testParam);
    if (!testInfo) {
      alert("존재하지 않는 테스트입니다.");
      navigate("/");

      return;
    }

    console.log(testInfo);
  }, [testParam, resultParam]);

  return (
    <div>
      <TestResultRenderer />
      <ShareButtonGroup />
      <ResultButtonGroup />
      <ResultThumbnailList />
    </div>
  );
};

// 1. Intro -> Quiz -> Loading -> Result
// 2. Direct Access

export default TestResult;
