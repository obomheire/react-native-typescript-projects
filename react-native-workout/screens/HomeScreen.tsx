import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import data from '../data.json'
import { Workout } from '../types/data';
import WorkoutItem from '../components/WorkoutItem';

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Workouts</Text>
      <FlatList
        data={data as Workout[]}
        keyExtractor={(item) => item.slug}
        renderItem={WorkoutItem}
      />
    </View>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});



/*
NAVIGATION

import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

const HomeScreen = ({ navigation}: NativeStackHeaderProps) => {

  return (
    <View>
      <Text>I am the HomeScreen</Text>
      <Button title='Go to Planner' onPress={() => navigation.navigate("Planner")}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})

NB: when push is used, the component will unmount as we navigate backward but navigate will not unmount
<Button title='Go to Planner' onPress={() => navigation.push("Planner")}/>

You can demo this wiht useEffect in the PlannerScreen component as follows

useEffect(() => {
console.log('component mounted')
return () => console.log('Unmounting the component')
}, [])

the function inside the useEffect will be called when the component unmount
*/