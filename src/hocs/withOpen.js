import React, {Component} from 'react';

const withOpen = (WrappedComponent) => {
    return class extends Component {
        state = {
            open: false,
        }

        toggle = () => {
            this.setState({
                open: !this.state.open,
            });
        }
        
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    open = {this.state.open}
                    toggleOpen = {this.toggle}
                />
            );
        }
    }
}

export default withOpen;