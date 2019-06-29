import React from 'react'
import PropTypes from 'prop-types'
import DetailMovie from 'perixo20-react-movie-detail'

const Detail = ({id}) => (
  <React.Fragment>
    <DetailMovie id={id} />
  </React.Fragment>
)

Detail.propTypes = {id: PropTypes.number}
Detail.getInitialProps = async ({routeInfo}) => ({id: routeInfo.params.id})
Detail.renderLoading = () => <h1>...</h1>

export default Detail
