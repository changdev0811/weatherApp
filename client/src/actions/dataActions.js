import axios from 'axios';

export const clearErrors = () => {
    return {
      type: 'CLEAR_ERRORS'
    };
};

export const dataLoading = () => {
    return {
      type: 'DATA_LOADING'
    };
};

  
export const addData = (data, history) => dispatch => {
    dispatch(clearErrors());
    axios 
        .post('http://localhost:5000/data', data)
        .then(res => {
            dispatch({
                type: 'ADD_DATA',
                payload: res.data
              })
              history.push('/data');
            }
        )
        .catch(err =>
            dispatch({
                type: 'GET_ERRORS',
                payload: err.response.data
            })
        );
}

export const getAllData = () => dispatch => {
    dispatch(dataLoading());
    axios 
        .get('http://localhost:5000/data')
        .then(res => 
            dispatch({
                type: 'GET_ALL_DATA',
                payload: res.data
              })
        )
        .catch(err =>
            dispatch({
                type: 'GET_ALL_DATA',
                payload: null
            })
        );
}

export const getData = id => dispatch => {
    dispatch(dataLoading());
    axios 
        .get(`http://localhost:5000/data/${id}`)
        .then(res => 
            dispatch({
                type: 'GET_DATA',
                payload: res.data
              })
        )
        .catch(err =>
            dispatch({
                type: 'GET_DATA',
                payload: null
            })
        );
}

export const deleteData = id => dispatch => {
    axios
        .delete(`http://localhost:5000/data/${id}`)
        .then(res =>
            dispatch({
                type: 'DELETE_DATA',
                payload: id
            })
        )
        .catch(err => 
            dispatch({
                type: 'GET_ERRORS',
                payload: err.response.data
            })
        );
}

export const predictData = (data) => dispatch => {
    axios 
        .post('http://localhost:5000/data/predict')
        .then(res => {
            const { data } = res;            
            dispatch({
                type: 'GET_PREDICTED_DATA',
                payload: JSON.parse(data).Results.output1[0]
            })
        }
        )
        .catch(err =>
            console.log(err)
        );
}