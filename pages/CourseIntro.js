import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CourseTopBar from '../components/CourseTopBar';
export default function CourseIntro({navigation}) {
  const data = {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeRY_E0n-vQSh7o6q1tYrExqbgcCNPrfJOJg&usqp=CAU',
    title: 'Intraday Basic',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate corporis neque magni mollitia dolorum rerum omnis ea saepe beatae blanditiis officia aspernatur inventore error sit harum ipsa nesciunt illum quasi laborum facilis, sed adipisci? Provident voluptatibus perferendis, a illum totam in at voluptates quod cumque libero odio aspernatur odit autem.',
    free: true,
    price: 0,
  };

  return (
    <View>
      <CourseTopBar navigation={navigation} />
      <ScrollView>
        <Text style={styles.title}>{data.title}</Text>
        <Image style={styles.image} source={{uri: data.image}} />
        <Text style={styles.aboutHeading}>About Course</Text>
        <Text style={styles.aboutDescription}>{data.description}</Text>
        <Text style={styles.aboutHeading}>Content Covered</Text>
        <Text style={styles.aboutDescription}>{data.description}</Text>
        <Text style={styles.aboutHeading}>Disclamer</Text>
        <Text style={styles.aboutDescription}>{data.description}</Text>
        <Text style={styles.aboutHeading}>Price : {data.price || 'Free'}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Buy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => navigation.navigate('StartCourse')}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
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
  aboutHeading: {
    fontWeight: 'bold',
    paddingLeft: 20,
    fontSize: 20,
    marginTop: 20,
    color: '#000',
  },
  aboutDescription: {
    paddingHorizontal: 20,
  },
  buyButton: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 15,
    width: '80%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
  },
});
