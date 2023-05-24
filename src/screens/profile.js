import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Avatar } from "react-native-elements";


export default function Profile({navigation}) {

  const pressHandler = () => {
    navigation.navigate('HomeNav');
  }

  const [name, setName] = useState('shaun'); 
  const [gender, setGender] = useState('Female'); 
  const [major, setMajor] = useState('Science'); 
  const [year, setYear] = useState('2'); 

  
  return (
    <View style={styles.container}>
      
      <View style={styles.logo}>
      <Avatar
      size="medium"
      rounded
      title="User"
      onPress={() => console.log("Works!")}
      activeOpacity={0.2}/>
      </View>

      <Text>Enter Name:</Text>
      <TextInput 
        placeholder='e.g. John Doe' 
        style={styles.input}
        onChangeText={(value) => setName(value)} />

      <Text>Enter Gender:</Text>
      <TextInput 
        placeholder='e.g. F/M/NIL' 
        style={styles.input}
        onChangeText={(value) => setGender(value)} />

      <Text>Enter Major:</Text>
      <TextInput 
        placeholder='e.g. Science (no short form)' 
        style={styles.input}
        onChangeText={(value) => setMajor(value)} />

      <Text>Enter Year:</Text>
      <TextInput 
        placeholder='e.g. 2' 
        style={styles.input}
        onChangeText={(value) => setYear(value)} />

      <Text style={styles.result}>name: {name}, gender: {gender}, major: {major}, year: {year}</Text>

      <TouchableOpacity onPress={pressHandler}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </View>
      </TouchableOpacity>
      
    </View>




    
  );

  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef1e1ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#f6f6f6',
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    marginBottom: 20,
  }, 
  logo: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: '#007788', 
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 15,
    backgroundColor: '#007788',
    position: 'centre',
    marginTop: 20,
  },
  buttonText: {
    color: '#f6f6f6',
    fontWeight: 'bold',
    fontFamily: 'RowdiesRegular', 
    fontSize: 25,
    textAlign: 'center',
  }
});