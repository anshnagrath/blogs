import React,{Component} from 'react';
import {connect} from 'react-redux'
class UserHeader extends Component{
    componentDidMount(){
        console.log(this.props.userId,'id')
    }
    render(){  
        if (!this.props.user){
            return null
        }
        return <div className="header">{this.props.user.name}</div>
    }
}
const mapStateToProps=(state,ownProps)=>{
console.log(state)
return {user:state.users.find(o=>o.id === ownProps.userId)}
}
export default connect(mapStateToProps)(UserHeader)