import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "native-base";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useState } from "react";
import { Switch } from "react-native";
import { Linking } from "react-native";

const SECTION = [
  {
    header: "Preferences",
    items: [
      { id: "language", icon: "globe", label: "language", type: "select" },
      { id: "darkMode", icon: "moon", label: "Dark Mode", type: "toggle" },
      { id: "wifi", icon: "wifi", label: "Use Wi-fi", type: "toggle" },
    ],
  },
  {
    header: "Help",
    items: [
      { id: "bug", icon: "flag", label: "Report Bug", type: "link" },
      {
        id: "contact",
        icon: "mail",
        label: "Liên hệ chúng tôi",
        type: "link",
      },
    ],
  },
  {
    header: "Content",
    items: [
      { id: "save", icon: "save", label: "Saved", type: "link" },
      { id: "download", icon: "download", label: "Tải Xuống", type: "link" },
    ],
  },
];

const SettingScreen = () => {
  const [form, setForm] = useState({
    language: "Việt Nam",
    darkMode: true,
    wifi: false,
  });
  const handelClick =()=>{
    Linking.openURL("https://www.facebook.com/truog.GnalyLG.313/")
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Cài Đặt</Text>
          <Text style={styles.subTitle}>Trang cài đặt của bạn</Text>
        </View>

        {SECTION.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{header}</Text>
            </View>

            <View style={styles.sectionBody}>
              {items.map(({ label, id, type, icon }, index) => (
                <View
                  style={[
                    styles.rowWrapper,
                    index === 0 && { borderTopWidth: 0 },
                  ]}
                  key={id}
                >
                  <TouchableOpacity onPress={handelClick}>
                    <View style={styles.row}>
                      <FeatherIcon
                        name={icon}
                        color="#616161"
                        size={22}
                        style={{ marginRight: 12 }}
                      />
                      <Text style={styles.rowLabel}>{label}</Text>
                      <View style={styles.rowSpace} />
                      {type === "select" && (
                        <Text style={styles.rowValue}>{form[id]}</Text>
                      )}
                      {type === "toggle" && (
                        <Switch
                          value={form[id]}
                          onValueChange={(value) =>
                            setForm({ ...form, [id]: value })
                          }
                        />
                      )}
                      {["select", "link"].includes(type) && (
                        <FeatherIcon name="chevron-right" color="#ababab" />
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  header: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 6,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
  },
  section: {
    paddingTop: 12,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#a7a7a7",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  rowWrapper: {
    paddingLeft: 24,
    borderTopWidth: 1,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
  },
  row: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 24,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: "500",
    color: "#000",
  },
  rowSpace: {
    flex: 1,
  },
  rowValue: {
    fontSize: 17,
    color: "#616161",
    marginRight: 4,
  },
});

export default SettingScreen;
