import React from 'react';
import Tomagatchi from './Tomagatchi';
import { Switch, Route } from 'react-router-dom';
import HappyFull from '../Assets/img/HappyFull.jpg';
import DeadMelo from '../Assets/img/DeadMelo.jpg';
import FatMelo from '../Assets/img/FatMelo.jpg';
import BoredHungryMelo from '../Assets/img/boredHungry.jpg';
import PlayfulMelo from '../Assets/img/PlayfulMelo.jpg';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hunger: 70,
            boredom: 70,
            image: HappyFull
        };
        this.handleFeedingGatchi = this.handleFeedingGatchi.bind(this);
        this.handlePlayingGatchi = this.handlePlayingGatchi.bind(this);
        this.handleMeloImage = this.handleMeloImage.bind(this);
    }
    componentDidMount() {

        this.waitForHunger = setInterval(() =>
            this.handleHungerState(),
            5000
        );
    }

    handleHungerState() {
        let newCount = this.state.hunger - 5;
        let newBoredCount = this.state.boredom - 5;
        this.setState({ hunger: newCount });
        this.setState({ boredom: newBoredCount });
        this.handleMeloImage()

    }

    handleMeloImage() {
        if (this.state.hunger >=50 && this.state.hunger <=100 && this.state.boredom >= 30 && this.state.boredom <= 70){
            this.setState({image: HappyFull})
        }
        
        else if(this.state.boredom <= 30 && this.state.hunger<=50 && this.state.boredom >= 0 && this.state.hunger >= 0) {
            this.setState({ image: BoredHungryMelo });
        } 
        else if (this.state.boredom <=0 || this.state.hunger <=0) {
            this.setState({image: DeadMelo})
        }
        // if(this.state.boredom <=0 || this.state.hunger <=0){
        //     this.setState({image:DeadMelo})
        // }
    }


    componentWillUnmount() {
        clearInterval(this.waitForHunger);
    }
    handleFeedingGatchi() {
        let newCount = this.state.hunger + 10;
        this.setState({ hunger: newCount });
        if (this.state.hunger > 0) {
            this.setState({ image: FatMelo });
        }
    }
    handlePlayingGatchi() {
        console.log('it got here' + this.state.boredom);
        let newCount = this.state.boredom + 10;
        this.setState({ boredom: newCount });
        if(this.state.boredom > 0){
            this.setState({image: PlayfulMelo})
        }
    }
    render() {
        return (
            <div>
                <Tomagatchi image={this.state.image} hungerLevel={this.state.hunger} boredomLevel={this.state.boredom} onFeed={this.handleFeedingGatchi} onPlay={this.handlePlayingGatchi} />
            </div>

        );
    }

}

export default App;