/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import axios from 'axios';
import React, {useContext, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Dimensions,
  Pressable,
  Alert,
  SafeAreaView,
} from 'react-native';
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
    <SafeAreaView>
      <View style={styles.container}>
        <Lottie
          autoSize
          source={logoFace}
          style={{width: size, height: size}}
          autoPlay
          loop
          resizeMode="contain"
        />
      </View>

      <View>
        <Text style={styles.text}>Email</Text>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={v => setEmail(v)}
            keyboardType="email-address"
          />
        </View>
        <Text style={styles.text}>Senha</Text>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput}
            value={senha}
            onChangeText={v => setSenha(v)}
            secureTextEntry
          />
        </View>
        <View style={styles.button}>
          <Pressable onPress={() => entrar()}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}> ENTRAR </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
