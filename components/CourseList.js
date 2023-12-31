import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CourseList({navigation, data, index}) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('CoursePage')}>
      <Text style={styles.index}>{index}</Text>
      <Text style={styles.title}>{data.title}</Text>
      <View style={styles.icon}>
        <Icon name="play" size={10} color={'#fff'} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  index: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  icon: {
    padding: 10,
    borderRadius: 80,
    backgroundColor: '#0777f7',
  },
});
