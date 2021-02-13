import React, {Component} from 'react';
import { Link } from 'react-router-dom';
export default  class Countries extends Component{
    constructor(){
        super();
        this.state={
            timeout:0,
            country:null
        }
    }

    componentDidMount(){
        this.incrementTimout();
        this.getData();
    }
    
    incrementTimout(){
        setInterval(()=>{
            this.setState({timeout:this.state.timeout+1})
        },1000)
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
        const style={
            width: "300px"
        }
        if(this.state.country!=null){
            return(
                <div className="d-flex justify-content-around mt-5">
                    <div className="card" style={style}>
                        <img src={`https://www.countryflags.io/${this.props.match.params.id}/flat/64.png`}/>
                        <div className="card-body">
                            <h4 className="card-title">Country : {this.state.country.location}</h4>
                            <p className="card-text">Confirmed cases:  {this.state.country.confirmed}</p>
                            <p className="card-text">Recovered cases:  {this.state.country.recovered}</p>
                            <p className="card-text">Number of death:  {this.state.country.dead}</p>
                            <p className="card-text">updated at :  {(new Date(this.state.country.updated)).toLocaleDateString()}</p>
                            
                        </div>
                    </div>                   
                </div>
            );
        }
        if(this.state.timeout<5){
            return(
            <div className="d-flex justify-content-around mt-5">
            <div class="spinner-border"></div>
            </div>)
        }
        return(
          
            <div className="d-flex justify-content-around mt-5">
            Oooops ! Somthing is wrong
            </div>
        )
    }
}