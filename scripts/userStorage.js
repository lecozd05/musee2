const USERS_URL = '../data/registeredUsersList.json';

export async function loadUsersFromJson() {
    const response = await fetch(USERS_URL);
    if (!response.ok) throw new Error('Erreur de chargement des utilisateurs.');
    return response.json();
}

export async function saveUserToJson(user) {
    const users = await loadUsersFromJson();
    users.push(user);
    await fetch(USERS_URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
    });
}