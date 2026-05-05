import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { LinearGradient } from 'expo-linear-gradient';

export default function DriverScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [pos, setPos] = useState(3); // Start as #3 in line

  // Simulating the Marshal moving the queue
  useEffect(() => {
    if (scanned && pos > 1) {
      const timer = setTimeout(() => {
        setPos(prev => prev - 1);
        Vibration.vibrate(100);
      }, 5000); // Moves up every 5 seconds for demo
      return () => clearTimeout(timer);
    }
  }, [scanned, pos]);

  if (!permission || !permission.granted) {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#0F172A', '#1E293B']} style={styles.background} />
        <TouchableOpacity style={styles.permissionBtn} onPress={requestPermission}>
          <Text style={styles.permissionBtnText}>START RANK CHECK-IN</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0F172A', '#1E293B']} style={styles.background} />

      {!scanned ? (
        <View style={styles.scannerContainer}>
          <Text style={styles.header}>SCAN MARSHAL QR</Text>
          <View style={styles.cameraWrapper}>
            <CameraView onBarcodeScanned={() => setScanned(true)} style={styles.camera} />
          </View>
          <Text style={styles.guideText}>Must be at the rank to join the line</Text>
        </View>
      ) : (
        <View style={styles.queueContainer}>
          {/* Change color based on status */}
          <LinearGradient 
            colors={pos === 1 ? ['rgba(16, 185, 129, 0.2)', 'transparent'] : ['rgba(56, 189, 248, 0.1)', 'transparent']} 
            style={styles.glow} 
          />
          
          <Text style={styles.statusLabel}>
            {pos === 1 ? "⚠️ PROCEED TO LOADING BAY" : "CURRENT POSITION"}
          </Text>
          
          <Text style={[styles.posNum, pos === 1 && {color: '#10B981'}]}>
            {pos === 1 ? "NEXT" : `#${pos}`}
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardMain}>
              {pos === 1 ? "STAY NEAR VEHICLE" : "RELAX - YOU ARE IN QUEUE"}
            </Text>
            <Text style={styles.cardSub}>Rank: Kimberley Central</Text>
          </View>

          {pos === 1 && (
             <View style={styles.alertBox}>
                <Text style={styles.alertText}>The Marshal is ready for you. Move your taxi to the front.</Text>
             </View>
          )}

          <TouchableOpacity style={styles.exitBtn} onPress={() => {setScanned(false); setPos(3);}}>
            <Text style={styles.exitText}>LEAVE QUEUE</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  background: { position: 'absolute', height: '100%', width: '100%' },
  permissionBtn: { backgroundColor: '#38BDF8', padding: 20, borderRadius: 15, marginTop: 100, alignSelf: 'center' },
  permissionBtnText: { color: '#0F172A', fontWeight: '900' },
  scannerContainer: { flex: 1, alignItems: 'center', paddingTop: 80 },
  header: { color: '#FFF', fontSize: 24, fontWeight: '900', marginBottom: 40 },
  cameraWrapper: { width: 280, height: 280, borderRadius: 40, overflow: 'hidden', borderWidth: 2, borderColor: '#38BDF8' },
  camera: { flex: 1 },
  guideText: { color: '#64748B', marginTop: 30 },
  queueContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 },
  glow: { position: 'absolute', top: 0, width: '100%', height: '50%' },
  statusLabel: { color: '#38BDF8', fontWeight: '800', letterSpacing: 2, textAlign: 'center' },
  posNum: { color: '#FFF', fontSize: 120, fontWeight: '900' },
  card: { backgroundColor: '#1E293B', width: '100%', padding: 25, borderRadius: 25, alignItems: 'center', borderWidth: 1, borderColor: '#334155' },
  cardMain: { color: '#FFF', fontWeight: '800', textAlign: 'center' },
  cardSub: { color: '#64748B', marginTop: 5 },
  alertBox: { backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: 15, borderRadius: 15, marginTop: 20, borderWidth: 1, borderColor: '#10B981' },
  alertText: { color: '#10B981', textAlign: 'center', fontSize: 12, fontWeight: '600' },
  exitBtn: { marginTop: 40 },
  exitText: { color: '#EF4444', fontWeight: '800' }
});