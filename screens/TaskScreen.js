import * as React from "react";
import { Image, Text, View } from "react-native";

import styles from "../styles.js";
import constants from "../constants.js";

import CountdownCircle from "../components/CountdownTimer";

export function TaskScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Text style={styles.title}>Mazi</Text>

      <Text style={styles.taskTitle}>20 Push Ups</Text>

      <CountdownCircle
        seconds={25}
        radius={140}
        borderWidth={25}
        color="#beebe9"
        bgColor="#fff"
        shadowColor="#ffe3ed"
        textStyle={{ fontSize: 70, fontFamily: "DidactGothic-Regular" }}
        onTimeElapsed={() => navigation.navigate("TaskDashboard")}
      />

      <Image
        style={{ alignSelf: "center", marginRight: 10, marginTop: 30 }}
        source={require("../assets/ui/points.png")}
      />
    </View>
  );
}
