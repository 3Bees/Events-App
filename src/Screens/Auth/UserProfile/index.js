import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,Keyboard
} from 'react-native';
import { styles } from './style';
import { colors, appImages } from '../../../Services';
import { NewHeader, SimpleInput, Button } from '../../../Components';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import PhoneInput, { PhoneNumber } from 'react-native-phone-input';
import Toast from 'react-native-simple-toast';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../../features/auth/authSlice';
const UserProfile = props => {
  const [ModalVisble, setModalVisble] = useState(false);
  const [NewImage, setNewImage] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [twitterUsername, setTwitterUsername] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const dispatch = useDispatch();
  const shouldVerifyAccount = useSelector((state) => state.auth.shouldVerifyAccount);
  const error = useSelector((state) => state.auth.error);
  useEffect(() => {
    if (shouldVerifyAccount) {
      props.navigation.navigate('PendingVerification');
    }
  }, [shouldVerifyAccount]);


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const onSetupProfile = () => {
    if (firstname === '') {
      Toast.show('First name field cannot be empty');
    }
    else if (lastname === '') {
      Toast.show('Last name field cannot be empty');
    }
    else if (twitterUsername === '' && phonenumber === '') {
      Toast.show('Twitter username or Phone number field cannot be empty');
    } else {
      const profile = {
        "user": {
          "first_name": firstname,
          "last_name": lastname,
          "mobile": phonenumber,
          "twitter_handle": twitterUsername
        }
      };
      dispatch(updateUserProfile(profile))

      // fetch("https://api.proathletesoutreach.org/users", requestOptions)
      //   .then(response => response.text())
      //   .then(result => {
      //     let res = JSON.parse(result)
      //     console.log('>>>>AAAA', res.email_verified)
      //     if (res.email_verified === false) {
      //       props.navigation.navigate('Verification', { myEmail: email, email_verified: res.email_verified, account_verified: res.account_verified })
      //     }
      //     else if (res.account_verified === false) {
      //       props.navigation.navigate('PendingVerification', { myEmail: email, email_verified: res.email_verified, account_verified: res.account_verified })
      //     }
      //   })
      //   .catch(error => console.log('error', error));
    }
  }

  const Camera = () => {
    var options = {
      title: 'Profile Picture',

      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'image',
    };

    launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        setNewImage(response.assets[0].uri);
      }
    });
  };
  const Gallery = () => {
    var options = {
      title: 'Profile Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        //setFilePath(response);
        console.log('>>>>>>>>>>>>', response.uri);
        setNewImage(response.assets[0].uri);
      }
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <NewHeader title={'Set up your profile'} back />
      <KeyboardAwareScrollView
        // extraHeight={250}
        enableOnAndroid
        extraScrollHeight={150}
        keyboardShouldPersistTaps="handled">
        {/* <TouchableOpacity
          style={styles.ImageButton}
          onPress={() => setModalVisble(true)}>
          {NewImage === '' ? (
            <Image source={appImages.placeholder} style={styles.DisplayImage} />
          ) : (
            <Image source={{uri: NewImage}} style={styles.selectedImage} />
          )}
        </TouchableOpacity> */}
        <View style={styles.InputView}>
          <SimpleInput
            label={'First Name'}
            value={firstname}
            onChangeText={val => setFirstname(val)}
            MyStyles={{ width: responsiveWidth(42.5), alignSelf: 'flex-start' }}
            customstyle
            capitalize={true}
          />
          <SimpleInput
            label={'Last Name'}
            value={lastname}
            onChangeText={val => setLastname(val)}
            MyStyles={{ width: responsiveWidth(42.5), alignSelf: 'flex-start' }}
            customstyle
            capitalize={true}
          />
        </View>
        <View style={{ height: responsiveHeight(5) }} />
        <SimpleInput
          label={'Twitter username/handle'}
          placeholder={'@yourusername'}
          value={twitterUsername}
          onChangeText={val => setTwitterUsername(val)}
          capitalize={false}
        />
        <View style={{ height: responsiveHeight(5) }} />
        <View style={styles.phonoInput}>
          <Text style={[styles.label]}>{'PhoneNumber'}</Text>
          <View
            style={[
              styles.phoneView,
              {
                borderColor: colors.border,
              },
            ]}>
            <PhoneInput
              onChangePhoneNumber={phonenumber => setPhonenumber(phonenumber)}
              initialValue={phonenumber}
              initialCountry="us"
              // textProps={{placeholder: ''}}
              flagStyle={styles.flag}
              style={{ width: responsiveWidth(90) }}
            />
          </View>
        </View>
        <Text style={styles.phoneMessage}>
          This information will be used for account verification.
        </Text>
        {isKeyboardVisible ?
          <View style={styles.bottomView2}>
            <View style={[styles.line, { marginBottom: responsiveHeight(2) }]} />
            <Button
              title={'Sign Up'}
              onPress={() => onSetupProfile()}
            />
          </View>
          : null}
      </KeyboardAwareScrollView>
      {isKeyboardVisible ? null :
        <View style={styles.bottomView}>
          <View style={[styles.line, { marginBottom: responsiveHeight(2) }]} />
          <Button
            title={'Sign Up'}
            onPress={() => onSetupProfile()}
          />
        </View>
      }
      <Modal animationType="fade" transparent={true} visible={ModalVisble}>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={() => setModalVisble(false)}>
          <View
            style={{
              backgroundColor: colors.white,
              borderRadius: responsiveWidth(1.5),
            }}>
            <TouchableOpacity
              onPress={() => {
                Camera(), setModalVisble(false);
              }}
              style={styles.ModalTouchable}>
              <Icon
                type={'feather'}
                name="camera"
                color="black"
                size={responsiveFontSize(5)}
              />
              <Text style={styles.ModalText}>Take a Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Gallery(), setModalVisble(false);
              }}
              style={styles.ModalTouchable}>
              <Icon
                type={'feather'}
                name="image"
                color="black"
                size={responsiveFontSize(5)}
              />
              <Text style={styles.ModalText}> Choose from Gallery</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default UserProfile;
