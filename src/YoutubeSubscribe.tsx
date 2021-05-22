import React from "react";
import useScript from "./useScript";

interface IProps {
  channelId: string;
}

const YoutubeSubscribe: React.FC<IProps> = ({ channelId }) => {
  useScript("https://apis.google.com/js/platform.js");

  return (
    <div
      className="g-ytsubscribe"
      data-channelid={channelId}
      data-layout="full"
      data-count="default"
    />
  );
};

export default YoutubeSubscribe;
