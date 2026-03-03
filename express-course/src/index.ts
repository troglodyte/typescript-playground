// npx tsc --esModuleInterop express.ts && mv express.js express.cjs && node express.cjs
import express from 'express'
import type {Express, Request, Response, NextFunction} from 'express'
import {Pet, pets} from './data/pets'
import cors from 'cors'
import { petRouter } from './routes/pets.routes'

const PORT = 8000
const app:Express = express()
app.use(cors())

app.use((
  req: Request, 
  res: Response, next: NextFunction
) => {
  res.setHeader('Content-Type', 'application/json');
  next();
})

app.get('/pet', petRouter)

app.get('/:id', (req:Request<{id:string}>, res:Response<Pet|{message:string}>) => {
  const {id} = req.params;
  //const targetPet = pets.find(p => p.id === parseInt(`${id}`))
  const targetPet:Pet|undefined = pets.find((p:Pet):Boolean => p.id.toString() == id)
  targetPet ? res.json(targetPet) : res.status(400).json({message: "Not found"})
})




app.use((req:Request, res:Response<{message:String}>):void => {
  res.status(404).json({message: "Endpoint not found " + req.url})
})



app.listen(PORT, ():void =>{
  console.log("Listening on port: ", PORT)
})