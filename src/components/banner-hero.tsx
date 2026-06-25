import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { ActionType, BannerItem } from '@/types/campaign';
import useTheme from '@/hooks/useTheme';
import { handleAction } from '@/sdui/action-dispatcher';

interface BannerHeroProps {
    data: BannerItem[];
    action: ActionType;
}

const { width } = Dimensions.get('window');

const BannerHeroComponent: React.FC<BannerHeroProps> = ({ data, action }) => {
    const { theme } = useTheme()
    
    const handlePress = () => {
        handleAction({type: 'DEEP_LINK', payload: data[0]})
    };

    const styles = StyleSheet.create({
        container: { width: width - 32, height: 180, alignSelf: 'center', borderRadius: 16, overflow: 'hidden', position: 'relative' },
        image: { width: '100%', height: '100%', resizeMode: 'cover' },
        overlay: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(0,0,0,0.25)', justifyContent: 'flex-end', padding: 16 },
        title: {
            position: 'absolute',
            top: 80,
            left: 20,
            color: theme.primary,
            fontSize: 20,
            fontWeight: 'bold'
        },
        button: {
            position: 'absolute',
            bottom: 20,
            left: 20,
            alignItems: 'center',
            backgroundColor: theme.primary,
            paddingHorizontal: 24,
            paddingVertical: 10,
            borderRadius: 24,
        },
    });
    return (
        <View style={styles.container}>
            <Image source={{ uri: data[0].image.uri }} style={styles.image} />
            <View style={styles.overlay}>
                <Text style={styles.title}>{data[0].title}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text>{data[0].cta}</Text>
            </TouchableOpacity>
        </View>
    );
};



export default memo(BannerHeroComponent);