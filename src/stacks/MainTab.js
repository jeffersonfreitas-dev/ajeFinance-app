import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "../components/CustomTabBar";

import HomeScreen from "../screens/Home";
import Billpay from "../screens/Billpay";
import Receive from "../screens/Receive";

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Billpay" component={Billpay} />
        <Tab.Screen name="Receive" component={Receive} />
    </Tab.Navigator>
);
