import * as React from "react";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

import AppNavigation from "./navigation/AppNavigation";

import styles from "./styles.js";
import constants from "./constants.js";

function App() {
  let [fontsLoaded] = useFonts({
    "DidactGothic-Regular": require("./assets/fonts/DidactGothic-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <AppNavigation></AppNavigation>;
  }
}

export default App;
