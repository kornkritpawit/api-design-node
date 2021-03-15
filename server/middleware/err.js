
module.exports = () => {
    return (err, req, res, next) => {
    // console.log('This is the error', err.message);
    console.log('This is the error', err.stack);
    res.status(500)
    // res.status(500).send();
    // res.send();
    }
}