const { ipcRenderer } = require('electron');

// EXPOSED VARIABLES //
/**
 * Holds the current random crypto nonsense.
 * @type {String}
 */
global.rndCryptNnc = ipcRenderer.sendSync('global.rndCryptNnc');


// EXPOSED FUNCTIONS //
/**
 * Generates a random hash base on the provided length via `len`.
 *
 * @param {Number} len - The length of the hash to generate.
 *
 * @returns {String} The generated hash.
 */
global.generateHash = (len) => ipcRenderer.sendSync('global.generateHash', len);
