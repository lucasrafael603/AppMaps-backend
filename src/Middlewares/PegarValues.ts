import {Request, Response, NextFunction} from 'express'

export default function LogRequests(request : Request, response : Response,  next : NextFunction){


  

  const value = request.file.filename

  //request.fileArchive.id = value

  
 
  console.log('Verificando Rota',  value)

    next()

  
}