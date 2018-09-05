const Base = require('./base');

module.exports = class extends Base {
  async __before() {
    return true;
  }
  indexAction() {
    this.body = 'Hello User!';
  }

  infoAction() {
    this.body = 'Hello User Info!';
  }
  __call() {
    // 如果相应的Action不存在则调用该方法
    this.body = '网站建设中';
  }
};
