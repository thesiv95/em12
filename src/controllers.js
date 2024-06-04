import express from 'express';
import * as Services from './services.js';

/**
 * Create a new event
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
export const createEvent = async (req, res, _next) => {
    try {
        const payload = req.body;
        // validation is already done by sequelize
        await Services.createEvent(payload);

        return res.status(201).send(payload);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

/**
 * Get all users (with auto-pagination, limit is 20 by default) + register event
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
export const getEvents = async (req, res, _next) => {
    try {
        const { userId, page = 1, limit = 20 } = req.query;
        if (!userId) {
            throw new Error('userId is required!');
        }

        const events = await Services.getEvents(userId, page, limit);

        return res.status(200).send(events);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};
