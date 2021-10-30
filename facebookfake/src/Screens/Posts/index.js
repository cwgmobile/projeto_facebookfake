/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, Linking, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonFooter from '../../components/ButtonFooter';
import Comments from '../../components/Comments';
import styles from './styles';

const Posts = () => {
  const [liked, setLiked] = useState(false);
  const [likesCounter,setlikesCounter] = useState(1);
  const [openComments, setOpenComments] = useState(false);

const increment = ()=> {
  let counter = likesCounter + 1;
  setlikesCounter(counter);
  setLiked(true);
};
const decrement = ()=> {
  let counter = likesCounter - 1;
  setlikesCounter(counter);
  setLiked(false);
};

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={require('../../assets/img/avatar.jpg')}
          />
          <View>
            <Text style={styles.name}>Charles Godoy</Text>
            <Text style={styles.time}>
            <Icon name="clockcircleo" style={styles.iconTime} /> 10hrs </Text>
          </View>
        </View>
        <Text style={styles.text}>
          Estou empenhado à construir meu primeiro App em React Native ....
          Estamos à Todo o vapor nesse Projeto que será nosso projeto Final do
          nosso Curso de Desenvolvimento Mobile... Agradeço desde já à toda
          Equipe de ELFUTEC.
        </Text>
      </View>
      <Image
        style={styles.postImage}
        source={require('../../assets/img/post.jpg')}
      />

      <View style={styles.container}>
        <Text style={styles.likesCount}>{likesCounter} curtidas</Text>
        <View style={styles.line} />

        <View style={styles.buttonRow}>
          <ButtonFooter text="Curtir" icon={liked ? 'like1' : 'like2'} onPress={() => (liked ? decrement () : increment())} />
          <ButtonFooter text="Comentar" icon="message1" onPress={() => setOpenComments(true)} />
          <ButtonFooter text="Compartilhar" icon="sharealt" onPress={() => Linking.openURL('https://pt-br.facebook.com/')}/>
        </View>
    </View>

    {openComments && <Comments onClose={() => setOpenComments(false)} />}
  </ScrollView>
  );
};
export default Posts;
