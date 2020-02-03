function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        points: 0,
        completed: {}
    };

    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    race: formData.get('race'),
    points: 0, 
    completed: {}
});

export default makeUser;




