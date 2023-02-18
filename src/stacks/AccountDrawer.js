import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Account from '../screens/Account';
import BankAccount from "../screens/Account/BankAccount";


const Drawer = createDrawerNavigator();

export default () => {
    return (
        <Drawer.Navigator backBehavior='history'>
            <Drawer.Screen name="Account" component={Account} />
            <Drawer.Screen name="BankAccount" component={BankAccount} />
        </Drawer.Navigator>
    )
}

