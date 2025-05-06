import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { LinkOutlined, RedoOutlined, HomeOutlined } from "@ant-design/icons";
import { base_url } from "../../App";
import { useNavigate } from "react-router-dom";
import styles from "./resultButtonGroup.module.css";

const ResultButtonGroup = ({ testParam, resultParam, renderTestInfo }) => {
  const navigate = useNavigate();

  const onClckRedoButton = () => {
    navigate(`/${testParam}`);
  };

  const onClickGoHomeButton = () => {
    navigate("/");
  };

  return (
    <div className={stlyes.mainDiv}>
      <div className={stlyes.upperDiv}>
        <CopyToClipboard
          text={`${base_url}/${testParam}/result/${resultParam}`}
          onCopy={() => alert("URL이 복사되었습니다.")}
        >
          <button>
            <LinkOutlined />
            &nbsp; 링크 복사
          </button>
        </CopyToClipboard>

        <button onClick={onClckRedoButton}>
          <RedoOutlined />
          &nbsp; 다시 하기
        </button>
      </div>
      <div className={stlyes.bottomDiv}>
        {" "}
        <button className={stlyes.bottomButtom} onClick={onClickGoHomeButton}>
          <HomeOutlined />
          &nbsp; 다른 테스트 하러 가기
        </button>
      </div>
    </div>
  );
};

export default ResultButtonGroup;
