const axios = require('axios')
exports.getRandomFacts = async(req,res)=>{
    try{
        const data = await axios.get('https://catfact.ninja/fact')
       res.status(200).json({
        data:data.data,
        status:"Facts Details fetched Successfully",
        message:"success"
       })
    } catch (err){
        res.status(400).json({
            status:"failed",
            message:err
        })
    }
}

exports.getBitcoinData = async(req,res)=>{
    try{
        const data = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
       res.status(200).json({
        data:data.data,
        status:"Bitcoins Details fetched Successfully",
        message:"success"
       })
    } catch (err){
        res.status(400).json({
            status:"failed",
            message:err
        })
    }
}

exports.getCurrIP = async(req,res)=>{
    try{
        const data = await axios.get('https://api.ipify.org?format=json')
        const ip = data.data.ip
        const city = await axios.get(`https://ipapi.co/${ip}/json/`)
       res.status(200).json({
        data:data.data,
        ipDetails : city.data,
        status:"API Details fetched Successfully",
        message:"success"
       })
    } catch (err){
        res.status(400).json({
            status:"failed",
            message:err
        })
    }
}