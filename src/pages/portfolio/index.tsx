import React from "react"

export default function index() {
  return (
    <>
      <div>hey port</div>
      <a
        className="twitter-timeline"
        href="https://twitter.com/kappac0dex?ref_src=twsrc%5Etfw"
      >
        Tweets by kappac0dex
      </a>{" "}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </>
  )
}
