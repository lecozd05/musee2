import {
    registrationModaleCreation
} from './scripts/registrationModule.js';
import {
    authenticationModaleCreation
} from './scripts/authentificationModule.js';

function initializeApp() {
    registrationModaleCreation();
    authenticationModaleCreation();
}

initializeApp();