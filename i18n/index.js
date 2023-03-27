

let autoZh = {}
let autoEn = {}

try{
    autoZh = require('./auto/zh.json')
}catch (e)  {}
try{
    autoEn = require('./auto/en.json')
}catch (e)  {}
const messages = {
    'zh-Hans': {
        ...autoZh,
    },
    en: {
        ...autoEn,
    }
}


let i18nConfig = {
    locale: 'zh-Hans',
    messages
}
import VueI18n from 'vue-i18n'// v8.x
const i18n = new VueI18n(i18nConfig)
export default i18n