import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import HowToTradeScreen from './screens/HowToTradeScreen';
import SafetyTipsScreen from './screens/SafetyTipsScreen';
import SupportedCardsScreen from './screens/SupportedCardsScreen';
import FAQScreen from './screens/FAQScreen';
import SupportScreen from './screens/SupportScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#667eea',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="HomeTab" 
        component={HomeScreen}
        options={{ title: 'Giftcard Trader' }}
      />
    </Stack.Navigator>
  );
}

function HowToTradeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#667eea',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="HowToTradeTab" 
        component={HowToTradeScreen}
        options={{ title: 'How to Trade' }}
      />
    </Stack.Navigator>
  );
}

function SafetyStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#667eea',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="SafetyTab" 
        component={SafetyTipsScreen}
        options={{ title: 'Safety Tips' }}
      />
    </Stack.Navigator>
  );
}

function CardsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#667eea',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="CardsTab" 
        component={SupportedCardsScreen}
        options={{ title: 'Supported Cards' }}
      />
    </Stack.Navigator>
  );
}

function SupportStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#667eea',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="SupportTab" 
        component={SupportScreen}
        options={{ title: 'Support & More' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'HowToTrade') {
              iconName = focused ? 'swap-horizontal' : 'swap-horizontal-outline';
            } else if (route.name === 'Safety') {
              iconName = focused ? 'shield-checkmark' : 'shield-checkmark-outline';
            } else if (route.name === 'Cards') {
              iconName = focused ? 'card' : 'card-outline';
            } else if (route.name === 'MoreInfo') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#667eea',
          tabBarInactiveTintColor: '#999',
          headerShown: false,
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeStackNavigator}
          options={{ title: 'Home' }}
        />
        <Tab.Screen 
          name="HowToTrade" 
          component={HowToTradeStackNavigator}
          options={{ title: 'How to Trade' }}
        />
        <Tab.Screen 
          name="Safety" 
          component={SafetyStackNavigator}
          options={{ title: 'Safety' }}
        />
        <Tab.Screen 
          name="Cards" 
          component={CardsStackNavigator}
          options={{ title: 'Cards' }}
        />
        <Tab.Screen 
          name="MoreInfo" 
          component={SupportStackNavigator}
          options={{ title: 'More' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}