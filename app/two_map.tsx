import { FlatList } from 'react-native'
import { Button, Card, Image, ScrollView, Text, View, XStack, Paragraph, Label } from 'tamagui'
import { useState, useEffect } from 'react';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'
import Mapbox from '@rnmapbox/maps';

export default function Analysis_Two() {

    const params = useLocalSearchParams()
    const [coordinates] = useState([-79.999732, 40.4374]);




    return (

        <View flex={1} px={15}>
            <XStack mt={30} alignItems='center' justifyContent='space-between'>
                <Text fontSize={20}>Order Locations</Text>
                <Button borderRadius={30} bg={"$blue11"} color={"white"}>Analyse Areas</Button>
            </XStack>
            <Text mt={10} fontSize={15} color={"$gray11"}>Note: Locations at the top have high customer demand</Text>
            <Mapbox.MapView >
                <Mapbox.Camera
                    defaultSettings={{
                        zoomLevel: 10,
                        centerCoordinate: coordinates,
                    }}
                />

                <Mapbox.ShapeSource
                    id="earthquakes"
                    url="https://www.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
                >
                    <Mapbox.HeatmapLayer
                        id="earthquakes"
                        sourceID="earthquakes"
                        style={{
                            heatmapColor: [
                                'interpolate',
                                ['linear'],
                                ['heatmap-density'],
                                0,
                                'rgba(33,102,172,0)',
                                0.2,
                                'rgb(103,169,207)',
                                0.4,
                                'rgb(209,229,240)',
                                0.6,
                                'rgb(253,219,199)',
                                0.8,
                                'rgb(239,138,98)',
                                1,
                                'rgb(178,24,43)',
                            ],
                        }}
                    />
                </Mapbox.ShapeSource>
            </Mapbox.MapView>

        </View >


    )
}
