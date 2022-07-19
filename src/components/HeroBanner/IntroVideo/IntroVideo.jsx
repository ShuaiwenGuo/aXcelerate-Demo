import React from "react";
import YouTube from 'react-youtube';
import styled from "styled-components";
import { color } from "../../../styles/variables";

const { shadowColor } = color;

const VideoWrapper = styled.div`
    margin: 50px auto;
    width: 960px;
    height: 535px;
    box-shadow: 5px 19px 20px 1px ${shadowColor};
    border-radius: 6px;
`;

const IntroVideo = () => {
    const opts = {
        width: '960',
        height: '535',
        playerVars: {
            autoplay: 1,
            playsinline: 1,
            controls: 1
          },
    };

    const onPlayerReady = (event) => {
        event.target.pauseVideo();
    };

    return (
        <VideoWrapper>
            <YouTube videoId="LY3Wiqde2LQ" opts={opts} onReady={onPlayerReady} />
        </VideoWrapper>
    );
}

export default IntroVideo;