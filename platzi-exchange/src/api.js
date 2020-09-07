const url = 'https://api.coincap.io/v2';

function getAssets() {
  return fetch(`${url}/assets?limit=10`)
    .then(res => res.json())
    .then(({ data }) => data)
    .catch(err => console.log(err));
}
export default {
  getAssets
};
