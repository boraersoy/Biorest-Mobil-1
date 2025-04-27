import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const NotificationsScreen = () => {
  const navigation = useNavigation();

  // Example notification data
  const notifications = [
    { id: '1', title: 'Yeni Güncelleme', description: 'Uygulama güncellendi.', date: '13 Nisan 2025', icon: 'refresh-outline' },
    { id: '2', title: 'Uyku Analizi', description: 'Dün geceki uyku analizi hazır.', date: '12 Nisan 2025', icon: 'moon-outline' },
    { id: '3', title: 'Cihaz Bağlantısı', description: 'Yeni cihaz başarıyla bağlandı.', date: '11 Nisan 2025', icon: 'bluetooth-outline' },
  ];

  const renderNotification = ({ item }: { item: { id: string; title: string; description: string; date: string; icon: string } }) => (
    <View style={styles.notificationCard}>
      <View style={styles.notificationHeader}>
        <Ionicons name={item.icon} size={20} color="#4a90e2" style={styles.notificationIcon} />
        <Text style={styles.notificationTitle}>{item.title}</Text>
      </View>
      <Text style={styles.notificationDescription}>{item.description}</Text>
      <Text style={styles.notificationDate}>{item.date}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Bildirimler</Text>
        </View>

        {/* Notifications List */}
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderNotification}
          contentContainerStyle={styles.listContent}
        />
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
  listContent: {
    padding: 20,
  },
  notificationCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  notificationIcon: {
    marginRight: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 5,
  },
  notificationDate: {
    fontSize: 12,
    color: '#888',
  },
});

export default NotificationsScreen;