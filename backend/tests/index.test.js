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