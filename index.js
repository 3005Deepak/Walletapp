const express= require('express') //import
const path = require('path')
const app =express()
const expressLayouts=require('express-ejs-layouts')
const res = require('express/lib/response')

app.use(expressLayouts)
app.use('/styles',express.static(path.join(__dirname,'styles')))
app.use('/images',express.static(path.join(__dirname,'images')))
app.set('view engine','ejs')

app.get('/',(req,res) =>{
    res.render('homeRoutes/home.ejs')
});

app.get('/login',(req,res)=>{
    res.render('homeRoutes/login.ejs')
});
app.get('/signup',(req,res)=>{
    res.render('homeRoutes/signup.ejs')
})
app.get('/addbal',(req,res)=>{
    res.render('functionalities/addbal.ejs')
})
app.get('/checkbalance',(req,res)=>{
    res.render('functionalities/checkbalance.ejs')
})
app.get('/transaction',(req,res)=>{
    res.render('functionalities/transaction.ejs')
})
app.get('/payment',(req,res)=>{
    res.render('functionalities/payment.ejs')
})
app.get('/dth',(req,res)=>{
    res.render('payments/dth_recharge_wallet.ejs')
})
app.get('/ele',(req,res)=>{
    res.render('payments/electricty_bill_wallet.ejs')
})
app.get('/fasttag',(req,res)=>{
    res.render('payments/fastag_bill_wallet.ejs')
})
app.get('/mobilepay',(req,res)=>{
    res.render('payments/mobile_pay_wallet.ejs')
})
app.get('/moneytransfer',(req,res)=>{
    res.render('payments/Money_transfer_wallet.ejs')
})
app.get('/spend',(req,res)=>{
    res.render('payments/spend_from_wallet_wallet.ejs')
})
app.get('/utility',(req,res)=>{
    res.render('payments/utility_bill_wallet.ejs')
})
app.get('/watertax',(req,res)=>{
    res.render('payments/water_tax_wallet.ejs')
})
app.listen(2000)