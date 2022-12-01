import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
    state={
        count:this.props.value,
        imageUrl:'https://picsum.photos/200',
        tags :["tag1","tag2","tag3"]
    };
    render() { 
        console.log('props',this.props);
    //    after return <img src={this.state.imageUrl} alt=""/>
        return (<div>
            <h4>{this.props.id}</h4>
            <span >{this.formatCount()} </span>
            <button onClick={this.handleIncrement}>Increment</button>
            {this.renderTags}
        </div>
        );
    }
    renderTags(){
        if(this.state.tags.length==0) return <p>there are no elements</p>;

        return  <ul>
        {
            this.state.tags.map(tag=><li key={tag}>{tag}</li>)
        }
    </ul>;
    }
    formatCount(){
        const{count}=this.state;
        return count==0?'Zero':count;
    }
    handleIncrement = ()=>{
        this.setState({count:this.state.count+1})
    }
}
 
export default Counter;