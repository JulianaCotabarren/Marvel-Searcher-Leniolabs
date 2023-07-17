const API_URL = 'http://gateway.marvel.com/v1/public';
const TS = import.meta.env.VITE_MARVEL_API_TIMESTAMP;
const HASH = import.meta.env.VITE_MARVEL_API_HASH;
const API_KEY = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY;

const AUTH_QUERIES = `apikey=${API_KEY}&ts=${TS}&hash=${HASH}`;

const TOTAL_CHARACTERS = 1562;

export { TS, HASH, API_URL, API_KEY, TOTAL_CHARACTERS, AUTH_QUERIES };
