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

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Home = () => {
  const {signOut} = useContext(AuthContext);
  const carouselRef = useRef(null);
  const [lista, setLista] = useState([
    {
      title: 'Node',
      text: 'O Node. js pode ser definido como um ambiente de execução Javascript server-side. Isso significa que com o Node. js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados.',
      release: 2021,
      img: 'https://miro.medium.com/max/1200/1*WDX58nzlaiClqTFT59v7RQ.jpeg',
    },
    {
      title: 'JavaScript ',
      text: 'JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática ',
      release: 2021,
      img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--XgGRUnDV--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://xtrp.io/api/content/static_files/strange-things-in-js/photo2.jpg',
    },
    {
      title: 'React-Native',
      text: 'Enquanto Reactjs é basicamente uma biblioteca JavaScript e React Native é a estrutura inteira , o primeiro é o coração do último e complementa um ao outro. Se Reactjs é ideal para criar aplicativos com alta funcionalidade e cálculos complexos, então React Native é ideal para dar uma sensação nativa aos seus aplicativos móveis.',
      release: 2021,
      img: 'https://miro.medium.com/max/1400/0*BTRGNVTctSoTOKQu',
    },
    {
      title: 'Android Studio',
      text: 'Android Studio é uma plataforma para desenvolvimento de apps mobile para o sistema operacional mais popular do planeta. Ou seja, é a ferramenta responsável por criar aplicativos para Android – hoje presente em 74,13% dos dispositivos móveis, segundo o Statista. Essa é uma definição básica da ferramenta.',
      release: 2021,
      img: 'https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg',
    },
    {
      title: 'TypeScript',
      text: 'Podemos considerar o Typescript como um potencializador da linguagem Javascript. Ele permite que grandes sistemas complexos sejam construídos com essa linguagem sem nenhum empecilho e sem que ela deixe a desejar diante de outras linguagens de back-end, como PHP ou Java. ',
      release: 2021,
      img: 'https://www.impacta.com.br/blog/wp-content/uploads/2021/08/typescript.png',
    },

    {
      title: 'Cordova PhoneGap',
      text: 'O Adobe PhoneGap Build é um serviço online para a criação de aplicações móveis com HTML, CSS e JS, reduzindo o tempo de desenvolvimento através de seus recursos e habilidades existentes, que podem ser reaproveitadas e otimizadas.',
      release: 2021,
      img: 'https://www.anubavam.com/sites/default/files/styles/blog_detail_image_style/public/2017-05/Cordova%20app%20development_0.jpg?itok=NyQXFw3d',
    },
    {
      title: 'JSX React & React-Native',
      text: 'É chamada JSX e é uma extensão de sintaxe para JavaScript. ... Recomendamos usar JSX com o React para descrever como a UI deveria parecer. JSX pode lembrar uma linguagem de template, mas que vem com todo o poder do JavaScript.',
      release: 2021,
      img: 'https://i.ytimg.com/vi/7fPXI_MnBOY/maxresdefault.jpg',
    },
    {
      title: 'Laravel ',
      text: 'Laravel é um framework PHP gratuito e de código aberto, utilizado no desenvolvimento de sistemas para web. Algumas de suas principais características são permitir a escrita de um código mais simples e legível, e suporte a recursos avançados que agilizam o processo de desenvolvimento.',
      release: 2021,
      img: 'https://www.agenciaaeros.com/uploads/images/2017/06/1498532647.jpg',
    },
    {
      title: 'Expo React-Native',
      text: 'Desenvolva para todos os dispositivos de seus usuários com apenas uma base de código. Adicione atualização rápida, recursos nativos verdadeiros e sua criatividade, e você terá o aplicativo que seus usuários desejam em um piscar de olhos.',
      release: 2021,
      img: 'https://blog.logrocket.com/wp-content/uploads/2021/06/getting-started-react-native-expo-sdk.png',
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
      <ScrollView style={styles.container}>
        <View style={{flex: 1, height: screenHeight}}>
          <View
            style={{...StyleSheet.absoluteFill, backgroundColor: '#0f69ad'}}>
            <ImageBackground
              source={{uri: background}}
              style={styles.imgBg}
              blurRadius={7}>
              <View>
                <Text
                  style={{
                    color: '#FFBF00',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginLeft: 10,
                    marginVertical: 20,
                    justifyContent: 'space-between',
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
              <View style={styles.moreInfo}>
                <View style={{marginTop: 10}}>
                  <Text style={styles.movieTitle}>
                    {lista[activeIndex].title}
                  </Text>
                  <Text style={styles.movieDesc}>
                    {lista[activeIndex].text}
                  </Text>
                  <Icon
                    style={styles.iconLogout}
                    name={'logout'}
                    size={30}
                    color={'#0f69ad'}
                    onPress={() => signOut()}
                  />
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
