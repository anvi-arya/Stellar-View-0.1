import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🔭 StellarView</Text>
        <Text style={styles.search}>🔍</Text>
      </View>

      {/* Sky Map Preview */}
      <View style={styles.skyPreview}>
        <Text style={styles.previewText}>🌌 Sky Map Preview</Text>
      </View>

      {/* Visible Planets */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⭐ Tonight's Visible Planets</Text>
        <Text>• Jupiter</Text>
        <Text>• Venus</Text>
        <Text>• Mars</Text>
      </View>

      {/* Events */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📅 Upcoming Astronomy Events</Text>
        <Text>• Meteor Shower (Apr 12)</Text>
        <Text>• Lunar Eclipse (May 5)</Text>
      </View>

      {/* Open Sky Map Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Open Sky Map</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  search: {
    fontSize: 20,
  },

  skyPreview: {
    height: 180,
    backgroundColor: "#101020",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 20,
  },

  previewText: {
    color: "white",
  },

  section: {
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },

  button: {
    backgroundColor: "#4A6CFF",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});