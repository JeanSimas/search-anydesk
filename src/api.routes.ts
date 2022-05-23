import {Request, Response, Router} from 'express'

export const ApiRouter = Router()

ApiRouter.get('/', (request: Request, response: Response) => { 
  response.send('Funcionando')  
 })