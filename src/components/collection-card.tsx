import useTheme from '@/hooks/useTheme';
import { handleAction } from '@/sdui/action-dispatcher';
import { ActionType, Product } from '@/types/campaign';
import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface CollectionCard {
    product: Product
    action: ActionType
}

const CollectionCard: React.FC<CollectionCard> = ({ product, action }) => {
    const { theme } = useTheme()

    const onAddPress = () => {
        handleAction({ type: action, payload: product })
    };

    const styles = StyleSheet.create({
        card: { width: 140, padding: 12, borderRadius: 12, backgroundColor: theme.surface, marginRight: 12, borderWidth: 1, borderColor: theme.border, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
        imagePlaceholder: { width: '100%', height: 90, backgroundColor: '#f0f0f0', borderRadius: 8, marginBottom: 8 },
        name: { fontSize: 14, fontWeight: '600', color: '#333' },
        price: { fontSize: 13, color: theme.secondary, marginVertical: 4 },
        button: { backgroundColor: theme.primary, paddingVertical: 6, borderRadius: 6, alignItems: 'center' },
        buttonText: { fontSize: 12, fontWeight: '700' },
    });

    return (
        <View style={styles.card}>
            <Image alt={product.image.alt} source={{ uri: product.image.uri }} style={styles.imagePlaceholder} />
            <Text style={styles.name} numberOfLines={1}>{product.name}</Text>
            <TouchableOpacity onPress={onAddPress} style={styles.button} activeOpacity={0.7}>
                <Text style={styles.buttonText}>JUST ₹{product.price}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default memo(CollectionCard);