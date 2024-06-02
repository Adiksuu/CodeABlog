import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Cards from './Cards';
import Informations from './Informations';
import { Entypo, FontAwesome } from '@expo/vector-icons/build/Icons';
import TabIcon from '../components/TabIcon';
import Profile from './Profile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const options = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 20,
    right: 20,
    left: 20,
    elevation: 0,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderTopWidth: 0,
  }
};

export default function Navigator() {
    const createStack = (initialRoute, additionalScreens = {}) => {
        return () => (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={initialRoute.name} component={initialRoute.component} />
                {Object.entries(additionalScreens).map(([name, component]) => (
                    <Stack.Screen key={name} name={name} component={component} />
                ))}
            </Stack.Navigator>
        );
    };

    const tabs = [
        {
            name: "HomeTab",
            stack: createStack({ name: "Home", component: Home }, { Cards }),
            icon: { name: "home", component: Entypo }
        },
        {
            name: "InformationsTab",
            stack: createStack({ name: "Informations", component: Informations }),
            icon: { name: "info", component: FontAwesome }
        },
        {
            name: "ProfileTab",
            stack: createStack({ name: "Profile", component: Profile }),
            icon: { name: "user", component: FontAwesome }
        }
    ];

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={options}>
                {tabs.map(tab => (
                    <Tab.Screen
                        key={tab.name}
                        name={tab.name}
                        component={tab.stack}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <TabIcon
                                    name={tab.icon.name}
                                    label={tab.name.replace("Tab", "")}
                                    focused={focused}
                                    iconComponent={tab.icon.component}
                                />
                            )
                        }}
                    />
                ))}
            </Tab.Navigator>
        </NavigationContainer>
    );
}