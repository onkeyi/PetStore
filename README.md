# Pet Store

![ペットショップ](https://github.com/onkeyi/PetStore/raw/develop/public/demo.png "DEMO")

## Requirements
------------
 - PHP >= 7.4


## ソースファイル
```shell
    git clone https://github.com/onkeyi/PetStore.git
```

## .env　のデーターベース情報修正
- MySQL データーベース作成
```sql
    create database petstore;
```
```shell
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=petstore
    DB_USERNAME=root
    DB_PASSWORD=
```

## インストール
```shell
$ make init
```

## サーバー起動
```shell
$ make serve
```

## Swagger Editor
- https://editor.swagger.io/
- Menu -> File -> Import URL
https://raw.githubusercontent.com/onkeyi/PetStore/develop/document/api/api.yml


## OpenAPI ドキュメント
see documentation [here](https://github.com/onkeyi/PetStore/blob/developer/document/README.md)

## JavaScript Client ドキュメント
see documentation [here](https://github.com/onkeyi/PetStore/blob/developer/client/pet_store_api/README.md)
