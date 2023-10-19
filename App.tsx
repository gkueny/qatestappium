/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

const backgroundStyle: ViewStyle = {
  backgroundColor: 'white',
  flex: 1,
  paddingVertical: 5,
  paddingHorizontal: 10,
};
const textStyle: TextStyle = {
  color: 'black',
};
const titleStyle: TextStyle = {
  fontSize: 24,
  textAlign: 'center',
};
const buttonStyle: ViewStyle = {
  width: 150,
  paddingVertical: 10,
  borderRadius: 5,
  backgroundColor: '#f08080',
  justifyContent: 'center',
  alignItems: 'center',
};
const inputStyle: ViewStyle = {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
};

function QAModal({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}): JSX.Element {
  const [login, setLogin] = React.useState<string>('');

  return (
    <Modal visible={isOpen}>
      <View style={backgroundStyle} testID="modal">
        <TouchableOpacity
          style={buttonStyle}
          onPress={close}
          testID="closeModalButton">
          <Text style={[textStyle, titleStyle]}>Fermer</Text>
        </TouchableOpacity>
        <View style={[backgroundStyle, {justifyContent: 'center'}]}>
          <Text style={[textStyle, titleStyle]}>Bienvenue sur la modal QA</Text>
          <TextInput
            testID="loginInput"
            placeholder="Saisissez votre login"
            style={inputStyle}
            onChangeText={setLogin}
          />
          <Text style={[textStyle, {textAlign: 'center'}]}>
            Bonjour {login ? login : 'default'}
          </Text>
        </View>
      </View>
    </Modal>
  );
}

function App(): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);

  const openModal = React.useCallback(() => {
    setModalIsOpen(true);
  }, []);
  const closeModal = React.useCallback(() => {
    setModalIsOpen(false);
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={backgroundStyle}>
          <Text style={[textStyle, titleStyle]}>QA test</Text>
        </View>
        <View style={backgroundStyle}>
          <Text style={[textStyle]} testID="loremipsumText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit
            nisl, varius ac tortor quis, accumsan convallis justo. Mauris auctor
            accumsan leo, sed pretium diam mollis sit amet. Sed vel posuere
            dolor. Vestibulum vestibulum felis libero, id cursus ipsum elementum
            sit amet. Vivamus faucibus elit ornare est pellentesque, id mollis
            magna tristique. In molestie mi in lacus vulputate sodales. Nunc et
            tortor malesuada, dapibus est eget, aliquet ante. Quisque nec magna
            a justo eleifend blandit. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Etiam et mi non massa
            porta placerat. Quisque vel sodales purus. Nunc ultrices lacinia
            pretium. Sed rutrum erat augue, ac venenatis magna interdum quis. Ut
            a euismod ligula, ut congue est.
          </Text>
        </View>
        <View style={[backgroundStyle, {alignItems: 'center'}]}>
          <TouchableOpacity
            style={buttonStyle}
            onPress={openModal}
            testID="openModalButton">
            <Text style={[textStyle]}>Afficher la modale</Text>
          </TouchableOpacity>
        </View>
        <QAModal isOpen={modalIsOpen} close={closeModal} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
