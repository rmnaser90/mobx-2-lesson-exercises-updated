import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import Reservation from './Reservation';

class Restaurant extends Component{
    addRes = ()=>{
        const {name,numPeople}  = this.props.GeneralStore
        this.props.RestaurantStore.addRes(name,numPeople)
    }
    render () {
        const {RestaurantStore} = this.props
        return (
            <div>
                <div>You have {RestaurantStore.openTables} open tables</div>
                <div>You have {RestaurantStore.restPopulation} people in restaurant</div>
                <div>You have {RestaurantStore.completedTables} completed reservations</div>
                
                <ResInput/>
                <button id="addRes" onClick={this.addRes}>Add Reservation</button>
                {/* Make the Add Reservation button work */}
                <div className = "reservations">
                {RestaurantStore.reservations.map(r => <Reservation key ={r.id} reservation={r}/>)}
                </div>
            </div>
        )
    }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant))