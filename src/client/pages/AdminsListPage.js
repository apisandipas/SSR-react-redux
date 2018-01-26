import React, { Component }from 'react'
import { connect } from 'react-redux'
import { fetchAdmins } from "../actions/index"
import requireAuth from '../components/hocs/requireAuth'

class AdminsList extends Component {
  componentDidMount () {
    this.props.fetchAdmins()
  }

  renderAdmins () {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>
    })
  }

  render () {
    return (
      <div>
        Heres a list of admins
        <ul>
          {this.renderAdmins()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    admins: state.admins
  }
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsList)
  ),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
}