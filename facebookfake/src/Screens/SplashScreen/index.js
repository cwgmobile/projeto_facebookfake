/* eslint-disable prettier/prettier */
import React, {useEffect, useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Lottie from 'lottie-react-native';
import logoFace from '../../assets/logoFAce.json';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../../contexts/auth';

const SplashScreen = () => {
  const navigation = useNavigation();
  const {signed} = useContext(AuthContext);
  useEffect(() => {
    setTimeout(() => {
      if (signed) {
        navigation.navigate('HomeDrawer');
      } else {
        navigation.navigate('Login');
      }
    }, 4000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Lottie
          autoSize
          source={logoFace}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 150, height: 150}}
          autoPlay
          loop
          resizeMode="contain"
        />
        <View>
          <Text style={styles.text}>Fakebook</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CED8F6',
  },
  text: {
    fontSize: 30,
    color: '#084B8A',
    fontFamily: 'tahoma',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
