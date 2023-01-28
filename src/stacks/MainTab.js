import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "../components/CustomTabBar";

import HomeScreen from "../screens/Home";
import Billpay from "../screens/Billpay";
import Receive from "../screens/Receive";
import Transfer from "../screens/Transfer";
import MainDrawer from './MainDrawer';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Billpay" component={Billpay} />
        <Tab.Screen name="Receive" component={Receive} />
        <Tab.Screen name="Transfer" component={Transfer} />
        <Tab.Screen name="MainDrawer" component={MainDrawer} options={{ headerShown: false }}/>
    </Tab.Navigator>
);
