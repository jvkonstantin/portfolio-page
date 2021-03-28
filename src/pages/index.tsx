import React from "react"

import "../styles/index.css"
import { DiGithubAlt } from "react-icons/di"
import { AiOutlineTwitter } from "react-icons/ai"
import { FaDiscord, FaSpotify } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { BsPeopleFill } from "react-icons/bs"

import SocialTooltip from "../comps/socialTooltip"

export default function Home() {
  return (
    <div className="App-header">
      <div style={{ position: "absolute", left: "23px", top: "23px" }}></div>
      <div className="width-limiter">
        <div className="App-disc">
          <p id="underline" style={{ fontSize: "20px", marginBottom: "0" }}>
            <a href="https://unnamedsoftware.com/kappa/blog">Blog</a>{" "}
            <a href="https://unnamedsoftware.com/kappa/portfolio">Portfolio</a>
          </p>
          <h1 className="App-title">Kappa C0dex</h1>
          <code>
            <p>
              <div>
                This is me. Or is it? <br />
              </div>
              <div>
                I am a front-end / backend React{" (Gatby, Next, Typescript)"} ,
                Python and Java developer
              </div>
              <div>
                Mainly based in{" "}
                <a
                  className="Location"
                  href="https://unnamedsoftware.com/locations"
                >
                  {" "}
                  Greece, Athens{" "}
                </a>{" "}
              </div>

              <div className="Social-links">
                {`[`}
                {/* a data-for="custom-class"
                  data-tip="hover on me will keep the tooltip" */}
                <SocialTooltip>
                  <a
                    data-for="custom-class"
                    data-tip="find my projects on GitHub!"
                    href="https://unnamedsoftware.com/members/kappa/github"
                    style={{ marginLeft: "-5px" }}
                    target="__blank"
                  >
                    {" "}
                    <DiGithubAlt />
                  </a>
                </SocialTooltip>
                <SocialTooltip>
                  <a
                    data-for="custom-class"
                    data-tip="i tweet things i guess?"
                    href="https://unnamedsoftware.com/members/kappa/twitter"
                    target="__blank"
                  >
                    <AiOutlineTwitter />
                  </a>
                </SocialTooltip>
                <SocialTooltip>
                  <a
                    data-for="custom-class"
                    data-tip="join the discord"
                    href="https://unnamedsoftware.com/members/kappa/discordprofile"
                  >
                    <FaDiscord />
                  </a>
                </SocialTooltip>
                <SocialTooltip>
                  <a
                    data-for="custom-class"
                    data-tip="my friends"
                    href="https://unnamedsoftware.com/developers"
                    style={{ marginLeft: "5px" }}
                  >
                    <BsPeopleFill />
                  </a>
                </SocialTooltip>
                {`]`}
              </div>
            </p>
          </code>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/87/Vincent_van_Gogh_-_Head_of_a_skeleton_with_a_burning_cigarette_-_Google_Art_Project.jpg"
          className="App-logo"
          alt="pfp"
        />
      </div>
      <footer>
        <div>
          <h1> Kappa™ • 2021 </h1>
        </div>
        <div className="App-Footer-Link">
          <span />{" "}
          <a href="https://unnamedsoftware.com/kappa/spotify" target="__blank">
            <FaSpotify />
          </a>{" "}
          <span>•</span>
          <span />{" "}
          <a href="https://unnamedsoftware.com/kappa/contact" target="__blank">
            <IoMdMail />
          </a>{" "}
          <span>•</span>
          <span />{" "}
          <a href="https://unnamedsoftware.com/kappa/github" target="__blank">
            {" "}
            <DiGithubAlt />
          </a>{" "}
          <span>•</span>
          <span />{" "}
          <a href="https://unnamedsoftware.com/kappa/twitter" target="__blank">
            <AiOutlineTwitter />
          </a>{" "}
          <span>•</span>
          <span />{" "}
          <a
            href="https://unnamedsoftware.com/kappa/discordprofile"
            target="__blank"
          >
            <FaDiscord />
          </a>
        </div>
      </footer>
    </div>
  )
}
