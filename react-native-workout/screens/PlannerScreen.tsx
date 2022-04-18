import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const PlannerScreen = ({ navigation }: NativeStackHeaderProps) => {

  return (
    <View>
      <Text>I am PlannerScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default PlannerScreen

const styles = StyleSheet.create({})

/*
NB: when push is used, the component will unmount as we navigate backward but navigate will not unmount
<Button title='Go to Planner' onPress={() => navigation.push("Planner")}/>

You can demo this wiht useEffect in the PlannerScreen component as follows

useEffect(() => {
console.log('component mounted')
return () => console.log('Unmounting the component')
}, [])

the function inside the useEffect will be called when the component unmount
*/