/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Lottie from 'lottie-react-native';
import logoFace from '../../assets/logoFAce.json';


const SplashScreen = ({navigation})=> {

    useEffect(() => {

      setTimeout(() => {
        navigation.navigate('', { screen: 'Login' });  //navigation.navigate('Login');
      }, 3000);

      start();

    }, []);


    return (
    <>
      <View style={styles.container}>
        <Lottie autoSize source={logoFace} style={{ width: 150, height: 150 }}
          autoPlay loop resizeMode='contain' />
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
      backgroundColor:'#CED8F6',
    },
    text:{
      fontSize: 40,
      color:'#084B8A',
      fontFamily:'tahoma',
      fontWeight:'bold',
    },

  });

  export default SplashScreen;
