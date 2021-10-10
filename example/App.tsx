import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import useStateWithCallback from "@freakycoder/react-use-state-with-callback";

const App = () => {
  const [isSelected, setIsSelected] = useStateWithCallback<boolean>(false);
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <TouchableOpacity
        style={{
          height: 50,
          width: "90%",
          borderRadius: 12,
          backgroundColor: "#051393",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          setIsSelected(!isSelected, (newValue) => console.log(newValue));
        }}
      >
        <Text style={{ color: "#fff" }}>Change the state</Text>
      </TouchableOpacity>
      <Text
        style={{
          marginTop: 32,
          color: "#000",
          fontWeight: "500",
          fontSize: 32,
        }}
      >
        {`Selected Status: ${JSON.stringify(isSelected)}`}
      </Text>
    </SafeAreaView>
  );
};

export default App;
