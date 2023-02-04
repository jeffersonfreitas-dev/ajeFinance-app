import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Billpay from '../screens/Billpay';
import BillpayRegister from '../screens/Billpay/register';

const Drawer = createDrawerNavigator();

export default () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Billpay" component={Billpay} />
            <Drawer.Screen name="BillpayRegister" component={BillpayRegister} />
        </Drawer.Navigator>
    )
}

