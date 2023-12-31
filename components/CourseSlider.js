import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';
import React from 'react';

export default function Slider({title, data, ShowDetails, navigation}) {
  const renderItem = ({item}) => {
    return (
      <Pressable onPress={() => navigation.navigate('CourseIntro')}>
        <Image source={{uri: item.image}} style={styles.image} />
        {ShowDetails && (
          <View style={styles.details}>
            <Text style={styles.detailHeading}>{item.title}</Text>
            <Text style={styles.lectureNo}>{item.lectureCount} Lessions</Text>
          </View>
        )}
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width * 0.6,
    margin: 10,
    height: 120,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    paddingHorizontal: 10,
    color: '#000000',
  },
  container: {
    marginLeft: 10,
    marginTop: 20,
  },
  details: {
    backgroundColor: '#fff',
    height: 50,
    width: Dimensions.get('screen').width * 0.6,
    marginHorizontal: 10,
    marginTop: -10,
  },
  detailHeading: {
    fontSize: 18,
    paddingHorizontal: 8,
    paddingTop: 2,
    fontWeight: 'bold',
    color: '#000000',
  },
  lectureNo: {
    paddingHorizontal: 8,
  },
});
