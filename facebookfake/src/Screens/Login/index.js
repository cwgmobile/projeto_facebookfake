/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import AuthContext from '../../contexts/auth';
import Lottie from 'lottie-react-native';
import logoFace from '../../assets/logoFAce.json';
import { Input } from "react-native-elements";
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
                    <Input
                         value={email}
                         onChangeText={v => setEmail(v)}
                         keyboardType="email-address"

                         />
                </View>
                <View style={styles.input}>
                    <Input
                        value={senha}
                        onChangeText={v => setSenha(v)}
                        secureTextEntry

                    />
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => entrar()}>
                        <Text style = {{color:'#fff'}} >ENTRAR </Text>
                    </TouchableOpacity>
                </View>
            </>
          );
      };

    export default Login;
