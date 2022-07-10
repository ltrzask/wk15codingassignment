import React from "react";

export default class NewRoomForm extends React.Component{
    constructor(props){
        super(props);
    this.state = {
        nameValue: '',
        areaValue: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleNameChange(e) {
        this.setState({nameValue: e.target.value});
    }

    handleAreaChange(e) {
        this.setState({areaValue: e.target.value});
    }

    handleClick(e) {
        this.props.addNewRoom(e, this.props.data,
            {name: this.state.nameValue, area: this.state.areaValue});
            this.setState({nameValue: '', areaValue: ''});
    }

    render() {
        return (
            <div className='room-form'>
                <input className="m-2" type='text' placeholder='Room Name' onChange={this.handleNameChange} value={this.state.nameValue} />
                <br/>
                <input type='text' placeholder='Area sq ft.' onChange={this.handleAreaChange} value={this.state.areaValue} />
                <br/>
                <button className='btn btn-primary m-2' onClick={this.handleClick}>Add Room</button>
            </div>
        );
    }
}