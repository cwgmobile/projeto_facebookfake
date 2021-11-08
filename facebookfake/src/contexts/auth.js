/* eslint-disable prettier/prettier */
import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({signed: true}); //inicia o app Logado => true

export const AuthProvider = ({children}) => {
  // children é tudo que tem dentro do AuthProvider
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storagedToken = await AsyncStorage.getItem('token');
      if (storagedToken) {
        setSigned(true);
      }
    }
    loadStorageData();
  }, []);

  const signIn = dadosRetorno => {
    setSigned(true);
    AsyncStorage.setItem('token', dadosRetorno);
  };

  const signOut = async () => {
    await AsyncStorage.clear();
    setSigned(false);
  };

  return (
    <AuthContext.Provider
      value={{
        signed,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
