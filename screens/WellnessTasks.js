import * as React from "react";
import { Image, Text, View } from "react-native";

import styles from "../styles.js";
import constants from "../constants.js";

export function WellnessTasks({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Text style={styles.title}>Mazi</Text>
      <Text style={styles.taskCategory}>Wellness</Text>

      <Text style={styles.text}>No tasks available right now :(</Text>
      <Text style={styles.text2}>Check back later!</Text>

      <Image style={styles.image} source={require("../assets/ui/bike.png")} />
    </View>
  );
}
