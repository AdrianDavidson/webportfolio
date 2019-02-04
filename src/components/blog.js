import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu,IconButton } from 'react-mdl';


class Blog extends Component {
    render() {
        return (
            <div>
                <div class="wrap">
                    <div class="left">
                    <div id = "head3">
                        <h1>Welcome to my blog</h1>
                        </div>
                        <br/>
                        <br/>
                        <div className="blogtxt">
                        Please take some time to view some of the blogs I have written. these blogs
                            are of topics I have found interesting. stay tuned for more.
                        
                        </div>
                    </div>
                    <div class="right">
                        <div>
                            <section id="page_1">
                                <Card shadow={0} style={{ width: '80vh', margin: 'auto' }}>
                                    <CardTitle style={{ color: '#fff', height: '80vh', background: 'url(../imgs/blog1.png) center / cover' }}>Welcome</CardTitle>
                                    <CardText>
                                        A blog about the raspberry pi vs the intel compute...
                                    </CardText>
                                    <CardActions border>
                                    <Button colored target="_blank" href="https://adriansdavidsonstechblog.blogspot.com/">Vew Blog</Button>
                                    </CardActions>
                                    <CardMenu style={{ color: '#fff' }}>
                                        <IconButton name="share" />
                                    </CardMenu>
                                </Card>

                            </section>

                            <section id="page_2">
                            <Card shadow={0} style={{ width: '80vh', margin: 'auto' }}>
                                    <CardTitle style={{ color: '#fff', height: '80vh', background: 'url(../imgs/blog2.png) center / cover' }}>Welcome</CardTitle>
                                    <CardText>
                                    A blog about the raspberry pi...
                                    </CardText>
                                    <CardActions border>
                                        <Button colored target="_blank" href="https://adriansdavidsonstechblog.blogspot.com/">Vew Blog</Button>
                                    </CardActions>
                                    <CardMenu style={{ color: '#fff' }}>
                                        <IconButton name="share" />
                                    </CardMenu>
                                </Card>
                            </section>

                            <section id="page_3">
                            <Card shadow={0} style={{ width: '80vh', margin: 'auto' }}>
                                    <CardTitle style={{ color: '#fff', height: '80vh', background: 'url(../imgs/blog3.png) center / cover' }}>Welcome</CardTitle>
                                    <CardText>
                                    A blog about the Oculas Rift...
                                    </CardText>
                                    <CardActions border>
                                    {/* CITE BITE */}
                                    <Button colored target="_blank" href="https://adriansdavidsonstechblog.blogspot.com/">Vew Blog</Button>
                                    </CardActions>
                                    <CardMenu style={{ color: '#fff' }}>
                                        <IconButton name="share" />
                                    </CardMenu>
                                </Card>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Blog;