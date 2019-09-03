import {createStore} from 'redux';
import reducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';


export const setUser={
    type: 'USER',
    searchMode: 'Search User',
    urlMode: 'https://api.github.com/search/users?q=',
    isActive: false,
    
}

export const setRepo={
   type: 'REPO',
   searchMode: 'Search Repository',
   urlMode: 'https://api.github.com/search/repositories?q=',
   isActive: false,
   
}

export const setQuery = (query,urlMode,searchMode,isActive) => {
    return{
        type: 'QUERY',
        query: query,
        urlMode,
        searchMode,
        isActive: true
    }
}

export const setUserUrl = (userUrl,reposUrl) => {
    return{
        type: 'DETAILS',
        userUrl: userUrl,
        reposUrl: reposUrl
    }
}

export const setActive={
        type: 'ACTIVITY',
        isActive: true
} 

const store = createStore(reducer,composeWithDevTools());

export default store;