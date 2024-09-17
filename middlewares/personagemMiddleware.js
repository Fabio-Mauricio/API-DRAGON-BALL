const validateFieldName = (req, res, next) => {

    const {body} = req;

    if(body.name === undefined) {
        return res.status(400).json("The field 'name' is required!");
    }

    if(body.name === '') {
        return res.status(400).json("The field 'name' is required!");
    }

    next();
};

const validateFieldAlternativeName = (req, res, next) => {

    const {body} = req;

    if(body.alternative_name === undefined) {
        return res.status(400).json("The field 'alternative_name' is required!");
    }

    if(body.alternative_name === '') {
        return res.status(400).json("The field 'alternative_name' is required!");
    }

    next();
};

const validateFieldRace = (req, res, next) => {

    const {body} = req;

    if(body.race === undefined) {
        return res.status(400).json("The field 'race' is required!");
    }

    if(body.race === '') {
        return res.status(400).json("The field 'race' is required!");
    }

    next();
};

const validateFieldGender = (req, res, next) => {

    const {body} = req;

    if(body.gender === undefined) {
        return res.status(400).json("The field 'gender' is required!");
    }

    if(body.gender === '') {
        return res.status(400).json("The field 'gender' is required!");
    }

    next();
};

const validateFieldFirstMangaAppearence = (req, res, next) => {

    const {body} = req;

    if(body.first_manga_appearence === undefined) {
        return res.status(400).json("The field 'first_manga_appearence' is required!");
    }

    if(body.first_manga_appearence === '') {
        return res.status(400).json("The field 'first_manga_appearence' is required!");
    }

    next();
};

const validateFieldFirstAnimeAppearence = (req, res, next) => {

    const {body} = req;

    if(body.first_anime_appearence === undefined) {
        return res.status(400).json("The field 'first_anime_appearence' is required!");
    }

    if(body.first_anime_appearence === '') {
        return res.status(400).json("The field 'first_anime_appearence' is required!");
    }

    next();
};

const validateFieldDateBirth= (req, res, next) => {

    const {body} = req;

    if(body.date_birth === undefined) {
        return res.status(400).json("The field 'date_birth' is required!");
    }

    if(body.date_birth === '') {
        return res.status(400).json("The field 'date_birth' is required!");
    }

    next();
};

const validateFielHeight = (req, res, next) => {

    const {body} = req;

    if(body.height === undefined) {
        return res.status(400).json("The field 'height' is required!");
    }

    if(body.height === '') {
        return res.status(400).json("The field 'height' is required!");
    }

    next();
};



module.exports = {
    validateFieldName,
    validateFieldAlternativeName,
    validateFieldRace,
    validateFieldGender,
    validateFieldFirstMangaAppearence,
    validateFieldFirstAnimeAppearence,
    validateFieldDateBirth,
    validateFielHeight
}