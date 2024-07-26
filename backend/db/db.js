const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.DB)
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}