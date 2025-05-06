import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Test from "./page/Test";
import TestResult from "./page/TestResult";

export const base_url = "hj-s.site";
//
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:testParam" element={<Test />} />
        <Route path="/:testParam/result/:resultParam" element={<TestResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// 주소 체계
// 1. 메인 썸네일 리스트 페이지 : root/
// 2. 테스트 페이지 - Intro / Quiz / loadinng : root/:testName
// 3. 결과 페이지 - root/:testName/result/:resultName
