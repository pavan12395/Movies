import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { detailsReducer } from './detailsReducer';
import { homeReducer } from './homeReducer';
import searchReducer from './searchReducer';


const rootReducer = combineReducers({home:homeReducer,details:detailsReducer,search:searchReducer});

export default store = createStore(rootReducer,applyMiddleware(thunk));