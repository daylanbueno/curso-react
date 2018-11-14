export  function changeValue(e) {
    return { 
        type:'VALUE_CHANGED', // Tipe é importante
        payload: e.target.value
    }
}