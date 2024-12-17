import { title } from "process";

const post = {
    name: postMessage,
    title: "Post",
    type: "document",
    fields:[
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule: { required: () => never; })=>Rule.required(),
        },
        {
            name: "metadata",
            title: "metadata",
            type: "string",
            vaildation:(Rule: { required: () => never; })=>Rule.required(),
        },
        {
            name: "slug",
            title : "Slug",
            type: "slug",
            options: {
                source:title,
                unique: true,
                slugify: (input:any)=>{
                    return input
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]+/g, "");
                }
            },
            validation: (Rule:any)=>{
                Rule.required().custom(fields:any)=>{
                    if
                }
            }
        }
    ]
}