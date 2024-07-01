import axios from 'axios';

class ComicApi {

  getComic(id) {
    return axios({
      method: 'get',
      url: `/${id}/info.0.json`,
    })
  }
}

export default new ComicApi();