// MainFeed.tsx
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { UIBlock } from '@/types/campaign';
import { BlockRenderer } from '@/sdui/block-renderer';
import { useCampStore } from '@/store/camp-store';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '@/hooks/useTheme';
import { Button } from 'react-native';
import { useCartStore } from '@/store/cart-store';

export const MainFeed: React.FC = () => {
    const { campaign, changeCampaign } = useCampStore(state => state)
    const { blocks } = campaign
    const { cartItems } =  useCartStore(state => state)
    const { theme } = useTheme()

    const count = cartItems

    const getItemType = (item: UIBlock) => {
        return item.type;
    };

    const styles = StyleSheet.create({
        screen: { flex: 1 },
        header: { height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, backgroundColor: theme.background, borderBottomWidth: 1, borderBottomColor: theme.border },
        headerTitle: { textTransform: 'capitalize', fontSize: 22, fontWeight: '800', color: theme.primary },
        feedPadding: { paddingBottom: 32 },
        cartIcon: {
            fontSize: 24,
            backgroundColor: theme.border,
            borderRadius: 40,
            padding: 8
        }
    });

    return (
        <SafeAreaProvider >
            <SafeAreaView style={styles.screen}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>kiddo 👶</Text>
                    <Button
                        onPress={() => { changeCampaign() }}
                        title="Change Campaign"
                        color="#242cb6ff"
                        accessibilityLabel="Change Campaign"
                    />
                    <TouchableOpacity onPress={() => { alert('cart') }}>
                        <Text style={styles.cartIcon}>🛒</Text>
                        <Text numberOfLines={1} style={{ position: 'absolute', right: 6, bottom: 8, color: '#000', fontSize: 16, fontWeight: 600 }}>{count > 0 ? count: '' }</Text>
                    </TouchableOpacity>
                </View>
                <FlashList
                    data={blocks}
                    renderItem={({ item }) => <BlockRenderer block={item} />}
                    //estimatedItemSize={200} Average block layout height estimation
                    getItemType={getItemType}
                    keyExtractor={(item: UIBlock) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.feedPadding}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );


};

