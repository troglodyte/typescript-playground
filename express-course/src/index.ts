// npx tsc --esModuleInterop express.ts && mv express.js express.cjs && node express.cjs
import express from 'express'
import type {Express, Request, Response} from 'express'
import {Pet, pets} from './data/pets'
import cors from 'cors'

const PORT = 8000
const app:Express = express()
app.use(cors())

app.get('/', (req: Request, res: Response<Pet[]>)=> {
  res.json(pets)
})


/*
CHALLENGE: Type and complete the `/:id` route
    1. Type everything in the `.find()` callback function
    2. Type the `pet` variable (keeping in mind that
       we might not find a pet with that ID)
    3. Handle what happens if we don't find a
       pet with the provided ID
    4. Type the Response generic
*/
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