import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Categories, SubCategories, Leaderboard, Details } from '../pages'
import { URLS } from './urls'

export const Routes = () => {
    const { categories, subCategories, leaderboard, individualLeaderboard, details } = URLS

    return (
        <Switch>
            <Route path={categories} exact component={Categories} />

            <Route path={subCategories} exact component={() => <SubCategories />} />

            <Route path={leaderboard} exact component={() => <Leaderboard type="common" />} />

            <Route path={individualLeaderboard} exact component={() => <Leaderboard type="individual" />} />

            <Route path={details} exact component={Details} />
        </Switch>
    )
}
