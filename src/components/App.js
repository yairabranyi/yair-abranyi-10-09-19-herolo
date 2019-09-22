import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopBar from './TopBar';
import HomePage from './content/Home';
import FavoritePage from './content/Favorite';
import Links from './content/Links';

import styled from "styled-components/macro";


class App extends React.Component {
    state = {
        favorites: [],
        favoritesList: []
    }

    addToFavarites = (item) => {
        if (this.state.favoritesList.includes(item.locationKey)) {
            return
        } else {
            this.setState({
                favoritesList: [...this.state.favoritesList, item.locationKey]
            })
        }
        this.setState({
            favorites: [...this.state.favorites, item]
        })
    }
    render() {
        return (
            <BrowserRouter>
                <Box>
                    <TopBar>
                        <Links />
                    </TopBar>
                    <Switch>
                        <Route path="/favorite" render={props => <FavoritePage {...props} favorites={this.state.favorites} />} />
                        <Route path="/:id?" render={props => <HomePage {...props} addToFav={this.addToFavarites} />} />
                    </Switch>
                </Box>
            </BrowserRouter>
        )
    }
}

export default App;

const Box = styled.div`
          /* background: lightskyblue; */
          padding: 3rem 2rem;
          margin: 1rem;

          border-radius: 0.8rem;
          display: flex;
          flex-direction: column;
        `;

