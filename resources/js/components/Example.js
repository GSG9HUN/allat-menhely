import React from 'react';
import ReactDOM from 'react-dom';

export default class Example extends React.Component{

    constructor(props) {
        super(props);
         this.state={
             loaded:false,
             animals: []
         }
    }

    getAnimals(){
        axios.get('random_route').then(response=>{
            console.log('??')
            this.setState({
                animals:response.data.animals,
                loaded:true
            })
        })
    }

    componentDidMount() {
        this.getAnimals();
    }

    render(){
        return(
            <>
                {this.state.loaded &&
                    <div>
                        Hello
                    </div>
                }
            </>

        );
    }
}


if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
