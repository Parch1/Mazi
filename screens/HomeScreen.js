import * as React from "react";
import { Image, Text, View } from "react-native";

import styles from "../styles.js";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={styles.title}>Mazi</Text>

        <Image
          style={{ alignSelf: "center", marginTop: 110 }}
          source={require("../assets/ui/homescreen.png")}
        />

        <Text
          style={{
            fontFamily: "DidactGothic-Regular",
            fontSize: 45,
            lineHeight: 44,
            textAlign: "center",
            marginTop: 50,
            textShadowColor: "rgba(0, 0, 0, 0.25)",
            textShadowOffset: { width: 0, height: 5 },
            textShadowRadius: 6,
          }}
        >
          welcome, Ryan!
        </Text>

        <Text style={styles.tasks}>You have eight tasks available</Text>
      </View>
    );
  }
}
