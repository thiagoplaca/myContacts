module.exports = (request, response, next) => {
  response.setHeader('Acess-Allow-Control-Origin', 'http://192.168.0.18:3000')
  next()
}
