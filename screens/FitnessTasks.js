import * as React from "react";
import { TouchableOpacity, Image, Text, View, ScrollView } from "react-native";

import styles from "../styles.js";
import constants from "../constants.js";

export function FitnessTasks({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Text style={styles.title}>Mazi</Text>
      <Text style={styles.taskCategory}>Fitness</Text>

      <ScrollView persistentScrollbar={true}>
        <Text style={styles.tasks2}>Complete tasks to earn points!</Text>

        <TouchableOpacity
          style={styles.firstbutton}
          onPress={() => navigation.navigate("TaskScreen")}
        >
          <Image source={require("../assets/ui/tasks/task1.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("TaskScreen")}
        >
          <Image source={require("../assets/ui/tasks/task2.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("TaskScreen")}
        >
          <Image source={require("../assets/ui/tasks/task3.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("TaskScreen")}
        >
          <Image source={require("../assets/ui/tasks/task4.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("TaskScreen")}
        >
          <Image source={require("../assets/ui/tasks/task5.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("TaskScreen")}
        >
          <Image source={require("../assets/ui/tasks/task6.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("TaskScreen")}
        >
          <Image source={require("../assets/ui/tasks/task7.png")} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
