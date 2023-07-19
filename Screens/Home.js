import React from 'react';
import{View, Text, StyleSheets, TouchableOpacity, Image} from React-native
import{ Header, airbnb, rating, icon} from React - native
import{rfvalue} from React - native - responsive - "font size"
import{access} from axios;

export default class  HomeScreen extends component{
    constructor(){
        super();
        this.state = {
            moviedetails:{}
        };
    }

    componentDidMount(){
        
        this.getMovie();
    } 

    timeConvert(num){
        var hours = math.floor(num/60);
        var minutes = num  %60;
        return `${hours}`
    }

    getMovie = ()=> {
        const url = "https://localhost:5000/get-movie";
        axios
        .get(url)
        .then(Response => {
            letDetails = Response.data.data;
            details["duration"] = this.timeConvert(details.duration);
            this.setState({moviedetails:details});
            
        })

    .catch(error => {
        console.log(error.message)
    });

        
    };

    likedmovies = ()=> {
        const url = "https://localhost:5000/liked-movies";
        axios
        .get(url)
        .then(Response => {
            letDetails = Response.data.data;
            details["duration"] = this.timeConvert(details.duration);
            this.setState({moviedetails:details});
            
        })

    .catch(error => {
        console.log(error.message)
    });

        
    };

    notlikedmovies = ()=> {
        const url = "https://localhost:5000/not-liked-movies";
        axios
        .get(url)
        .then(Response => {
            letDetails = Response.data.data;
            details["duration"] = this.timeConvert(details.duration);
            this.setState({moviedetails:details});
            
        })

    .catch(error => {
        console.log(error.message)
    });

        
    };

    didnotwatched = ()=> {
        const url = "https://localhost:5000/did-not-watched";
        axios
        .get(url)
        .then(Response => {
            letDetails = Response.data.data;
            details["duration"] = this.timeConvert(details.duration);
            this.setState({moviedetails:details});
            
        })

    .catch(error => {
        console.log(error.message)
    });

        
    };
    



    

}

