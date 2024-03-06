const User =require("../models/users");

module.exports.signUp = async (req,res) =>{
    let  { name , email , password , contact , username } = req.body;

    console.log(req.body);

    if (!name || !email || !contact || !password || !username) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    const existingUser = await User.findOne({email : email.toLowerCase()});

    if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
    }

    const existingUsername = await User.findOne({username : username.toLowerCase()});

    if (existingUsername) {
        return res.status(400).json({ message: 'Username already in use' });
    }

    try {
        const newUser= new User({
            username,
            email,
            contact,
            name
        });

        const registeredUser=await User.register(newUser,req.body.password);

        req.login(registeredUser , (err) =>{
            if(err){
                console.log(err);
                return res.status(400).json({ message: 'Error saving the user' });
            }
            else{
                return res.status(200).json({ message: 'User created successfully' });
            }
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error registering user' });
    }

}


module.exports.login = (req,res) => {
    return res.status(200).json({ message: 'Login successful!' });
}

module.exports.logout = (req,res) => {
    req.logout( (err) =>{
        if(err){
            console.error(err);
            return res.status(400).json({ message: 'Error logging out' });
        }
        res.status(200).json({ message: 'Logged out successfully' });
    });
}