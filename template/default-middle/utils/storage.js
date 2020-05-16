/**
 * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
 * @param {String} key 本地缓存中的指定的 key
 * @param {any} data 需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象
 */
const set = (key, data) => {
  return new Promise((resolve, reject) => {
    uni.setStorage({
      key,
      data,
      success: function () {
        return resolve()
      },
      fail: function () {
        return reject(new Error('setStorage error!'))
      }
    })
  })
}

/**
 * 从本地缓存中异步获取指定 key 对应的内容。
 * @param {string} key 本地缓存中的指定的 key
 */
const get = key => {
  return new Promise((resolve, reject) => {
    uni.getStorage({
      key,
      success: function (res) {
        return resolve(res)
      },
      fail: function () {
        return reject(new Error('getStorage error!'))
      }
    })
  })
}

/**
 * 判断本地是否存在该指定key的数据，存在返回true，不存在返回false
 * @param {string} key 本地缓存中的指定的 key
 */
const isStorage = key => {
  return new Promise((resolve, reject) => {
    var result = false
    get(key)
      .then((res) => {
        if (res) result = true
        return resolve(result)
      })
      .catch(err => {
        return reject(new Error(`isStorage is fail, error = ${err}`))
      })
  })
}

/**
 从本地缓存中异步删除指定 key 对应的内容。
 * @param {string} key 本地缓存中的指定的 key
 */
const remove = key => {
  return new Promise((resolve, reject) => {
    uni.removeStorage({
      key: key,
      success: function (res) {
        return resolve(res)
      },
      fail: function () {
        return reject(new Error('removeStorage error!'))
      }
    })
  })
}
export default {
  set,
  get,
  remove,
  isStorage
}
