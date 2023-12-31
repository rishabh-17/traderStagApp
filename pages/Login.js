import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import React from 'react';

export default function Login({navigation}) {
  return (
    <View>
      <Image
        style={styles.mainImage}
        source={{
          uri: 'https://images.moneycontrol.com/static-mcnews/2022/05/Healing-Space-54-Bouncebackability-markets-and-mental-health-bounce-back.jpg?impolicy=website&width=1600&height=900',
        }}
      />
      <View style={styles.container}>
        <Text style={styles.mainHeading}>
          Welcome to <Text style={{color: 'red'}}>TraderStag</Text>
        </Text>
        <View style={styles.loginContainer}>
          <Text style={styles.login}>Login/Singin</Text>
          <View style={styles.authbutton}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.navigate('Signin')}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signupButton}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainImage: {
    width: '100%',
    height: 330,
  },
  container: {
    marginTop: -30,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#ffffff',
    height: '100%',
    padding: 40,
    paddingTop: 80,
  },
  loginContainer: {
    marginTop: 140,
  },
  login: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
  mainHeading: {
    fontSize: 29,
    width: '100%',
    fontWeight: 'bold',
    color: '#000000',
  },
  loginButton: {
    backgroundColor: '#0C7DE4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 15,
    width: '40%',
  },
  signupButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 15,
    width: '40%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  authbutton: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
});
