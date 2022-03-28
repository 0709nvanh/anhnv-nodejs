import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid'
import { createHmac } from 'crypto'
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    salt: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number, 
        default: 0
    }
}, { timestamp: true })


userSchema.methods = {
    //method
    authenticate(password){
        return this.password == this.encrytPassword(password);
    },
    //method
    encrytPassword(password){
        if(!password) return;
        try {
            return createHmac('sha256', this.salt).update(password).digest('hex')
        } catch (error) {
            console.log(error)
        }
    }
}

//middleware
userSchema.pre("save", async function save(next){
    try {
        this.salt = uuidv4();
        console.log('this.encrytPassword(this.password)', this.encrytPassword(this.password));
        this.password = this.encrytPassword(this.password)
        return next()
    } catch (error) {
        return next(error)
    }
})
export default mongoose.model("User", userSchema)