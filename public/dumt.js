import React, {Component} from 'react';

class App extends Component{
    state={
        favs:[]
    }
    addToFavs = added => {
            this.setState({favs: [...this.state.favs, added]})
    }

    render(){
        return(
            <Home addFav={this.addToFavs}/> 
        )  
    }
}

class Home extends Component{
    state={
        fiveDays: [...],
        current: {...}
    };

    handleClick = () => {
        this.props.addFav(this.state.current)
    }

    render(){
        return(
          <div>
              <button onClick={this.handleClick}>add</button>
          </div>                       
        )
    }
}

