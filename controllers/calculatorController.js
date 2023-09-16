
const addNumbers = (req, res) => {
    var firstNumber = parseInt(req.query.firstNumber) 
    var secondNumber = parseInt(req.query.secondNumber)
    var result = firstNumber + secondNumber || null
    if(result == null) {
        res.json({result: result, statusCode: 400}).status(400)
    }
    else { res.json({result: result, statusCode: 200}).status(200) } 
}

module.exports = {
    addNumbers
}