import React, {Component} from 'react'

class Data extends Component{

    componentWillMount(){
        fetch('https://sandbox.apihub.citi.com/gcb/api/clientCredentials/oauth2/token/mx/gcb', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstParam: 'yourValue',
            secondParam: 'yourOtherValue',
        })
        })
    }
    render(){
        return <div>Estas en Data</div>
    }
}

export default Data;