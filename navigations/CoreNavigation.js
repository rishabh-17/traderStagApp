import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../pages/Login';
import SignupForm from '../pages/SignupForm';
import LoginForm from '../pages/LoginForm';
import HomePage from '../pages/HomePage';
import StartCourse from '../pages/StartCourse';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feeds from '../pages/Feeds';
import CourseIntro from '../pages/CourseIntro';
import CoursePage from '../pages/CoursePage';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function CoreNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Signin"
          component={LoginForm}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Signup"
          component={SignupForm}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomePage}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="StartCourse"
          component={StartCourse}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Feeds"
          component={Feeds}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="CourseIntro"
          component={CourseIntro}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="CoursePage"
          component={CoursePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export {CoreNavigation};
