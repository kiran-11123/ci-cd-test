import express from 'express';
import zod from 'zod';
export const app = express();
app.use(express.json())


const NumberSchema = zod.object({
    a : zod.number(),
    b : zod.number()
})



app.get('/api', (req, res) => {
 return  res.status(200).json({ message: 'Hi Everyone' });
});

app.post("/sum" , (req,res)=>{
      
    const {a,b} = req.body;

    const validation = NumberSchema.safeParse({a,b});

    if(!validation.success){
        return res.status(400).json({
            message : "Invalid Input"
        })
    }

     if(a>100000000 || b>100000000){
        return res.status(400).json({
            message : "Input too large"
        })
    }

    const ans = a+b;

    return res.status(200).json({
        result : ans
    })
})





app.post("/multiply" , (req,res)=>{
      
    const {a,b} = req.body;

    const validation = NumberSchema.safeParse({a,b});

    if(!validation.success){
        return res.status(400).json({
            message : "Invalid Input"
        })
    }

    if(a>100000000 || b>100000000){
        return res.status(400).json({
            message : "Input too large"
        })
    }

    const ans = a*b;

    return res.status(200).json({
        result : ans
    })
})


