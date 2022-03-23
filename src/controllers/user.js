import User from "../models/user";

export const signup = async  (req, res) => {
    try {
        const { email, name, password } = req.body;
        // Kiem tra email ton tai khong
        const existUser = await User.findOne({ email, name, password }).exec();
        // neu ton tai thi bao loi
        if(existUser){
            res.json({
                message: "User existed"
            })
        }
        // nguoc lai thi them user vao db
        const user = await new User({ email, name, password}).save();
        // tra ve thong tin user
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
            
        })

    } catch (error) {
        res.status(400).json()
    }
}