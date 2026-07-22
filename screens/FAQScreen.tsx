import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
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
    overflow: 'hidden',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  faqItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  faqQuestion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  questionText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    marginRight: 12,
  },
  faqAnswer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  answerText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#555',
  },
});

const FAQData = [
  {
    question: 'What is Giftcard Trader?',
    answer: 'Giftcard Trader is a secure mobile platform that allows you to buy, sell, and exchange gift cards with other users.'
  },
  {
    question: 'How long does a transaction take?',
    answer: 'Most transactions are completed within 24-48 hours after both parties confirm the trade details.'
  },
  {
    question: 'Can I cancel a trade?',
    answer: 'Yes, you can cancel before payment is released.'
  },
];

function FAQItemComponent({ question, answer }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.faqItem}>
      <TouchableOpacity 
        style={styles.faqQuestion}
        onPress={() => setExpanded(!expanded)}
        activeOpacity={0.7}
      >
        <Text style={styles.questionText}>{question}</Text>
        <Ionicons 
          name={expanded ? 'chevron-up' : 'chevron-down'} 
          size={24} 
          color="#667eea" 
        />
      </TouchableOpacity>
      {expanded && (
        <View style={styles.faqAnswer}>
          <Text style={styles.answerText}>{answer}</Text>
        </View>
      )}
    </View>
  );
}

export default function FAQScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          {FAQData.map((item, index) => (
            <FAQItemComponent key={index} question={item.question} answer={item.answer} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}