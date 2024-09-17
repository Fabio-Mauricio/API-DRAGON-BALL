const personagemModel = require('../models/personagemModel');

const getAll = async(req, res) => {
    const personagens = await personagemModel.getAll();

    return res.status(201).json(personagens);
};

const createCharacter = async(req, res) => {
    const createdCharacter = await personagemModel.createCharacter(req.body);

    return res.status(201).json(createdCharacter);
};

const updateCharacter = async(req, res) => {

    const {id} = req.params;

    const updatedCharacter = await personagemModel.updateCharacter(id, req.body);
    return res.status(204).json(updatedCharacter);
};

const deleteCharacter = async (req, res) => {
    const {id} = req.params;

    const deletedCharacter = await personagemModel.deleteCharacter(id);
    return res.status(205).json(deletedCharacter);
}

module.exports = {
    getAll,
    createCharacter,
    updateCharacter,
    deleteCharacter
}