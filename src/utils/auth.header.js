import AsyncStorage from '@react-native-async-storage/async-storage';
export function authHeader() {
    const token = AsyncStorage.getItem("token");
    if (token) {
        return { authorization: `${token}` };
    } else {
        return {};
    }
}