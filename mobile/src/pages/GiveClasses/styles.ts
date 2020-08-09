import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 200,
  },

  description: {
    marginTop: 24,
    color: "#d4c2ff",
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "Poppins_400Regular",
    maxWidth: 240,
  },

  subTitle: {
    color: "#d4c2ff",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Poppins_400Regular",
  },

  okButton: {
    flexDirection: "row",
    marginVertical: 40,
    backgroundColor: "#04d361",
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  okButtonIcon: {
    color: "#fff",
    fontSize: 20,
  },

  okButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Archivo_700Bold",
    marginLeft: 5,
  },
});

export default styles;
