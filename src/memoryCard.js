import React, { Component } from 'react';

import './MemoryCard.css';

class MemoryCard extends Component {
    constructor() {
        super();
        this.state = { 
            isFlipped: false 
        };

    }

    clickHandler() {
        // alert("I WAS CLICKED!!!");
        this.setState({isFlipped: !this.state.isFlipped});
    }

    render() {
        const memoryCardInnerClass = "MemoryCardInner flipped"
        return (
            <div className="MemoryCard" onClick={(e) =>
                this.clickHandler(e)}>
                <div className="MemoryCardInner">
                    <div className="MemoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt="DClogo" />
                    </div>
                    <div className="MemoryCardFront">
                        ∆
                    </div>
                </div>    
            </div>
        )
    }
}

export default MemoryCard;