import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import { fetchData } from './api';
import coronaIamge from './images/covid19_logo.png' 
import './App.css';

export default class App extends React.Component {

  state = {
    data: {},
    country: '',
  }


  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData
    })

  }


  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({
      data: fetchedData , country: country
    })
    
    }


  render() {
    return (
      <div className='container'>
        <img src={coronaIamge} className='image' alt='COVID-19'/>
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart  data={this.state.data} country={this.state.country}/>
      </div>
    );
  }
}


