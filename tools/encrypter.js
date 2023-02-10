const crypto = require("crypto");
const pkcs7 = require('pkcs7-padding');

const encryptField = function(field) {
    // Create algorithm and cipher
    const algorithm = "aes-256-cbc";
    let iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(process.env.SECRET_ENCRYPTION_KEY, "hex"), iv);

    // Pad Field
    field = Buffer.from(field, 'utf8');
    field = pkcs7.pad(field);

    // Encrypt Field
    let encryptedField =  Buffer.concat([iv, cipher.update(field), cipher.final()]);

    return encryptedField;
}

const decryptField = function(encryptedField) {
    // Get IV And Encrypted Field
    const algorithm = "aes-256-cbc";
    let iv = encryptedField.slice(0, 16);
    let enc = encryptedField.slice(16);

    // Build Decipher
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(process.env.SECRET_ENCRYPTION_KEY, "hex"), iv);

    // Decrypt
    let decryptedField = Buffer.concat([decipher.update(enc), decipher.final()]);

    // Un Pad
    decryptedField = pkcs7.unpad(decryptedField);

    return decryptedField.toString();
}

exports.encryptField = encryptField;
exports.decryptField = decryptField;