import * as React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View, TabBarIOSItem } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const localBusinessTasks = [
  {
    "description": "",
    "points": 0,
    "time": 0,
    "visible": true,
  }
]

const wellnessTasks = [
  {
    "description": "",
    "points": 0,
    "time": 0,
    "visible": true,
  }
]

const fitnessTasks = [
  {
    "description": "",
    "points": 0,
    "time": 0,
    "visible": true,
  }
]

const rewards = [
  {
    "description": "",
    "points": 0,
    "visible": true,
    "color": "",
  }
]

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={styles.title}>Mazi</Text>

      <Image style={{ alignSelf: 'center', marginTop: 140 }} source={require("./assets/ui/homescreen.png")} />

      <Text style={{
        fontFamily: "DidactGothic-Regular",
        fontSize: 30,
        lineHeight: 39,
        textAlign: 'center',
        marginTop: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
      }}>
        welcome, Ryan!</Text>
    </View>
  );
}

// Nested navigator to handle non-tab-bar navigation from task category to task list. Tab bar navigator takes user to Task Dashboard navigator
function TaskDashboardNav({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      initialRouteName: "TaskDashboard"
    }
    }>
      <Stack.Screen name="TaskDashboard" component={TaskDashboard} />
      <Stack.Screen name="LocalBusinessTasks" component={LocalBusinessTasks} />
      <Stack.Screen name="WellnessTasks" component={WellnessTasks} />
      <Stack.Screen name="FitnessTasks" component={FitnessTasks} />
      <Stack.Screen name="QuarantineTask" component={QuarantineTask} />
    </Stack.Navigator>
  );
}

// Displays task categories
function TaskDashboard({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column', }}>
      <Text style={styles.title}>Mazi</Text>

      <Text style={styles.tasks}>Here are your tasks for today</Text>

      <TouchableOpacity
        style={styles.firstbutton}
        onPress={() => navigation.navigate("LocalBusinessTasks")}
      >
        <Image source={require("./assets/ui/button1.png")} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate("WellnessTasks")}
      >
        <Image source={require("./assets/ui/button2.png")} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate("FitnessTasks")}
      >
        <Image source={require("./assets/ui/button3.png")} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate("QuarantineTask")}
      >
        <Image source={require("./assets/ui/button4.png")} />
      </TouchableOpacity>
    </View>
  );
}

function LocalBusinessTasks({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={styles.title}>Mazi</Text>
      <Text style={styles.taskCategory}>Local Businesses</Text>

      <Text style={styles.text}>No tasks available right now :(</Text>
      <Text style={styles.text2}>Check back later!</Text>

      <Image style={styles.image} source={require("./assets/ui/bike.png")} />
    </View>

  );
}

function WellnessTasks({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={styles.title}>Mazi</Text>
      <Text style={styles.taskCategory}>Wellness</Text>

      <Text style={styles.text}>No tasks available right now :(</Text>
      <Text style={styles.text2}>Check back later!</Text>

      <Image style={styles.image} source={require("./assets/ui/bike.png")} />
    </View>
  );
}

function FitnessTasks({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={styles.title}>Mazi</Text>
      <Text style={styles.taskCategory}>Fitness</Text>

    </View>
  );
}

function QuarantineTask({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={styles.title}>Mazi</Text>
      <Text style={styles.taskCategory}>Quarantine</Text>

    </View>
  );
}

// 
function TaskScreen({ navigation }) {
  return (
    null
    // Placeholder
  );
}

function RewardsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Rewards Screen</Text>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  )
}

// Main app
function App() {

  // Load Font
  let [fontsLoaded] = useFonts({
    'DidactGothic-Regular': require('./assets/fonts/DidactGothic-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    // Bottom Navigation
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fff"
          inactiveColor="#fff"
          barStyle={{ backgroundColor: '#BEEBE9', paddingBottom: 10 }}
        >
          <Tab.Screen name="Home" component={HomeScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ }) => (
                <Image source={require("./assets/icons/home-run.png")} />
              )
            }}
          />

          <Tab.Screen name="Tasks" component={TaskDashboardNav}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ }) => (
                <Image source={require("./assets/icons/notepad.png")} />
              )
            }}

          />
          <Tab.Screen name="Rewards" component={RewardsScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ }) => (
                <Image source={require("./assets/icons/birthday-and-party.png")} />
              )
            }}
          />

          <Tab.Screen name="Profile" component={ProfileScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ }) => (
                <Image source={require("./assets/icons/user.png")} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  title: {
    fontFamily: "DidactGothic-Regular",
    fontSize: 30,
    lineHeight: 39,
    marginLeft: 30,
    marginTop: 60,
  },
  firstbutton: {
    marginTop: 50,
    alignSelf: 'center',
  },
  buttons: {
    marginTop: 30,
    alignSelf: 'center',
  },
  taskCategory: {
    fontFamily: "DidactGothic-Regular",
    fontSize: 40,
    lineHeight: 39,
    alignSelf: 'center',
    marginTop: 30,
    color: '#8AC6D1',
  },
  text: {
    fontFamily: "DidactGothic-Regular",
    fontSize: 28,
    textAlign: 'center',
    marginTop: 110,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  tasks: {
    fontFamily: "DidactGothic-Regular",
    fontSize: 28,
    textAlign: 'center',
    marginTop: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  text2: {
    fontFamily: "DidactGothic-Regular",
    fontSize: 28,
    textAlign: 'center',
    marginTop: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  image: {
    alignSelf: 'center', 
    marginTop: 60,
  }
})