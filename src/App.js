import React, {Component} from 'react';
import Countrydetails from './components/Countrydetails';

import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
    uri: "https://countries.trevorblades.com"
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div className="App">
                    <Countrydetails/>
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
