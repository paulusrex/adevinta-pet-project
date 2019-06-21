import React from 'react'
import PropTypes from 'prop-types'
import AtomCard from '@s-ui/react-atom-card'
import AtomImage from '@s-ui/react-atom-image'

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

const MoviesSearchList = ({list, linkFactory: Link}) => {
  return (
    <div className="mv-MovieSearchList">
      <header className="mv-MovieSearchList-header">List of movies</header>
      {list.map(({id, title, image}) => {
        const imageSrc = image && `https://image.tmdb.org/t/p/w200${image}`
        // const renderMedia = () =>
        //   imageSrc && (
        //     <img className="mv-MovieSearch-itemImage" src={imageSrc} />
        //   )
        const renderMedia = () => (
          <AtomImage
            className="mv-MovieSearchList-itemImage"
            src={imageSrc}
            spinner={Spinner}
            placeholder={title}
            alt={`${title} poster`}
            errorText="Oh no!! This image couldn't be loaded"
          />
        )
        const renderContent = () => <header>{title}</header>
        const detailUrl = `/detail/${id}`

        return (
          <Link href={detailUrl} key={id}>
            <AtomCard
              className="mv-MovieSearchList-item"
              media={renderMedia}
              content={renderContent}
            />
          </Link>
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
  ),
  linkFactory: PropTypes.func
}

MoviesSearchList.defaultProps = {
  list: [],
  linkFactory: ({children, href}) => <a href={href}>{children}</a> //eslint-disable-line
}

export default MoviesSearchList
