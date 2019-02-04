import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Typing from 'react-typing-animation';

class Landing extends Component {
    render() {
        return <div style={{ width: '100%', margin: 'auto' }}>
            <Grid className="landing-Grid">
                <Cell col={12}>
                    <img
                        src="../imgs/adrian1.png"
                        alt="Avatar"
                        className="avatar"
                    />

                    <div>
                        <div className="terminalText">
                            <Typing>
                                <div>
                                    <Typing.Delay ms={3000} />
                                    function helloWorld() <br/>
                                    <div className="paddedtext2">
                                    &#123; <br />
                                    </div>
                                    <div className="paddedtext1">
                                   Console.log(Visit my LinkedIn at<a href="https://www.linkedin.com/in/adrian-davidson/"> Adrian Dav Web</a>);  <br />
                                    </div>
                                    <div className="paddedtext2">
                                  }
                                  </div>
        	                       
                                    
    </div>
                            </Typing>
                        </div>



                    </div>
                </Cell>
            </Grid>

        </div>
    }
}
export default Landing;