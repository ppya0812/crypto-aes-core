// aes加密解密
import CryptoJS from 'crypto-js'
export default {
  encrypt: (decryptedData, AESKEY) => {
    // 加密
    // key 为秘钥
    // key 和 iv 可以一致    
    let key = CryptoJS.enc.Utf8.parse(AESKEY)
    
    let encrypted = CryptoJS.AES.encrypt(JSON.stringify(decryptedData), key, {
        iv: key,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })
    // 转换为字符串 -- 加密后的内容
    return encrypted.toString()
  },

  decrypt: (encryptedData, AESKEY) => {
    // 解密
    // key 为秘钥
    let key = CryptoJS.enc.Utf8.parse(AESKEY)
    // key 和 iv 可以一致     

    // mode 支持 CBC、CFB、CTR、ECB、OFB, 默认 CBC
    // padding 支持 Pkcs7、AnsiX923、Iso10126
    // 、NoPadding、ZeroPadding, 默认 Pkcs7, 即 Pkcs5 ]
    try {
      let decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
        iv: key,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      })
      // 转换为 utf8 字符串
      decrypted =  CryptoJS.enc.Utf8.stringify(decrypted)
      try {
        return JSON.parse(decrypted)
      } catch (error) {
        return decrypted
      }
    } catch (error) {
      return ''
    }
  }
}
