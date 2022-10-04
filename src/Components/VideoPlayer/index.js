import React, { useRef, useState } from 'react';
import {
  View,
} from 'react-native';

import Video from 'react-native-video';


export const Videos = ({ paused, onPress, mainview, subview }) => {
  const videoPlayer = useRef();
  const [fullsize, setFullsize] = useState(true)
  return (
    <View style={{flex:1}}>
      <Video
        // fullscreenAutorotate
        // fullscreenOrientation={'landscape'}
        allowsExternalPlayback={false}
        disableFocus={true}
        playInBackground={false}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        repeat={false}
        resizeMode="cover"
        fullscreen={true}
        controls={true}
        paused={false}
        ref={videoPlayer} 
        // style={fullsize ? [appStyles.FSsubview] : [appStyles.SSsubview]}
      />
    </View>
  );
}