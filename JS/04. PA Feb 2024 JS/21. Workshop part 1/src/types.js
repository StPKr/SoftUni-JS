import page from 'page';

/**
 * @typedef {Object} PageContext
 * @property {UserSession} user
 * @property {typeof page} page
 * @property {(TemplateResult) => void} render
 * @property {any=} data
 */

/**
 * @typedef {Object} UserSession
 * @property {string} objectId
 * @property {string} username
 * @property {string} sessionToken
 */

//типизации