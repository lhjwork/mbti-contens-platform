import React from "react";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, XIcon } from "react-share";
import { base_url } from "../../App";
import styles from "./shareButtonGroup.module.css";
import CopyToClipboard from "react-copy-to-clipboard";

const ShareButtonGroup = ({ testParam, resultParam, renderTestInfo }) => {
  return (
    <div>
      <h3>친구에게 공휴하기</h3>
      <div className={styles.shareButtonDiv}>
        <FacebookShareButton
          url={`${base_url}/${testParam}/result/${resultParam}`}
          hashtag={`#${renderTestInfo?.info?.mainTitle}`}
        >
          <FacebookIcon round={true} size={48} className={styles.socialMediaIcon} />
        </FacebookShareButton>

        <TwitterShareButton
          title={renderTestInfo?.info.mainTitle}
          url={`${base_url}/${testParam}/result/${resultParam}`}
          hashtags={[renderTestInfo?.info?.mainTitle]}
        >
          <XIcon round={true} size={48} className={styles.socialMediaIcon} />
        </TwitterShareButton>

        <CopyToClipboard
          text={`${base_url}/${testParam}/result/${resultParam}`}
          onCopy={() => alert("URL이 복사되었습니다.")}
        >
          <button className={styles.urlShareButton}>URL</button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default ShareButtonGroup;
