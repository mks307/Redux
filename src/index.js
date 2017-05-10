import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY  = 'AIzaSyDgvePwUG5oqPuXSegcQSjdyNz3Z3kIOLE';

//Create Component that can produce html
class App extends Component
{
    constructor(props)
    {       
        super(props);
        this.state = {
        videos : [],
        selectedVideo : null
        };
        
        this.videoSearch('football');
        
        
                                                              
    }
    videoSearch(term)
        {   
            YTSearch({key:API_KEY,term:term},(videos)=>{ this.setState({
            videos : videos,
            selectedVideo: videos[0]
        });
                                                            
       });  
        }
    render()
    {
        return <div>
        <SearchBar onSearchTermChange = {term =>this.videoSearch(term)}/>
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos = {this.state.videos} />
        </div> ;
    }                                                         
           
   
    
}

//Take this component generated html
//and put it on page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
