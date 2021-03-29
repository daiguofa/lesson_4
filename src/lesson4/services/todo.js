/**
 * 获取所有的todo items
 * @return {Array}
 */

export function getAll() {
    return [
        { text: "test", id: "1", completed: true },
        { text: "arya", id: "2", completed: false },
        { text: "ibm", id: "3", completed: false }
    ]
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId)
}


function getNextId() {
    return getAll().length + 1
}

/**
 * 增加一个item
 * @param {Array} 旧的items
 * @param {Object} 新增的item
 * @return {Array} 新的items
 */

export function addToList(items, item) {
    let newItem = Object.assign({
        id: getNextId()
    }, item)
    return [...items, newItem]
}


export function updateStatus(items, itemId, completed) {
    let newItems = [...items]
    let index = newItems.findIndex(item => item.id === itemId)
    newItems[index].completed = completed
    return newItems
}