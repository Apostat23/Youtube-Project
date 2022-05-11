import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header/Header'
import VideoPlayer from '../components/videoPlayer/VideoPlayer'
import RelatedVideos from '../components/relatedVideos/RelatedVideos'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function VideoPage() {
  const params = useParams()
  const [list, setList] = useState([])
  return (
    <>
      <Header setList={setList} />
              <VideoPlayer videoId={params.videoId}/>
              <RelatedVideos videoId={params.videoId} />

    </>
  )
}

VideoPage.propTypes = {}

export default VideoPage
