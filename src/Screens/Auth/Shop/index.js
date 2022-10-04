import React from 'react';
import {NewHeader} from '../../../Components';
import { WebView } from 'react-native-webview';

const Shop = () => {
  return (
    <>
      <NewHeader title={'Shop'} back />
      <WebView
          source={{ uri: 'https://www.theincrease.com/' }}
      />
    </>
  );
};
export default Shop;
