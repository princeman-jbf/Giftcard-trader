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
  sectionText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
    marginBottom: 12,
  },
  warning: {
    backgroundColor: '#f8d7da',
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#dc3545',
    borderRadius: 4,
    marginBottom: 12,
  },
  warningText: {
    fontSize: 13,
    color: '#333',
  },
  listItem: {
    fontSize: 13,
    lineHeight: 20,
    color: '#333',
    marginBottom: 8,
    marginLeft: 8,
  },
  subsectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#764ba2',
    marginTop: 12,
    marginBottom: 8,
  },
});

export default function SafetyTipsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trading Safety Tips</Text>
          <View style={styles.warning}>
            <Text style={styles.warningText}>
              ⚠️ <Text style={{ fontWeight: 'bold' }}>Important:</Text> Never share your gift card PIN or full card details outside the secure platform.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.subsectionTitle}>🔍 Verify Sellers</Text>
          <Text style={styles.sectionText}>
            Before trading with anyone, check their profile thoroughly:
          </Text>
          <Text style={styles.listItem}>• Read ratings and reviews from previous transactions</Text>
          <Text style={styles.listItem}>• Check how long they've been on the platform</Text>
          <Text style={styles.listItem}>• Look for verified badges and certifications</Text>
          <Text style={styles.listItem}>• Avoid sellers with multiple complaints</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subsectionTitle}>🛡️ Use Escrow System</Text>
          <Text style={styles.sectionText}>
            Our platform holds payment until both parties confirm the trade. This protects you by:
          </Text>
          <Text style={styles.listItem}>• Keeping your money safe until delivery</Text>
          <Text style={styles.listItem}>• Ensuring seller delivers valid card codes</Text>
          <Text style={styles.listItem}>• Preventing fraudulent transactions</Text>
          <Text style={styles.listItem}>• Providing dispute resolution if needed</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subsectionTitle}>📋 Document Everything</Text>
          <Text style={styles.sectionText}>
            Keep records of all communications and transactions:
          </Text>
          <Text style={styles.listItem}>• Take screenshots of all messages</Text>
          <Text style={styles.listItem}>• Save transaction confirmations</Text>
          <Text style={styles.listItem}>• Record card details and serial numbers</Text>
          <Text style={styles.listItem}>• Keep proof of payment</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subsectionTitle}>💳 Check Card Balance</Text>
          <Text style={styles.sectionText}>
            Always verify the card details before completing purchase:
          </Text>
          <Text style={styles.listItem}>• Request card code before releasing payment</Text>
          <Text style={styles.listItem}>• Check balance on retailer's website</Text>
          <Text style={styles.listItem}>• Verify expiration date hasn't passed</Text>
          <Text style={styles.listItem}>• Test with small purchase if possible</Text>
        </View>
      </ScrollView>
    </View>
  );
}