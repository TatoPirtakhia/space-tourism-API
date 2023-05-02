import {Schema,model} from 'mongoose'

const crew = new Schema({
    id:{
        type: Schema.Types.Number,
        required:true
    },
    name:{
        type: Schema.Types.String,
        required:true
    },
    images:{
        png:{
            type: Schema.Types.String,
            required:true 
        },
        webp:{
            type: Schema.Types.String,
            required:true
        }
    },
    role:{
        type: Schema.Types.String,
        required:true
    },
    bio:{
        type: Schema.Types.String,
        required:true
    }

})

const Crew = model("Crew",crew)

export default Crew