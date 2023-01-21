import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PreloadScreen from "../screens/Preload";
import SignUpScreen from "../screens/SignUp/";
import SignInScreen from "../screens/SignIn/";
import MainTab from './MainTab';
import MainDrawer from './MainDrawer';

const Stack = createNativeStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={
            {
                headerShown: false,
                headerStyle: {backgroundColor: "#9AC4F8"},
                headerTintColor: "white",
                headerBackTitle: "Back"
            }
        }
    >
        <Stack.Screen name="Preload" component={PreloadScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="MainTab" component={MainTab}/>
        <Stack.Screen name="MainDrawer" component={MainDrawer}/>
    </Stack.Navigator>
);