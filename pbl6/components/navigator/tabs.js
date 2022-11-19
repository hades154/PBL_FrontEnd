import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import DetailPage from '../detail';
import HomePage from '../home';
import PersonPage from '../person';
import SearchPage from '../search';
import CartPage from '../cart';

import { Button,Text,StyleSheet,TouchableOpacity, View, TextInput} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerTitle:() =>(
            <View
            style={{
            width:330,

            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginLeft:10,
            
            marginTop:5,
            backgroundColor: "#fff",
            opacity: 0.5,
           }}>
           <Feather
            name="search"
            size={25}
            color="#fff"
            style={{marginRight: 5}}
           />
           <TextInput placeholder="Search" style={{color:"#fff",}} />
           <TouchableOpacity style={{marginLeft: 'auto'}}>
           <Feather
            name="camera"
            size={25}
            color="#fff"
            style={{}}
           />    
           </TouchableOpacity>
         </View>
          ),
          headerRight: () => (
            <TouchableOpacity style={{position:'absolute',}}
            >
               <Ionicons name="cart-outline" color='#fff' size={25} />
            </TouchableOpacity>
            
          ),
          
          headerStyle: {
            backgroundColor: '#AD40AF',
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailPage}
        options={({route}) => ({
          headerShown:true,
          title: route.params?.title,
          headerStyle: {
            backgroundColor: '#AD40AF',
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#AD40AF',
        position: 'absolute',
        bottom: 5,
        left: 20,
        right: 20,
        elevation:5,
        borderRadius:15,
        height:60,
        ...styles.shadow,
    },
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
        
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#AD40AF',
            position: 'absolute',
            bottom: 5,
            left: 20,
            right: 20,
            elevation:5,
            borderRadius:15,
            height:60,
            ...styles.shadow,
          },
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Cart"
        component={CartPage}
        options={{
          headerTitle:"Cart",
          headerShown:true,
          headerStyle: {
            backgroundColor: '#AD40AF', 
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <Feather name="shopping-bag" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          headerTitle:"Add Post",
          headerShown:true,
          headerStyle: {
            backgroundColor: '#AD40AF', 
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({color, size}) => (
            <Ionicons name="add-circle-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Person"
        component={PersonPage}
        options={{
          headerTitle:"User info",
          headerShown:true,
          headerStyle: {
            backgroundColor: '#AD40AF',
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'GameDetails' ) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;

const styles = StyleSheet.create({
  shadow:{
      shadowColor:'#7F5DF0',
      shadowOffset:{
          width:0,
          height:10,
      },
      shadowOpacity:0.25,
      shadowRadius:3.5,
      elevation:5
  }
});

