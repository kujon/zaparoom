import { Router } from 'express';
import users from './api/users';

export default function setup(app) {
    const router = Router();

    // Route registration here.
    users(router);

    // Prefix all API routes with REST
    app.use('/REST', router);
}
