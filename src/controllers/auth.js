import User from "../models/user";
import jwt from 'jsonwebtoken'
export const signup = async  (req, res) => {
    try {
        const { email, name, password } = req.body;
        // Kiem tra email ton tai khong
        const existUser = await User.findOne({ email, name, password }).exec();
        // neu ton tai thi bao loi
        if(existUser){
            //return dung lai chuong trinh
            return res.json({
                message: "User existed"
            })
        }
        // nguoc lai thi them user vao db
        //tao tk, truoc khi save tao 
        const user = await new User({ email, name, password}).save();
        // tra ve thong tin user
        return res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })

    } catch (error) {
        return res.status(400).json()
    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body;
        // Kiem tra email ton tai khong
        const user = await User.findOne({ email }).exec();
        if(!user){
            return res.status(401).json({
                message: "User khong ton tai"
            })
        }
        if(!user.authenticate(password)){
            return res.status(401).json({
                message: "Mat khau khong dung"
            })
        }

        const token = jwt.sign({_id: user._id}, 'aaaa', { expiresIn: 60*60 })
        return res.json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })

}