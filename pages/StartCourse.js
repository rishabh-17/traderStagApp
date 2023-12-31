import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import CourseTopBar from '../components/CourseTopBar';
import CourseList from '../components/CourseList';
export default function StartCourse({navigation}) {
  const data = {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeRY_E0n-vQSh7o6q1tYrExqbgcCNPrfJOJg&usqp=CAU',
    title: 'Trading Mastery',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate corporis neque magni mollitia dolorum rerum omnis ea saepe beatae blanditiis officia aspernatur inventore error sit harum ipsa nesciunt illum quasi laborum facilis, sed adipisci? Provident voluptatibus perferendis, a illum totam in at voluptates quod cumque libero odio aspernatur odit autem.',
    free: true,
    price: 0,
    content: [
      {
        id: 1,
        title: 'Introduction',
      },
      {
        id: 2,
        title: 'Intraday',
      },
      {
        id: 3,
        title: 'Candles and patterns',
      },

      {
        id: 4,
        title: 'Support and Resistance',
      },
      {
        id: 5,
        title: 'Setup 1',
      },
      {
        id: 6,
        title: 'Indicators',
      },

      {
        id: 7,
        title: 'Trend Lines',
      },
      {
        id: 8,
        title: 'Setup 2',
      },
      {
        id: 9,
        title: 'Profitable Trader Roadmap',
      },
    ],
  };
  return (
    <View>
      <CourseTopBar navigation={navigation} />
      <ScrollView>
        <Text style={styles.title}>{data.title}</Text>
        <Image style={styles.image} source={{uri: data.image}} />
        <View>
          <Text style={styles.heading}>Course Content</Text>
          {data.content.map((item, i) => (
            <CourseList navigation={navigation} data={item} index={i} key={i} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width * 0.9,
    height: 200,
    marginTop: 10,
    margin: 'auto',
    marginHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 20,
  },
  title: {
    fontWeight: 'bold',
    paddingLeft: 20,
    fontSize: 22,
    color: '#000',
  },
  item: {},
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 20,
    marginVertical: 10,
    color: '#000',
  },
});
