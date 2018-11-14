const INICIAL_STATE = { value:'opa'}

export default function(state = INICIAL_STATE, action) {
    switch(action.type) {
        case 'VALUE_CHANGED':
         return { value: action.payload }
         default:
          return state;
    }
}