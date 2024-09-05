import {
    saveUserToJson
} from './userStorage.js';

export function registrationModaleCreation() {
    const signupModalHtml = `
        <div id="signup-modal" class="modal">
            <div class="modal-content">
                <span id="close-signup-modal" class="close">&times;</span>
                <h2>Inscription</h2>
                <form id="signup-form">
                    <div class="form-group">
                        <label for="name">Nom :</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email :</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="institution-type">Type d'institution :</label>
                        <select id="institution-type" name="institution-type" required>
                            <!-- Options ajoutées dynamiquement -->
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="institution-name">Nom de l'institution :</label>
                        <input type="text" id="institution-name" name="institution-name" required>
                    </div>
                    <button type="submit" class="auth-button">S'inscrire</button>
                </form>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', signupModalHtml);

    const institutionTypeOptions = ["École primaire", "Collège", "Centre de loisirs", "Entreprise"];
    const institutionTypeSelect = document.getElementById('institution-type');
    institutionTypeOptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        institutionTypeSelect.appendChild(opt);
    });

    document.getElementById('close-signup-modal').addEventListener('click', () => {
        document.getElementById('signup-modal').style.display = 'none';
    });

    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const institutionType = document.getElementById('institution-type').value;
        const institutionName = document.getElementById('institution-name').value;

        const newUser = {
            name,
            email,
            institutionType,
            institutionName,
            password: "", // initialement vide, le mot de passe sera défini plus tard
            validated: false
        };

        saveUserToJson(newUser);

        alert('Inscription réussie ! Votre compte doit être validé par un administrateur.');
        document.getElementById('signup-form').reset();
        document.getElementById('signup-modal').style.display = 'none';
    });
}