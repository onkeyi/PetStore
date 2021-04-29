<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("categories")->insert(
            [
                [
                    "id" => 1,
                    "parent_id" => -1,
                    "name" => "犬"
                ],
                [
                    "id" => 2,
                    "parent_id" => -1,
                    "name" => "猫"
                ],
                [
                    "id" => 3,
                    "parent_id" => -1,
                    "name" => "犬・猫以外の哺乳類"
                ],
                [
                    "id" => 4,
                    "parent_id" => -1,
                    "name" => "魚類"
                ],
                [
                    "id" => 5,
                    "parent_id" => -1,
                    "name" => "鳥類"
                ],
                [
                    "id" => 6,
                    "parent_id" => -1,
                    "name" => "爬虫類"
                ],
                [
                    "id" => 7,
                    "parent_id" => -1,
                    "name" => "両生類"
                ],
                [
                    "id" => 8,
                    "parent_id" => 1,
                    "name" => "トイ・プードル"
                ],
                [
                    "id" => 9,
                    "parent_id" => 1,
                    "name" => "チワワ"
                ],
                [
                    "id" => 10,
                    "parent_id" => 1,
                    "name" => "MIX犬"
                ],
                [
                    "id" => 11,
                    "parent_id" => 1,
                    "name" => "ミニチュア・ダックスフンド"
                ],
                [
                    "id" => 12,
                    "parent_id" => 1,
                    "name" => "ポメラニアン"
                ],
                [
                    "id" => 13,
                    "parent_id" => 1,
                    "name" => "ミニチュア・シュナウザー"
                ],
                [
                    "id" => 14,
                    "parent_id" => 1,
                    "name" => "パグ"
                ],
                [
                    "id" => 15,
                    "parent_id" => 1,
                    "name" => "パピヨン"
                ],
                [
                    "id" => 16,
                    "parent_id" => 1,
                    "name" => "その他犬"
                ],
                [
                    "id" => 17,
                    "parent_id" => 2,
                    "name" => "マンチカン"
                ],
                [
                    "id" => 18,
                    "parent_id" => 2,
                    "name" => "スコティッシュフォールド"
                ],
                [
                    "id" => 19,
                    "parent_id" => 2,
                    "name" => "ミヌエット "
                ],
                [
                    "id" => 20,
                    "parent_id" => 2,
                    "name" => "ラグドール"
                ],
                [
                    "id" => 21,
                    "parent_id" => 2,
                    "name" => "その他猫"
                ],
                [
                    "id" => 22,
                    "parent_id" => 4,
                    "name" => "金魚"
                ],
                [
                    "id" => 23,
                    "parent_id" => 4,
                    "name" => "メダカ"
                ],
                [
                    "id" => 24,
                    "parent_id" => 4,
                    "name" => "熱帯魚"
                ],
                [
                    "id" => 25,
                    "parent_id" => 4,
                    "name" => "その他魚類"
                ],
            ]
        );
    }
}
