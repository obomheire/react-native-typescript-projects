import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { useAppContext } from '../App.provider';

const imageUrl =
  'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';

export const Home: React.FC = () => {

  const appContext = useAppContext();

  return (
    <ImageBackground source={{ uri: imageUrl }} style={styles.container}>
      <MoodPicker onSelect={appContext.handleSelectMood} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgreen',
  },
});

/*
import React from 'react';
import { StyleSheet, ImageBackground, View, Pressable } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { useAppContext } from '../App.provider';
import Reanimated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const ReanimatePressable = Reanimated.createAnimatedComponent(Pressable)

const imageUrl =
  'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';

export const Home: React.FC = () => {

  const appContext = useAppContext();
  const shared = useSharedValue(0)
  const style = useAnimatedStyle(() => ({
    transform: [{translateX: shared.value}],
  }), [])

  return (
    <ImageBackground source={{ uri: imageUrl }} style={styles.container}>
      <MoodPicker onSelect={appContext.handleSelectMood} />
      <ReanimatePressable
        onPress={() => {
          shared.value = withTiming(shared.value + 20, {duration: 1000})
        }}
        style={[styles.square, style]}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgreen',
  },
});

*/
