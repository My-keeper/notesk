/*
    using middleware which allow us to do something between requestin and running the route handler
    with middleware : new request -> do something -> run route handler 
    method is used for {Get, Post, Patch< Delet}
    path is used for { the link or route that the user is trying to get access to }
    //we have to run next so the route handler can run 
*/

const auth = async ( req, res, next) => {
    console.log('auth middleware')
    next()
}


module.exports = auth