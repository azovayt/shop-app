import { View, Text, FlatList, StyleSheet } from 'react-native';

const favorites = [
  { id: '1', name: 'Phone', price: 5000 },
  { id: '3', name: 'Headphones', price: 300 },
];

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - {item.price} USD</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 10 
},
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10 
},
  item: { 
    padding: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc'
 },
});