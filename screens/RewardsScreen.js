import * as React from "react";
import { ScrollView, TouchableOpacity, Image, Text, View } from "react-native";

import styles from "../styles.js";
import constants from "../constants.js";

export function RewardsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <ScrollView persistentScrollbar={true}>
        <View style={styles.headerContainer}>
          <Text style={styles.rewardTitle}>Mazi</Text>
          <TouchableOpacity>
            <Image
              style={{ marginLeft: 130, marginTop: 57 }}
              source={require("../assets/ui/rewardsnav.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.tasks}>Use points to claim rewards!</Text>

        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.firstbutton}>
            <Image source={require("../assets/ui/rewards/reward1.png")} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.firstbutton}>
            <Image source={require("../assets/ui/rewards/reward8.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.firstbutton}>
            <Image source={require("../assets/ui/rewards/reward6.png")} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.firstbutton}>
            <Image source={require("../assets/ui/rewards/reward5.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.firstbutton}>
            <Image source={require("../assets/ui/rewards/reward7.png")} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.firstbutton}>
            <Image source={require("../assets/ui/rewards/reward3.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.firstbutton}>
            <Image source={require("../assets/ui/rewards/reward4.png")} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.firstbutton}>
            <Image source={require("../assets/ui/rewards/reward2.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.firstbutton}>
            <Image source={require("../assets/ui/rewards/reward1.png")} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.firstbutton}>
            <Image source={require("../assets/ui/rewards/reward8.png")} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
