import React , { Component } from 'react';

//ES6  Functions
/*const SearchBar = () =>
{
    return <input />;
};*/




//Class in Es6 -->
class SearchBar extends Component
    {
        //Constructor
        constructor(props)
{
    super(props);
    
    this.state = {term : ''};
}
        render()
        {
            //return <div><input /></div>;
            return <div className = "search-bar">
                <input placeholder="Search"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}/>
                </div>;

           
        }
         onInputChange(term)
            {
                this.setState({term});
                this.props.onSearchTermChange(term);
                
            }
        //EventHandler
        /*
        onInputChange(event)
        {
            //alert("Hellopakistan");
            console.log(event.target.value);
        }
        */
        
    }

export default SearchBar;