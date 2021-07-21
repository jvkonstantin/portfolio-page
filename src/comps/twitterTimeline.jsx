import React from "react"
import "../styles/twitter.css"
import { TwitterTimelineEmbed } from "react-twitter-embed"
const TwitterTimeline = () => {
  return (
    <>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="kappac0dex"
        options={{ height: 400, width: 800 }}
      />

      {/* {["800", "600", "700", ].map(word => (
        <div>{word}</div>
      ))} */}
    </>
  )
}

export default TwitterTimeline
