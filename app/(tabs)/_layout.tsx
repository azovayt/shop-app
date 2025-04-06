import { Tabs } from 'expo-router';
import { getTabScreenOptions } from '../../src/components/TabBar';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#666666',
      }}
    >
      <Tabs.Screen name="index" options={getTabScreenOptions({ name: 'index', title: 'Home', iconName: 'home' })} />
      <Tabs.Screen name="categories" options={getTabScreenOptions({ name: 'categories', title: 'Categories', iconName: 'search' })} />
      <Tabs.Screen
        name="(bag)"
        options={getTabScreenOptions({ name: '(bag)', title: 'Bag', iconName: 'bag', headerShown: false })}
      />
      <Tabs.Screen name="favorites" options={getTabScreenOptions({ name: 'favorites', title: 'Favorites', iconName: 'heart' })} />
      <Tabs.Screen name="profile" options={getTabScreenOptions({ name: 'profile', title: 'Profile', iconName: 'person' })} />
    </Tabs>
  );
}