import React from 'react';
import { SettingsProps } from 'navigation/home.navigator';
import AppRoute from 'navigation/app-routes';
import { request } from 'util/request/request';
import {
  downloadFile, DocumentDirectoryPath,
} from 'react-native-fs';
import { unzip } from 'react-native-zip-archive';
import { Card, Text, Button } from 'react-native-paper';

const Settings = (props: SettingsProps): Element => {
  const { navigation } = props;

  async function getData (): Promise<any> {
    try {
      const x = await request({
        method: 'GET',
        url: '/object',
      });
      console.log(x.request._response);
    } catch (e) {
      console.log('err ->', e);
    }
  }

  // Open the database
  function openDatabase (): void {
  }

  function unzipDatabaseFile (filePath: string): void {
    unzip(filePath, `${DocumentDirectoryPath}/databases`).then(
      () => {
        openDatabase();
      },
    ).catch((error: any) => {
      console.log('zip', error);
    });
  }

  // Download File 'database.zip'
  function downloadDatabase (): void {
    const path = `${DocumentDirectoryPath}/database.zip`;

    downloadFile({
      fromUrl: 'http://192.168.0.105:3001/database',
      toFile: path,
    }).promise.then((response: any) => {
      if (response.statusCode === 200) {
        console.log('FILE DOWNLOAD!');
        // Unzip the file
        unzipDatabaseFile(`${path}`);
      } else {
        console.log('SERVER ERROR');
      }
    }).catch((err: any) => {
      if (err.description === 'cancelled') {
        console.log('cancelled by user');
      }
      console.log(err);
    });
  }

  return (
    <Card>
      <Card.Content>
        <Text> Settings ;D</Text>
        <Button mode='contained' onPress={(): void => navigation.navigate(AppRoute.HOME)}>
          <Text>Home</Text>
        </Button>
        <Button mode='contained' onPress={async (): Promise<any> => getData()}>
          <Text>Get Data</Text>
        </Button>
        <Button mode='contained' onPress={(): void => downloadDatabase()}>
          <Text>Download Database</Text>
        </Button>
      </Card.Content>
    </Card>
  );
};


export default Settings;
