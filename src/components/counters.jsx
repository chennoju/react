import Counter from "./counterComponent";
import React, { Component } from 'react';
 
class Counters extends Component {
    state = { 
        counters:[
            {id :1, value:1},
            {id :2, value:2},
            {id :3, value:3},
            {id :4, value:4}
        ]
     } 
    render() { 
        return (
          <div> 
            {this.state.counters.map(counter=><Counter key={counter.id} value={counter.value} id={counter.id}/>)}
</div>
            );
    }
}
 
export default Counters;