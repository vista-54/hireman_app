// const api = 'http://localhost:8888/hireman_backend/public/api/';
const api = 'https://hireman.smartcapper.online/server/public/api/';

export const COMMON_URL = {
    auth: {
        login: api + 'user/login',
        logout: api + 'user/logout'
    },
    user: {
        index: api + 'user',
        create: api + 'user/register',
        update: api + 'user/update'
    },
    job: {
        index: api + 'job'
    },
    'user-skill': {
        index: api + 'user-skill',
        create: api + 'user-skill',

    },
    skill: {
        index: api + 'skill',
    }
};
