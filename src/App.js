import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import FooterPage from './FooterPage';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      data:[]
    }
  }
  async componentDidMount(){
    const res=await fetch('http://206.189.34.62:3000/api/Discounts');
    const jsonres= await res.json();
    this.setState({data:jsonres.slice(0,450)});
  }

  render() {
    const {data}= this.state;
    console.log(data)
    return (
      <div>
            <Header />
            <div id = 'content'>
            <table>{data.map((data,index)=> (
            
             <tr style={{backgroundColor: data.provider === "ovo" ? "green" :"yellow"}}>
               <td>{data.discountid}</td>
               <td>{data.short_description}</td>
               <td>{data.shop_name}</td>
               <td>{data.provider}</td>
               <td>{data.discount_type}</td>
               <td dangerouslySetInnerHTML={{__html:data.discount_detail}}/>
               <td>{data.description}</td>
               <td>{data.image_url}</td>
               <td>{data.discount_start_date}</td>
               <td>{data.discount_end_date}</td>
               <td>{data.geolocation.lat}</td>
               <td>{data.geolocation.lng}</td>
               <td>{data.viewcount}</td>              
               <td>{data.merchant_url}</td>
               
             </tr>
           ))}</table>
            </div>
            <FooterPage />
      </div>
    );
  }
}

export default App;
