import React from 'react';
import NewRoomForm from './NewRoomForm';

export default class House extends React.Component {
    render() {
        const rooms = this.props.data.rooms
            ? this.props.data.rooms.map((room, index) =>
                <li key={index}>
                    {room.name} Area: {room.area}
                    <button className='btn btn-danger btn-sm m-1 ms-2' onClick={e => 
                        this.props.deleteRoom(e, this.props.data, room)
                    }>Delete</button>
                </li>)
            : null;
            return (
                <div className='house-list'>
                    <h3>{this.props.data.name}</h3>
                    <NewRoomForm 
                        addNewRoom = {this.props.addNewRoom} data={this.props.data} />
                    <li className='list-group border border-dark w-50 mx-auto'>
                        {rooms}
                    </li>
                    
                </div>
            );
    }
}
