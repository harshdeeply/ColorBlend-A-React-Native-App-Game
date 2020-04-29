import React, { useState } from "react";
import { Text, StyleSheet, View, Button, Modal } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>How to play:</Text>
              <Text style={styles.modalBody}>Tap on increase/decrease the color of your choice and see the colors you choose to blend in the circular image, producing different colors.</Text>
              <Text style={styles.modalEnd}>Happy mixing :)</Text>


              <Button
                title="Start mixing colors →"
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('Color');
                }}>
              </Button>
            </View>
          </View>
        </Modal>
      </View>

      <Text style={styles.text}>Welcome to ColorBlender!</Text>
      <Button
        title='Start mixing colors →'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title='How to play?'
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'green'
  },
  container: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    justifyContent: 'center',
    marginLeft: 55,
    marginRight: 55,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
    // flex: 1
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 22
  },
  modalBody: {
    marginBottom: 6,
    textAlign: "center",
    fontSize: 15
  },
  modalEnd: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 13
  }
});

export default HomeScreen;
