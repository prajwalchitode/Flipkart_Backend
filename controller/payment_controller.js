import Paytmchecksum from "../paytm/PaytmChecksum.js"

import { paytmParams, paytmMerchantkey } from "../server.js"


export const addPaymentGateway = async (req, res)=>{
 try {
  let paytmCheckSum = await Paytmchecksum.generateSignature(paytmParams,paytmMerchantkey);

  let params = {
    ...paytmParams, 'CHECKSUMHASH': paytmCheckSum
  }

  res.status(200).json(params);


 } catch (error) {
    
    res.status(500).json({error: error.message});
 }
    
}




