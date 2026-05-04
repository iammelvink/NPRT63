import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native'; 
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding immediately
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    // Since we removed the custom font loading, 
    // we can hide the splash screen as soon as the layout mounts.
    SplashScreen.hideAsync();
  }, []);

  return (
    // Force DarkTheme to maintain the E-RANK "Elon Musk" aesthetic
    <ThemeProvider value={DarkTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Main Entry point: app/index.tsx */}
        <Stack.Screen name="index" />
        
        {/* Role-Based Interfaces */}
        <Stack.Screen 
          name="driver" 
          options={{ animation: 'slide_from_right' }} 
        />
        <Stack.Screen 
          name="marshal" 
          options={{ animation: 'slide_from_bottom' }} 
        />
        <Stack.Screen 
          name="owner" 
          options={{ animation: 'fade' }} 
        />
        <Stack.Screen 
          name="passenger" 
          options={{ animation: 'slide_from_left' }} 
        />
        
        {/* Error/Fallback Page */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}