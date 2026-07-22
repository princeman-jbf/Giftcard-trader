import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  scrollContent: {
    padding: 16,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#667eea',
    paddingBottom: 8,
  },
  success: {
    backgroundColor: '#d4edda',
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#28a745',
    borderRadius: 4,
    marginBottom: 12,
  },
  successText: {
    fontSize: 13,
    color: '#333',
    fontWeight: '600',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contactInfo: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  contactDetail: {
    fontSize: 13,
    color: '#667eea',
  },
});

export default function SupportScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support & Contact</Text>
          <View style={styles.success}>
            <Text style={styles.successText}>
              ✓ We're here to help! Reach out anytime.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get in Touch</Text>
          
          <View style={styles.contactItem}>
            <View style={styles.iconContainer}>
              <Ionicons name="mail" size={24} color="#667eea" />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactTitle}>Email Support</Text>
              <Text style={styles.contactDetail}>support@giftcardtrader.com</Text>
            </View>
          </View>

          <View style={styles.contactItem}>
            <View style={styles.iconContainer}>
              <Ionicons name="call" size={24} color="#667eea" />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactTitle}>Phone Support</Text>
              <Text style={styles.contactDetail}>+1-800-GIFTCARDS</Text>
            </View>
          </View>

          <View style={styles.contactItem}>
            <View style={styles.iconContainer}>
              <Ionicons name="chatbubbles" size={24} color="#667eea" />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactTitle}>Live Chat</Text>
              <Text style={styles.contactDetail}>Available 9 AM - 9 PM EST</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Terms & Conditions</Text>
          <Text style={{ fontSize: 13, color: '#333', lineHeight: 22 }}>
            ✓ Only trade authentic gift cards{"\n"}
            ✓ No fraudulent activities{"\n"}
            ✓ Respect privacy and security{"\n"}
            ✓ Follow all applicable laws{"\n"}
            ✓ Accept dispute resolution
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}