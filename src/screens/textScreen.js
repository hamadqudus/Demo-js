import React,{useState} from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const textScreen = () => {

const[name,setname] = useState('')

  return (
    <View>
        <Text>Enter you Password</Text>
      <TextInput style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      value={name}
onChangeText={(newText)=>setname(newText)}
      />
      
      {name.length<8?<Text>password should be 8 characters</Text>:null}
    </View>
  );
};

const styles = StyleSheet.create({
input:{
    margin:15,
    borderColor:'black',
    borderWidth:1,
}


 
});

export default textScreen;
