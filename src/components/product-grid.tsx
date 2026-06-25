import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import ProductCard from './product-card';
import { ActionType, Product, ProductGrid } from '@/types/campaign';

interface ProductGridProps {
  title?: string
  data: Product[],
  action: ActionType
}

const ProductGridComponent: React.FC<ProductGridProps> = ({ data }) => {
  return (
    <View style={styles.gridContainer}>
      {data.map((product) => (
        <View key={product.id} style={styles.gridItem}>
          <ProductCard action={'ADD_TO_CART'} product={product} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, justifyContent: 'space-between' },
  gridItem: { width: '50%', padding: 6, alignItems: 'center' },
});

export default memo(ProductGridComponent);