/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React,{useContext, useState} from 'react';
import {Text, TextInput, View, SafeAreaView, Dimensions, Pressable, Alert } from 'react-native';
import axios from 'axios';
import AuthContext from '../../contexts/auth';
import Lottie from 'lottie-react-native';
import logoFace from '../../assets/logoFAce.json';
import styles from './styles';

const size = Dimensions.get('window').width * 0.4;


const Login = () => {

const [email, setEmail] = useState('eve.holt@reqres.in');
const [senha, setSenha] = useState('cityslicka');
const {signIn} = useContext(AuthContext);


const entrar = () => {
    axios
      .post('https://reqres.in/api/login', {
        email: email,
        password: senha,
      })
      .then(res => {
        signIn(res.data.token);
      })
      .catch(() => {
        Alert.alert('Email ou Senha incorretos');
      });
  };

return (
      <>
        <SafeAreaView style={styles.container}>
                <Lottie autoSize source={logoFace} style={{width: size, height: size}}
                    autoPlay loop resizeMode = 'contain' />
        </SafeAreaView>
                <View style={styles.input}>
                    <TextInput
                         value={email}
                         onChangeText={v => setEmail(v)}
                         keyboardType="email-address"
                         />
                </View>
                <View style={styles.input}>
                    <TextInput
                        value={senha}
                        onChangeText={v => setSenha(v)}
                        secureTextEntry

                    />
                </View>
                <View style={styles.button}>
                    <Pressable onPress={() => entrar()}>
                        <Text style = {{color:'#fff', fontWeight:'bold'}} >ENTRAR </Text>
                  </Pressable>
            </View>
          </>
          );
      };

    export default Login;
