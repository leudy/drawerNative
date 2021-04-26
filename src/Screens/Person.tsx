import React from 'react'
import { Text, View } from 'react-native';
interface IPerson{
    Name : string,
    LastName: string
}
export const Person = (props: IPerson) => {
    return (
        <View>
            <Text>Person Page</Text>
        </View>
    )
}
