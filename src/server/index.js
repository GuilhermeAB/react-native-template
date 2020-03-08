// TODO: miragejs TS (https://github.com/miragejs/miragejs/pull/262)
import { Server } from 'miragejs';
import faker from 'faker';
import i18n from 'i18n';
import store from 'store/';

function setFakerLocale () {
  faker.locale = store.getState().i18n.lang;
}

// eslint-disable-next-line import/prefer-default-export
export function makeMockServer ({ environment = 'mock' } = {}) {
  const server = new Server({
    environment: environment,

    routes: function () {
      this.post('/Login', (schema, request) => {
        setFakerLocale();

        const { queryParams } = request;
        const { USERNAME, PASSWORD } = queryParams;

        if (USERNAME && PASSWORD) {
          const firstName = faker.name.firstName();
          const lastName = faker.name.lastName();

          return {
            USER: {
              ID: faker.random.number(),
              NAME: `${firstName} ${lastName}`,
              EMAIL: faker.internet.email(),
              LOGIN: faker.internet.userName(),
              AVATAR: faker.internet.avatar(),
              COUNTRY: faker.address.country(),
            },
            MESSAGES: {
              SUCCESS: [
                `${i18n.t('WELCOME')} ${firstName}`,
              ],
            },
          };
        } else {
          return {
            RESULT: 'error',
            MESSAGES: {
              ERROR: [
                i18n.t('INVALID_USERNAME_PASSWORD'),
              ],
            },
          };
        }

      });
    },
  });

  window.server = server;

  return server;
}
