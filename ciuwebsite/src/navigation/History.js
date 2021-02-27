// This file is going to use the history module and export it to allow the navigation
// of the entire website to be linked together
import {createBrowserHistory} from 'history';

// Uses the hook
const history = createBrowserHistory();

// Exports the hook
export default history;