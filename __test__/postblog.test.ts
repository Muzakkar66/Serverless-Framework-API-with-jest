import {  Context } from 'aws-lambda'
import { getBlogListMAIN } from '../src/functions/getBlogList/handler'
import { PostBlogMAIN } from '../src/functions/postblog/handler'
import { updateBlogMAIN } from '../src/functions/updateBlog/handler'
import { deleteBlogMAIN } from '../src/functions/deleteBlog/handler'

describe("Blog CRUD operation", ()=> {

    //Post blog  endpoint test
    test("Post blog endpoint",async  ()=>{
         let context: Context = {} as any
        const body = {
            auther: "Pasha ",
            title: "Scan My name is Muzakkar ",
            description: "Muzakkar ",
            // content: "Scan List of blogs",
        }
        const request =  {
            body: JSON.stringify(body)
        }
        await PostBlogMAIN(request, context, function(error, data){
                if(error){}
                // console.log(data)
                const resposne = JSON.parse(JSON.stringify(data))
                expect(resposne.statusCode).toBe(200)
        }) 
    })
    //Scan blog list endpoint test
    test("Scan blog list endpoint",async  ()=>{
        
        let context: Context = {} as any
            const body = {
                auther: "JS ",
                title: "Scan My name is Muzakkar ",
                description: "Muzakkar ",
                content: "Scan List of blogs",
            }
            const request =  {
                body: JSON.stringify(body)
            }
        await getBlogListMAIN(request, context, function(error, data){
                if(error){}
                // console.log(data)
                const resposne = JSON.parse(JSON.stringify(data))
                expect(resposne.statusCode).toBe(200)
        })
    })

        // update post endpoints test
        test("Update blog endpoint",async  ()=>{
        let context: Context = {} as any
        const body = {
            auther: "JS ",
            title: "Scan My name is Muzakkar ",
            description: "Muzakkar ",
            content: "Scan List of blogs",
        }
        const request =  {
            body: JSON.stringify(body)
        }
        await updateBlogMAIN(request, context, function(error, data){
                if(error){}
                // console.log(data)
                const resposne = JSON.parse(JSON.stringify(data))
                expect(resposne.statusCode).toBe(200)
            }) 
        }) 
        // Delete post endpoint test
        test("Delete blog endpoint",async  ()=>{
        let context: Context = {} as any
        const body = {
            auther: "JS ",
        }
        const request =  {
            body: JSON.stringify(body)
        }
        await deleteBlogMAIN(request, context, function(error, data){
                if(error){}
                // console.log(data)
                const resposne = JSON.parse(JSON.stringify(data))
                expect(resposne.statusCode).toBe(200)
            }) 
        }) 
    
})