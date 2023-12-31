import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text style={styles.mainHeading}>TraderStag</Text>
      <View style={styles.container}>
        <Text style={styles.title}>Login in your account</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Enter your email address"
          />

          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="password"
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
    marginVertical: 75,
  },
  container: {},
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 40,
    paddingLeft: 20,
  },

  loginButton: {
    marginTop: 88,
    backgroundColor: '#0C7DE4',
    marginHorizontal: 50,
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
