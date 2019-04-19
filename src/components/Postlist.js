import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPostAndUSer} from '../actions';
import USerHeader from './UserHeader'
class PostList extends Component{
    componentDidMount(){
    //to get  data passed as prop from action creater     
    this.props.fetchPostAndUSer();
    }
    render(){
       
        return(
            <div className="ui relaxed divided list">{this.renderList()}
                </div>
        )
    }

renderList(){

return this.props.posts.map(post=>{return (
    <div className="item" key={post.id}>
    <i className="large middle aligned icon user"/>
   <div className="content">
   <div className="description">
   <h2>{post.title}</h2>
   <p>{post.body} </p>
   </div>
   <USerHeader userId={post.userId}></USerHeader>
   </div>
    </div>
)
})
}
}
const mapStateToProps = (state)=>{
    console.log(state)
 return  {posts: state.posts}
}
export default connect(mapStateToProps,{fetchPostAndUSer})(PostList);