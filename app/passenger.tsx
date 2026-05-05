import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert, Linking 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function PassengerScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const reportEmergency = () => {
    Alert.alert(
      "⚠️ EMERGENCY REPORT",
      "This will alert Rank Security and PMP Solutions. Report bad behavior or danger?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "REPORT INCIDENT", onPress: () => Alert.alert("Alert Sent", "Security has been notified.") }
      ]
    );
  };

  const getDirections = (lat: number, lon: number) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0F172A', '#1E293B']} style={styles.background} />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>COMMUNITY PORTAL</Text>
          <View style={styles.accent} />
          <Text style={styles.headerSub}>Reliable Transport, Safer Streets</Text>
        </View>

        {/* SOS / Safety Button */}
        <TouchableOpacity style={styles.emergencyBtn} onPress={reportEmergency}>
          <Text style={styles.emergencyText}>REPORT RANK INCIDENT / DANGER ⚠️</Text>
        </TouchableOpacity>

        {/* Night Watch / Last Taxi Status */}
        <View style={styles.statusCard}>
          <View style={styles.statusHeader}>
            <Text style={styles.statusTitle}>NIGHT WATCH</Text>
            <View style={styles.liveIndicator} />
          </View>
          <Text style={styles.statusMain}>Kimberley CBD ➔ Soweto</Text>
          <Text style={styles.statusTime}>Last Taxi Expected: 21:45</Text>
          <Text style={styles.statusSeats}>Taxis currently at rank: 4</Text>
        </View>

        {/* Destination Finder */}
        <Text style={styles.sectionTitle}>FIND YOUR RANK</Text>
        <View style={styles.searchBox}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Where are you going?"
            placeholderTextColor="#475569"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Rank Directions Cards */}
        {[
          { name: "Main Mall Rank", destination: "CBD / Galeshewe", dist: "0.8km", lat: -28.74, lon: 24.76 },
          { name: "Newton Rank", destination: "Kimberley Center", dist: "2.4km", lat: -28.75, lon: 24.75 },
          { name: "Hadison Park Hub", destination: "Inter-City / Long Dist", dist: "5.1km", lat: -28.77, lon: 24.77 },
        ].map((rank, index) => (
          <View key={index} style={styles.rankCard}>
            <View style={styles.rankInfo}>
              <Text style={styles.rankName}>{rank.name}</Text>
              <Text style={styles.rankDest}>To: {rank.destination}</Text>
              <Text style={styles.rankDist}>{rank.dist} away</Text>
            </View>
            <TouchableOpacity 
              style={styles.dirBtn} 
              onPress={() => getDirections(rank.lat, rank.lon)}
            >
              <Text style={styles.dirBtnText}>MAPS</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Commuter Tip</Text>
          <Text style={styles.infoText}>
            Always check the Night Watch status before 8:00 PM to ensure you aren't left stranded.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  background: { position: 'absolute', width: '100%', height: '100%' },
  scrollContainer: { padding: 24, paddingTop: 60 },
  header: { alignItems: 'center', marginBottom: 25 },
  headerTitle: { color: '#FFF', fontSize: 24, fontWeight: '900', letterSpacing: 2 },
  accent: { width: 40, height: 4, backgroundColor: '#38BDF8', marginTop: 10 },
  headerSub: { color: '#38BDF8', fontSize: 12, marginTop: 10, fontWeight: '700' },
  
  emergencyBtn: { backgroundColor: '#EF4444', padding: 15, borderRadius: 12, marginBottom: 25, alignItems: 'center' },
  emergencyText: { color: '#FFF', fontWeight: '900', fontSize: 12 },

  statusCard: { backgroundColor: '#1E293B', borderRadius: 25, padding: 20, borderWidth: 1, borderColor: '#334155', marginBottom: 30 },
  statusHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  statusTitle: { color: '#94A3B8', fontWeight: '800', fontSize: 10, letterSpacing: 1 },
  liveIndicator: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#10B981' },
  statusMain: { color: '#FFF', fontSize: 18, fontWeight: '800' },
  statusTime: { color: '#38BDF8', fontSize: 14, fontWeight: '700', marginTop: 5 },
  statusSeats: { color: '#64748B', fontSize: 12, marginTop: 5 },

  sectionTitle: { color: '#FFF', fontWeight: '800', marginBottom: 15, letterSpacing: 1 },
  searchBox: { backgroundColor: '#0F172A', borderRadius: 15, height: 55, paddingHorizontal: 20, marginBottom: 20, borderWidth: 1, borderColor: '#334155', justifyContent: 'center' },
  searchInput: { color: '#FFF', fontSize: 16 },

  rankCard: { flexDirection: 'row', backgroundColor: 'rgba(30, 41, 59, 0.5)', padding: 20, borderRadius: 20, marginBottom: 12, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(56, 189, 248, 0.1)' },
  rankInfo: { flex: 1 },
  rankName: { color: '#FFF', fontWeight: '800', fontSize: 16 },
  rankDest: { color: '#38BDF8', fontSize: 12, fontWeight: '600' },
  rankDist: { color: '#64748B', fontSize: 11, marginTop: 4 },
  dirBtn: { backgroundColor: '#38BDF8', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 10 },
  dirBtnText: { color: '#0F172A', fontWeight: '900', fontSize: 10 },

  infoBox: { marginTop: 20, padding: 20, backgroundColor: 'rgba(56, 189, 248, 0.05)', borderRadius: 15, borderLeftWidth: 4, borderLeftColor: '#38BDF8' },
  infoTitle: { color: '#38BDF8', fontWeight: '800', fontSize: 12, marginBottom: 5 },
  infoText: { color: '#94A3B8', fontSize: 12, lineHeight: 18 }
});