import { Router } from 'express'
import movieRouter from './movie.route.js';

const router = Router()

router.use('/movies', movieRouter)

export default router