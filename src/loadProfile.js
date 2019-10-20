import { renderUserProfile } from './renderUserProfile.js';

export const loadProfile = () => {
    const currentUser = (localStorage.getItem('current-user'));
    const user = JSON.parse(localStorage.getItem(currentUser));

    const userProfileArea = document.getElementById('user-profile-area');
    userProfileArea.appendChild(renderUserProfile(user));
};