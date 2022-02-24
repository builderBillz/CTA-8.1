const { response } = require("express")
const express = require("express")
const laptops = express.Router()
const {getAllLaptops, getOneLaptop, createLaptop, deleteLaptop, editLaptop} = require("../queries/laptops")

laptops.get("/", async(req,res) => {
    console.log("GET /laptops")
    const laptops = await getAllLaptops()
    res.status(200).json(laptops)
})

laptops.get("/:id", async(req, res) => {
    console.log("GET /laptops/ :id")
    const oneLaptop = await getOneLaptop(req.params.id);
    res.status(200).json(oneLaptop);
})

laptops.post("/", async (req, res) => {
    console.log("POST/laptops")
  try{
      if(!req.body.image.length) req.body.image ="https://dummyimage.com/600x400/000/fff&text=Laptop+image+unavailable"
      const newLaptop = await createLaptop(req.body);
      res.status(201).json(newLaptop)

  } catch (error) {
      response.status(201).json({error: error});
  }
});

laptops.delete('/:id', async (req, res) => {
    console.log("Delete /laptops/:id")
    const laptop = await deleteLaptop(req.params.id)
    res.status(200).json(laptop)
})

laptops.put("/:id", async (req,res) => {
    console.log("PUT /:id")
    const {body, params} = req
    if(!body.image.length) body.image = "https://dummyimage.com/600x400/000/fff&text=Laptop+image+unavailable"
    const laptop = await editLaptop(params.id, req.body)
    res.status(200).json(laptop) 
})


module.exports = laptops
