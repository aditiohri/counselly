// import tokenService from '../utils/tokenService';
const BASE_URL = '/api';

export function create(newNote){
    return fetch(`${BASE_URL}/appointments/${newNote._id}/notes`, {
        method: 'POST',
        body: JSON.stringify(newNote)
        }).then(res => res.json())
}

export function deleteNote(id) {
    return fetch(`${BASE_URL}/notes/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
} 