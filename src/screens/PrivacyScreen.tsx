import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PrivacyScreen = () => {
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
          <Text style={styles.headerTitle}>Gizlilik</Text>
        </View>

        {/* Content */}
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.section}>
            <Ionicons name="shield-checkmark-outline" size={24} color="#4a90e2" style={styles.icon} />
            <Text style={styles.sectionTitle}>Gizlilik Politikası</Text>
          </View>
          <Text style={styles.text}>
            Biorest uygulaması, kullanıcı verilerini korumayı taahhüt eder. Verileriniz yalnızca
            uygulama işlevselliğini sağlamak için kullanılır ve üçüncü taraflarla paylaşılmaz.
          </Text>
          <Text style={styles.text}>
            Daha fazla bilgi için lütfen gizlilik politikamızı okuyun veya bizimle iletişime geçin.
          </Text>

          <View style={styles.section}>
            <Ionicons name="document-text-outline" size={24} color="#4a90e2" style={styles.icon} />
            <Text style={styles.sectionTitle}>Veri Kullanımı</Text>
          </View>
          <View style={styles.bulletPoint}>
            <Ionicons name="ellipse" size={8} color="#4a90e2" style={styles.bulletIcon} />
            <Text style={styles.text}>Uyku verileri yalnızca analiz için kullanılır.</Text>
          </View>
          <View style={styles.bulletPoint}>
            <Ionicons name="ellipse" size={8} color="#4a90e2" style={styles.bulletIcon} />
            <Text style={styles.text}>Kişisel bilgileriniz güvenli bir şekilde saklanır.</Text>
          </View>
        </ScrollView>
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
    padding: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  text: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 10,
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  bulletIcon: {
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default PrivacyScreen;