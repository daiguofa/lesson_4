import update from 'immutability-helper';
import { v4 as uuidv4 } from 'uuid';

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    return [
        {
            id: uuidv4(),
            text: 'Learn Javascript',
            completed: false
        },
        {
            id: uuidv4(),
            text: 'Learn React',
            completed: false
        },
        {
            id: uuidv4(),
            text: 'Build a React App',
            completed: false
        }
    ]
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);

    // Returns a new list of data with updated item.
    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    });
}

/**
 * A counter to generate a unique id for a todo item.
 * Can remove this logic when the todo is created using backend/database logic.
 * @type {Number}
 */
let todoCounter = 1;

function getNextId() {
    // return getAll().length + todoCounter++;
    return uuidv4();
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([item]);
}

export function deleteFromList(list, itemId) {
    let index = list.findIndex(item => item.id === itemId);
    console.log("itemId - index:",itemId,index);
    return update(list, {$splice: [[index, 1]]});
}