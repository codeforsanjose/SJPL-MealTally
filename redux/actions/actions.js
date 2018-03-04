/*
 * action types
 */
export const SET_EXAMPLE = 'SET_EXAMPLE';

/*
 * action creators
 */
export function setExample(example) {
    return {
        type: SET_EXAMPLE,
        example
    };
}