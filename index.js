/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { REQUEST_APP_MOCK } from 'react-native-dotenv';
import { makeMockServer } from 'server';
import app from './src';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => app);

if (REQUEST_APP_MOCK) {
  makeMockServer();
}
