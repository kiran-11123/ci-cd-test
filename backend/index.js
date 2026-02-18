import express from 'express';

export const app = express();
app.use(express.json())
app.get('/api', (req, res) => {
 return  res.status(200).json({ message: 'Hi Everyone' });
});

app.post("/sum" , (req,res)=>{
      
    const {a,b} = req.body;

    const ans = a+b;

    return res.status(200).json({
        result : ans
    })
})



