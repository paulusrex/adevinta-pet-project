import React from 'react'
import PropTypes from 'prop-types'
import AtomCard from '@s-ui/react-atom-card'
import AtomImage from '@s-ui/react-atom-image'

const MoviesSearchList = ({list}) => {
  const Spinner = ({className}) => {
    const spinnerStyles = {
      width: '100px',
      zIndex: 99
    }

    return (
      <div className={className}>
        <img
          style={spinnerStyles}
          src="https://zippy.gfycat.com/SkinnySeveralAsianlion.gif"
          alt=""
        />
      </div>
    )
  }

  return (
    <div className="mv-MovieSearch-list">
      {list.map(item => {
        const imageSrc =
          item.image && `https://image.tmdb.org/t/p/w200${item.image}`
        // const renderMedia = () =>
        //   imageSrc && (
        //     <img className="mv-MovieSearch-itemImage" src={imageSrc} />
        //   )
        const renderMedia = () => (
          <AtomImage
            className="mv-MovieSearch-itemImage"
            src={imageSrc}
            spinner={Spinner}
            placeholder={item.title}
            alt={`${item.title} poster`}
            errorText="Oh no!! This image couldn't be loaded"
          />
        )
        const renderContent = () => <header>{item.title}</header>

        return (
          <AtomCard
            className="mv-MovieSearch-item"
            key={item.id}
            media={renderMedia}
            content={renderContent}
          />
        )
      })}
    </div>
  )
}

MoviesSearchList.displayName = 'MoviesSearchList'

MoviesSearchList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  )
}

MoviesSearchList.defaultProps = {
  list: []
}

export default MoviesSearchList
