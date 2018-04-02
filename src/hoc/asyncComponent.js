import React, { Component } from 'react'

export default (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent().then(cmp => {
                this.setState({
                    component: cmp.default
                });
            });
        }

        render() {
            const Cmp = this.state.component;
            return (Cmp ? <Cmp {...this.props} /> : null);
        }
    }
}