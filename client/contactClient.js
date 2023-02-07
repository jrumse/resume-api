const postContact = async(contact) => {

    let sav = await contact.save()
        .then((contact) => {
            return contact;
        })
        .catch((err) => {
            return err;
        });

    return sav;
}

exports.postContact = postContact;