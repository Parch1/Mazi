import * as React from 'react';
import { ScrollView, TouchableOpacity, Image, StyleSheet, Text, View, TabBarIOSItem } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import CountdownCircle from './components/CountdownTimer' // can make your own file and import from that
import QuarantineTimer from './components/QuarantineTimer'

// import "./styles.css"; Refactor by migrating styles later

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

      <Image style={{ alignSelf: 'center', marginTop: 110 }} source={require("./assets/ui/homescreen.png")} />

      <Text style={{
        fontFamily: "DidactGothic-Regular",
        fontSize: 45,
        lineHeight: 44,
        textAlign: 'center',
        marginTop: 50,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 5 },
        textShadowRadius: 6,
      }}>
        welcome, Ryan!</Text>

        <Text style={styles.tasks}>You have eight tasks available</Text>
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

      <Stack.Screen name="TaskScreen" component={TaskScreen} />

      <Stack.Screen name="RewardsScreen" component={RewardsScreen} />

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
    <View style={{ flex: 1, flexDirection: 'column', }}>
      <Text style={styles.title}>Mazi</Text>
      <Text style={styles.taskCategory}>Fitness</Text>

      <ScrollView persistentScrollbar={true}>
        <Text style={styles.tasks2}>Complete tasks to earn points!</Text>

        <TouchableOpacity
          style={styles.firstbutton}
          onPress={() => navigation.navigate("TaskScreen")}
        >
          <Image source={require("./assets/ui/tasks/task1.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("TaskScreen")}
        >
          <Image source={require("./assets/ui/tasks/task2.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("TaskScreen")}
        >
          <Image source={require("./assets/ui/tasks/task3.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("TaskScreen")}
        >
          <Image source={require("./assets/ui/tasks/task4.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("TaskScreen")}
        >
          <Image source={require("./assets/ui/tasks/task5.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("TaskScreen")}
        >
          <Image source={require("./assets/ui/tasks/task6.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("TaskScreen")}
        >
          <Image source={require("./assets/ui/tasks/task7.png")} />
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

function QuarantineTask({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={styles.title}>Mazi</Text>

      <Text style={styles.taskCategory}>Quarantine</Text>
      <Text style={styles.tasks}>Stay indoors for this duration</Text>

      <QuarantineTimer style={{marginTop: 120}}
        until={86400}
        onFinish={() => alert('Your quarantine is over! You earned 120 points!')}
        onPress={() => alert("Don't give up! You're on your way to earning 120 points!")}
        size={40}
      />
      
      <Image style={{marginTop: 60, alignSelf: 'center', marginRight: 20,}} source={require("./assets/ui/tasks/quarantine.png")} />

    </View>
  );
}

function TaskScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={styles.title}>Mazi</Text>

      <Text style={styles.taskTitle}>20 Push Ups</Text>

      <CountdownCircle
        seconds={25}
        radius={140}
        borderWidth={25}
        color="#beebe9"
        bgColor="#fff"
        shadowColor="#ffe3ed"
        textStyle={{ fontSize: 70, fontFamily: "DidactGothic-Regular", }}
        onTimeElapsed={() => navigation.navigate("TaskDashboard")}
      />

      <Image style={{ alignSelf: 'center', marginRight: 10, marginTop: 30 }} source={require("./assets/ui/points.png")} />

    </View>
  );
}

function RewardsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column', }}>
      <ScrollView persistentScrollbar={true}>

        <View style={containerStyle.headerContainer}>
          <Text style={styles.rewardTitle}>Mazi</Text>
          <TouchableOpacity>
            <Image style={{ marginLeft: 130, marginTop: 57 }} source={require("./assets/ui/rewardsnav.png")} />
          </TouchableOpacity>

        </View>
        <Text style={styles.tasks}>Use points to claim rewards!</Text>

        <View style={containerStyle.rowContainer}>
          <TouchableOpacity
            style={styles.firstbutton}
          >
            <Image source={require("./assets/ui/rewards/reward1.png")} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.firstbutton}
          >
            <Image source={require("./assets/ui/rewards/reward8.png")} />
          </TouchableOpacity>
        </View>

        <View style={containerStyle.rowContainer}>
          <TouchableOpacity
            style={styles.firstbutton}
          >
            <Image source={require("./assets/ui/rewards/reward6.png")} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.firstbutton}
          >
            <Image source={require("./assets/ui/rewards/reward5.png")} />
          </TouchableOpacity>
        </View>

        <View style={containerStyle.rowContainer}>
          <TouchableOpacity
            style={styles.firstbutton}
          >
            <Image source={require("./assets/ui/rewards/reward7.png")} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.firstbutton}
          >
            <Image source={require("./assets/ui/rewards/reward3.png")} />
          </TouchableOpacity>
        </View>

        <View style={containerStyle.rowContainer}>
          <TouchableOpacity
            style={styles.firstbutton}
          >
            <Image source={require("./assets/ui/rewards/reward4.png")} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.firstbutton}
          >
            <Image source={require("./assets/ui/rewards/reward2.png")} />
          </TouchableOpacity>
        </View>

        <View style={containerStyle.rowContainer}>
          <TouchableOpacity
            style={styles.firstbutton}
          >
            <Image source={require("./assets/ui/rewards/reward1.png")} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.firstbutton}
          >
            <Image source={require("./assets/ui/rewards/reward8.png")} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column', }}>
      <Text style={styles.title}>Mazi</Text>

      <Image style={{ alignSelf: 'center', marginTop: 60, marginRight: 40, }} source={require("./assets/ui/profile.png")} />

      <TouchableOpacity>
        <Image style={{ alignSelf: 'center', marginTop: 40 }} source={require("./assets/ui/invite.png")}></Image>
      </TouchableOpacity>
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
    marginTop: 48,
    alignSelf: 'center',
  },
  buttons: {
    marginTop: 30,
    alignSelf: 'center',
    marginBottom: 5,
  },
  taskCategory: {
    fontFamily: "DidactGothic-Regular",
    fontSize: 40,
    lineHeight: 39,
    alignSelf: 'center',
    marginTop: 30,
    color: '#8AC6D1',
  },
  taskTitle: {
    fontFamily: "DidactGothic-Regular",
    fontSize: 46,
    lineHeight: 48,
    alignSelf: 'center',
    marginTop: 50,
    color: '#82BCC7',
  },
  rewardTitle: {
    fontFamily: "DidactGothic-Regular",
    fontSize: 30,
    lineHeight: 39,
    marginLeft: 30,
    marginTop: 60,
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
  tasks2: {
    fontFamily: "DidactGothic-Regular",
    fontSize: 25,
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
    resizeMode: 'contain',
    flex: 1,
  }
})

const containerStyle = StyleSheet.create({
  container: {
    padding: 6,
    backgroundColor: "#ffffff",
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 2,
    paddingHorizontal: 25,
  },
  headerContainer: {
    flexDirection: 'row',
    flex: 2,
  },
});

