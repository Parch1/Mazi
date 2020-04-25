import * as React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";

import styles from "../styles.js";
import constants from "../constants.js";

export function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Text style={styles.title}>Mazi</Text>

      <Image
        style={{ alignSelf: "center", marginTop: 60, marginRight: 40 }}
        source={require("../assets/ui/profile.png")}
      />

      <TouchableOpacity>
        <Image
          style={{ alignSelf: "center", marginTop: 40 }}
          source={require("../assets/ui/invite.png")}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}
