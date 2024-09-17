const express = require('express');
const router = express.Router();

const personagemMiddleware = require('./middlewares/personagemMiddleware');
const personagemController = require('./controllers/personagemController');

router.get("/dragon", personagemController.getAll)

router.post("/dragon", 
    personagemMiddleware.validateFieldName, 
    personagemMiddleware.validateFieldAlternativeName,
    personagemMiddleware.validateFieldRace,
    personagemMiddleware.validateFieldGender,
    personagemMiddleware.validateFieldFirstMangaAppearence,
    personagemMiddleware.validateFieldFirstAnimeAppearence,
    personagemMiddleware.validateFieldDateBirth,
    personagemMiddleware.validateFielHeight,
    personagemController.createCharacter);

router.put("/dragon/:id",
    personagemMiddleware.validateFieldName, 
    personagemMiddleware.validateFieldAlternativeName,
    personagemMiddleware.validateFieldRace,
    personagemMiddleware.validateFieldGender,
    personagemMiddleware.validateFieldFirstMangaAppearence,
    personagemMiddleware.validateFieldFirstAnimeAppearence,
    personagemMiddleware.validateFieldDateBirth,
    personagemMiddleware.validateFielHeight,
    personagemController.updateCharacter)

router.delete("/dragon/:id", personagemController.deleteCharacter)

module.exports = router;