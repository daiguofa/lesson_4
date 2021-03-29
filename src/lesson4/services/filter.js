export const FILTER_ALL = 'all'
export const FILTER_ACTIVE = 'active'
export const FILTER_COMPLETED = 'completed'

/**
 * 返回基本的Options的Tab列表
 */
export function getOptions() {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_ACTIVE]: 'Active',
        [FILTER_COMPLETED]: 'Completed'
    }
}

/**
 * @param {Array} 当前的items
 * @param {String} 当前的filter
 * @returns {Array} 新的items
 */

export function applyFilter(items, filter) {
    switch (filter) {
        case FILTER_COMPLETED:
            return items.filter(item => item.completed === true)
        case FILTER_ACTIVE:
            return items.filter(item => item.completed === false)
        default:
            return items
    }
}

