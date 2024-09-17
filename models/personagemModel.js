const connection = require('./connection');

const getAll = async() => {
    const [personagens] = await connection.execute("SELECT * FROM personagens");
    return personagens;
};

const createCharacter = async (character) => {

    const formattedDateBirth = new Date(character.date_birth).toISOString().split('T')[0];


    const [createdCharacter] = await connection.execute("INSERT INTO personagens (name, alternative_name, race, gender, first_manga_appearence, first_anime_appearence, date_birth, height) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
        [
            character.name, 
            character.alternative_name, 
            character.race, 
            character.gender, 
            character.first_manga_appearence, 
            character.first_anime_appearence, 
            formattedDateBirth, 
            character.height
        ]);
    return createdCharacter;
} 

const updateCharacter = async (id, character) => {

    const query = "UPDATE personagens SET name = ?, alternative_name = ?, race = ?, gender = ?, first_manga_appearence = ?, first_anime_appearence = ?, date_birth = ?, height = ? WHERE id = ?";

    const formattedDateBirth = new Date(character.date_birth).toISOString().split('T')[0];

    const [updatedCharacter] = await connection.execute(query,
         [
            character.name, 
            character.alternative_name, 
            character.race, 
            character.gender, 
            character.first_manga_appearence, 
            character.first_anime_appearence, 
            formattedDateBirth, 
            character.height,
            id
    ]);

    return updatedCharacter;
}

const deleteCharacter = async (id) => {

    const query = "DELETE FROM personagens WHERE id = ?";

    const [deletedCharacter] = await connection.execute(query, [id]);
    return deletedCharacter;
}

module.exports = {
    getAll,
    createCharacter,
    updateCharacter,
    deleteCharacter
}