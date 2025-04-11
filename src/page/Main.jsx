import React from "react";
import LanguageIcons from "../components/main/LanguageIcons";
import MainBanner from "../components/main/MainBanner";
import CategoryButtons from "../components/main/CategoryButtons";
import ThumbnailList from "../components/main/ThumbnailList";

const Main = () => {
  return (
    <div>
      <LanguageIcons />
      <MainBanner />
      <CategoryButtons />
      <ThumbnailList />
    </div>
  );
};

export default Main;
