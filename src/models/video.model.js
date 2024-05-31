import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'


const videoSchema=new Schema(
    {
        videoFile:{
            type:String ,   //cloudinery url
            required:true,
        },
        thumbnail:{
            type:String ,  //cloudinery url
            required:true,
        },
        title:{
            type:String ,  
            required:true,
        },
        description:{
            type:String ,   
            required:true,
        },
        duration:{
            type:Number,   //from cloudinery
            required:true
        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true 
        },
        isOwner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    },{
        timestamps:true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video=mongoose.model("Video",videoSchema)