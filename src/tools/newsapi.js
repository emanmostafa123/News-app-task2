const request = require('request')
const news = (x,callback) => {
    const newsUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2022-01-18&sortBy=publishedAt&apiKey=09cb466fd50b49979a23de085cb1a2ed'
    
    request({url:newsUrl,json:true},(error,response)=>{
        if(error){
            callback('Error',undefined)
        }
        else if(response.body.message){
           callback(response.body.message,undefined)
        }
        else if (response.body.articles.length == 0){
            callback('Error .. Try again',undefined)
        }
     
        else {
            callback(undefined,response.body.articles)
        }
    })
}
module.exports = news