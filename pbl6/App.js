import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from "./components/navigator/tabs";
import LoginScreen from "./components/login";

const App = () => {
  return (
    <NavigationContainer>
       <TabNavigator />  
        {/* <LoginScreen />   */}
    </NavigationContainer>
  );
}

export default App;