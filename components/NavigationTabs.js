import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function navigationTabs({navigation}) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={30} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Feeds')}>
        <Icon name="feed" size={30} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Feeds')}>
        <Icon name="home" size={30} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '7%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    marginHorizontal: 2,
  },
});
