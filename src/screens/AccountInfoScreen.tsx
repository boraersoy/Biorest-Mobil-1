import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const AccountInfoScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Hesap Bilgileri</Text>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Kullanıcı Bilgileri</Text>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Ad Soyad:</Text>
              <Text style={styles.infoValue}>Ramazan Kaplaner</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>E-posta:</Text>
              <Text style={styles.infoValue}>biorest@gmail.com</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Telefon:</Text>
              <Text style={styles.infoValue}>+90 555 123 4567</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Üyelik Durumu:</Text>
              <Text style={styles.infoValue}>Premium</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: 10,
    backgroundColor: '#1a1a1a',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  infoCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    padding: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoLabel: {
    color: '#888',
    fontSize: 14,
  },
  infoValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default AccountInfoScreen;