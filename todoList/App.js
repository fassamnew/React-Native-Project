import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import  Headerr  from './Components/header';
import TodoItem from './Components/todoitems';
import AddTodo from './Components/addTodos';
import Sandbox from './Components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Buy coffee', key: '1'},
    {text: 'Create the app', key: '2'},
    {text: 'Take a walk with your wife', key: '3'}
  ]);
  const pressHandler = (key)=>{
    setTodos ((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key)
    })
  };
  const submitHandler = (text) =>{
    if(text.length > 3){
    setTodos((prevTodos) =>{
      return [ 
        {text: text, key: Math.random().toString()},
        ...prevTodos]
    })
  }
  else {
      Alert.alert('Oops', 'Todos must be over 3 charaters long',[
        {text: 'Understood', onPress: ()=> console.log('Alert closed')}
      ]);
  }
  }
  return (
    <Sandbox/>
    // <TouchableWithoutFeedback onPress={() => {
    //   Keyboard.dismiss();
    //   console.log('Dismmised keyboard');
    // }}>
    // <View style={styles.container}>
    //  {/** Header */}
    //  <Headerr></Headerr>
    //  <View style={styles.content}>
    //   {/* to form*/}
    //   <AddTodo submitHandler={submitHandler} />
    //   <View style={styles.list}>
    //     <FlatList
    //     data = {todos}
    //     renderItem={({item}) => (
    //       /*<Text>{item.text}</Text>*/
    //       <TodoItem item={item} pressHandler={pressHandler} />
    //     )} 
    //     />

    //   </View>
    //  </View>

    // </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  content:{
    padding: 40,
  },
  list: {
    marginTop: 24,
  }
});
