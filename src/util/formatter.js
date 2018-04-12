/** 
* @desc 把数字 xxxxx 变成 xx,xxx
 */
export function FormatNumber(num){
    if(typeof num !== 'number'){return '0';}
    if(num < 1000){
        return String(num);
    }  
    var temp = String(num).split('').reverse();
    let i = 3;
    while(i < temp.length){
        temp[i] = `${temp[i]},`;
        i = i + 3;
    }
    return temp.reverse().join('');
}


/**
 * 
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object} 
 */
export function parseQueryString(url) {
    url = url == null ? window.location.href : url
    var search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1)
    if (search === '') return {}
    search = search.split('&');
    var query = {};
    for (var i = 0; i < search.length; i++) {
        var pair = search[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

/**
 * 
 * @desc   对象序列化
 * @param  {Object} obj 
 * @return {String}
 */
export function stringfyQueryString(obj) {
    if (!obj) return '';
    var pairs = [];

    for (var key in obj) {
        var value = obj[key];

        if (value instanceof Array) {
            for (var i = 0; i < value.length; ++i) {
                pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
            }
            continue;
        }

        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }

    return pairs.join('&');
}

// 时间戳转化为日期
export function timestampToTime(timestamp) {
    var date = new Date(timestamp);//时间戳如果为10位需乘1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() + ' ';
    return Y + M + D;
  }