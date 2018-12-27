// import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'

class Navbar extends React.Component {

    
    
    state = { condition: false }



    toogleClass = () => {
        this.setState({
            condition: !this.state.condition
        })
    }
   
    render(){
        return (
            <div
            style={{
                float: `right`,
              }}>
                <button onClick={this.toogleClass} >Menu</button>
                <div className= { this.state.condition ? "button toggled" : "button"} > Fijaos en la Clase </div>
            </div>
        )
    }
}

export default Navbar