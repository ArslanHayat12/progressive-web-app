import React from 'react'
import Categories from '../pages/Categories'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Leaderboard from '../pages/Leaderboard'
import { URLS } from './urls'

export const Routes = () => {
    const { categories, leaderboard, individualLeaderboard } = URLS

    return (
        <Router>
            <Switch>
                <Route path={categories} exact component={Categories} />

                <Route path={leaderboard} exact component={() => <Leaderboard type="common" />} />

                <Route path={individualLeaderboard} exact component={() => <Leaderboard type="individual" />} />
            </Switch>
        </Router>
    )
}
