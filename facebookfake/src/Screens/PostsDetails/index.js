/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

const PostsDetails = ({route}) => {
  return (
    <>
    <Header title="Detalhes"/>
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>{route.params.post.title}</Text>
        <Text style={styles.author}>{route.params.post.author}</Text>
        <Text style={styles.text}>{route.params.post.content}</Text>
        <View style={styles.border} />
      </View>
    </ScrollView>
    </>
  );
};

export default PostsDetails;
