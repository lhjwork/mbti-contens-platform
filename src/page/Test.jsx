import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import IntroRenderer from "../components/test/IntroRenderer";
import { TESTS } from "../data/TESTS";

const Test = () => {
  const { testParam } = useParams();
  const navigate = useNavigate();
  const [currentTest, setCurrentTest] = useState(null);

  useEffect(() => {
    // 1. testParam이 우리 DB에 존재하는가 필터링
    const theTest = TESTS?.find((test) => test?.info?.mainUrl === testParam);

    if (!theTest) {
      // 1-1. 존재하지 않으면 홈으로 리다이렉트
      alert("존재하지 않는 테스트입니다.");
      return navigate("/");
    } else {
      // 1-2. 존재하면 해당 테스트의 콘텐츠를 상태에 저장
      setCurrentTest(theTest);
    }
  }, [testParam, navigate]);

  if (!currentTest) {
    // 로딩 상태 또는 리다이렉트 중
    return <div>Loading...</div>;
  }

  return (
    <div>
      <IntroRenderer currentTest={currentTest} />
    </div>
  );
};

export default Test;
