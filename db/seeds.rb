# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
    Todo.create!(
    name: 'task1', endDate: '11/08/2015', endTime: ' 02:00', isFinished: false)
    Todo.create!(
    name: 'task10', endDate: '11/07/2015', endTime: ' 02:00', isFinished: false)
    Todo.create!(
    name: 'task11', endDate: '11/06/2015', endTime: ' 02:00', isFinished: false)
    
    Todo.create!(
    name: 'task2', endDate: '11/09/2015', endTime: ' 02:00', isFinished: false)
    Todo.create!(
    name: 'task3', endDate: '11/09/2015', endTime: ' 02:00', isFinished: true)
    Todo.create!(
    name: 'task4', endDate: '11/09/2015', endTime: ' 02:00', isFinished: true)
    Todo.create!(
    name: 'task5', endDate: '11/09/2015', endTime: ' 02:00', isFinished: true)
    Todo.create!(
    name: 'task6', endDate: '11/08/2015', endTime: ' 02:00:', isFinished: false)
    Todo.create!(
    name: 'task7', endDate: '11/08/2015', endTime: ' 18:00', isFinished: false)
    Todo.create!(
    name: 'task8', endDate: '11/08/2015', endTime: ' 20:00', isFinished: true)
    Todo.create!(
    name: 'task9', endDate: '11/08/2015', endTime: ' 22:00', isFinished: true)