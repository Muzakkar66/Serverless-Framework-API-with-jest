import {main} from '../src/functions/postblog/handler'
import {main2} from '../src/functions/hello/handler'

describe("testing hello", ()=> {

    //first endpoints test
    test("hello API",async  ()=>{
        const request =  {
            body:{
                name: "My name is Muzakkar ",
            }
        }

        const response = await main2(request) 
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