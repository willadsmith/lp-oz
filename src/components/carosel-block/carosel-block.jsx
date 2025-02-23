import { Component } from "react";
import './carosel-block.scss'

export class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: ""
        };
        this.rightClick = this.moveRight.bind(this);
        this.leftClick = this.moveLeft.bind(this);
    }

    generateItems() {
        const items = [];
        let level;
        console.log(this.state.active);
        for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
            let index = i;
            if (i < 0) {
                index = this.state.items.length + i;
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length;
            }
            level = this.state.active - i;
            items.push(
                <Item key={index} id={this.state.items[index]} level={level} />
            );
        }
        return items;
    }

    moveLeft() {
        let newActive = this.state.active;
        newActive--;
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: "left"
        });
    }

    moveRight() {
        let newActive = this.state.active;
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: "right"
        });
    }

    render() {
        return (
            <div id="carousel" className="noselect">
                <div className="arrow arrow-left" onClick={this.leftClick}>
                    <i className="fi-arrow-left"></i>
                </div>
                <div>
                    {this.generateItems()}
                </div>
                <div className="arrow arrow-right" onClick={this.rightClick}>
                    <i className="fi-arrow-right"></i>
                </div>
            </div>
        );
    }
}

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: this.props.level
        };
    }

    render() {
        const className = "item level" + this.props.level;
        return (
            <div
                className={className}
            ></div>
        );
    }
}