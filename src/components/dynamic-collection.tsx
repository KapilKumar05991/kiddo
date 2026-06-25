import React, { memo } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProductCard from './product-card';
import { ActionType, Product } from '@/types/campaign';
import CollectionCard from './collection-card';

interface DynamicCollectionProps {
  title?: string
  data: Product[],
  action: ActionType
}

const DynamicCollectionComponent: React.FC<DynamicCollectionProps> = ({
  title, data, action }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CollectionCard product={item} action={action} />
        )}
        // Critical for smooth nested interaction boundaries
        removeClippedSubviews={true} 
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 8 },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginLeft: 16, marginBottom: 12, color: '#111' },
  listPadding: { paddingLeft: 16, paddingRight: 4 },
});

export default memo(DynamicCollectionComponent);