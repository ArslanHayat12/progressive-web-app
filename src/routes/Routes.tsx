import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Categories, SubCategories, Leaderboard, ProductDetails } from '../pages'
import Products from '../pages/Products'
import { URLS } from './urls'

export const Routes = () => {
    const { categories, subCategories, brands, products, individualLeaderboard, details } = URLS

    return (
        <Switch>
            <Route path={categories} exact component={Categories} />

            <Route path={subCategories} exact component={() => <SubCategories />} />

            <Route path={brands} exact component={() => <Leaderboard type="common" />} />

            <Route path={products} exact component={() => <Products type="common" />} />

            <Route path={individualLeaderboard} exact component={() => <Leaderboard type="individual" />} />

            <Route path={details} exact component={ProductDetails} />
        </Switch>
    )
}
