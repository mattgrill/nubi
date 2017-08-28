import apiData from './sources.json';

const axios = require('axios');

export default class {
  constructor(username, password) {
    this.api = Object.assign({},
      ...Object.entries(apiData)
        .map(([apiGroup, apiGroupMethods]) => ({
          [apiGroup]: Object.assign({},
            ...Object.entries(apiGroupMethods)
              .map(([apiGroupMethodsKey, apiGroupMethodsData]) => ({
                [apiGroupMethodsKey]: this.issueRequest
                  .bind({ ...apiGroupMethodsData, username, password }),
              })),
          ),
        })));
  }
  issueRequest({ ...args }) {
    return axios({
      method: this.method,
      baseURL: 'https://cloudapi.acquia.com/v1',
      url: `${this.path.replace(/:(\w+)/g, (match, key) => args[key])}.json`,
      auth: {
        username: this.username,
        password: this.password,
      },
    }).then(res => res.data);
  }
}
