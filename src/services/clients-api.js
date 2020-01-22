const BASE_URL = '/api/clients';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json())
}

export function create(client) {
    return fetch(BASE_URL, {
        method: 'POST',
        header: {'content-type': 'application/json'},
        body: JSON.stringify(client)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${(BASE_URL)}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}