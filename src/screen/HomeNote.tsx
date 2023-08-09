import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
// import {RootStackParams} from '../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {orenMuda, putih} from '../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Antdesign from 'react-native-vector-icons/AntDesign';
import InputName from './InputName';

const HomeNote = () => {
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootStackParams>>();
  // const Stack = createNativeStackNavigator<RootStackParams>();

  // /////////////////////////////////////////////////////////////////////////

  const InputNameScreen = () => {
    const [user, setUser] = useState('');
    const handleOnChangeText = (text: any) => setUser(text);

    const submit = async () => {
      const name = {name: user};
      await AsyncStorage.setItem('user', JSON.stringify(name));
    };

    return (
      <View
        style={{
          backgroundColor: orenMuda,
          flex: 1,
        }}>
        <LinearGradient
          colors={['#0a8270', '#08C792']}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: putih,
              fontWeight: 'bold',
              fontSize: 15,
              marginBottom: -15,
            }}>
            Masukan Nickname untuk membuat list anda
          </Text>
          <View style={styles.emailContainer}>
            <LinearGradient
              style={styles.iconEmail}
              colors={['#0e7979', '#163d49']}>
              <Icon name="account-edit" size={30} color={'white'} style={{}} />
            </LinearGradient>
            <TextInput
              value={user}
              onChangeText={handleOnChangeText}
              style={styles.email}
              placeholder="Masukan Nickname "
            />
          </View>
          {user.trim().length >= 3 ? (
            <TouchableOpacity onPress={submit}>
              <LinearGradient
                colors={['#0e7979', '#163d49']}
                style={styles.iconEnter}>
                <Antdesign name="login" size={25} color={'white'} style={{}} />
              </LinearGradient>
            </TouchableOpacity>
          ) : null}
        </LinearGradient>
      </View>
    );
  };
  // //////////////////////////////////////////////////////////////////////////

  const ScreenNote = () => {
    const [salam, setSalam] = useState(
      'Hal penting Apa yang mau di catat hari ini tuan ',
    );

    return (
      <View>
        <Text>{`${salam}  `}</Text>
      </View>
    );
  };

  ////////////////////////////////////////////////////////////////////////////

  return;
  // <Stack.Navigator screenOptions={{headerShown: false}}>
  //   <Stack.Screen name="InputNameScreen" component={InputNameScreen} />
  //   <Stack.Screen name="ScreenNote" component={ScreenNote} />
  // </Stack.Navigator>
};

export default HomeNote;

const styles = StyleSheet.create({
  // //////  INPUT NAME SCREEN   /////////////////

  emailContainer: {
    marginTop: 7,
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  iconEmail: {
    justifyContent: 'center',
    height: 49.2,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    elevation: 5,
  },
  email: {
    marginTop: 23,
    backgroundColor: putih,
    width: 320,
    paddingLeft: 25,
    flex: 1,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    elevation: 5,
  },
  iconEnter: {
    backgroundColor: '#6842EF',
    marginTop: 20,
    height: 45,
    width: 45,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  ////////////////////////////////////////////////////
});
