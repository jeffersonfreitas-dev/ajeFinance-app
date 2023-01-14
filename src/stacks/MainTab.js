import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "../components/CustomTabBar";

import HomeScreen from "../screens/Home";

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
);
