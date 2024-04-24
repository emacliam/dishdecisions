import { FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { Button, Card, Image, ScrollView, Text, View, XStack, Paragraph, Label } from 'tamagui'
import { useState, useEffect } from 'react';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'
import Mapbox from '@rnmapbox/maps';
import * as turf from '@turf/turf';

export default function Insight_Map() {

    const params = useLocalSearchParams()
    const [coordinates] = useState([31.023002078082527, -17.894407958223333]);
    Mapbox.setAccessToken("pk.eyJ1IjoiZW1hY2xpYW0iLCJhIjoiY2wxNHRpcGNiMGR1dzNla2FndWVpdmJxbyJ9.wnxGUxO6rO3CoGaKyuXbVA")


    const dishes = [
        {
            name: "Cold Sandwich",
            img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Guacamole-1-2-200x200.jpg",
            amount: 10,
            location: "5 Avenue",
            coordinates: [31.023002078082527, -17.894407958223333]
        },
        {
            name: "Smoothie Bowl",
            img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/11/Lentil-Soup-13-200x200.jpg",
            amount: 11,
            location: "Dominos",
            coordinates: [31.044315624485108, -17.84115087405672]
        },
        {
            name: "Greek Salad",
            img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-6-1.jpg",
            amount: 12,
            location: "5 Avenue",
            coordinates: [31.02944598271195, -17.892814964937276]
        },
        {
            name: "Smoothie Bowl",
            img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/11/Lentil-Soup-13-200x200.jpg",
            amount: 11,
            location: "Joina City",
            coordinates: [31.047031, -17.831696]
        },
        {
            name: "Greek Salad",
            img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-6-1.jpg",
            amount: 40,
            location: "Highland Park",
            coordinates: [31.099303897499762, -17.796835574781525]
        },
        {
            name: "Smoothie Bowl",
            img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/11/Lentil-Soup-13-200x200.jpg",
            amount: 3,
            location: "Joina City",
            coordinates: [31.047031, -17.831696]
        }
    ]


    const styles = StyleSheet.create({
        touchableContainer: { borderColor: 'black', borderWidth: 1.0, width: 60 },
        touchable: {
            backgroundColor: 'blue',
            width: 40,
            height: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
        },
        touchableText: {
            color: 'white',
            fontWeight: 'bold',
        },
        matchParent: { flex: 1 },
        circleColor: [
            'match',
            ['get', 'ethnicity'],
            'White',
            '#fbb03b',
            'Black',
            '#223b53',
            'Hispanic',
            '#e55e5e',
            'Asian',
            '#3bb2d0',
      /* other */ '#ccc',
        ],
    });


    const AnnotationContent = ({ title }: { title: string }) => (
        <View style={styles.touchableContainer}>
            <Text>{title}</Text>
            <TouchableOpacity style={styles.touchable}>
                <Text style={styles.touchableText}>Btn</Text>
            </TouchableOpacity>
        </View>
    );



    return (

        <View flex={1} px={15}>
            <XStack mt={30} alignItems='center' justifyContent='space-between'>
                <Text fontSize={20}>Order Locations</Text>

            </XStack>
            <Text mt={10} fontSize={15} color={"$gray11"}>Note: These are strategic locations with high demand</Text>
            <Mapbox.MapView style={{ flex: 1 }} >
                <Mapbox.Camera
                    defaultSettings={{
                        zoomLevel: 10,
                        centerCoordinate: coordinates,
                        pitch: 45,
                    }}
                />

                {dishes.map((item, index) => (
                    <Mapbox.PointAnnotation
                        coordinate={item.coordinates}
                        id={`pt-ann-${index}`}
                        key={`pt-ann-${index}`}
                    >

                    </Mapbox.PointAnnotation>
                ))}
                <Mapbox.VectorSource
                    id="population"
                    url={'mapbox://examples.8fgz4egr'}
                >
                    <Mapbox.CircleLayer
                        id="sf2010CircleFill"
                        sourceLayerID="sf2010"
                        style={styles.circles}
                    />
                </Mapbox.VectorSource>


            </Mapbox.MapView>

        </View >


    )
}
