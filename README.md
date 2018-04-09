# 这是一款AES加密、解密插件

  基于crypto-js的一款轻量、好用加密解密插件，适用于长连接、聊天等加密场景


## API
  
  ### 1. encrypt 解密

  name           |     type | default |               description
  -------------- | -------: | :-----: | :-------------------------------------:
  AESKEY         |  String  |  ''     |                 前后端加密key
  data           |  ALL     |  ''     |                 需要加密的参数


  ### 2. decrypt 解密

  name           |     type | default |               description
  -------------- | -------: | :-----: | :-------------------------------------:
  AESKEY         |  String  |  ''     |                 前后端加密key
  data           |  ALL     |  ''     |                 需要加密的参数



## install

[![NPM](https://nodei.co/npm/crypto-aes-core.png)](https://nodei.co/npm/crypto-aes-core/)


### 调用

```
npm install crypto-aes-core

import {encrypt, decrypt} from 'crypto-aes-core'

<!-- 加密 -->
encrypt(encryptedData, AESKEY)]

<!-- 解密 -->
decrypt(decryptedData, AESKEY)]

```
