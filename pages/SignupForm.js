import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Input,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  return (
    <View>
      <Text style={styles.mainHeading}>TraderStag</Text>
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={text => setName(text)}
            value={name}
            placeholder="Enter your full name"
          />

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

          <TextInput
            style={styles.input}
            onChangeText={text => setConfirm(text)}
            value={confirm}
            placeholder="confirm password"
            secureTextEntry
          />

          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.buttonText}>Sign up</Text>
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

  signupButton: {
    marginTop: 88,
    backgroundColor: 'red',
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
