import React, {
  useCallback,
  useState,
  useRef,
  useEffect,
} from 'react';

import Youtube from '@u-wave/react-youtube';

export default function Player({ music }) {
  const { videoId, title, url } = music;

  const [state, setState] = useState({
    player: null,
    paused: false,
    start: true,
    endTime: 0,
    currentTime: 0,
  });

  const timeTrash = useRef(null);
  const {
    player, paused, start, endTime, currentTime,
  } = state;

  useEffect(() => {
    setState({
      player,
      paused: false,
      start: true,
      endTime: 0,
      currentTime: 0,
    });
  }, [music.videoId, player]);

  const handleClick = useCallback(() => {
    setState({
      ...state,
      paused: !paused,
    });
  }, [state]);

  const handleChange = useCallback((e) => {
    setState({
      ...state,
      currentTime: e.target.value,
    });

    player.seekTo(Number(e.target.value));
  }, [setState, state]);

  const handleEndPlay = useCallback((e) => {
    setState({
      ...state,
      endTime: e.target.getDuration(),
    });

    clearInterval(timeTrash.current);
  }, [timeTrash, state]);

  const handleStateChange = useCallback((e) => {
    console.log(s)
    if (start) {
      player.seekTo(0);
      setState({
        ...state,
        player: e.target,
        start: false,
        currentTime: 0,
      });
    }
  }, [state]);

  const handlePlaying = useCallback((e) => {
    clearInterval(timeTrash.current);
    setState((preveState) => ({
      ...preveState,
      endTime: player.getDuration(),
    }));
    timeTrash.current = setInterval(() => {
      setState((preveState) => ({
        ...preveState,
        currentTime: player.getCurrentTime(),
        endTime: player.getDuration(),
      }));
    }, 1000, start);

    return timeTrash;
  }, [timeTrash, start]);

  return (
    <>
      <h3>
        지금 듣는 곡은
          {title}
      </h3>
      <img src={url} alt="thumbnail" />
      <Youtube
        autoplay
        ref={player}
        onStateChange={handleStateChange}
        onPlaying={handlePlaying}
        onEnd={handleEndPlay}
        startSeconds={Number(currentTime)}
        video={videoId}
        paused={paused}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        {paused ? 'PLAY' : 'STOP'}
      </button>
      <div>{Number(currentTime)}</div>
      <div>{Number(endTime)}</div>
      <input
        type="range"
        min="0"
        max={endTime}
        value={currentTime}
        onChange={handleChange}
      />
    </>
  );
};

