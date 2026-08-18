import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY = 'erank_access_token';

export async function saveToken(token) {
  try {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  } catch (error) {
    throw new Error('Unable to save authentication token.');
  }
}

export async function getToken() {
  try {
    return await SecureStore.getItemAsync(TOKEN_KEY);
  } catch (error) {
    return null;
  }
}

export async function removeToken() {
  try {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  } catch (error) {
    throw new Error('Unable to remove authentication token.');
  }
}