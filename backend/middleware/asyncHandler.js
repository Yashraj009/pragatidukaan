const asyncHandler = fn =>(req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch(next);
}
// middlewares are used instead try-catch to resolve errors

//asyncHandler: It's a higher-order function that simplifies error handling for asynchronous middleware functions in Express.js.takes a function fn as an argument.

// (req, res, next): This function takes the standard Express.js middleware parameters: req (request object), res (response object), and next (a callback function to pass control to the next middleware function).

// Promise.resolve(fn(req, res, next)).catch(next): Inside asyncHandler, it immediately invokes the fn function with the provided req, res, and next parameters. This returns a promise. If the promise resolves successfully, the catch block is skipped. If the promise rejects (i.e., an error occurs), the catch block catches the error and passes it to the next function, which passes control to the Express.js error-handling middleware.
export default asyncHandler;