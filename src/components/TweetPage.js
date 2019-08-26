import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './tweet'
import NewTweet from './NewTweet'


export class TweetPage extends Component {
  render() {
    const { id, replies } = this.props

    return (
      <div>
        <Tweet id={id} />
        <NewTweet id={id} />
        {replies.length !== 0 && <h3 className='center'>Replies</h3>}
        <ul>
          {replies.map((id) => 
            <li key={id}>
              <Tweet id={id} />
            </li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, tweets, users}, props) => {
  const { id } = props.match.params
  
  return {
    id,
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort( (a, b) => tweets[b].timestamp - tweets[a].timestamp )
  }
}

export default connect(mapStateToProps)(TweetPage)
