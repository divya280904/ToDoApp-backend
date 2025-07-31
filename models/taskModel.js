import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        // required: true
    },
    priority:{
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium'
    },
    status: {
        type: String,
        enum: ['Pending',  'Completed'],
        default: 'Pending'
    },
    dueDate:{
        type: Date,
        required: true
    }
},{
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema);

export default Task;