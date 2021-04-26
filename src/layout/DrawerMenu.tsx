import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { useWindowDimensions, View } from 'react-native'
import { Page1 } from '../Screens/Page1';
import { Page2 } from '../Screens/Page2';
import { Page3 } from '../Screens/Page3';

const Drawer  = createDrawerNavigator();
export const DrawerMenu = () => {

    const {width} = useWindowDimensions(); 
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='page1' component={Page1}></Drawer.Screen>
            <Drawer.Screen name='page2' component={Page2}></Drawer.Screen>
            <Drawer.Screen name='page3' component={Page3}></Drawer.Screen>

        </Drawer.Navigator>
    )
}
    