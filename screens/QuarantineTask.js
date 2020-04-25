import * as React from "react";
import { Image, Text, View } from "react-native";

import styles from "../styles.js";
import constants from "../constants.js";

import QuarantineTimer from "../components/QuarantineTimer";

export function QuarantineTask({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Text style={styles.title}>Mazi</Text>

      <Text style={styles.taskCategory}>Quarantine</Text>
      <Text style={styles.tasks}>Stay indoors for this duration</Text>

      <QuarantineTimer
        style={{ marginTop: 120 }}
        until={86400}
        onFinish={() =>
          alert("Your quarantine is over! You earned 120 points!")
        }
        onPress={() =>
          alert("Don't give up! You're on your way to earning 120 points!")
        }
        size={40}
      />

      <Image
        style={{ marginTop: 60, alignSelf: "center", marginRight: 20 }}
        source={require("../assets/ui/tasks/quarantine.png")}
      />
    </View>
  );
}
