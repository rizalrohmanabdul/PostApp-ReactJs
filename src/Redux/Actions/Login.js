import axios from 'axios';

// const url = 'http://localhost:8000';
const url = 'https://appposnew.herokuapp.com';

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios.post(`${url}/kasir/login`, data, {
            headers: {
                "authorization": "x-control-user",
            }
        }).then( res => {
            console.log(res)
            const token = res.data.token;
            const userid = res.data.id_kasir;
            const fullname = res.data.kasir_name;
            localStorage.setItem('jwtToken', token);
            localStorage.setItem('userid', userid);
            localStorage.setItem('name', fullname);
        })
    }

};

export const logout = (userid) => {
    return {
        type: 'LOGOUT', userid,
        payload: axios.patch(`${url}/logout/${userid}`)
     
    }
};