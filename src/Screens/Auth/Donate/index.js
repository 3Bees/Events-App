import React, {useEffect, useState, useRef} from 'react';
import {NewHeader} from '../../../Components';
import { WebView } from 'react-native-webview';

const Donate = () => {
  return (
    <>
      <NewHeader title={'Make a Donation'} back />
      <WebView
          source={{ uri: 'https://www.tfaforms.com/4656069' }}
      />
    </>
  );
};
export default Donate;
