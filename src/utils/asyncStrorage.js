import AsyncStorage from "@react-native-async-storage/async-storage"
import { ACCESS_TOKEN, ON_BOARDING } from "./keys"

const StorageValueGet = async () => {
    let asyncData = await AsyncStorage.multiGet([ON_BOARDING, ACCESS_TOKEN])
    console.log('asybc', asyncData)
    const onBoardingValue = !!asyncData[0][1]
     ? asyncData[0][1]
     : false;
    const accessValue = !!asyncData[1][1]
     ? JSON.parse(asyncData[1][1])
     : false
    return {onBoardingValue, accessValue}
}

const OnBoardingToken = async value => {
  const stringifyData = JSON.stringify(value);
  await AsyncStorage.setItem(ON_BOARDING, stringifyData);
  return;
};

const AuthToken = async value => {
  const stringifyData = JSON.stringify(value);
  await AsyncStorage.setItem(ACCESS_TOKEN, stringifyData);
  return;
};


export {StorageValueGet, OnBoardingToken, AuthToken};