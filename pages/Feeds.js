import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavigationTabs from '../components/NavigationTabs';

export default function Feeds({navigation}) {
  return (
    <View>
      <Text>Feeds</Text>
      <NavigationTabs navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
