import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Navigation from "./navigation";

export default function App() {
  return (
    //NB: Don't wrapp <Navigation /> component with <View> component
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}

// SaveAreaView settings for android

// import { StatusBar } from react-native

// export default function App() {
//   return (
//     <View
//       style={{
//         paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//         backgroundColor: "#eee",
//         flex: 1,
//       }}
//     >
//       <Navigation />
//     </View>
//   );
// }
