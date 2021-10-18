import {main} from '../src/functions/postblog/handler'
import { getBlogListMAIN } from '../src/functions/getBlogList/handler'

describe("Blog CRUD operation", ()=> {

    //Get blog list endpoint test
    test("Get blog list endpoint",async  ()=>{
        const request =  {
            body:{
                auther: "Pasha",
                title: "GEt My name is Muzakkar ",
                description: "My name is Muzakkar ",
                content: "Get List of blogs",
            }
        }

        const response = await getBlogListMAIN(request, context, callback() ) 
        expect(response.statusCode).toBe(200)
    })

    // second endpoints test
    test("put blog",async  ()=>{
        const request =  {
            body:{
                auther: "Muzakkar",
                // title: "Developer",
                // description: "My name is Muzakkar",
                // content: "Rest Api"
            }
        }
        const response = await main(request) 
        expect(response.statusCode).toBe(200)
    })
})