const { mongoUrl } =  require("../../config")

const index = async (req, res, next) => {
    res.render('index', { title: 'Express' });
    console.log(mongoUrl);
  };

  const getUsers = async (req, res, next) => {
    try {
        const result = await users.find();

        res.send({
            status: 'Success',
            message: "GET users",
            data: result,

        });
    }
    catch(e) {
        res.send({
            status: 'Error',
            message: e.message,

        });
    }
}

const getUserId = async (req, res, next) => {
    try {
        const result = await users.findById(req.params.id);

        res.send({
            status: 'Success',
            message: "berhasil mengabil data users degan ID",
            data: result,

        });
    }
    catch(e) {
        res.send({
            status: "gagal mengabil data user dengan ID (error)",
            message: e.message,

        });
    }
}

const postUser = async (req, res, next) => {
    try {
        const result = await users.create({
            name: req.body.name,
            age: req.body.age,
            status: req.body.status,

        });

        res.send({
            status: 'Success',
            message: "user baru berhasil ditambahkan",
            data: result,

        });
    }
    catch(e) {
        res.send({
            status: "tidak dapat menabahkan user baru (error)",
            message: e.message,
        });
    }
}

const putUser = async (req, res, next) => {
    console.log(`id: ${req.params.id} | name: ${req.body.name} | age: ${req.body.age} | status: ${req.body.status}`)

    try {
        const result = await users.updateOne({_id: req.params.id}, {
            name: req.body.name,
            age: req.body.age,
            status: req.body.status,
        });

        res.send({
            status: 'Success',
            message: "berhasil update data user",
            result: result,
            updatedData: await users.findById(req.params.id),

        });
    }
    catch(e) {
        res.send({
            status: "update user gagal (error)",
            message: e.message,

        });
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const userDelete = await users.findById(req.params.id);
        const result = await users.deleteOne({_id: req.params.id});

        res.send({
            status: 'Success',
            message: "menghapus data users berdasarkan ID",
            result: result,
            deletedUser: userDelete,

        });
    }
    catch(e) {
        res.send({
            status: "menghapus data user dengan ID (error)",
            message: e.message,

        });
    } 
}

  module.exports = {
     index,

     getUsers, 
     getUserId,
     postUser,
     putUser,
     deleteUser,
  };