import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? <h3 className='center'>Loading Initial Data!</h3>
              : <div>
                  <Route exact path='/' component={Dashboard} />
                  <Route path='/new' component={NewTweet} />
                  <Route path='/tweet/:id' component={TweetPage} />
                </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App)