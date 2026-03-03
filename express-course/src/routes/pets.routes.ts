import express from 'express'
import type {Router, Request, Response} from 'express'
import { getPets, getPetsById } from '../controllers/pets.controllers'
import { pleaseAuth, validateNumericId } from '../middleware/pets.middlware'

export const petRouter:Router = express.Router()

petRouter.get('/', getPets)

petRouter.get('/:id', pleaseAuth, validateNumericId, getPetsById)