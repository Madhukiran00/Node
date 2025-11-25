const errorResponse = (res, data = {}, message = 'success', status = 200) => {
  return res.status(status).json({
    success: true,
    message,
    data
  });
};


const successResponse = (res, data = {}, message = 'success', status = 200) => {
  return res.status(status).json({
    success: true,
    message,
    data
  });
};
module.exports ={errorResponse,successResponse};