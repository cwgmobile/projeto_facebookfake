/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useContext, useRef, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';
import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';


const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Home = () => {
  const {signOut} = useContext(AuthContext);
  const carouselRef = useRef(null);
  const [lista, setLista] = useState([
    {
      title: 'Node',
      text: 'O Node. js pode ser definido como um ambiente de execução Javascript server-side. Isso significa que com o Node. js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados.',
      release: 2021,
      img: 'https://facebrick.cwgapp.com/wp-content/uploads/2021/11/node.jpg',
    },
    {
      title: 'JavaScript ',
      text: 'JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática ',
      release: 2021,
      img: 'https://facebrick.cwgapp.com/wp-content/uploads/2021/11/javascripit.jpg',
    },
    {
      title: 'React-Native',
      text: 'Enquanto Reactjs é basicamente uma biblioteca JavaScript e React Native é a estrutura inteira , o primeiro é o coração do último e complementa um ao outro. Se Reactjs é ideal para criar aplicativos com alta funcionalidade e cálculos complexos, então React Native é ideal para dar uma sensação nativa aos seus aplicativos móveis.',
      release: 2021,
      img: 'https://facebrick.cwgapp.com/wp-content/uploads/2021/11/react-native.jpg',
    },
    {
      title: 'Android Studio',
      text: 'Android Studio é uma plataforma para desenvolvimento de apps mobile para o sistema operacional mais popular do planeta. Ou seja, é a ferramenta responsável por criar aplicativos para Android – hoje presente em 74,13% dos dispositivos móveis, segundo o Statista. Essa é uma definição básica da ferramenta.',
      release: 2021,
      img: 'https://facebrick.cwgapp.com/wp-content/uploads/2021/11/android.jpg',
    },
    {
      title: 'TypeScript',
      text: 'Podemos considerar o Typescript como um potencializador da linguagem Javascript. Ele permite que grandes sistemas complexos sejam construídos com essa linguagem sem nenhum empecilho e sem que ela deixe a desejar diante de outras linguagens de back-end, como PHP ou Java. ',
      release: 2021,
      img: 'https://facebrick.cwgapp.com/wp-content/uploads/2021/11/type.jpg',
    },

    {
      title: 'Cordova PhoneGap',
      text: 'O Adobe PhoneGap Build é um serviço online para a criação de aplicações móveis com HTML, CSS e JS, reduzindo o tempo de desenvolvimento através de seus recursos e habilidades existentes, que podem ser reaproveitadas e otimizadas.',
      release: 2021,
      img: 'https://facebrick.cwgapp.com/wp-content/uploads/2021/11/cordova.jpg',
    },
    {
      title: 'Laravel ',
      text: 'Laravel é um framework PHP gratuito e de código aberto, utilizado no desenvolvimento de sistemas para web. Algumas de suas principais características são permitir a escrita de um código mais simples e legível, e suporte a recursos avançados que agilizam o processo de desenvolvimento.',
      release: 2021,
      img: 'https://facebrick.cwgapp.com/wp-content/uploads/2021/11/laravel.jpg',
    },
  ]);
  const [background, setBackground] = useState(lista[0].img);
  const [activeIndex, setActiveIndex] = useState(0);

  const _renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity>
          <Image source={{uri: item.img}} style={styles.carouselImg} />
          <Text style={styles.carouselText}>{item.title}</Text>
          <Icon
            name="play-circle-outline"
            size={30}
            color="#FFF"
            style={styles.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
    <Header title="Home" />
      <ScrollView style={styles.container}>
        <View style={{flex: 1, height: screenHeight}}>
          <View
            style={{...StyleSheet.absoluteFill, backgroundColor: '#BDBDBD'}}>
            <ImageBackground
              source={{uri: background}}
              style={styles.imgBg}
              blurRadius={7}>
              <View>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginLeft: 10,
                    marginVertical: 20,
                  }}>
                  TECNOLOGIAS MOBILE
                </Text>
              </View>
              <View style={styles.slideView}>
                <Carousel
                  style={styles.carousel}
                  ref={carouselRef}
                  data={lista}
                  renderItem={_renderItem}
                  sliderWidth={screenWidth}
                  itemWidth={200}
                  inactiveSlideOpacity={0.5}
                  onSnapToItem={index => {
                    setBackground(lista[index].img);
                    setActiveIndex(index);
                  }}
                />
              </View>
              <View style={styles.codeInfo}>
                <View style={{marginTop: 10}}>
                  <Text style={styles.codeTitle}>
                    {lista[activeIndex].title}
                  </Text>
                  <Text style={styles.codeDesc}>{lista[activeIndex].text}</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
