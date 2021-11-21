const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=a751a175a51da72e9fd823b15ec488b9&query='
        + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location',undefined)
        } else {
            const temperature = body.current.temperature
            const feelslike = body.current.feelslike
            const humidity = body.current.humidity

            callback(undefined, body.current.weather_descriptions[0]
                + '. It is currently ' + temperature + ' degrees out. It feels like ' + feelslike + ' degrees out.' + ' Humidity is ' + humidity + '%.')
        }
    })

}

module.exports = forecast