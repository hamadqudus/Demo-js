import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { counterEvent } from "react-native/Libraries/Performance/Systrace";

const reducer = (state,action)=>{
  switch(action.type){
    case 'increment':
      return{...state,count:state.count+action.payload}
    case 'decrement':
      return {...state,count:state.count - action.payload}
    default:
      return state
  }
}

const CounterScreen = () => 
{
  const [state,dispatch] = useReducer(reducer,{count:0})

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
         dispatch({type:'increment',payload:1})
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({type:'decrement',payload:1})

        }}
      />
      <Text>Current count is: {state.count} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
