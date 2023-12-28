const UserDetail = require('../models/add_user')

exports.createUserDetails = async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    age,
    hobbies
  } = req.body;

  try {
    const UserdetailData = await UserDetail.create({
    first_name,
    last_name,
    email,
    age,
    hobbies
    })
    return res.status(201).send({
      message: "create successfully!", data: UserdetailData
    })
  }
  catch (err) {
    res.status(400).send({
      message: err.message || "Some error occurred while creating the UserdetailData."
    });
  }
}

exports.getUserList = async (req, res) => {
  try {
    const UserdetailData = await UserDetail.find({})
    if (UserdetailData) {
      res.status(200).send({ message: "get all UserdetailData list", data: UserdetailData })
    }
  } catch (err) {
    console.log(err.message)
    res.status(400).send({ message: "error", error: err.message })
  }
}


exports.getUserDetails = async (req, res) => {
  try {
    const restData = await UserDetail.findById({
      _id: req.params.id,
    })
    if (!restData || restData == undefined) {
      return res.status(404).send({message: "userId is invalid or userId not found"})
    }
    return res.status(200).send({
      message: "user resitered save data",
      data: restData
    })
  }
  catch (err) {
    console.log(err.message)
    return res.status(400).send({message: "server error"})
  }
}


exports.editUserDetails = async (req, res) => {
  try {
    const userdata = await UserDetail.findById({ _id: req.params.id });
    if (userdata) {
      const updateData = await UserDetail.updateOne({ _id: req.params.id }, {
        $set: req.body
      })
      return res.send({ status: "update data successfully! ", "result": updateData })
    }else{
      return res.status(404).send({message: "userId is invalid or userId not found"})
    }
  }
  catch (err) {
    console.log(err.message)
    return res.status(400).send({message: "server error"})
  }
}


exports.deleteUser = async (req, res) => {
  try {
    const userdata = await UserDetail.findById({ _id: req.params.id });
    console.log(userdata)
    if (userdata) {
      await UserDetail.findByIdAndRemove({ _id: req.params.id  })
      return res.status(204).send({ message: "Delete data successfully! " })
    }else{
      return res.status(404).send({message: "userId is invalid or userId not found"})
    }
  }
  catch (err) {
    console.log(err.message)
    return res.status(400).send({message: "server error"})
  }
}
