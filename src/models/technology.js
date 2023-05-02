import {Schema,model} from 'mongoose'

const technology = new Schema({
    id:{
        type: Schema.Types.Number,
        required:true
    },
    name:{
        type: Schema.Types.String,
        required:true
    },
    images:{
        portrait:{
            type: Schema.Types.String,
            required:true 
        },
        landscape:{
            type: Schema.Types.String,
            required:true
        }
    },
    description:{
        type: Schema.Types.String,
        required:true
    },

})

const Technology = model("Technology",technology)

export default Technology