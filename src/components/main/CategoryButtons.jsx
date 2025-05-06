import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./categoryButtons.module.css";

function CategoryButtons() {
  const [searchParams] = useSearchParams();
  const [language, setLanguage] = useState("Kor");
  const navigate = useNavigate();
  const foreignTextsObject = {
    Kor: {
      all: "전체",
      love: "연애",
      characteristic: "성격",
    },
    Eng: {
      all: "All",
      love: "Love",
      characteristic: "Personality",
    },
    JP: {
      all: "All",
      love: "Love",
      characteristic: "Personality",
    },
  };

  useEffect(() => {
    const currentLang = searchParams.get("lang") || "Kor";
    setLanguage(currentLang);
  }, [searchParams]);

  const onCategoryButtonClick = (category) => {
    // mbti.com -> mbti.com/?lang=Kor&cat=love
    if (category === "all") {
      navigate(`/?lang=${language}`);
    } else if (category === "love" || category === "characteristic") {
      navigate(`/?lang=${language}&cat=${category}`);
    } else {
      alert("잘못된 카테고리입니다.");
      navigate(`/?lang=${language}`);
    }
  };

  return (
    <div>
      {/* mbti.com | mbti.com/?lang=Eng */}
      <button className={styles.categoryButton} onClick={() => onCategoryButtonClick("all")}>
        {foreignTextsObject[language].all}
      </button>
      {/* mbti.com | mbti.com/?lang=Eng -> &cat=love */}
      <button className={styles.categoryButton} onClick={() => onCategoryButtonClick("love")}>
        {foreignTextsObject[language].love}
      </button>
      {/* mbti.com | mbti.com/?lang=Eng -> &cat=characteristic */}
      <button className={styles.categoryButton} onClick={() => onCategoryButtonClick("characteristic")}>
        {foreignTextsObject[language].characteristic}
      </button>
    </div>
  );
}

export default CategoryButtons;

// mbti.com/?lang=Kor&cat=love
// lang=Kor | cat=love|char|all
// cat=love | lang=Kor|Eng|JP
