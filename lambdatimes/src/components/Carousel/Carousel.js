import React, { Component } from 'react';
import { carouselData } from '../../data';

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      selected: 0
    }
  }
  componentDidMount(){
    if (this.state.images.length === 0) {
      this.setState({
        images: carouselData
      });
    }
  }

  leftClick = () => {
    if (this.state.selected > 0) {
      this.setState(currentState => ({
        selected: currentState.selected - 1
      }));
    }
    else {
      this.setState(currentState => ({
        selected: this.state.images.length - 1
      }));
    }
  }

  rightClick = () => {
    const lastImageIndex = this.state.images.length - 1;
    if (this.state.selected < lastImageIndex) {
      this.setState(currentState => ({
        selected: currentState.selected + 1
      }));
    }
    else {
      this.setState({
        selected: 0
      });
    }
  }

  selectedImage = () => {
    return (
      <img
        src={this.state.images[this.state.selected]}
        alt={`carousel ${this.state.selected}`}
        style={{display: 'block'}}
      />
    );
  }

  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {
          this.selectedImage()
        }
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
