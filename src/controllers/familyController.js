const Family = require("../models/familySchema");

const registerFamily = async(req, res) => {
    try {
        const { nameOwner, contact, adress, citty, numberOfMembers, minor, nameOfMembers, averageWage, CPF, lack, createdAt } = req.body;
        const newFamily = new Family({
            nameOwner,
            contact,
            adress,
            citty,
            numberOfMembers,
            minor,
            nameOfMembers,
            averageWage,
            CPF,
            lack,
            createdAt

        });

        const familyExist = await Family.findOne({ CPF: req.body.CPF })
        if (familyExist) {
            return res.status(400).json({ error: "Familia já está cadastrado." });
        }

        const saveFamily = await newFamily.save();
        res.status(201).json({
            message: "Familia cadastrada com sucesso!",
            saveFamily
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

}

const listenFamily = async(req, res) => {
    try {
        const listFamily = await Family.find()
        res.status(200).json({
            message: "Lista de famílias cadastradas",
            listFamily
        })
        if (listFamily.length == 0) {
            return res.status(404).json({
                message: " Nenhuma família está cadastrada!"

            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
const listenFamilyById = async(req, res) => {
    try {
        const familyById = await Family.findById(req.params.id)
        if (!familyById) {
            return res.status(404).json({
                message: "Família não Cadastrada!"
            })
        }
        res.status(200).json({
            message: "Família: ",
            familyById
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}



const updateFamilyById = async(req, res) => {
    try {
        const {
            nameOwner,
            contact,
            adress,
            citty,
            numberOfMembers,
            minor,
            nameOfMembers,
            averageWage,
            CPF,
            lack,
            createdAt

        } = req.body
        const family = await Family.findById(req.params.id)

        if (!family) {
            return res.status(404).json({
                message: "Família não Cadastrada!"
            })
        }
        family.nameOwner = nameOwner || family.nameOwner
        family.contact = contact || family.contact
        family.adress = adress || family.adress
        family.citty = citty || family.citty
        family.numberOfMembers = numberOfMembers || family.numberOfMembers
        family.minor = minor || family.minor
        family.nameOfMembers = nameOfMembers || family.nameOfMembers
        family.averageWage = averageWage || family.averageWage
        family.CPF = CPF || family.CPF
        family.lack = lack || family.lack
        family.createdAt = createdAt || family.createdAt

        const updateFamily = await family.save()
        res.status(200).json({
            message: "Cadastro atualizado com sucesso",
            updateFamily
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}
const deleteFamilyPorId = async(req, res) => {
    try {
        const family = await Family.findById(req.params.id)
        if (!family) {
            return res.status(404).json({
                message: "Família não Cadastrada!"
            })
        }

        await family.delete()
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
    registerFamily,
    listenFamily,
    listenFamilyById,
    updateFamilyById,
    deleteFamilyPorId
}