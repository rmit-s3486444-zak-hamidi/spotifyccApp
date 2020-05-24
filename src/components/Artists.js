import React, { Component }from 'react';
//import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Profile from './Profile';
import Gallery from './Gallery';
import {FormControl,FormGroup} from 'react-bootstrap';
import {Graph} from 'react-d3-graph';
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://xugxuuf867.execute-api.us-east-1.amazonaws.com/test/new-resource";
export default class Artists extends Component{
  constructor(props) {
    super(props);
    this.state = {
        query: '',
        artist: null,
        accessToken: undefined,
        tracks: [],
        artist_data: null,
    }
  }




getToken() {
  const GATEWAY_URL = fetch(proxyurl + url) 
  .then(response => response.text())
  .then((text) => {
    console.log(text);
    var json = JSON.parse(text);
    var body = json.body;
    body = JSON.parse(body);
    var done = body.done;
    var js = done.json;
    var ac = js.access_token;
    console.log(json);
    console.log(ac);
    this.setState({ accessToken: ac });
    console.log(this.state.accessToken);
    //this.search();
})
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
  // fetch(GATEWAY_URL, {
  //     method: 'GET',
  //     mode: 'cors'
  // })
  //     .then((response) => {
          
  //       return response.text; 
  //     })
      


  console.log('GATEWAY_URL', GATEWAY_URL);
}



search() {
  console.log('this.state', this.state);
  const BASE_URL = 'https://api.spotify.com/v1/search?';
  let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
  const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
  console.log('FETCH_URL', FETCH_URL);

  const myOptions = {
      method: 'GET',
      headers: {
          'Authorization': 'Bearer ' + this.state.accessToken
      },
      mode: 'cors',
      cache: 'default'
    }

  fetch(FETCH_URL, myOptions)
      .then((response) => {
          return response.json();
      })
      .then((json) => {
          if (json.hasOwnProperty('error')) {
              console.log('Invalid token');
              this.getToken();

          } else {
              const artist = json.artists.items[0];
              this.setState({ artist });
              //console.log(this.state.artist.id);
              FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=AU&`;
              console.log(FETCH_URL);
              fetch(FETCH_URL, {
                  method: 'GET',
                  headers: {
                      'Authorization': 'Bearer ' + this.state.accessToken
                  },
                  mode: 'cors'

              })
                  .then(response => response.json())
                  .then(json => {
                      if (json.hasOwnProperty('error')) {
                          console.log({ json });
                          this.getToken();

                      } else {
                          const tracks = json.tracks;
                          this.setState({ tracks });
                          console.log('artist\'s top tracks:', json);
                      }
                  })
                  this.relatedArtists(artist.id);
          }
      });
      
    }  
    
  relatedArtists(artist_id){
  console.log('this.state', this.state);
  const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
  let FETCH_URL = `${ALBUM_URL}${artist_id}/related-artists`;
  console.log(FETCH_URL);            
  const myOptions = {
      method: 'GET',
      headers: {
          'Authorization': 'Bearer ' + this.state.accessToken
      },
      mode: 'cors',
      cache: 'default'
    }

  fetch(FETCH_URL, myOptions)
      .then((response) => {
          return response.json();
      })
      .then((json) => {
          if (json.hasOwnProperty('error')) {
              console.log('Invalid token');
              this.getToken();

          }
           else {
                  var artists = json.artists;
                  var nodes = [];
                  var links = [];
                  nodes.push({'id': this.state.query});
                  for(var i =0;i<artists.length;i++){
                    nodes.push({'id':artists[i].name});
                    links.push({"source": nodes[0].id, "target": artists[i].name});
                    //console.log(artists[i]);
                  }
                  console.log(nodes);
                  console.log(links);
                  var data = {'nodes':nodes,'links':links};
                  this.setState({artist_data: data});
                  console.log(this.state.artist_data);
        }
      });
    }


 componentDidMount() {
  try{
   this.getToken();
  }catch(error){
    console.log(error);
  }
}

render() {
  const myConfig = {
    nodeHighlightBehavior: true,
    node: {
        color: 'lightgreen',
        size: 500,
        highlightStrokeColor: 'blue'
    },
    link: {
        highlightColor: 'lightblue'
    }
};
 
// graph event callbacks
const onMouseOverNode = function(nodeId) {
  window.alert(`Clicked node ${nodeId} `);
};
 
 
const onClickLink = function(source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
};
 
  return (
    
  <section className="section auth">
    <div className="container">
      <Form controlid = "formGroupEmail" onSubmit = {event => {event.preventDefault();}}>
        <FormGroup>
          <InputGroup>
            <FormControl 
              type="text" 
              placeholder="search for artists"
              value={this.state.query}
              onChange={event => { this.setState({ query: event.target.value })}}
              onKeyPress={event => {
                if(event.key === 'Enter'){
                  this.search();
                }
                else{
                  console.log("Press enter");
                }
            }}
            inputRef={ref => { this.input = ref; }}
          />
          {/* <InputGroup.Addon
                            onClick={() => this.search()}>
                            <Glyphicon glyph="search">
                            </Glyphicon>
                        </InputGroup.Addon> */}
          </InputGroup>
        </FormGroup>
      </Form>
                      
      {
                    this.state.artist !== null
                        ? 
                            <div className="artist-output">
                                <Profile
                                    artist={this.state.artist}
                                />
                                <div>
                                    <Gallery
                                        tracks={this.state.tracks}
                                    />
                                </div>
                             </div>
                          :<div></div>
      }
      {
                              this.state.artist_data !== null
                              ?
                              <div style={{height: window.innerHeight*0.8,width: window.innerHeight*0.5}}>
                              <h1>Recommended Artists</h1>
                              <Graph id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                                    data={this.state.artist_data}
                                    config={myConfig}
                                    onClickLink={onClickLink}
                                    onMouseOverNode={onMouseOverNode}
                                    />
                                </div>
                              :<div></div>
                            }
      {/* <h1>This is where the content will be!</h1>
      <p>Only logged in users can view this</p> */}
    </div>
  </section>
    
      
  )
  }
}
