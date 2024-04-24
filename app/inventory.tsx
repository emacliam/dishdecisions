import { FlatList } from 'react-native'
import { Button, Card, Image, ScrollView, Text, View, XStack, Paragraph, Label } from 'tamagui'
import { useState } from 'react';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
export default function Inventory() {

    const dishes = [
        {
            name: "Cold Sandwich",
            img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Guacamole-1-2-200x200.jpg",
            amount: 10
        },
        {
            name: "Smoothie Bowl",
            img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/11/Lentil-Soup-13-200x200.jpg",
            amount: 11
        },
        {
            name: "Greek Salad",
            img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-6-1.jpg",
            amount: 12
        }
    ]

    const barData = [
        { value: 250, label: 'Mon', labelTextStyle: { color: "gray", fontWeight: "500" } },
        { value: 500, label: 'Tue', labelTextStyle: { color: "gray", fontWeight: "500" } },
        { value: 745, label: 'Wed', labelTextStyle: { color: "gray", fontWeight: "500" } },
        { value: 320, label: 'Tue', labelTextStyle: { color: "gray", fontWeight: "500" } },
        { value: 600, label: 'Fri', labelTextStyle: { color: "gray", fontWeight: "500" } },
        { value: 256, label: 'Sat', labelTextStyle: { color: "gray", fontWeight: "500" } },
        { value: 300, label: 'Sun', labelTextStyle: { color: "gray", fontWeight: "500" } },
    ];

    const [data, setData] = useState(barData);



    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View flex={1} px={15}>
                <Text mt={10} fontSize={20} fontWeight={"800"}>Inventory Overview</Text>

                <View flex={1} mx={30} w={'100%'}>
                    <XStack ai="center" mt={30} alignItems='center' alignContent='center' justifyContent='space-between'>


                        <Label f={1} fb={0}>
                            <Text alignSelf="flex-start" fontSize={18} fontWeight={"700"}>Current Stock Levels</Text>
                        </Label>

                    </XStack>
                    <Paragraph color={"$gray10"}>
                        Select bar to view daily stock
                    </Paragraph>
                    <View left={-40} mt={10}>
                        <BarChart

                            barWidth={28}
                            xAxisThickness={1}
                            xAxisColor={"blue"}
                            noOfSections={1}
                            height={150}
                            yAxisOffset={10}
                            showYAxisIndices={false}
                            barBorderRadius={4}
                            frontColor="blue"
                            isAnimated
                            maxValue={1000}
                            data={data}
                            roundedBottom={false}
                            barBorderBottomLeftRadius={0}
                            barBorderBottomRightRadius={0}
                            dashGap={1000}
                            //onPress={handleFocus}

                            focusBarOnPress={true}
                            initialSpacing={10}
                            leftShiftForTooltip={11}
                            leftShiftForLastIndexTooltip={11}
                            focusedBarConfig={
                                {
                                    color: "#1ca655",
                                    width: 30,

                                }
                            }
                            renderTooltip={(item: any, index: number) => (


                                <View bottom={3} bg={"green"} borderRadius={5} padding={4}>
                                    <Paragraph size="$1" lineHeight="$1" color={"white"}>
                                        {item.value}
                                    </Paragraph>


                                </View>



                            )}


                        />

                    </View>

                </View>
                <Text mt={30} fontSize={20}>Recommended Inventory List</Text>
                <View mt={10}>
                    <FlatList contentContainerStyle={{ gap: 10 }} data={dishes} showsVerticalScrollIndicator={false} renderItem={({ item, index }) => {

                        return (
                            <Card key={index} bg={"$gray8"} p={10} >
                                <XStack alignItems='center' gap={10}>
                                    <Image mt={10} borderRadius={10} w={50} h={50} src={item.img} alignSelf='center'></Image>
                                    <Text mt={10} fontSize={15}>{item.name}</Text>
                                    <Text mt={10} bg={"$green10Light"} borderRadius={30} px={10} color={"white"} fontSize={15}>{item.amount} Items Available</Text>

                                </XStack>
                            </Card>

                        )
                    }}>
                    </FlatList>
                </View>


            </View>
        </ScrollView>

    )
}
