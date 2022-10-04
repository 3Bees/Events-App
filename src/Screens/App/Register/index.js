import React from 'react';
import {NewHeader} from '../../../Components';
import { WebView } from 'react-native-webview';

const Register = (props) => {
  const {link} = props.route.params;
  return (
    <>
      <NewHeader title={'Register'} back />
      <WebView
          source={{ uri: link }}
      />
    </>
  );
};
export default Register;
