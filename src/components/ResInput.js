import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'


class ResInput extends Component {
    inputHandler = ({target}) => {
        const value = target.type === "number"? parseInt(target.value): target.value
        this.props.GeneralStore.handleInput(target.name, value)
    }
    render () {
        return (
            <div>
                <input onChange = {this.inputHandler}
                        name = "name"
                        placeholder = "Name"/>
                <input onChange = {this.inputHandler}
                        name = "numPeople"
                        type = "number"
                        placeholder = "Number of people"/>
            </div>
        )
    }
}

//adding our GeneralStore as a prop of the ResInput component
export default inject("GeneralStore")(observer(ResInput))