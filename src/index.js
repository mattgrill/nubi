import apiData from './sources.json';

const axios = require('axios');

export default class Nubi {
  api = Object.assign({},
    ...Object.entries(apiData)
      .map(([apiGroup, apiGroupMethods]) => ({
        [apiGroup]: Object.assign({},
          ...Object.entries(apiGroupMethods)
            .map(([apiGroupMethodsKey, apiGroupMethodsData]) => (
              {
                [apiGroupMethodsKey]: this.issueRequest
                  .bind({ ...apiGroupMethodsData }),
              }
            )),
        ),
      })))
  issueRequest({ ...args }) {
    return axios({
      method: this.method,
      baseURL: 'https://cloudapi.acquia.com/v1',
      url: `${this.path.replace(/:(\w+)/g, (match, key) => args[key])}.json`,
      auth: {
        username: args.NUBI_USERNAME ? args.NUBI_USERNAME : process.env.NUBI_USERNAME,
        password: args.NUBI_PASSWORD ? args.NUBI_PASSWORD : process.env.NUBI_PASSWORD,
      },
    }).then(res => res.data);
  }
}
