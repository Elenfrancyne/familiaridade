const Parents = require("../models/parentsSchema");
const registerParents = async(req, res) => {
    try {
        const {
            name,
            contact,
            adress,
            cpfOuCnpj,
            email,
            kindOfHelp,
            createdAt
        } = req.body;
        const newParents = new Parents({
            name,
            contact,
            adress,
            cpfOuCnpj,
            email,
            kindOfHelp,
            createdAt
        });

        const parentsExist = await Parents.findOne({
            email: req.body.email
        })
        if (parentsExist) {
            return res.status(400).json({ error: "Este Padrinho já está cadastrado." });
        }
        const savedParents = await newParents.save();
        res.status(201).json({
            message: " Padrinho cadastrado com sucesso!",
            savedParents
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
const listenParents = async(req, res) => {
    try {
        const listParents = await Parents.find();
        res.status(200).json({
            message: " Lista de Padrinhos cadastrados",
            listParents
        })
        if (listParents.lenght == 0) {
            return res.status(404).json({
                message: "Não há padrinhos cadastrados!"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
const listenParentsById = async(req, res) => {
    try {
        const parentsById = await Parents.findById(req.params.id)
        if (!parentsById) {
            return res.status(404).json({
                message: "Padrinho não está Cadastrado!"
            })
        }
        res.status(200).json({
            message: "Padrinho: ",
            padrinhoById
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
const updateParentsById = async(req, res) => {
    try {
        const {
            name,
            contact,
            adress,
            cpfOuCnpj,
            email,
            kindOfHelp,
            createdAt

        } = req.body
        const parents = await Parents.findById(req.params.id)

        if (!parents) {
            return res.status(404).json({
                message: "Padrinho não está Cadastrado!"
            })
        }
        parents.name = name || parents.name
        parents.contact = contact || parents.contact
        parents.adress = adress || parents.adress
        parents.cpfOuCnpj = cpfOuCnpj || parents.cpfOuCnpj
        parents.email = email || parents.email
        parents.kindOfHelp = kindOfHelp || parents.kindOfHelp
        parents.createdAt = createdAt || parents.createdAt

        const updateParents = await parents.save()
        res.status(200).json({
            message: "Cadastro atualizado com sucesso",
            updateParents
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}

const deleteParentsById = async(req, res) => {
    try {
        const parents = await Parents.findById(req.params.id)
        if (!parents) {
            return res.status(404).json({
                message: "Padrinho não está cadastrado!"
            })
        }

        await parents.delete()
        res.status(500).json({
            message: " Cadastro deletado com sucesso"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
module.exports = {
    registerParents,
    listenParents,
    listenParentsById,
    updateParentsById,
    deleteParentsById
}