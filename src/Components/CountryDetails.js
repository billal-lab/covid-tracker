import React, {Component} from 'react';
import { Link } from 'react-router-dom';
export default  class Countries extends Component{
    constructor(){
        super();
        this.state={
            country:null
        }
    }

    componentDidMount(){
        this.getData();
    }

    async getData(){
        const api = "https://www.trackcorona.live/api/countries";
        const { id } = this.props.match.params;
        const data =  await fetch(api+"/"+id)
        const dataJson = await data.json();
        if (dataJson.code==200){
            this.setState({
                country : dataJson.data[0]
            })
        }
    }

    render(){
        if(this.state.country!=null){
            return(
                <div className="d-flex justify-content-around mt-5">
                    <div>
                        <p>
                            Country : {this.state.country.location}
                        </p>
                        <p>
                            Confirmed cases:  {this.state.country.confirmed}
                        </p>
                        <p>
                            Recovered cases:  {this.state.country.recovered}
                        </p>
                        <p>
                            Number od death:  {this.state.country.dead}
                        </p>
                    </div>
                    <div>
                        <img src={`https://www.countryflags.io/${this.props.match.params.id}/flat/64.png`}/>
                    </div>
                   
                </div>
            );
        }
        return(
            <div className="d-flex justify-content-around mt-5">
                <div class="spinner-border"></div>
            </div>
        )
    }
}