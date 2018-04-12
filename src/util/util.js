/**
 *  
 * @desc 生成随机数
 */
export const random = (from, to) => {
    if (!to) {
      to = from
      from = 0
    }
    return parseInt(Math.random() * (to - from) + from)
}

/**
 *  
 * @desc 深拷贝
 */
export const deepCopy = obj => {
    if (typeof obj !== 'object' || obj === null) {
      return obj
    }
    let result = obj instanceof Array ? [] : {}
    for (let key in obj) {
      result[key] = deepCopy(obj[key])
    }
  
    return result
}


/**
 * @desc 生成唯一id
 */
export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/**
 * @desc 数组去重 包括元素为对象
 */
if (typeof Array.prototype.distinct !== 'function') {
    Array.prototype.distinct = function () {
        this.sort();
        for (let i = 0; i < this.length - 1; i++) {
            for (let j = i + 1; j < this.length; j++) {
                if ($.isPlainObject(this[i]) && $.isPlainObject(this[j])) {
                    if (o2o(this[i], this[j])) {
                        this.splice(j, 1);
                        j--;
                    }
                } else if ($.isArray(this[i]) && $.isArray(this[j])) {
                    if (a2a(this[i], this[j])) {
                        this.splice(j, 1);
                        j--;
                    }
                } else if (this[i] === this[j]) {
                    this.splice(j, 1);
                    j--;
                }
            }
        }
    };
}

/**
 * 
 * @desc 随机生成颜色
 * @return {String} 
 */
export function randomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}

/**
 * 
 * @desc 对象类型
 * @return {Object} object
 */
function _getClass(object) {
    return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
}

/**
 * @desc 判断参数是否为空, 包括null, undefined, [], '', {}
 * @param {object} obj 需判断的对象
 */
export function isEmpty(obj) {
    var empty = false;

    if (obj === null || obj === undefined) { // null and undefined
        empty = true;
    } else if ((isArray(obj) || isString(obj)) && obj.length === 0) {
        empty = true;
    } else if (isObject(obj)) {
        var hasProp = false;
        for (let prop in obj) {
            if (prop) {
                hasProp = true;
                break;
            }
        }
        if (!hasProp) {
            empty = true;
        }
    }
    return empty;
}

/**
 * @desc 判断参数是否为空字符串, 比isEmpty()多判断字符串中有空格的情况, 如: '   '.
 * @param {string} str 需判断的字符串
 */
export function isBlank(str) {
    if (isEmpty(str)) {
        return true;
    } else if (isString(str) && str.trim().length === 0) {
        return true;
    }
    return false;
}

// 判断字段是否异常，如果异常则返回‘--’
export function fieldAnomaly(value) {
    if(isBlank(value)){
        return '--';
    }
    return value;
}

/**
 * @desc 函数柯里化
 */
export function currying(fn) {
    var args = [];  //传入的数据都被缓存在这里，在符合条件时一并传给计算函数

    return  function () {
      if (arguments.length == 0) {
        return fn.apply(this, args )
      } else {
        [].push.apply(args, arguments)
        return arguments.callee  // （这句可不要）返回自身，在后面可以这样用 cost(100)(200)
      }
    }
  }

/**
 * @desc 函数节流
 */
export function throttle(fn, interval) {
    var  timer, firstTime = true;

    return function () {
      var args = arguments;
      var _me = this;

       if ( firstTime ) {
         fn.apply(_me, args)
         return firstTime = false;
       }

       if ( timer ) {
         return false
       }

       timer = setTimeout(function () {
         clearTimeout(timer);
         timer=null;
         fn.apply(_me, args)
       }, interval || 500)
    }

}

/**
 * @desc 判断对象是否相等
 * @param  参数个数大于等于2
 */
export function deepCompare () {
    var i, l, leftChain, rightChain;
  
    function compare2Objects (x, y) {
      var p;
  
      if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
           return true;
      }
  
      if (x === y) {
          return true;
      }
  
      if ((typeof x === 'function' && typeof y === 'function') ||
         (x instanceof Date && y instanceof Date) ||
         (x instanceof RegExp && y instanceof RegExp) ||
         (x instanceof String && y instanceof String) ||
         (x instanceof Number && y instanceof Number)) {
          return x.toString() === y.toString();
      }
  
      if (!(x instanceof Object && y instanceof Object)) {
          return false;
      }
  
      if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
          return false;
      }
  
      if (x.constructor !== y.constructor) {
          return false;
      }
  
      if (x.prototype !== y.prototype) {
          return false;
      }
  
      if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
           return false;
      }
  
      for (p in y) {
          if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
              return false;
          }
          else if (typeof y[p] !== typeof x[p]) {
              return false;
          }
      }
  
      for (p in x) {
          if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
              return false;
          }
          else if (typeof y[p] !== typeof x[p]) {
              return false;
          }
  
          switch (typeof (x[p])) {
              case 'object':
              case 'function':
  
                  leftChain.push(x);
                  rightChain.push(y);
  
                  if (!compare2Objects (x[p], y[p])) {
                      return false;
                  }
  
                  leftChain.pop();
                  rightChain.pop();
                  break;
  
              default:
                  if (x[p] !== y[p]) {
                      return false;
                  }
                  break;
          }
      }
  
      return true;
    }
  
    if (arguments.length < 1) {
      return true; 
    }
  
    for (i = 1, l = arguments.length; i < l; i++) {
  
        leftChain = []; 
        rightChain = [];
  
        if (!compare2Objects(arguments[0], arguments[i])) {
            return false;
        }
    }
  
    return true;
}