init:
	composer update
	php artisan key:generate
	php artisan storage:link
	rm -rf ./storage/app/public/pets
	rm -rf ./storage/app/public/users
	mkdir ./storage/app/public/users
	mkdir ./storage/app/public/pets
	chmod -R 777 storage
	php artisan migrate:fresh
	php artisan db:seed
	cd client/pet_store_api && npm install
	cd client/pet_store_api && npm run build
	npm install
	npm link ./client/pet_store_api
	npm run dev
serve:
	php artisan serve
