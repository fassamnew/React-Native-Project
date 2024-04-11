import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('Fitsum');
  const [person, setPerson] = useState({name: 'Fitsum', age: 40}); 
  const [age, setAge] = useState('40');
  const [people, setPeople] = useState([
    {name: 'Fitsum Assamnew', age: 44, id: '1'},
    {name: 'Kalkidan Mulu', age: 28, id: '2'},
    {name: 'Bekalu Assamnew', age: 43, id: '3'},
    {name: 'Matiyas Mulu', age: 18, id: '4'},
    {name: 'Selam Assamnew', age: 38, id: '5'},
    {name: 'Samra Assamnew', age: 38, id: '6'},
    {name: 'Yodit Abate', age: 33, id: '7'},
    {name: 'Mulu Bitew', age: 59, id: '8'},
    {name: 'Embet Mohammed', age: 48, id: '9'},
    {name: 'Assamnew Andargie', age: 73, id:'10'}
  ]);

  const clickHandler = ()=> {
    setName('Kalkidan');
    setPerson({name: 'Kalkidan', age: 28});
  }
  const pressHandler= (id) =>
  {
    console.log(id);
    setPeople((prevPeople) => {
        return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <FlatList 
      key={'_'} 
      numColumns={2}
      keyExtractor={(item) => '_' + item.id}
      data={people}
      renderItem={({item})=> (
       <TouchableOpacity onPress={() => pressHandler(item.id)}> 
        <Text style={styles.item}>Name: {item.name} Age: {item.age}</Text>
        </TouchableOpacity>
      )}

      
      />
      <ScrollView>
      {/*people.map( (item)=> {
        return(
          <View key={item.key}>
            <Text style={styles.item}>Name: {item.name} Age: {item.age}</Text>
          </View>
        )
      })*/}
     </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
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
  ,
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,

  },
  item: {
    marginTop:24,
    padding: 30,
    backgroundColor: 'cyan',
    fontSize: 22,
    marginHorizontal: 10,
    marginTop: 24,
    width: 200,
  }


});
