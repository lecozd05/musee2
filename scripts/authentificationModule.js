import {
    loadUsersFromJson
} from './userStorage.js';

export function authenticationModaleCreation() {
    const loginModalHtml = `
        <div id="login-modal" class="modal">
            <div class="modal-content">
                <span id="close-login-modal" class="close">&times;</span>
                <h2>Identification</h2>
                <form id="login-form">
                    <div class="form-group">
                        <label for="login-email">Email :</label>
                        <input type="email" id="login-email" name="login-email" required>
                    </div>
                    <div class="form-group">
                        <label for="login-password">Mot de passe :</label>
                        <input type="password" id="login-password" name="login-password" required>
                    </div>
                    <button type="submit" class="auth-button">S'identifier</button>
                </form>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', loginModalHtml);

    document.getElementById('close-login-modal').addEventListener('click', () => {
        document.getElementById('login-modal').style.display = 'none';
    });

    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const users = await loadUsersFromJson();
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            if (user.validated) {
                alert(`Identification réussie, bienvenue ${user.name}`);
                document.querySelector(".reservation-container").style.display = "block";
            } else {
                alert('Votre compte n\'a pas encore été validé par un administrateur.');
            }
        } else {
            alert('Identifiants incorrects. Veuillez réessayer.');
        }

        document.getElementById('login-form').reset();
        document.getElementById('login-modal').style.display = 'none';
    });
}