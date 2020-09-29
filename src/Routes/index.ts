import {Router} from 'express'
import  usersRouter from './users.router'
//import JogosRouter from './jogos.routes'

const routes = Router()


routes.use('/users', usersRouter)


//routes.use('/Jogos', JogosRouter)

export default routes
