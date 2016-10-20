import React,{Component} from 'react';
import Header from '../layoutComponents/Header';
import Footer from '../layoutComponents/Footer';
import {Grid} from 'react-bootstrap';


export default class MainLayout extends Component {
  render(){
    return (
      <Grid>
        <Header />
        <Grid>
          {this.props.children}
        </Grid>
        <Footer />
      </Grid>

    );
  }
}
