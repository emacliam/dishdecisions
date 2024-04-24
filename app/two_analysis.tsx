import { FlatList } from 'react-native'
import { Button, Card, Image, ScrollView, Text, View, XStack, Paragraph, Label } from 'tamagui'
import { useState, useEffect } from 'react';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'

export default function Analysis_Two() {

    const params = useLocalSearchParams()
    console.log("params", params)

    const dishes = [
        {
            name: "Cold Sandwich",
            img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Guacamole-1-2-200x200.jpg",
            amount: 10,
            location: "5 Avenue"
        },
        {
            name: "Smoothie Bowl",
            img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/11/Lentil-Soup-13-200x200.jpg",
            amount: 11,
            location: "5 Avenue"
        },
        {
            name: "Greek Salad",
            img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-6-1.jpg",
            amount: 12,
            location: "5 Avenue"
        },
        {
            name: "Smoothie Bowl",
            img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/11/Lentil-Soup-13-200x200.jpg",
            amount: 11,
            location: "Joina City"
        }
    ]




    return (

        <View flex={1} px={15}>
            <XStack mt={30} alignItems='center' justifyContent='space-between'>
                <Text fontSize={20}>Order Locations</Text>
                <Button borderRadius={30} bg={"$blue11"} color={"white"}>Analyse Areas</Button>
            </XStack>
            <Text mt={10} fontSize={15} color={"$gray11"}>Note: Locations at the top have high customer demand</Text>
            <View mt={30}>
                <FlatList contentContainerStyle={{ gap: 10 }} data={Object.entries(params).map(([location, count]) => ({ location, count }))} showsVerticalScrollIndicator={false} renderItem={({ item, index }) => {
                    console.log("ssss", item)
                    return (
                        <Card key={index} bg={"$gray8"} p={10} >
                            <XStack alignItems='center' gap={10}>
                                <MaterialIcons name="location-pin" size={24} color={"green"} />
                                <Text fontSize={15}>{item.location}</Text>
                                <Text bg={"$green10Light"} borderRadius={30} px={10} color={"white"} fontSize={15}>{item.count} Orders</Text>

                            </XStack>
                        </Card>

                    )
                }}>
                </FlatList>
            </View>

        </View >


    )
}
