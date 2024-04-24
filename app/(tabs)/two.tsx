import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Button, Card, Image, ScrollView, Text, View, XStack, Paragraph, Label } from 'tamagui'
import { useState, useEffect } from 'react';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { router } from 'expo-router';

export default function Orders() {

  const dishes = [
    {
      name: "Cold Sandwich",
      img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Guacamole-1-2-200x200.jpg",
      amount: 6,
      location: "5 Avenue"
    },
    {
      name: "Smoothie Bowl",
      img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/11/Lentil-Soup-13-200x200.jpg",
      amount: 4,
      location: "5 Avenue"
    },
    {
      name: "Greek Salad",
      img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-6-1.jpg",
      amount: 12,
      location: "5 Avenue"
    },
    {
      name: "Chicken Salad",
      img: "https://natashaskitchen.com/wp-content/uploads/2021/06/Chicken-Salad-4.jpg",
      amount: 11,
      location: "Joina City"
    },
    {
      name: "Pizza",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-51643_11-2f4a2cc.jpg?quality=90&webp=true&resize=300,272",
      amount: 10,
      location: "Highland Park"
    },
    {
      name: "Burger",
      img: "https://natashaskitchen.com/wp-content/uploads/2023/06/Cheeseburger-3.jpg",
      amount: 3,
      location: "Joina City"
    }
  ]


  const [locationCount, setLocationCounts] = useState([]);

  useEffect(() => {
    const countLocations = () => {
      const counts = {};
      dishes.forEach(item => {
        counts[item.location] = (counts[item.location] || 0) + 1;
      });
      return counts;
    };

    setLocationCounts(countLocations());
  }, []);



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View flex={1} px={15}>
        <Text mt={10} fontSize={15} color={"$gray11"}>Note: Analysing areas to view demand</Text>
        <XStack mt={30} alignItems='center' justifyContent='space-between'>
          <Text fontSize={20}>Weekly Orders</Text>
          <Button onPress={() => {
            console.log(locationCount)
            router.navigate({ pathname: "/two_analysis", params: locationCount })
          }} borderRadius={30} bg={"$blue11"} color={"white"}>Analyse Areas</Button>
        </XStack>
        <View mt={30}>
          <FlatList contentContainerStyle={{ gap: 10 }} data={dishes} showsVerticalScrollIndicator={false} renderItem={({ item, index }) => {

            return (
              <Card key={index} bg={"$gray8"} p={10} >
                <XStack alignItems='center' gap={10}>
                  <Image mt={10} borderRadius={10} w={50} h={50} src={item.img} alignSelf='center'></Image>
                  <Text mt={10} fontSize={15}>{item.name}</Text>
                  <Text mt={10} bg={"$green10Light"} borderRadius={30} px={10} color={"white"} fontSize={15}>${item.amount}</Text>

                </XStack>
                <Text mt={10} fontWeight={"700"} fontSize={15}>Location: {item.location}</Text>

              </Card>

            )
          }}>
          </FlatList>
        </View>


      </View>
    </ScrollView>

  )
}
