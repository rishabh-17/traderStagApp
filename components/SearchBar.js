import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function searchBar() {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <Icon name="search" size={25} color="#900" />
      <TextInput
        style={styles.searchText}
        onChangeText={text => setSearch(text)}
        value={search}
        placeholder="Type here..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 45,
    margin: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingLeft: 10,
    alignItems: 'center',
    overflow: 'hidden',
  },
  searchText: {
    height: 45,
  },
});
