import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  StatusBar
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Driver'); 

  // Updated roles to include the Passenger portal
  const roles = ['Driver', 'Marshal', 'Owner', 'Passenger'];

  const handleLogin = () => {
    // Systematic Routing Logic
    if (role === 'Driver') {
      router.push('/driver');
    } else if (role === 'Marshal') {
      router.push('/marshal');
    } else if (role === 'Owner') {
      router.push('/owner');
    } else if (role === 'Passenger') {
      router.push('/passenger');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient 
        colors={['#0F172A', '#1E293B', '#0F172A']} 
        style={styles.background} 
      />

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.innerContainer}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.logoText}>E-RANK</Text>
          <View style={styles.accentBar} />
          <Text style={styles.subtitle}>PMP SOLUTIONS</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.welcomeText}>Select Access Portal</Text>
          
          {/* Multi-Role Selector */}
          <View style={styles.roleContainer}>
            {roles.map((r) => (
              <TouchableOpacity 
                key={r} 
                onPress={() => setRole(r)}
                style={[styles.roleButton, role === r && styles.roleButtonActive]}
              >
                <Text style={[styles.roleText, role === r && styles.roleTextActive]}>
                  {r === 'Passenger' ? '👤' : r.charAt(0)}
                </Text>
                <Text style={[styles.roleLabel, role === r && styles.roleTextActive]}>
                  {r}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Email or Mobile Number"
              placeholderTextColor="#64748B"
              value={email}
              onChangeText={setEmail}
              keyboardType={role === 'Passenger' ? 'phone-pad' : 'default'}
            />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Access Pin / Password"
              placeholderTextColor="#64748B"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity 
            activeOpacity={0.8} 
            style={styles.buttonContainer} 
            onPress={handleLogin}
          >
            <LinearGradient
              colors={['#38BDF8', '#0EA5E9']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.loginButton}
            >
              <Text style={styles.loginButtonText}>
                ENTER {role.toUpperCase()} INTERFACE
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>SECURE DIGITAL TERMINAL v1.2</Text>
          <Text style={styles.footerSub}>KIMBERLEY • SOUTH AFRICA</Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  background: { position: 'absolute', left: 0, right: 0, top: 0, height: '100%' },
  innerContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  headerContainer: { alignItems: 'center', marginBottom: 30 },
  logoText: { fontSize: 48, fontWeight: '900', color: '#F8FAFC', letterSpacing: 8 },
  accentBar: { width: 50, height: 4, backgroundColor: '#38BDF8', marginVertical: 12, borderRadius: 2 },
  subtitle: { fontSize: 10, color: '#38BDF8', letterSpacing: 5, fontWeight: '800' },
  card: { width: '100%', backgroundColor: 'rgba(15, 23, 42, 0.9)', borderRadius: 35, padding: 25, borderWidth: 1, borderColor: 'rgba(56, 189, 248, 0.15)', shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.5, shadowRadius: 20, elevation: 20 },
  welcomeText: { fontSize: 16, color: '#94A3B8', fontWeight: '700', marginBottom: 20, textAlign: 'center', letterSpacing: 1 },
  roleContainer: { flexDirection: 'row', backgroundColor: '#0F172A', borderRadius: 20, padding: 6, marginBottom: 25, gap: 4 },
  roleButton: { flex: 1, paddingVertical: 12, alignItems: 'center', borderRadius: 15, backgroundColor: 'transparent' },
  roleButtonActive: { backgroundColor: '#1E293B', borderWidth: 1, borderColor: '#334155' },
  roleText: { color: '#475569', fontSize: 14, fontWeight: '900', marginBottom: 4 },
  roleTextActive: { color: '#38BDF8' },
  roleLabel: { color: '#475569', fontSize: 8, fontWeight: '800', letterSpacing: 0.5 },
  inputWrapper: { marginBottom: 14 },
  input: { width: '100%', height: 58, backgroundColor: '#1E293B', borderRadius: 16, paddingHorizontal: 20, color: '#F8FAFC', fontSize: 15, borderWidth: 1, borderColor: '#334155' },
  buttonContainer: { marginTop: 10, borderRadius: 18, overflow: 'hidden' },
  loginButton: { height: 60, alignItems: 'center', justifyContent: 'center' },
  loginButtonText: { color: '#0F172A', fontSize: 13, fontWeight: '900', letterSpacing: 1.5 },
  footerContainer: { position: 'absolute', bottom: 40, alignItems: 'center' },
  footerText: { color: '#334155', fontSize: 9, letterSpacing: 2, fontWeight: '800' },
  footerSub: { color: '#1E293B', fontSize: 8, letterSpacing: 1, fontWeight: '700', marginTop: 4 }
});