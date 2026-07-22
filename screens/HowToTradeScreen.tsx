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
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#764ba2',
    marginTop: 16,
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
    marginBottom: 12,
  },
  listItem: {
    fontSize: 13,
    lineHeight: 20,
    color: '#333',
    marginBottom: 8,
    marginLeft: 8,
  },
});

export default function HowToTradeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Step-by-Step Trading Guide</Text>
          <Text style={styles.sectionText}>
            Follow these 5 steps to start trading gift cards on our platform.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.stepTitle}>Step 1: Create Your Account</Text>
          <Text style={styles.sectionText}>
            Start by registering on our platform with your email address and creating a secure password. Complete your profile to build trust with other traders.
          </Text>
          <Text style={styles.listItem}>• Use a strong, unique password</Text>
          <Text style={styles.listItem}>• Verify your email address</Text>
          <Text style={styles.listItem}>• Add a profile picture</Text>
          <Text style={styles.listItem}>• Complete KYC verification</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.stepTitle}>Step 2: List Your Gift Cards</Text>
          <Text style={styles.sectionText}>
            If you're selling gift cards, provide the following information:
          </Text>
          <Text style={styles.listItem}>• Gift card type (Amazon, iTunes, etc.)</Text>
          <Text style={styles.listItem}>• Card balance</Text>
          <Text style={styles.listItem}>• Expiration date</Text>
          <Text style={styles.listItem}>• Asking price</Text>
          <Text style={styles.listItem}>• Clear photos (front and back)</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.stepTitle}>Step 3: Browse Available Cards</Text>
          <Text style={styles.sectionText}>
            Search for the gift cards you want to purchase. You can filter by:
          </Text>
          <Text style={styles.listItem}>• Card type and retailer</Text>
          <Text style={styles.listItem}>• Price range</Text>
          <Text style={styles.listItem}>• Seller ratings</Text>
          <Text style={styles.listItem}>• Card condition (new, used)</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.stepTitle}>Step 4: Make an Offer or Purchase</Text>
          <Text style={styles.sectionText}>
            Contact the seller directly, negotiate if needed, and finalize the trade through our secure payment system. You can:
          </Text>
          <Text style={styles.listItem}>• Make an offer below asking price</Text>
          <Text style={styles.listItem}>• Purchase at the listed price</Text>
          <Text style={styles.listItem}>• Message the seller with questions</Text>
          <Text style={styles.listItem}>• Review seller history</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.stepTitle}>Step 5: Complete the Transaction</Text>
          <Text style={styles.sectionText}>
            Exchange card details securely through our platform and confirm receipt of the gift card code.
          </Text>
          <Text style={styles.listItem}>• Funds held in escrow during trade</Text>
          <Text style={styles.listItem}>• Seller provides card code</Text>
          <Text style={styles.listItem}>• Verify card balance and validity</Text>
          <Text style={styles.listItem}>• Release payment to seller</Text>
          <Text style={styles.listItem}>• Leave feedback and rating</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tips for Success</Text>
          <Text style={styles.listItem}>✓ Read seller reviews before trading</Text>
          <Text style={styles.listItem}>✓ Start with small trades to build trust</Text>
          <Text style={styles.listItem}>✓ Communicate clearly with other traders</Text>
          <Text style={styles.listItem}>✓ Keep records of all transactions</Text>
          <Text style={styles.listItem}>✓ Report any suspicious activity</Text>
        </View>
      </ScrollView>
    </View>
  );
}