//测试组件
import React from 'react';
import PropTypes from 'prop-types';

class TestComponent extends React.Component {
    constructor(props){
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }
    incrementIfOdd(){
        if(this.props.value % 2 !== 0) {
            this.props.onIncrement();
        }
    }

    incrementAsync(){
        setTimeout(this.props.onIncrement(), 1000);
    }
    render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={onDecrement}>
                    -
                </button>
                {' '}
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                {' '}
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
            </p>
        )
    }
}

TestComponent.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

//导出组件
export default TestComponent;