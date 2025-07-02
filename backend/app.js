import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import cookies from 'cookie-parser'

import chatRouter from './routers/chatRoutes.js'
import pinRouter from './routers/pinRoutes.js'
import postRouter from './routers/postRoutes.js'
import userRouter from './routers/userRoutes.js'
import testRouter from './routers/testRouter.js'

dotenv.config({path: './config.env'})

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: 'http://localhost:5173',
                       credentials: true
}))
app.use(cookies())

app.use('/imagen/api/v1/chats', chatRouter)
app.use('/imagen/api/v1/posts', postRouter)
app.use('/imagen/api/v1/pinboards', pinRouter)
app.use('/imagen/api/v1/users', userRouter)

export default app;