import { expect , it  ,describe} from "vitest";
import request from "supertest";
import  {app} from "../index.js";


describe("GET/ " , ()=>{

     it("Should Return the message from the backend" , async()=>{
           
        const res = (await request(app).get("/api"))

        expect(res.statusCode).toBe(200)
        expect(res.body.message).toBe("Hi Everyone")
     })
   
})


describe("POST/ sum" , ()=>{
       
    it("Should return the sum of two numbers" ,async()=>{
          
        const res = (await request(app).post("/sum").send({
            a:1,
            b:2
         }));

        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(3);
    })
})



describe("POST/ sum" , ()=>{
       
    it("Should return the sum of two numbers" ,async()=>{
          
        const res = (await request(app).post("/sum").send({
            a:"1",
            b:2
         }));

        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe("Invalid Input");
    })
})



describe("/ POST multiply" , ()=>{
       
    it("Should return the product of two numbers" , async()=>{

        const res = (await request(app).post("/multiply").send({
              a:2,
              b:3
        }))
         
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(6);
        
    
    
    })
})


describe("/ POST multiply" , ()=>{
       
    it("Should return the product of two large numbers" , async()=>{

        const res = (await request(app).post("/multiply").send({
              a:100000000000000000,
              b:100000000000000000
        }))
         
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe("Input too large");
    
    
    
    })
})