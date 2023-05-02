import {Schema,model} from 'mongoose'

const destination = new Schema({
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
    description:{
        type: Schema.Types.String,
        required:true
    },
    distance:{
        type: Schema.Types.String,
        required:true
    },
    travel:{
        type: Schema.Types.String,
        required:true
    }

})

const Destination = model("Destination",destination)

export default Destination