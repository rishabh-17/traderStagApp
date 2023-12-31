import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import WelcomeHeader from '../components/WelcomeHeader';
import SearchBar from '../components/SearchBar';
import Slider from '../components/Slider';
import CourseSlider from '../components/CourseSlider';
import NavigationTabs from '../components/NavigationTabs';
export default function HomePage({navigation}) {
  const videoData = [
    {
      id: 1,
      image:
        'https://www.bsebti.com/blog/wp-content/uploads/2023/07/Top-8-stock-market-courses-2.jpg',
    },
    {
      id: 2,
      image: 'https://i.ytimg.com/vi/XDtWSmnDLEs/maxresdefault.jpg',
    },
    {
      id: 3,
      image: 'https://i.ytimg.com/vi/XDtWSmnDLEs/maxresdefault.jpg',
    },
    {
      id: 4,
      image: 'https://i.ytimg.com/vi/XDtWSmnDLEs/maxresdefault.jpg',
    },
  ];
  const basicCourse = [
    {
      id: 1,
      image:
        'https://dipeinstitute.com/blog/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-09-at-3.17.51-PM.jpeg',
      title: 'Swing Traiding',
      lectureCount: 15,
    },
    {
      id: 2,
      image:
        'https://www.ifmcinstitute.com/storage/2019/01/Stock-Market-Course-For-Traders-by-IFMC-Institute.jpg',
      title: 'Intraday Training',
      lectureCount: 10,
    },
    {
      id: 3,
      image: 'https://i.ytimg.com/vi/XDtWSmnDLEs/maxresdefault.jpg',
      title: 'Intraday Training',
      lectureCount: 5,
    },
    {
      id: 4,
      image: 'https://i.ytimg.com/vi/XDtWSmnDLEs/maxresdefault.jpg',
      title: 'Intraday Training',
    },
  ];
  const AdvanceCourse = [
    {
      id: 1,
      image:
        'https://www.ifmcinstitute.com/storage/2018/11/Diploma-in-Financial-Stcok-Market-Course-Best-selling-Course-IFMC-Institute.jpg',
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/736x/49/27/eb/4927eb96df0752d192d7b910e0ad0304.jpg',
    },
    {
      id: 3,
      image: 'https://i.ytimg.com/vi/XDtWSmnDLEs/maxresdefault.jpg',
    },
    {
      id: 4,
      image: 'https://i.ytimg.com/vi/XDtWSmnDLEs/maxresdefault.jpg',
    },
  ];

  return (
    <View>
      <ScrollView style={styles.container}>
        <WelcomeHeader />
        <SearchBar />
        <Slider />
        <CourseSlider
          title={'Video Course'}
          data={videoData}
          navigation={navigation}
        />
        <CourseSlider
          title={'Basic Course'}
          data={basicCourse}
          ShowDetails={true}
        />
        <CourseSlider title={'Advance Course'} data={AdvanceCourse} />
      </ScrollView>
      <NavigationTabs navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '93%',
  },
});
