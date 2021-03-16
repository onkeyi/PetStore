# Pet Store

## Requirements
------------
 - PHP >= 7.4

## Install
```shell
    git clone https://github.com/onkeyi/PetStore.git
    composer update
    cp .env.petstore .env
```
 - edit .env
```shell
    php artisan key:generate
    php artisan migrate
    php artisan serve
```

## OpenAPI documentation
see documentation [here](https://github.com/onkeyi/PetStore/blob/developer/document/README.md)

## JavaScript Client documentation
see documentation [here](https://github.com/onkeyi/PetStore/blob/developer/client/pet_store_api/README.md)
