import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

class Reservation extends Component {

    seatRes = () => {
        const {id} = this.props.reservation
        this.props.RestaurantStore.seatRes(id)
    }
    completeRes = () => {
        const {id} = this.props.reservation
        this.props.RestaurantStore.completeRes(id)
    }
    render() {
        const { name, numPeople, completed, seated, id } = this.props.reservation
        console.log(name, numPeople, completed, seated, id);
        return <div id={id} className={`reservation ${completed ? "completed" : seated ? "seated" : null}`}>
            <span className="name"> {name} </span>
            <span className="numPeople"> {numPeople} </span>
            {!seated?<button onClick={this.seatRes}> seat </button>: !completed?<button onClick={this.completeRes}>complete</button>: <div>reservation is completed</div>
        }

        </div>

    }
}

//inject your store here
export default inject("RestaurantStore")(observer(Reservation))