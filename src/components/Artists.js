import React, { Component }from 'react';
//import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Profile from './Profile';
import Gallery from './Gallery';
import {FormControl,FormGroup} from 'react-bootstrap';
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://xugxuuf867.execute-api.us-east-1.amazonaws.com/test/new-resource";
export default class Artists extends Component{
  constructor(props) {
    super(props);
    this.state = {
        query: '',
        artist: null,
        accessToken: undefined,
        tracks: []
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
              FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`
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
      {/* <h1>This is where the content will be!</h1>
      <p>Only logged in users can view this</p> */}
    </div>
  </section>
    
      
  )
  }
}
