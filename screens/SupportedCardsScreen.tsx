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
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#667eea',
    padding: 12,
    borderRadius: 4,
    marginBottom: 8,
  },
  tableHeaderText: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 12,
  },
  tableCell: {
    flex: 1,
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  retailerName: {
    fontWeight: '600',
  },
});

const giftCards = [
  { id: '1', retailer: 'Amazon', minBalance: '$5.00', fee: '2%' },
  { id: '2', retailer: 'iTunes', minBalance: '$10.00', fee: '3%' },
  { id: '3', retailer: 'Starbucks', minBalance: '$5.00', fee: '2.5%' },
  { id: '4', retailer: 'Google Play', minBalance: '$5.00', fee: '3%' },
  { id: '5', retailer: 'Best Buy', minBalance: '$10.00', fee: '2%' },
];

export default function SupportedCardsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Supported Gift Cards</Text>
          <Text style={{ fontSize: 14, color: '#333', marginBottom: 16 }}>
            We support trading for popular gift cards and retailers.
          </Text>

          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, { flex: 1.5 }]}>Retailer</Text>
            <Text style={styles.tableHeaderText}>Min Balance</Text>
            <Text style={styles.tableHeaderText}>Fee</Text>
          </View>

          {giftCards.map((card) => (
            <View key={card.id} style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.retailerName, { flex: 1.5 }]}>
                {card.retailer}
              </Text>
              <Text style={styles.tableCell}>{card.minBalance}</Text>
              <Text style={styles.tableCell}>{card.fee}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}