import {main} from '../src/functions/postblog/handler'
import {main2} from '../src/functions/hello/handler'

describe("testing blog post", ()=> {
    test("hello API",async  ()=>{
        const request =  {
            body:{
                name: "My name is Muzakkar ",
            }
        }

        const response = await main2(request) 
        expect(response.statusCode).toBe(200)
    })
    test("put blog",async  ()=>{
        const request =  {
            body:{
                auther: "Ali",
                title: "Rahat",
                description: "Rahat",
                content: "Rahat"
            }
        }

        const response = await main(request) 
        expect(response.statusCode).toBe(200)
    })
})