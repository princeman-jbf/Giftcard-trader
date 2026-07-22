import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    backgroundColor: '#667eea',
    padding: 24,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.95,
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
  sectionText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
    marginBottom: 12,
  },
  highlight: {
    backgroundColor: '#fff3cd',
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
    borderRadius: 4,
    marginBottom: 12,
  },
  highlightText: {
    fontSize: 13,
    color: '#333',
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
  },
  listItem: {
    fontSize: 13,
    lineHeight: 22,
    color: '#333',
    marginBottom: 8,
    marginLeft: 8,
  },
});

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🎁 Giftcard Trader</Text>
          <Text style={styles.headerSubtitle}>Trade Gift Cards Securely</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Welcome</Text>
          <Text style={styles.sectionText}>
            Welcome to Giftcard Trader! This platform enables users to buy, sell, and exchange gift cards in a safe and convenient environment. Whether you have unused gift cards or are looking to purchase them at competitive rates, our trading platform makes it easy to connect with other traders.
          </Text>
          <View style={styles.highlight}>
            <Text style={styles.highlightText}>
              💡 <Text style={{ fontWeight: 'bold' }}>Tip:</Text> Always verify the balance and expiration date of gift cards before trading.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Getting Started</Text>
          <Text style={styles.sectionText}>
            To start trading gift cards, follow these simple steps:
          </Text>
          <Text style={styles.listItem}>1️⃣ Create an account with your email</Text>
          <Text style={styles.listItem}>2️⃣ List your gift cards or browse available cards</Text>
          <Text style={styles.listItem}>3️⃣ Make an offer or purchase</Text>
          <Text style={styles.listItem}>4️⃣ Complete the transaction securely</Text>
          <Text style={styles.listItem}>5️⃣ Build your trader reputation</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requirements</Text>
          <Text style={styles.listItem}>✓ Must be 18 years or older</Text>
          <Text style={styles.listItem}>✓ Valid email address</Text>
          <Text style={styles.listItem}>✓ Secure payment method</Text>
          <Text style={styles.listItem}>✓ Government-issued ID for verification</Text>
          <Text style={styles.listItem}>✓ Authentic gift cards</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Features</Text>
          <Text style={styles.listItem}>🔒 Secure escrow payment system</Text>
          <Text style={styles.listItem}>⭐ Seller ratings and reviews</Text>
          <Text style={styles.listItem}>💳 Support for major gift cards</Text>
          <Text style={styles.listItem}>📞 24/7 Customer support</Text>
          <Text style={styles.listItem}>🛡️ Fraud protection</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.success}>
            <Text style={styles.successText}>
              ✓ <Text style={{ fontWeight: 'bold' }}>Need Help?</Text> Check our detailed guides or contact support anytime.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}