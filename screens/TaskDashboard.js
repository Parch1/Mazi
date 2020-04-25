import * as React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";

import styles from "../styles.js";
import constants from "../constants.js";

export function TaskDashboard({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Text style={styles.title}>Mazi</Text>
      <Text style={styles.tasks}>Here are your tasks for today</Text>
      <TouchableOpacity
        style={styles.firstbutton}
        onPress={() => navigation.navigate("LocalBusinessTasks")}
      >
        <Image source={require("../assets/ui/button1.png")} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate("WellnessTasks")}
      >
        <Image source={require("../assets/ui/button2.png")} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate("FitnessTasks")}
      >
        <Image source={require("../assets/ui/button3.png")} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate("QuarantineTask")}
      >
        <Image source={require("../assets/ui/button4.png")} />
      </TouchableOpacity>
    </View>
  );
}
