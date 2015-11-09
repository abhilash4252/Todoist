# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
    Todo.create!(
    name: 'task1', endDate: '2015-11-05 02:00:22', isFinished: false)
    Todo.create!(
    name: 'task10', endDate: '2015-11-04 02:00:22', isFinished: false)
    Todo.create!(
    name: 'task11', endDate: '2015-11-03 02:00:22', isFinished: false)
    
    Todo.create!(
    name: 'task2', endDate: '2015-11-05 02:00:22', isFinished: false)
    Todo.create!(
    name: 'task3', endDate: '2015-11-06 02:00:22', isFinished: true)
    Todo.create!(
    name: 'task4', endDate: '2015-11-06 02:00:22', isFinished: true)
    Todo.create!(
    name: 'task5', endDate: '2015-11-06 02:00:22', isFinished: true)
    Todo.create!(
    name: 'task6', endDate: '2015-11-06 02:00:22', isFinished: false)
    Todo.create!(
    name: 'task7', endDate: '2015-11-06 02:00:22', isFinished: false)
    Todo.create!(
    name: 'task8', endDate: '2015-11-05 02:00:22', isFinished: true)
    Todo.create!(
    name: 'task9', endDate: '2015-11-06 02:00:22', isFinished: true)