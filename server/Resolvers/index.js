let crypto = require('crypto')
let localData = {}
const resolver = {
    Query:{
        getMessage: () => {
            return "hello111111 world from panacloud"
        },
        getName: ()=> {
            return "Daniyal Nagori"
        },
        getAllMessags: ()=>{
            return [{message:"test",id:"2343"},{message:"test",id:"2343"}]
        }
    },
    Mutation: {
        createMessage: (_,{input})=>{
            // console.log("args",ags)
            let id = crypto.randomBytes(10).toString("hex")
            console.log('id', id)
            localData[id] = {id,...input.message}
            return {id,...input}
        }
    }
}

module.exports = resolver