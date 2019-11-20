import React from 'react'
import Tomagatchi from './Tomagatchi'
import { Switch, Route } from 'react-router-dom'
import HappyFull from '../Assets/img/HappyFull.jpg'
import BoredMelo from '../Assets/img/BoredMelo.jpg'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hunger: 100,
            boredom: 40,
            image: HappyFull
        }
        this.handleFeedingGatchi = this.handleFeedingGatchi.bind(this)
        this.handlePlayingGatchi = this.handlePlayingGatchi.bind(this)
    }
    componentDidMount(){
        
        this.waitForHunger = setInterval(() =>
        this.handleHungerState(),
        5000
        )
    }
    
    handleHungerState(){
        let newCount = this.state.hunger - 5 
        let newBoredCount = this.state.boredom - 5
        this.setState({hunger: newCount})
        this.setState({boredom: newBoredCount})
        if (this.state.boredom <= 30) {
            this.setState({image: BoredMelo})
        }
    }

    componentWillUnmount(){
        clearInterval(this.waitForHunger);
    }
    handleFeedingGatchi(){
        let newCount = this.state.hunger + 10
        this.setState({hunger: newCount })
    }
    handlePlayingGatchi(){
        console.log("it got here" + this.state.boredom)
        let newCount = this.state.boredom + 10
        this.setState({boredom: newCount})
    }
    render(){
        return (
            <div>
                <Tomagatchi hungerLevel={this.state.hunger} boredomLevel={this.state.boredom} onFeed={this.handleFeedingGatchi} onPlay={this.handlePlayingGatchi}/>
                <img src={this.state.image} alt=""/>
            </div>
            
        )
    }
    
}

export default App;