const initialState = {
    allData: [],
    data: {},
    loading: false,
    predictedData: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case 'DATA_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'GET_ALL_DATA': 
            return {
                ...state,
                allData: action.payload,
                loading: false
            }
        case 'GET_DATA': 
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case 'ADD_DATA':
            return {
                ...state,
                allData: [action.payload, ...state.allData]
            }
        case 'GET_PREDICTED_DATA': 
            return {
                ...state,
                predictedData: action.payload,
                loading: false
            }
        case 'DELETE_DATA':
            return {
                ...state,
                allData: state.allData.filter(data => data._id !== action.payload)
            }
        default: 
            return state;
    }
}
