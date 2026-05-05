import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function OwnerScreen() {
  // Simulated Real-Time Data from the Marshal & Driver actions
  const stats = {
    revenue: "R 8,420.00",
    dispatched: 24,
    activeInQueue: 12,
    efficiency: "94%"
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0F172A', '#1E293B']} style={styles.background} />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerArea}>
          <Text style={styles.header}>FLEET EXECUTIVE</Text>
          <View style={styles.accentBar} />
          <Text style={styles.location}>KIMBERLEY CENTRAL TERMINAL</Text>
        </View>

        {/* Financial Overview */}
        <LinearGradient colors={['#0EA5E9', '#2563EB']} style={styles.revenueCard}>
          <View>
            <Text style={styles.cardLabel}>DAILY REVENUE</Text>
            <Text style={styles.revenueValue}>{stats.revenue}</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>LIVE</Text>
          </View>
        </LinearGradient>

        {/* Operational Grid */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>DISPATCHED</Text>
            <Text style={styles.statValue}>{stats.dispatched}</Text>
            <Text style={styles.statSub}>Taxis today</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>IN QUEUE</Text>
            <Text style={styles.statValue}>{stats.activeInQueue}</Text>
            <Text style={styles.statSub}>At the rank</Text>
          </View>
        </View>

        {/* Rank Performance */}
        <Text style={styles.sectionTitle}>RANK PERFORMANCE</Text>
        <View style={styles.chartCard}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Load Efficiency</Text>
            <Text style={styles.chartPercent}>{stats.efficiency}</Text>
          </View>
          <View style={styles.barBg}>
            <View style={[styles.barFill, { width: stats.efficiency }]} />
          </View>
          <Text style={styles.chartDesc}>Average wait time: 14 mins per vehicle</Text>
        </View>

        {/* Driver Activity Feed */}
        <Text style={styles.sectionTitle}>LATEST DISPATCHES</Text>
        {[
          { id: 1, reg: 'GP 44 KK', time: '14:20', load: '15/15' },
          { id: 2, reg: 'NC 12 BB', time: '14:05', load: '21/21' },
          { id: 3, reg: 'NW 99 LL', time: '13:45', load: '15/15' },
        ].map((item) => (
          <View key={item.id} style={styles.feedItem}>
            <View style={styles.feedIcon}>
              <Text style={{fontSize: 10}}>🚕</Text>
            </View>
            <View>
              <Text style={styles.feedReg}>{item.reg}</Text>
              <Text style={styles.feedTime}>Departed at {item.time}</Text>
            </View>
            <Text style={styles.feedLoad}>{item.load}</Text>
          </View>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerText}>SYSTEM ENCRYPTED • PMP SOLUTIONS</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  background: { position: 'absolute', height: '100%', width: '100%' },
  scrollContainer: { padding: 24, paddingTop: 60 },
  headerArea: { alignItems: 'center', marginBottom: 30 },
  header: { color: '#F8FAFC', fontSize: 24, fontWeight: '900', letterSpacing: 3 },
  accentBar: { width: 40, height: 4, backgroundColor: '#38BDF8', marginTop: 10, borderRadius: 2 },
  location: { color: '#38BDF8', fontSize: 10, fontWeight: '800', marginTop: 10, letterSpacing: 1 },
  
  revenueCard: { width: '100%', borderRadius: 30, padding: 30, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: '800', letterSpacing: 1 },
  revenueValue: { color: '#FFF', fontSize: 36, fontWeight: '900', marginTop: 5 },
  badge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  badgeText: { color: '#FFF', fontSize: 10, fontWeight: '900' },

  statsRow: { flexDirection: 'row', gap: 15, marginBottom: 30 },
  statBox: { flex: 1, backgroundColor: '#1E293B', padding: 20, borderRadius: 25, borderWidth: 1, borderColor: '#334155' },
  statLabel: { color: '#94A3B8', fontSize: 10, fontWeight: '800', marginBottom: 10 },
  statValue: { color: '#38BDF8', fontSize: 28, fontWeight: '900' },
  statSub: { color: '#475569', fontSize: 10, marginTop: 5, fontWeight: '600' },

  sectionTitle: { color: '#F8FAFC', fontSize: 14, fontWeight: '800', marginBottom: 15, letterSpacing: 1 },
  chartCard: { backgroundColor: 'rgba(30, 41, 59, 0.5)', borderRadius: 25, padding: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)', marginBottom: 30 },
  chartHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  chartTitle: { color: '#94A3B8', fontSize: 12, fontWeight: '700' },
  chartPercent: { color: '#10B981', fontWeight: '900' },
  barBg: { height: 10, backgroundColor: '#0F172A', borderRadius: 5, overflow: 'hidden' },
  barFill: { height: '100%', backgroundColor: '#10B981' },
  chartDesc: { color: '#475569', fontSize: 11, marginTop: 15, fontWeight: '600' },

  feedItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1E293B', padding: 15, borderRadius: 20, marginBottom: 10, borderWidth: 1, borderColor: 'rgba(56,189,248,0.05)' },
  feedIcon: { width: 35, height: 35, backgroundColor: '#0F172A', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  feedReg: { color: '#F8FAFC', fontWeight: '700', fontSize: 14 },
  feedTime: { color: '#64748B', fontSize: 11 },
  feedLoad: { marginLeft: 'auto', color: '#38BDF8', fontWeight: '900' },

  footer: { marginTop: 40, alignItems: 'center', paddingBottom: 20 },
  footerText: { color: '#334155', fontSize: 10, fontWeight: '800', letterSpacing: 2 }
});