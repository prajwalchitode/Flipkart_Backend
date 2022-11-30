
import connection from './database/db.js';
import express from'express';
import dotenv from 'dotenv'
import DefaultData from './default.js';
import cors from 'cors'
import Router from './routes/route.js';
import bodyParser from 'body-parser'
import { v4 as uuid} from 'uuid'


const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', Router)


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const PORT = process.env.PORT || 8000;

const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-p3dugzg-shard-00-00.gwxbvkf.mongodb.net:27017,ac-p3dugzg-shard-00-01.gwxbvkf.mongodb.net:27017,ac-p3dugzg-shard-00-02.gwxbvkf.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-rozef6-shard-0&authSource=admin&retryWrites=true&w=majority `;




connection(URL);

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'))
}

app.listen(PORT, ()=>{
    console.log('Server is running on port 8000');
})

DefaultData();

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.MID ,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'callback'
paytmParams['EMAIL'] = 'kunaltyagi@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'