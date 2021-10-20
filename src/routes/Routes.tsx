import React from 'react'
import Categories from '../pages/Categories'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Leaderboard from '../pages/Leaderboard'
import { URLS } from './urls'
import Details from '../pages/Details'

export const Routes = () => {
    const { categories, leaderboard, individualLeaderboard, details } = URLS

    return (
        <Router>
            <Switch>
                <Route path={categories} exact component={Categories} />

                <Route path={leaderboard} exact component={() => <Leaderboard type="common" />} />

                <Route path={individualLeaderboard} exact component={() => <Leaderboard type="individual" />} />

                <Route path={details} exact component={Details} />
            </Switch>
        </Router>
    )
}
