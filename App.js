import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stacks/MainStack";

import UserContextProvider from "./src/contexts/UserContext";
import BillpayDrawer from './src/stacks/BillpayDrawer';

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <BillpayDrawer />
      </NavigationContainer>
    </UserContextProvider>
    );
}