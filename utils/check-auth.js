const jwt = require('jsonwebtoken');

module.exports = (context) => {
    const authHeader = context.req.headers.authorization;
    if(authHeader){
        const token = authHeader.split("Bearer ")[1];
        if(token){
            try{
                const user = jwt.verify(token, process.env.SECRET_TOKEN+)
            }
        }
    }
}