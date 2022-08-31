import {useState} from 'react';
import axios from 'axios';
import {v4 as uuid} from 'uuid';

const useFlip = () => {
    const [state, setState] = useState(true);
    const flipCard = () => {
        setState(state => !state)
    }
    return [state, flipCard]
}

const useAxios = (url) => {
    const [state, setState] = useState([]);
    const addElement = async (evt, name=null) => {
        if(name) {
            const response = await axios.get(url + name);
            setState(state => [...state, { ...response.data, id: uuid() }]);
        }else{
            const response = await axios.get(url);
            setState(state => [...state, { ...response.data, id: uuid() }]);
        }
    }
    return [state, addElement]
}

export {useFlip, useAxios};