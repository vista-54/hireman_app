const api = 'http://localhost:8888/hireman_backend/public/api/';
// const api = 'https://phoenix.smartcapper.online/server/public/api/';

export const COMMON_URL = {
    auth: {
        login: api + 'user/login',
        logout: api + 'user/logout'
    },
    user: {
        index: api + 'user',
        create: api + 'user/register',
    },
    job: {
        index: api + 'job'
    },
    'user-skill': {
        index: api + 'user-skill'

    }
};
