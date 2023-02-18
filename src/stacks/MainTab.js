import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "../components/CustomTabBar";

import MainDrawer from './MainDrawer';
import BillpayDrawer from "./BillpayDrawer";
import ReceiveDrawer from "./ReceiveDrawer";
import HomeDrawer from "./HomeDrawer";
import AccountDrawer from "./AccountDrawer";

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false}} />
        <Tab.Screen name="ReceiveDrawer" component={ReceiveDrawer} options={{ headerShown: false}} />
        <Tab.Screen name="BillpayDrawer" component={BillpayDrawer} options={{ headerShown: false }}/>
        <Tab.Screen name="AccountDrawer" component={AccountDrawer} options={{ headerShown: false}} />
        <Tab.Screen name="MainDrawer" component={MainDrawer} options={{ headerShown: false }}/>
    </Tab.Navigator>
);
