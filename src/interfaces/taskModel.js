/**
 * @typedef {Object} Task
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 * @property {string} createdAt
 */

export const createTask = (title) => ({
  id: Date.now(),
  title: title.trim(),
  completed: false,
  createdAt: new Date().toISOString(),
});