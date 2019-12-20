# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'date'
# require 'time'

Client.destroy_all
Address.destroy_all
Photographer.destroy_all
Photo.destroy_all
Appointment.destroy_all
#<------------------------------------------------>
#CLIENTS

max =  Client.create({
    name: 'Maxwell Richmon', email: 'IDontExist@fakemail.com', password: 'Iwanttolive00', phone_number: 8
})

ray = Client.create({
    name: 'Ray Charles', email: 'thisFakeShit@DASHIT.com', password: "existence is pain", phone_number: 00
})

mary = Client.create({
    name: 'Mary (the one with the little lamb)', email: "lostSheep29910@gmail2.com", password: "sheeps are hot", phone_number: 99999 
})

#<------------------------------------------------>
#ADDRESSES

add1 = Address.create({
    client_id: max.id, street: "Fakeo Lane", city: "Townsville", state: "Of Smash", zip: 0001
})

add2 = Address.create({
    client_id: ray.id, street: "Seaseme Street", city: 'PBS Network', state: "Of Decay", zip: 20100
})

add3 = Address.create({
    client_id: mary.id, street: "Shepard's Lane", city: "More of a village", state: "Of sleep", zip: 90909
})

#<------------------------------------------------>
#PHOTOGRAPHERS

alex = Photographer.create({
    name: 'Alex Canon', profile_pic_url: "https://images.squarespace-cdn.com/content/v1/56457d9be4b0ed8bf45381d2/1449362076547-XBTIMNCN3FBAUL4T8XDS/ke17ZwdGBToddI8pDm48kJ599YwvHMGengvSH-yGiKF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fJakJqvzQz2QMRbQnJWeGM0zJFgBYyJCpEHw4qJqrCGuw/shutterstock_150468989.jpg?format=2500w", bio_quote: "Snap a piece of time!", experiance: "I have been doing photography since I was ten years old", specialty: "General Awesomeness", email: "snapshootmaster@fakemail.com", phone_number: 696969
})

eric = Photographer.create({
    name: "Eric Nikon", profile_pic_url: "https://www.adorama.com/alc/wp-content/uploads/2016/10/shutterstock_479016244_mezz-1024x576.jpg", bio_quote: "That's the cover shot!", experiance: "I may have only 5 years of experiance but, I'm a quick learner!", specialty: 'Nightshots are just my favorite to take!', email: "HeresAGoodEmail@email.com", phone_number: 3840239
})

martha = Photographer.create({
    name: "Martha Casio", profile_pic_url: "https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_170815865-825x465@2x.jpg", bio_quote: "A moment that lasts forever!", experiance: "I've studied with the best for about 7 years and I'm very confident in my abilities!", specialty: "Wideshots-for wallpapers of course", email: "doesitmatterwhatiputhere?", phone_number: 93094203 
})

#<-------------------------------------------------->
#PHOTOS

alexphoto1 = Photo.create({
    photographer_id: alex.id, url: "https://bambiniphoto.sg/wp-content/uploads/family-photography-bambini-025.jpg"
})

ericphoto1 = Photo.create({
    photographer_id: eric.id, url: "http://images.unsplash.com/photo-1453413453658-27fec8f43f29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
})

martha = Photo.create({
    photographer_id: martha.id, url: "http://cdn7.dissolve.com/p/D1336_10_086/D1336_10_086_0004_600.jpg"
})

# date = Date.parse('2020-2-14')
# puts "#{date}"

# Photographer.create({
#     name: " ", profile_pic_url: " ", bio_quote: " ", experiance: " ", specialty: " ", email: " ", phone_number: 93094203 
# })

# time= Time.new(2020,2,14,4,30)
# puts "#{time}"

time1=Time.parse("Dec 25 2019 10:30")
# puts "#{time1}"

time2 = Time.parse("Dec 31 2019 11:30")

time3 = Time.parse("Dec 27 2019 4:30")

testAppointment = Appointment.create({
    photographer_id: alex.id, client_id: max.id, time: "#{time1}"
})

testAppointment2 = Appointment.create({
    photographer_id: eric.id, client_id: ray.id, time: " #{time2} "
})

testAppointment3 = Appointment.create({
    photographer_id: martha.id, client_id: mary.id, time: "#{time3}"
})

puts 'seeded BITCH'