import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div>
          <div id="projects-grid1">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle className="hi" style={{ color: '#fff', height: '176px', background: 'url(../imgs/proj1.png) center / cover' }} ></CardTitle>
              <CardText>
                A college assignment to demonstrate my css animation skills.
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>View Live</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>

              </CardMenu>
            </Card>
            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(../imgs/proj2.png) center / cover' }} ></CardTitle>
              <CardText>
                A college assignment where we had to use nothing but css to animate a page.
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>View Live</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>

              </CardMenu>
            </Card>
            {/* Project 3 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(../imgs/proj3.png) center / cover' }} ></CardTitle>
              <CardText>
                A college assignment demonstrating basic use of JavaScript
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>View Live</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>

              </CardMenu>
            </Card>
          </div>
          <div id="projects-grid2">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(../imgs/proj4.png) center / cover' }} ></CardTitle>
              <CardText>
                A college assignment demonstrating basic use of JavaScript
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>View Live</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>

              </CardMenu>
            </Card>
            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552) center / cover' }} ></CardTitle>
              <CardText>
                A college assignment where we had to use nothing but css to animate a page.
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>View Live</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>

              </CardMenu>
            </Card>
            {/* Project 3 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552) center / cover' }} ></CardTitle>
              <CardText>
                A college assignment where we had to use nothing but css to animate a page.
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>View Live</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>

              </CardMenu>
            </Card>
          </div>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <div id="projects-grid1">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle className="hi" style={{ color: '#fff', height: '176px', background: 'url(https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552) center / cover' }} ></CardTitle>
              <CardText>
                A college assignment to demonstrate my css animation skills.
          </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>View Live</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>

              </CardMenu>
            </Card>
            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552) center / cover' }} ></CardTitle>
              <CardText>
                A college assignment where we had to use nothing but css to animate a page.
          </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>View Live</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>

              </CardMenu>
            </Card>
            {/* Project 3 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552) center / cover' }} ></CardTitle>
              <CardText>
                A college assignment demonstrating basic use of JavaScript
          </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>View Live</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>

              </CardMenu>
            </Card>
          </div>
        </div>

      )
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <div id="projects-grid1">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle className="hi" style={{ color: '#fff', height: '176px', background: 'url(https://diylogodesigns.com/wp-content/uploads/2017/07/java-logo-vector-768x768.png) center / cover' }} ></CardTitle>
              <CardText>
                A college assignment to demonstrate my css animation skills.
          </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>View Live</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>

              </CardMenu>
            </Card>
            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://diylogodesigns.com/wp-content/uploads/2017/07/java-logo-vector-768x768.png) center / cover' }} ></CardTitle>
              <CardText>
                A college assignment where we had to use nothing but css to animate a page.
          </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>View Live</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>

              </CardMenu>
            </Card>
            {/* Project 3 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://diylogodesigns.com/wp-content/uploads/2017/07/java-logo-vector-768x768.png) center / cover' }} ></CardTitle>
              <CardText>
                A college assignment demonstrating basic use of JavaScript
          </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>View Live</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>

              </CardMenu>
            </Card>
          </div>
        </div>

      )
    }
  }
  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>College Assignments</Tab>
          <Tab>Personal projects</Tab>
          <Tab>Java projects</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Projects;