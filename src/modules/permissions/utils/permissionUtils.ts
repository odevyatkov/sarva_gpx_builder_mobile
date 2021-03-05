import { check, Permission, RESULTS, request } from 'react-native-permissions';

export async function requestPermission(permission: Permission): Promise<boolean> {
  let checkResult;
  try {
    checkResult = await check(permission);
  } catch (error) {
    return false;
  }

  if (checkResult === RESULTS.GRANTED) {
    return true;
  }

  let requestResult;
  try {
    requestResult = await request(permission);
  } catch (error) {
    return false;
  }

  return requestResult === RESULTS.GRANTED;
}
