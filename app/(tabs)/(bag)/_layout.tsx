import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function BagLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => (
            <View style={{ height: 60, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18 }}>My Bag</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="checkout"
        options={{
          header: () => (
            <View style={{ height: 60, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18 }}>Checkout</Text>
            </View>
          ),
        }}
      />
    </Stack>
  );
}