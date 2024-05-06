import sendRequest from "./send-request";

const BASE_URL = '/api/dreams';

export async function getImage(prompt) {
    return sendRequest(`${BASE_URL}/image`, 'POST', prompt)
}

export function addNote(text) {
    return sendRequest(BASE_URL, 'POST', text);
}

export async function getAllNotes() {
    return sendRequest(BASE_URL);
}

export async function deleteNote(noteId) {
    return sendRequest(`${BASE_URL}/${noteId}`, 'DELETE')
}

export function getById(noteId) {
    return sendRequest(`${BASE_URL}/${noteId}`);
}

export function updateDream(id, editedText) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', editedText)
}

export async function fetchImage(image_url) {
    return sendRequest(`${BASE_URL}/convert`, 'POST', image_url)
}