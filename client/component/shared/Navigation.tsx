import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import Home from '../home/Home'
import My from '../my/My'
import Friend from '../friend/Friend'

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
				screenOptions={({ route }) => ({    
					// {focused,color,position}
					tabBarLabel: ({focused})=>focused&&<Text style={{color: '#fff', marginLeft: 20, fontWeight: '600'}}>{route.name}</Text>,
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name={iconName[route.name as keyof typeof iconName]} size={size} color={color} />;
          },
        })} 
				tabBarOptions={{
					activeTintColor: '#fff', 
					inactiveTintColor: 'gray',
					activeBackgroundColor: '#4f3c75',
					tabStyle: {borderRadius:50, margin: 5, padding: 5 },
					labelPosition: "beside-icon"
				}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Friend" component={Friend} />     
        <Tab.Screen name="My" component={My} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

const iconName = {
	Home: 'home-outline',
	My: 'person-outline',
	Friend: 'heart-outline'
}