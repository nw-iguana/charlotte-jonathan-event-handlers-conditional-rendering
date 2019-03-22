import React, { Component } from 'react';
import './Accordian.css';

class Accordian extends Component {
    static defaultProps = { 
        sections: [] 
    }

    state = {
        currentButtonIndex: null,
    }

    handleButtonClick = (index) => {
        this.setState({
            currentButtonIndex: index,
        })
    }

    renderLis() {
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button key={index} onClick={() => this.handleButtonClick(index)}>{section.title}</button>
                {(this.state.currentButtonIndex === index) && <p>{section.content}</p>}
            </li>
        ))
    }

    render() {
        return (
            <div className="Accordion">
                <h1>Accordian App</h1>
                <ul>
                    {this.renderLis()}
                </ul>
            </div>
        )
    }
}

export default Accordian;