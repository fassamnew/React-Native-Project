import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Fitsum');
  const [person, setPerson] = useState({name: 'Fitsum', age: 40}); 

  const clickHandler = ()=> {
    setName('Kalkidan');
    setPerson({name: 'Kalkidan', age: 28});
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.boldText}>Hello world!</Text>
      </View>
      <View style={styles.body}>
        <Text>My name is {name}.</Text>
        <Text>The person's name is {person.name} and his age is {person.age} </Text>
        <View style={styles.buttonContainer}>
          <Button title='Update Name' onPress={clickHandler} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  buttonContainer:{
    marginTop: 20,
  }

});
