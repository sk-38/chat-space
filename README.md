## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|Column|Type|Optinons|
|------|----|--------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :groups_user
- has_many :messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|staring|null: false|
### Association
- has_many :users
- has_many :messages
- has_many :group_user

## messagesteテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|staring|null: false|
|group|references|null: false, foreign_key: true|
|user| references|null: false, foreign_key: true|
### Association
- has_many :users
- has_many :groups






