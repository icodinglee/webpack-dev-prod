/**
 * 
 * @desc   判断是否为URL地址
 * @param  {String} str 
 */
export function isUrl(str) {
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
}

/* 
* @desc   判断是否为手机号
* @param  {String|Number} str 
*/
export function isPhoneNum(str) {
   return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
}

/**
 * 
 * @desc  判断是否为身份证号
 * @param  {String|Number} str 
 */
export function isIdCard(str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
}

/**
 * 
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 */
export function isEmail(str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

/**
 * 
 * @desc  判断是否为中文
 * @param  {String}  str
 */
export function isCN(str) {
    return  /^[\u4e00-\u9fa5\-_，。\（）\s ]*$/.test(str);
}

/**
 * 
 * @desc   电话格式验证, 如座机
 * @param  {String}  str
 */
export function isTelPhone(str) {
    return  /(^(\d{3,4}[-]?)?\d{7,8})$|^((1[0-9][0-9]\d{8}$))/.test(str);
}

/**
 * 
 * @desc  金额格式验证
 */
export function isPrice(num) {
    return  /^\d+(\.\d{1,2})?$/.test(num);
}

/**
 * 
 * @desc  纯数字验证
 */
export function numberCheck(num) {
    return  /^[-+]?[0-9]+$/.test(num);
}

/**
 * 
 * @desc  字母加数字
 */
export function numberLetterCheck(num) {
    return  /^[A-Za-z0-9]+$/.test(num);
}

/**
 * @desc 3-20位 字母 + 数字 + 下划线验证
 */
 export function LetterNumUnderCheck(num){
    return   /^[a-zA-Z][0-9a-zA-Z_]{2,19}$/;
 }

/**
 * @desc 字母加数字加中文验证验证
 */
 export function LetterNumCNCheck(num){
    return   /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[\w])*$/;
 }