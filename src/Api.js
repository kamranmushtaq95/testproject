import Axios from 'axios'

class Api {
    constructor() {

    }

    getNames() {
        return Axios.get('https://gist.githubusercontent.com/borlaym/585e2e09dd6abd9b0d0a/raw/6e46db8f5c27cb18fd1dfa50c7c921a0fbacbad0/animals.json');
    }
}

export default new Api();