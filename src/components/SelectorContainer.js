import React from 'react'
import Selector from './Selector';
import { connect } from 'react-redux';
import { updateSelection } from '../actions/updateSelection'

class SelectorContainer extends React.Component {
    state = {
        model: ""
    }

    data = {
        "Ivel Z3": {
            manufacturer: "Ivasim",
            year: 1969,
            origin: "Croatia"
        },
        "Bally Astrocade": {
            manufacturer: "Bally Consumer Products",
            year: 1977,
            origin: "USA"
        },
        "Sord M200 Smart Home Computer": {
            manufacturer: "Sord Computer Corporation",
            year: 1971,
            origin: "Japan"
        },
        "Commodore 64": {
            manufacturer: "Commodore",
            year: 1982,
            origin: "USA"
        }
    }

    updateSelection = (event) => {
        this.setState({
            model: event.target.value
        })
        // console.log(this.data[event.target.value])
    }

    render() {
        return (
            <form onChange={this.updateSelection}>
                <select onChange={updateSelection}>
                    <option key="default" value="">-- pick a model --</option>
                    <Selector list={this.data} />
                </select>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        model: state.model
    }
}

export default connect(mapStateToProps, { updateSelection })(SelectorContainer)


