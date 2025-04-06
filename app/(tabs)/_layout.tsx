import { View, Text, } from 'react-native';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#000000',
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    header: () => (
                        <View style={{ height: 60, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ fontSize: 18 }}>Home</Text>
                        </View>
                      ),
                    tabBarIcon: ({ color, size, focused }: { color: string; size: number; focused: boolean }) => (
                        <Icon
                            name={focused ? 'home' : 'home-outline'}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="categori"
                options={{
                    title: 'Categori',
                    header: () => (
                        <View style={{ height: 60, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ fontSize: 18 }}>Categori</Text>
                        </View>
                      ),
                    tabBarIcon: ({ color, size, focused }: { color: string; size: number; focused: boolean }) => (
                        <Icon
                            name={focused ? 'list' : 'list-outline'}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="(bag)"
                options={{
                    title: 'Bag',
                    header: () => (
                        <View style={{ height: 60, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ fontSize: 18 }}>Bag</Text>
                        </View>
                      ),
                    tabBarIcon: ({ color, size, focused }: { color: string; size: number; focused: boolean }) => (
                        <Icon
                            name={focused ? 'bag' : 'bag-outline'}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    title: 'Favorites',
                    header: () => (
                        <View style={{ height: 60, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ fontSize: 18 }}>Favorites</Text>
                        </View>
                      ),
                    tabBarIcon: ({ color, size, focused }: { color: string; size: number; focused: boolean }) => (
                        <Icon
                            name={focused ? 'heart' : 'heart-outline'}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    header: () => (
                        <View style={{ height: 60, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ fontSize: 18 }}>Profile</Text>
                        </View>
                      ),
                    tabBarIcon: ({ color, size, focused }: { color: string; size: number; focused: boolean }) => (
                        <Icon
                            name={focused ? 'person' : 'person-outline'}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}