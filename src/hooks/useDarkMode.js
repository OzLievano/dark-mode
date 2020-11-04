import {useLocalStorage} from '../hooks/useLocalStorage';

export const useDarkMode = (key,initialValue,callback) =>{
    const [value, setValue] = useLocalStorage(key,initialValue)

    return [value,setValue];
}