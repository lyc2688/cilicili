/* created at 2018/4/9 by BlueSky @cilicili */
const ajaxVideo = {
  findId(id) {
    let json = {};
    $.get(
      API_SERVER_padEnd("video/findId"), {
        id
      }, response => {
        json = response;
      });
    return json;
  }
  , add({title, url, uploadUserid, picUrl, description}) {
    let json = {};
    $.post(
      API_SERVER_padEnd("video/add"), {
        title, url, uploadUserid, picUrl, description
      }, response => {
        json = response;
      });
    return json;
  }
  , play(id) {
    let json = {};
    $.post(
      API_SERVER_padEnd("video/play"), {
        id
      }, response => {
        json = response;
      });
    return json;
  }
  , like(id) {
    let json = {};
    $.post(
      API_SERVER_padEnd("video/like"), {
        id
      }, response => {
        json = response;
      });
    return json;
  }
  , show() {
    let json = {};
    $.post(
      API_SERVER_padEnd("video/show"), {
      }, response => {
        json = response;
      });
    return json;
  }
};