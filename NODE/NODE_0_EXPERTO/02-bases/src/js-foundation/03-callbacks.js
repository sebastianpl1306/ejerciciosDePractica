const users = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
]

//Los callbacks son funciones que reciben otras funciones como argumentos y cuando se ejecutan devuelven información para realizar un proceso
function getUserById( id, callback ) {
    const user = users.find( function(user){
        return user.id === id;
    });

    if( !user ){
        return callback(`User not found with id ${id}`);
    }

    return callback( null, user );
}

module.exports = {
    getUserById,
}