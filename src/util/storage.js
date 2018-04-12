/**
 * @desc 封装了localStorage和sessionStorage的使用, 可直接保存, 获取对象.
 */
export function setSession(name, value) {
    if (typeof sessionStorage === 'object') {
        var data = value;
        if (typeof value !== 'string') {
            if (data === undefined) {
                data = null;
            } else {
                data = JSON.stringify(data);
            }
        }
        sessionStorage.setItem(name, data);
    }
}

/**
 * 
 * @desc  获取sessionStorage
 */
export function getSession(name) {
    if (typeof sessionStorage === 'object') {
        var data = sessionStorage.getItem(name);
        try {
            return JSON.parse(data);
        } catch (e) {
            return data;
        }
    }
    return null;
}


/**
 * 
 * @desc  设置localStorage
 */
export function setLocal(name, value) {
    if (typeof localStorage === 'object') {
        var data = value;
        if (typeof value !== 'string') {
            if (data === undefined) {
                data = null;
            } else {
                data = JSON.stringify(data);
            }
        }
        localStorage.setItem(name, data);
    }
}

/**
 * 
 * @desc  获取localStorage里的值
 */
export function getLocal(name) {
    if (typeof localStorage === 'object') {
        var data = localStorage.getItem(name);
        try {
            return JSON.parse(data);
        } catch (e) {
            return data;
        }
    }
    return null;
}

/**
 * 
 * @desc  移除localStorage里的值
 */
export function remove(name) {
    if (typeof sessionStorage === 'object') {
        if (sessionStorage.getItem(name)) {
            sessionStorage.removeItem(name);
        }
    }
    if (typeof localStorage === 'object') {
        if (localStorage.getItem(name)) {
            localStorage.removeItem(name);
        }
    }
}

/**
 * 
 * @desc  清空storage
 */
export function clear(name){
    if(typeof sessionStorage === 'object'){
        sessionStorage.clear();
    }
    if(typeof localStorage === 'object'){
        localStorage.clear();
    }
}