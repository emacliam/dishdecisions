import { Link, Tabs } from 'expo-router'
import { Pressable } from 'react-native'
import { Avatar, Text, Image } from 'tamagui'
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '600'
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
          headerRight: () => (


            <Avatar circular size={48} mr={10}>
              <Avatar.Image src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZ0aWNhbiUyMG1hbiUyMHBob3RvfGVufDB8fDB8fHww" />
              <Avatar.Fallback bc="green" />
            </Avatar>

          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color }) => <MaterialIcons name="reorder" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Insights',
          tabBarIcon: ({ color }) => <MaterialIcons name="insights" size={24} color={color} />,
        }}
      />
    </Tabs>
  )
}
