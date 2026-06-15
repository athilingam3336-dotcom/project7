const registerStudent = (req, res) => {

    const { name, roll } = req.body;

    if (!name || !roll) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    console.log("Student Registered");
    console.log("Name :", name);
    console.log("Roll :", roll);

    return res.status(200).json({
        success: true,
        message: "Registration Successful",
        student: {
            name,
            roll
        }
    });
};

module.exports = {
    registerStudent
};
