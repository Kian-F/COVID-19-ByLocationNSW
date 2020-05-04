import React from 'react';
import styles from './App.modules.css'
import { fetchData } from './api';
import {url} from './api'




class App extends React.Component{

    state= {
        data:{}
        }
        
        async componentDidMount(){
               const fetchedData = fetchData()
               console.log(fetchedData)
               this.setState({data: fetchedData})
        }


    render(){
        return(
             <div>
                 <h1>Hi</h1>
             </div>
        )
    }
}

export  default App;