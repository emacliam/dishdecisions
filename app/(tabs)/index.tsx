import { router } from 'expo-router'
import { FlatList } from 'react-native'
import { Button, Card, Image, ScrollView, Text, View, XStack } from 'tamagui'

export default function TabOneScreen() {

  const dishes = [
    {
      name: "Cold Sandwich",
      img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Guacamole-1-2-200x200.jpg"
    },
    {
      name: "Smoothie Bowl",
      img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/11/Lentil-Soup-13-200x200.jpg"
    },
    {
      name: "Greek Salad",
      img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-6-1.jpg"
    }
  ]
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View flex={1} px={15}>
        <Text mt={10} fontSize={20}>Todays Temperature</Text>
        <Text my={30} fontSize={35} textAlign='center' fontWeight={"800"} color={"$blue11"}>31°C</Text>
        <XStack alignItems='center' justifyContent='space-between'>
          <Text fontSize={20}>Optimal dishes for today:</Text>
        </XStack>
        <View mt={10}>
          <FlatList ItemSeparatorComponent={() => { return (<></>) }} contentContainerStyle={{ gap: 10 }} data={dishes} showsVerticalScrollIndicator={false} horizontal={true} renderItem={({ item, index }) => {

            return (
              <Card key={index} bg={"$gray8"} p={10} >
                <Text mt={10} fontSize={20}>{item.name}</Text>
                <Image mt={10} borderRadius={10} w={100} h={100} src={item.img} alignSelf='center'></Image>
                <Button mt={10} borderRadius={30} bg={"$blue11"} color={"white"}>View</Button>
              </Card>

            )
          }}>

          </FlatList>
        </View>
        <Text mt={30} fontSize={20}>Recommended Inventory</Text>
        <Button onPress={() => {
          router.push('/inventory')
        }} mt={10} borderRadius={30} bg={"$blue11"} color={"white"}>View Inventory Levels</Button>

      </View>
    </ScrollView>

  )
}
