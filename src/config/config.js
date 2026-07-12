import dotenv from 'dotenv';

dotenv.config();

if(!process.env.MONGODB_URI){
    throw new console.error(" MONGODB_URI is not defind in enviroment veriable");
    
}
const config = {
    MONGODB_URI: process.env.MONGODB_URI
};

export default config;