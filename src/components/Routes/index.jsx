import React from 'react'
import App from '../../App'
import Home from '../Home/home'
import {
    Switch,
    Route,
} from "react-router-dom";
import { WritePostScreen } from '../../screens/WritePostScreen';
import { PostDetailsScreen } from '../../screens/PostDetailsScreen';
import { FilterPostScreen } from '../../screens/FilterPostScreen';


export const Routes = () => {
    return (
        <Switch>
            <Route path="/post-details/:id" exact>
                <PostDetailsScreen />
            </Route>
            <Route path="/write-post" exact>
                <WritePostScreen />
            </Route>
            <Route path="/filtered-posts" exact>
                <FilterPostScreen />
            </Route>
            <Route path="/home" exact>
                <Home />
            </Route>
            <Route path="/" exact>
                <App />
            </Route>
        </Switch>
    )
}
