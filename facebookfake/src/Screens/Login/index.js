/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import Lottie from 'lottie-react-native';
import logoFace from '../../assets/logoFAce.json';
import { Input } from "react-native-elements";
import styles from './styles';

const size = Dimensions.get('window').width * 0.4;


const Login = () => {

return (
        <>
        <SafeAreaView style={styles.container}>
                <Lottie autoSize source={logoFace} style={{width: size, height: size}}
                    autoPlay loop resizeMode = 'contain' />
            </SafeAreaView>
                <View style={styles.input}>
                    <Input
                        label="Digite seu E-mail:"
                        placeholder="Seu E-mail"/>
                </View>
                <View style={styles.input}>
                    <Input
                        label="Digite sua Senha:"
                        placeholder="Sua Senha"/>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style = {{color:'#fff'}} >ENTRAR </Text>
                    </TouchableOpacity>
                </View>
            </>
          );
      };

    export default Login;
