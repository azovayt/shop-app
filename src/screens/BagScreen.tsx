import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';

export default function BagScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bag Pages</Text>
      <Button
        title="Proceed to Checkout"
        onPress={() => navigation.navigate('checkout')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 10, 
},
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10 
},
});