import tokenService from '../utils/tokenService';
const BASE_URL = '/api/appointments';

export function getAll() {
    return fetch(BASE_URL, {
        headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
    }
    
    )
    .then(res => res.json())
}

export function create(appt) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(appt)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${(BASE_URL)}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}