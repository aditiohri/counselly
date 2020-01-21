const BASE_URL = '/api/appointments';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json())
}

export function create(appt) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(appt)
    }).then(res => res.json());
}