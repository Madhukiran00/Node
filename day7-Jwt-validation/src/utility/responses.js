exports.success=(response,data,status=200)=>{
    response.status(status).json(data)};

exports.error=(response,messag="Error",status=400)=>{
    response.status(status).json({error:message});
}