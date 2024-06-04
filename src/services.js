import Actions from './models/Action.model.js';

export const createEvent = async (payload) => {
    return Actions.create(payload);
};

export const getEvents = async (userId, page = 1, limit = 20) => {
    return Actions.findAll({
        where: { userId },
        limit,
        offset: (page - 1) * limit
    });
};