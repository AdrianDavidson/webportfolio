import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { TwitterTimelineEmbed, TwitterFollowButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterVideoEmbed } from 'react-twitter-embed';


class About extends Component {
    render() {
        return (
            <div>
                <div id="wrapper">
                    <div id="a" className="panels">
                        <div id="paper">

                            <div className="twitterIntro">
                                Adrian Davidson
                            <br />
                                <br />
                                Welcome to my website.
                            <br />
                                Browse through my Twitter timeline to learn more about me.
                            </div>
                            <div id="twitterFeed">
                                <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName="Adriandav_web"
                                    options={{ height: 400 }}
                                />
                                <TwitterTweetEmbed
                                    tweetId={'1069564806846394368'}
                                />

                                <TwitterMentionButton
                                    screenName={'Adriandav_web'}
                                />
                                <TwitterMomentShare
                                    id={1364031673}
                                />
                                <TwitterVideoEmbed
                                    id={'560070183650213889'}
                                />
                                <TwitterFollowButton
                                    screenName={'Adriandav_web'}
                                />
                                <TwitterMomentShare
                                    momentId={'650667182356082688'}
                                />
                                <TwitterMomentShare
                                    id={1364031673}
                                />
                            </div>
                        </div>
                    </div>
                    <div id="b" className="panels">
                        <Grid className="demo-grid-2">
                            <Cell col={6} className="leftHalf">
                                <h1>About me..</h1>
                                <div className="aboutme">
                                    My name is Adrian Davidson and I am a 4th year computer science student in CIT (Cork Institute of Technology)
                                    that is focused on web development. The languages I thrive on are web based languages such as javaScript, Reactjs, HTML/CSS.
                                    <br />
                                    <br />
                                    thi
                                </div>
                            </Cell>
                            <Cell col={6} className="leftHalf">
                                <div id="head1" >
                                    <h1>pic of me..</h1>
                                </div>

                                <div className="aboutme">
                                    <img
                                        src="../imgs/adrian2.jpg"
                                        alt="Avatar"
                                        className="selfie"
                                        height="650"
                                        width="300"
                                    />
                                    <div>
                                    </div>
                                </div>
                            </Cell>
                        </Grid>
                    </div>
                    <div id="c" className="panels">

                    </div>
                    <div id="d" className="panels">
                        <div id="animatedbar">
                            <div id="divA">
                                <p>View my skillset and the languages I am familiar with.</p>
                                <div id="head2"><h1>View my Skills</h1></div>
                                <div id="divB">
                                    <img class="app_imgs" src="../imgs/skillset/HTML.png" alt="html" height="100" width="140" />
                                    <img class="app_imgs" src="../imgs/skillset/css.png" alt="css" height="100" width="110" />
                                    <img class="app_imgs" src="../imgs/skillset/javascript.png" alt="javaScript" height="110" width="190" />
                                    <img class="app_imgs" src="../imgs/skillset/react.png" alt="Reactjs" height="100" width="110" />
                                    <img class="app_imgs" src="../imgs/skillset/node.png" alt="Nodejs" height="100" width="150" />
                                    <img class="app_imgs" src="../imgs/skillset/MDB.png" alt="MongoDB" height="100" width="150" />
                                    <img class="app_imgs" src="../imgs/skillset/python.png" alt="Python" height="100" width="120" />
                                    <img class="app_imgs" src="../imgs/skillset/java.png" alt="Java" height="100" width="150" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;