import React, { useEffect, useMemo, useState, useRef } from 'react';
import { View, Text,Image } from 'react-native';
import Video from 'react-native-video';
import { useDispatch, useSelector } from 'react-redux';
import VideoPlayer from 'react-native-video-controls';
import { useRoute } from '@react-navigation/native';
import { getHomeVideo } from '../../../features/pages/pagesSlice';

const Videos = props => {
  const videoPlayer = useRef();
  const { params: { key } } = useRoute();
  const [paused, setPaused] = useState(true);
  const dispatch = useDispatch();
  const video = useSelector(state => state.pages.video);
  const [flag, setFlag] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [isLoadingVideo, setLoadingVideo] = useState(false);
  useEffect(() => {
    if (key) {
      dispatch(getHomeVideo(key));
    }
  }, [key])
  const onLoadStart = () => {
    setLoadingVideo(true)
  }


  const onLoad = () => {
    setLoadingVideo(false)
    setPaused(false)
  }

  const onBuffer = ({ isBuffering }) => {
    setLoadingVideo(isBuffering ? true : false)
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      {paused && (
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.2)',
          position: 'absolute',
          resizeMode: 'cover',
          zIndex: 10,
          height: '100%',
          width: '100%',
        }} >
          <Image
            source={
            require('../../../assets/images/BlurBG.png')
            }
            style={{
              height: '100%',
              width: '100%',
            }}
              />
          </View>
  )
}
{
  video !== '' && <VideoPlayer
    // fullscreenAutorotate
    // fullscreenOrientation={'landscape'}
    allowsExternalPlayback={false}
    disableFocus={true}
    playInBackground={false}
    source={{
      uri: video,
    }}
    navigator={props.navigator}
    repeat={false}
    resizeMode="contain"
    fullscreen={true}
    controls={false}
    paused={flag}
    ref={videoPlayer}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }}
    onBack={() => { setFlag(true); props.navigation.goBack() }}
    onError={(err) => console.log('Error==>', err)}              // Callback when video cannot be loaded
    onBuffer={onBuffer}
    onLoadStart={onLoadStart}
    onLoad={onLoad}
  />
}
    </View >
  );
};

export default Videos;
