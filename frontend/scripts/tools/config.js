const STORAGE_KEY = 'grails.jesque.admin.config'

export const DEFAULT_INTERVAL = "default.interval";

export default class Config {

  static getConfig() {
    let confString = localStorage.getItem(STORAGE_KEY)
    if (!confString) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({}))
      return {}
    }
    return JSON.parse(confString)
  }

  static get(key, defaultValue) {
    return this.getConfig()[key] || defaultValue
  }

  static set(key, val) {
    let conf = this.getConfig();
    conf[key] = val;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(conf));
  }

}
