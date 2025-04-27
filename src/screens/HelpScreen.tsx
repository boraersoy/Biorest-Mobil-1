import React, { useState } from 'react';
import {
  Alert,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Platform,
  Modal,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HelpScreen = () => {
  const navigation = useNavigation();
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [issueText, setIssueText] = useState('');

  const faqData = [
    { id: '1', question: 'Uygulama nasıl kullanılır?', answer: 'Uygulamayı kullanmak için giriş yapın ve ana ekrandan istediğiniz özelliği seçin.' },
    { id: '2', question: 'Cihaz nasıl bağlanır?', answer: 'Cihazınızı bağlamak için "Cihazlar" sekmesine gidin ve "Yeni Cihaz Ekle" seçeneğini kullanın.' },
    { id: '3', question: 'Uyku analizi nasıl görüntülenir?', answer: 'Uyku analizini görmek için ana ekrandan "Uyku Analizi" seçeneğine tıklayın.' },
    { id: '4', question: 'Destek ekibiyle nasıl iletişime geçilir?', answer: 'Destek ekibiyle iletişime geçmek için "Yardım" sekmesindeki iletişim bilgilerini kullanabilirsiniz.' },
  ];

  const handlePress = (id: string) => {
    setSelectedQuestion((prev) => (prev === id ? null : id)); 
  };

  const handleReportIssue = () => {
    setModalVisible(true); 
  };

  const handleSubmitIssue = () => {
    if (!issueText.trim()) {
      Alert.alert('Lütfen bir sorun yazın.'); 
      return;
    }
    console.log('User Issue:', issueText); 
    setModalVisible(false); 
    setIssueText(''); // 
    Alert.alert("Başarılı", "Sorununuz başarıyla bildirildi."); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Yardım</Text>
        </View>

        {/* Content */}
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.sectionTitle}>Sıkça Sorulan Sorular</Text>
          {faqData.map((item) => (
            <View key={item.id} style={styles.faqItem}>
              <TouchableOpacity onPress={() => handlePress(item.id)} style={styles.questionRow}>
                <Ionicons
                  name={selectedQuestion === item.id ? 'remove-circle-outline' : 'add-circle-outline'}
                  size={20}
                  color="#4a90e2"
                  style={styles.icon}
                />
                <Text style={styles.text}>{item.question}</Text>
              </TouchableOpacity>
              {selectedQuestion === item.id && (
                <Text style={styles.answer}>{item.answer}</Text>
              )}
            </View>
          ))}

          <Text style={styles.sectionTitle}>İletişim</Text>
          <View style={styles.contactRow}>
            <Ionicons name="mail-outline" size={20} color="#4a90e2" style={styles.icon} />
            <Text style={styles.text}>E-posta: support@biorest.com</Text>
          </View>
          <View style={styles.contactRow}>
            <Ionicons name="call-outline" size={20} color="#4a90e2" style={styles.icon} />
            <Text style={styles.text}>Telefon: +90 555 123 4567</Text>
          </View>
        </ScrollView>

        {/* Report an Issue Button */}
        <TouchableOpacity style={styles.reportButton} onPress={handleReportIssue}>
          <Ionicons name="alert-circle-outline" size={20} color="#fff" style={styles.reportIcon} />
          <Text style={styles.reportButtonText}> Sorun Bildir</Text>
        </TouchableOpacity>

        {/* Modal for Reporting Issues */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Sorun Bildir</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Sorununuzu buraya yazın..."
                placeholderTextColor="#888"
                multiline
                value={issueText}
                onChangeText={setIssueText}
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.cancelButtonText}>İptal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmitIssue}>
                  <Text style={styles.submitButtonText}>Gönder</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  faqItem: {
    marginBottom: 15,
  },
  questionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: '#ccc',
    marginLeft: 10,
  },
  answer: {
    fontSize: 14,
    color: '#4a90e2',
    marginTop: 5,
    paddingLeft: 30,
  },
  icon: {
    marginRight: 10,
  },
  reportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 10,
    margin: 20,
  },
  reportIcon: {
    marginRight: 10,
  },
  reportButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  textInput: {
    backgroundColor: '#121212',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#888',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
  },
  cancelButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#4a90e2',
    padding: 10,
    borderRadius: 8,
    flex: 1,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HelpScreen;