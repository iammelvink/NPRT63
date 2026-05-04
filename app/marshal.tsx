import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Vibration 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MarshalScreen() {
  const [viewMode, setViewMode] = useState<'LOG' | 'CHECKIN'>('LOG');
  const [capacity, setCapacity] = useState(15); 
  const [currentLoad, setCurrentLoad] = useState(0);
  const [activeQueue, setActiveQueue] = useState([
    { id: 1, driver: 'S. Kumalo', reg: 'GP 44 KK', status: 'Loading' },
    { id: 2, driver: 'J. Sithole', reg: 'NC 12 BB', status: 'Waiting' },
    { id: 3, driver: 'P. Dube', reg: 'NW 99 LL', status: 'Waiting' },
  ]);

  const handleDispatch = () => {
    Vibration.vibrate([0, 200, 100, 200]);
    Alert.alert("🚀 DISPATCHED", `Taxi ${activeQueue[0].reg} is full and moving.`);
    // Move the queue up
    const newQueue = [...activeQueue];
    newQueue.shift(); // Remove the finished taxi
    setActiveQueue(newQueue);
    setCurrentLoad(0);
  };

  const skipDriver = () => {
    Alert.alert("Skip Driver?", "Driver is not responding. Move to next in line?", [
      { text: "Cancel" },
      { text: "SKIP", onPress: () => {
        const newQueue = [...activeQueue];
        const skipped = newQueue.shift();
        if(skipped) newQueue.push(skipped); // Move them to the back
        setActiveQueue(newQueue);
        setCurrentLoad(0);
      }}
    ]);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0F172A', '#1E293B']} style={styles.background} />
      
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => setViewMode('LOG')} style={[styles.navTab, viewMode === 'LOG' && styles.navTabActive]}>
          <Text style={styles.navText}>LOAD CONTROL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setViewMode('CHECKIN')} style={[styles.navTab, viewMode === 'CHECKIN' && styles.navTabActive]}>
          <Text style={styles.navText}>QUEUE ADMIN</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {viewMode === 'LOG' ? (
          <>
            <View style={styles.monitorCard}>
              <Text style={styles.monitorLabel}>LOADING: {activeQueue[0]?.reg || 'EMPTY'}</Text>
              <Text style={styles.countMain}>{currentLoad}<Text style={styles.countTotal}>/{capacity}</Text></Text>
              <View style={styles.barBg}><View style={[styles.barFill, { width: `${(currentLoad/capacity)*100}%` }]} /></View>
            </View>

            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.addBtn} onPress={() => {
                if(currentLoad < capacity) setCurrentLoad(prev => prev + 1);
                if(currentLoad + 1 === capacity) handleDispatch();
              }}>
                <Text style={styles.btnText}>+ LOG PASSENGER</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.skipBtn} onPress={skipDriver}>
                <Text style={styles.skipBtnText}>SKIP / NO-SHOW</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>UP NEXT IN LINE</Text>
            {activeQueue.slice(1).map((item, index) => (
              <View key={item.id} style={styles.queueItem}>
                <Text style={styles.queuePos}>#{index + 2}</Text>
                <View>
                  <Text style={styles.queueDriver}>{item.driver}</Text>
                  <Text style={styles.queueReg}>{item.reg}</Text>
                </View>
                <View style={styles.statusBadge}><Text style={styles.statusText}>WAITING</Text></View>
              </View>
            ))}
          </>
        ) : (
          <View style={styles.qrContainer}>
             <Text style={styles.qrHeader}>STATIONARY QR</Text>
             <View style={styles.qrGraphic}><Text style={{fontWeight:'900'}}>SCAN TO BOOK</Text></View>
             <Text style={styles.qrSub}>Total Taxis at Rank: {activeQueue.length}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  background: { position: 'absolute', height: '100%', width: '100%' },
  topNav: { flexDirection: 'row', paddingTop: 60, paddingHorizontal: 20, gap: 10 },
  navTab: { flex: 1, paddingVertical: 12, alignItems: 'center', borderRadius: 12, backgroundColor: '#1E293B' },
  navTabActive: { backgroundColor: '#38BDF8' },
  navText: { color: '#FFF', fontWeight: '900', fontSize: 10 },
  scrollContainer: { padding: 24 },
  monitorCard: { backgroundColor: 'rgba(30, 41, 59, 0.8)', borderRadius: 30, padding: 30, alignItems: 'center', marginBottom: 20 },
  monitorLabel: { color: '#38BDF8', fontSize: 10, fontWeight: '800' },
  countMain: { color: '#FFF', fontSize: 64, fontWeight: '900' },
  countTotal: { color: '#475569', fontSize: 24 },
  barBg: { width: '100%', height: 8, backgroundColor: '#0F172A', borderRadius: 4, marginTop: 10 },
  barFill: { height: '100%', backgroundColor: '#10B981' },
  actionRow: { flexDirection: 'row', gap: 10, marginBottom: 30 },
  addBtn: { flex: 2, backgroundColor: '#38BDF8', height: 60, borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
  skipBtn: { flex: 1, borderHeight: 1, borderColor: '#EF4444', borderWidth: 1, borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
  btnText: { color: '#0F172A', fontWeight: '900' },
  skipBtnText: { color: '#EF4444', fontWeight: '700', fontSize: 10 },
  sectionTitle: { color: '#64748B', fontWeight: '800', fontSize: 12, marginBottom: 15 },
  queueItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1E293B', padding: 15, borderRadius: 15, marginBottom: 10 },
  queuePos: { color: '#38BDF8', fontSize: 20, fontWeight: '900', width: 50 },
  queueDriver: { color: '#FFF', fontWeight: '700' },
  queueReg: { color: '#64748B', fontSize: 12 },
  statusBadge: { marginLeft: 'auto', backgroundColor: 'rgba(56,189,248,0.1)', padding: 6, borderRadius: 8 },
  statusText: { color: '#38BDF8', fontSize: 8, fontWeight: '900' },
  qrContainer: { alignItems: 'center', marginTop: 40 },
  qrHeader: { color: '#FFF', fontSize: 20, fontWeight: '900' },
  qrGraphic: { width: 200, height: 200, backgroundColor: '#FFF', marginVertical: 30, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  qrSub: { color: '#94A3B8' }
});