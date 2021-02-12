import React, {Component} from 'react';
import { Link } from 'react-router-dom';
export default  class Countries extends Component{
    constructor(){
        super();
        this.state={
            countries:[]
        }
    }

    componentDidMount(){
        this.getData();
    }

    async getData(){
        const api = "https://www.trackcorona.live/api/countries";
        const data =  await fetch(api)
        const dataJson = await data.json();
        if (dataJson.code==200){
            this.setState({
                countries : dataJson.data
            })
        }
    }

    render(){
        return(
            <div className="d-flex justify-content-around" >
                <ul className="list-group">
                    {
                        this.state.countries.map((country)=>(
                            <Link key={country.country_code} to={`/Countries/${country.country_code}`}>
                                <li  className="list-group-item">{country.location}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        );
    }
}