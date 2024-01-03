const demoModels = require("../model/demoModel.js")


const createDemoData = async function (req, res) {


    // completely execute this line then jump to the next line
    const demoData = await demoModels.create({
        firstName: "test",
        lastName: "abc",
        email: "test122w31@example.com",
        password: "123456",
        address: "Punjab",
        mobileNumber: 9832765743321,
        age: 23,
        isActive: true,
    })
    res.send({ message: "User created successfully", demoData })

}


const findAllUsers = async function (req, res) {

    const findData = await demoModels.find()
    console.log('findData11111', findData)

    res.send({ message: "User get successfully" })
}




module.exports = createDemoData
// module.exports = findAllUsers