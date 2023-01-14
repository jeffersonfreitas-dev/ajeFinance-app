import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home";

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
);
