export default class HTTP {
  fetchGet (options) {
    return fetch(options.url)
      .then((response) => response.json())
      .then((responseJson) => {
        options.success(responseJson);
      })
      .catch((error) => {
        options.error(error);
      })
  }
}