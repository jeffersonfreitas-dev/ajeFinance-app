import React from 'react';
import {View, Button} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import Receive from '../screens/Receive';


function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  
const Drawer = createDrawerNavigator();

export default () => {
    return (
        <Drawer.Navigator backBehavior='history'>
            <Drawer.Screen name="Receive" component={Receive} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
    )
}

