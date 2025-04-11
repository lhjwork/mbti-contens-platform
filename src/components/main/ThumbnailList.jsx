import React, { useState } from "react";
import { TESTS } from "../../data/TESTS";
import { Link } from "react-router-dom";
import { base_url } from "../../App";

const ThumbnailList = () => {
  const [testList, setTestList] = useState(TESTS);

  return (
    <div>
      {testList?.map((test) => {
        return (
          <Link to={`${base_url}/${test?.info?.mainUrl}`} key={test?.info?.mainUrl}>
            <img src={test?.info?.thumbImage} alt={test?.info?.mainUrl} />
          </Link>
        );
      })}
    </div>
  );
};

export default ThumbnailList;
