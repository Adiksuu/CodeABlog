import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Cards from './Cards';
import Informations from './Informations';
import { Entypo, FontAwesome } from '@expo/vector-icons/build/Icons';
import TabIcon from '../components/TabIcon';
import Profile from './Profile';
import { pureBlack, pureWhite } from '../utility/colors';
import { auth, database } from '../database';
import Comments from './Comments';

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
        borderRadius: 15,
        borderTopWidth: 0,
    }
};

export default function Navigator() {
    const createStack = (initialRoute, additionalScreens = []) => {
        return () => (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={initialRoute.name} component={initialRoute.component} />
                {additionalScreens.map(({ name, component }) => (
                    <Stack.Screen key={name} name={name} component={component} options={{
                        animationTypeForReplace: 'push',
                        animation: 'slide_from_right',
                    }} />
                ))}
            </Stack.Navigator>
        );
    };
    
    const tabs = [
        {
            name: "HomeTab",
            stack: createStack({ name: "Home", component: Home }, [
                { name: "Comments", component: Comments },
                { name: "Cards", component: Cards }
            ]),
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

    const [darkmode, setDarkmode] = useState(false)
    useEffect(() => {
        setInterval(async () => {
            if (!auth.currentUser) {
                setDarkmode(false)
                return
            }

            const snapshot = await database.ref(`users/${auth.currentUser.uid}/`).once('value')
            setDarkmode(snapshot.val().darkmode)

        }, 100);
    }, [])

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{...options, tabBarStyle: {...options.tabBarStyle, backgroundColor: darkmode ? pureBlack : pureWhite}}}>
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