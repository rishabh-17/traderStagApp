import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function WelcomeHeader() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{color: '#000000'}}>Hello,</Text>
        <Text style={styles.userName}>Keshav Mahajan</Text>
      </View>
      <Image
        style={styles.userImage}
        source={{
          uri: 'https://img.freepik.com/premium-photo/illustration-cute-boy-avatar-graphic-white-background-created-with-generative-ai-technology_67092-4578.jpg',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
});
