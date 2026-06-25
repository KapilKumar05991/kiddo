import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { ThemeProvider } from '@/sdui/theme-context';
import { MainFeed } from '@/components/main-feed';
import { useCampStore } from '@/store/camp-store';

export default function HomeScreen() {
  const { campaign } = useCampStore()
  const { overlay } = campaign;

  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if(overlay && overlay.type === 'FULL_SCREEN') {
      setShowOverlay(true);
      setTimeout(() => {
        setShowOverlay(false);
      }, overlay.duration);
    }
  },[campaign])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: campaign.theme.background,
      color: campaign.theme.primary
    },
    overlayContainer: {
      ...StyleSheet.absoluteFill,
      zIndex: 999,
      elevation: 999,
    },
    lottie: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
  });

  return (
    <ThemeProvider initialTheme={campaign.theme}>
      <View style={styles.container}>
        <MainFeed />
        {showOverlay && overlay && (
          <View
            style={styles.overlayContainer}
            pointerEvents="none"
          >
            <LottieView
              source={{ uri: overlay.animation_url }}
              autoPlay
              duration={overlay.duration}
              loop={overlay.loop}
              style={styles.lottie}
              resizeMode="cover"
            />
          </View>
        )}

      </View>
    </ThemeProvider>
  );
};

