import React, {Component} from 'react';

import gpl from 'graphql-tag';
import {Query} from 'react-apollo';
import {graphql} from "graphql";


const COUNTRY_QUERY = gpl`
    query countryQuery($code: String!) {
        country(code: $code) {
            name,
            native,
            emoji,
            currency
        }
    }    
`;

class Countrydetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'US',
            displayValue: 'US'
        };
        /*this.updateInputValue= this.updateInputValue.bind(this);*/
    }

    render() {
        return (

            <div>
                <h1>Country Details</h1>
                <input ref="countryCode" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
                <br/>
                {<Query query={COUNTRY_QUERY} variables={{"code": this.state.inputValue}}>
                    {
                        ({loading, error, data}) => {
                            if (loading) return <h4>Loading....</h4>;
                            if (error) return <h4>Status: Failed console.log(error)</h4>;
                            console.log(data);
                            //console.log(data.country);
                            let ct_name = '';
                            ct_name = data.country ? data.country.name : '';

                            //return ct_name;
                            return <div><textarea value={ct_name} onChange={this.onChange}/></div>

                        }
                    }
                </Query>}
                {/*<button onClick={() => this.displayValue()}>
                    Get Details
                </button>
                <br/>*/}


{/*                <textarea
                    id="countryDetails"
                    onChange={e => this.onChange(e)}
                    value={this.state.displayValue}
                />*/}
            </div>
        );
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value,
        });
    }

    async displayValue() {
        this.setState({
            displayValue: this.refs.countryCode.value,
        });
    }

}

export default Countrydetails;
