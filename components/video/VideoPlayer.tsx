import React, { useRef, useState } from 'react';

import ReactPlayer from 'react-player';
import ButtonIcon from '../button/ButtonIcon';

interface Props {
    video: string;
    size: {
        width: string;
        height: string;
    };
}

const VideoPlayer = ({ video, size }: Props) => {
    const [playing, setPlaying] = useState(false);
    const playerRef = useRef(null);

    const handlePlayPause = () => {
        setPlaying(!playing);
        console.log(playing);
    };
    return (
        <div className="relative z-99 h-full w-full">
            <div className="absolute inset-0 z-99 m-auto bg-dark-1 bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center align-middle">
                <ButtonIcon
                    icon={!playing ? 'mdi:play' : 'mdi:pause'}
                    type="button"
                    iconSize={50}
                    onClick={handlePlayPause}
                    style={{
                        width: '52px',
                        height: '52px',
                    }}
                />
            </div>
            <ReactPlayer
                ref={playerRef}
                playing={playing}
                src={video}
                style={{
                    width: size.width,
                    height: size.height,
                    borderRadius: '8px',
                }}
                className="relative inset-x-0 m-auto"
            />
        </div>
    );
};

export default VideoPlayer;
