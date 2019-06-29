import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SearchBox from 'perixo20-react-movie-search-box'
import MoviesSearchList from 'perixo20-react-movie-search-list'
import AtomSpinner from '@s-ui/react-atom-spinner'

class MovieSearch extends Component {
  state = {
    list: [],
    loading: false
  }

  _onSearch = async (_, {value}) => {
    this.setState({loading: true})
    const {list} = await this.props.domain
      .get('search_movies_use_case')
      .execute({
        keyword: value
      })
    this.setState({list, loading: false})
  }
  render() {
    return (
      <div className="mv-MovieSearch">
        <SearchBox onSearch={this._onSearch} />
        {this.state.loading && <AtomSpinner />}
        {!this.state.loading && <MoviesSearchList list={this.state.list} />}
      </div>
    )
  }
}

MovieSearch.displayName = 'MovieSearch'

MovieSearch.propTypes = {
  domain: PropTypes.object
}
export default MovieSearch
