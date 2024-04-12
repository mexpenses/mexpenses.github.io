export function encryptWithBase64(data) {
    return btoa(data);
}

export function decryptWithBase64(encryptedData) {
    return atob(encryptedData);
}

export const S3_STORAGE = { "a2V5XzE=": "aHR0cHM6Ly9nZW5lcmFsLXN0b3JhZ2UtbWV4cGVuc2VzLnMzLmFtYXpvbmF3cy5jb20vRXBzMS4wX2NvbW9fZXVfdGVfdmVqby5tcDQubXA0", "a2V5XzI=": "aHR0cHM6Ly9nZW5lcmFsLXN0b3JhZ2UtbWV4cGVuc2VzLnMzLmFtYXpvbmF3cy5jb20vRXBzMi4wX3JldHJvc3BlY3RpdmFfMjAyMi0yMDIzLm1wNC5tcDQ=" };