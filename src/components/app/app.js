import React, {Component} from 'react';
import Tasks from '../tasks'
import Header from '../header'
import Spinner from '../spinner'
import serverApi from '../../server'

import './app.css';

export default class App extends Component {

    state = {
        loading: true,
        data: { },
        calcTime: { },
        closed: false        
    }

    serverApi = new serverApi();

    componentDidMount() {
       this.getData();
       this.interval = setInterval(this.updateTimer, 1000);
    }

    getData() {
        this.serverApi
                .getData()
                .then((info) => {
                    this.setState({
                        data:info,
                    })
        })
       
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    closeWindow = () => {
        this.setState({
            closed:true
        })
    }
 
    
    updateTimer = () => {
        const endTime = new Date(this.state.data.endsAt)
        let delta = Math.floor((endTime - new Date()) / 1000);

        let days = Math.floor(delta / 86400);
        delta -= days * 86400;

        let hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        let minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        let seconds = delta % 60;

        this.setState({
            calcTime: {days, hours, minutes, seconds},
            loading: false,
        })
    }
 
 

    render () {

        const { loading, data, calcTime, closed } = this.state;
        const spinner = (loading && !closed) ? <Preloader/> : null
        const content = (!loading && !closed) ? <React.Fragment> <Header timer={calcTime} /> <Tasks  tasks={data.tasks}  closeWindow={this.closeWindow}/> </React.Fragment> : null

        return(
            <div className="app">
                <div className="app__content">
                    { spinner }
                    { content }
                </div>
             
            </div>
            
        );
    }
}

const Preloader = () => {
    return (
        <React.Fragment>
            <div className="preload">
                <div className="preload__logo logo">
                    <img  src="/header.png" alt=""/>
                </div>

                <div className="preload__window window"> 
                    <Spinner/>
                </div>
            </div>
        </React.Fragment>
    );
}

