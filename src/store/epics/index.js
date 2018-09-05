import {combineEpics} from 'redux-observable';
import {createAccountEpic} from './account';
import {createRouteEpic} from "./routes";
import {createEthereumEpic} from "./ethereum";
import {createTweetsEpic} from "./tweets";

export const rootEpic = combineEpics(
    createEthereumEpic(),
    createAccountEpic(),
    createTweetsEpic()
);
