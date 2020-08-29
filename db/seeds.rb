# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dimension.destroy_all
Being.destroy_all

overlord = Being.create!(username: "overlord", password: "world_conquering", email: "overlord@ruletheworld.com")
minion = Being.create!(username: "minion", password: "IAmAMinion23", email: "minion1337@minions.com")
mastermind = Being.create!(username: "Ma5t3rm1nd", password: "behindalltheplans", email: "cryptic@gmail.com")
saboteur = Being.create!(username: "saboteur1994", password: "notpassword", email: "sam@sabotageforhire.net")
ringleader = Being.create!(username: "Ringleader", password: "john!make a password", email: "admin@ringleader.com")
spy = Being.create!(username: "spi23", password: "iamaspydont@mebro", email: "spy@spies.co")
assassin = Being.create!(username: "aSSaSSin", password: "42killed69togo", email: "james.buckwheat@doesnotexist.org")
collector = Being.create!(username: "Collector", password: "Time2Pay", email: "cccharcoalfront@collectors.com")
haxxer = Being.create!(username: "haxxer", password: "Jhqy-xTzz-lkso", email: "anon1337@hackers.net")
demolitionist = Being.create!(username: "Demolish1024", password: "UpUpdOwndOwnleFtleFtrigHtrigHt", email: "mark.troutside@bombers.com")

demo_user = Being.create!(username: "DemoUser", password: "passw0rd123", email: "demo@example.com")
