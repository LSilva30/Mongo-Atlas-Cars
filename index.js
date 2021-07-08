require('dotenv/config')
const mongoose = require('mongoose')

mongoose
  .connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
  .then(() => console.log('We are connected to Mongo...'))
  .catch(err => console.log('Could not connect to MongoDB', err))

const carsSchema = mongoose.Schema({
  make: { type: String, unique: true, required: true },
  model: String,
  year: Number,
  color: String,
})

const Car = mongoose.model('Car', carsSchema)

function createCar() {
  const newCar = new Car({
    make: 'Honda',
    model: 'Accord',
    year: 2017,
    color: 'Blue',
  })
  newCar
    .save()
    .then(() => console.log('Car was saved'))
    .catch(err => console.log('car was not added', err))
}
createCar()

function findCar() {
  Car.find()
    .then(allCars => console.log('This is our inventory', allCars))
    .catch(err => console.log('Could not find all cars', err))
}

findCar()
