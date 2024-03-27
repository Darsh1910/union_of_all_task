function generateSalt(keyLength)
{
    var i, salt = "", characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    var charactersLength = characters.length;

    for (i = 0; i < keyLength; i++) {
        salt += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
    }


    return salt;


}


module.exports = generateSalt;



