# Pet Store


## Requirements
------------
 - PHP >= 7.4


## ソースファイル
```shell
    git clone https://github.com/onkeyi/PetStore.git
```

## .env　のデーターベース情報修正
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
    composer update
    php artisan key:generate
    php artisan storage:link
    mkdir storage/app/public/users
    mkdir storage/app/public/pets
    chmod -R 777 storage bootstrap/cache
    php artisan migrate:fresh
    php artisan seed
```

## Vue フロントエンド　build
```
npm link ./client/pet_store_api
npm run dev

```

## サーバー起動
```shell
php artisan serve
```

## Swagger Editor
- https://editor.swagger.io/
- Menu -> File -> Import URL
https://raw.githubusercontent.com/onkeyi/PetStore/develop/document/api/api.yml


## OpenAPI ドキュメント
see documentation [here](https://github.com/onkeyi/PetStore/blob/developer/document/README.md)

## JavaScript Client ドキュメント
see documentation [here](https://github.com/onkeyi/PetStore/blob/developer/client/pet_store_api/README.md)
