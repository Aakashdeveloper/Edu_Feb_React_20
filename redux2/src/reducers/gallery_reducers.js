export default function(state={}, action){
    switch(action.type){
        case 'GET_GALLERY':
            return {...state, galleryData:action.payload}
        default:
            return state
    }
}
