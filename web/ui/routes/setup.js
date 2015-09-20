import core from './core';
import api from './api';

export default function setup(context) {
    // Setup all routes.
    core(context);
    api(context);
}
