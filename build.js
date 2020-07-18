const fs = require('fs')
const yaml = require('yaml')
const Handlebars = require('handlebars')

fs.readFile('./config.yaml', 'utf8', function (err,d) {
    if (err){
        return console.log(err);
    }
    var data = yaml.parse(d)
    data.weather.app = process.env.OWMAPP
    fs.readFile('./index.tpl.html', 'utf8', function(err, t) {
        if (err){
            return console.log(err);
        }
        const template = Handlebars.compile(t)
        fs.writeFile('./index.html', template({ data: data }), 'utf8', function (err) {
            if (err) {
                return console.log(err)
            }
        })
    })
})