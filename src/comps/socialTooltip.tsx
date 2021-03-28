import React from "react"
import ReactTooltip from "react-tooltip"
const SocialTooltip = (props: any) => {
  return (
    <div>
      {props.children}
      <ReactTooltip
        id="custom-class"
        className="extraClass"
        delayHide={100}
        effect="solid"
        place="bottom"
        offset={{ top: 10 }}
      />
    </div>
  )
}

export default SocialTooltip
