import React from "react"
import "../styles/index.css"
import { DiGithubAlt } from "react-icons/di"
import { AiOutlineTwitter } from "react-icons/ai"
import { FaDiscord, FaSpotify } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { BsPeopleFill } from "react-icons/bs"
import SocialTooltip from "../comps/socialTooltip"
import { Helmet } from "react-helmet"
import BlackScelly from "../../static/background-black.svg"
import TwitterTimeline from "../comps/twitterTimeline"

export default function Home() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Kappa™... a genius a great man a great programmer ... hahahhaha "
        />
        <meta
          name="keywords"
          content="unnamed, unnamedsoftware, unnamedsoftware™, unnamed software, software™, unnamedsoftware™, kappac0dex, xunderal, lingduck, kappa™, unnamed[tv], unnamedTV, unnamed[tm] "
        />
        <meta name="author" content="Kappa™" />
        <title>Home | Kappa C0dex</title>s
      </Helmet>
      <div className="App-header">
        <div>
          <div className="App-disc">
            <code>
              <p>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      position: "relative",
                      bottom: "10px",
                    }}
                  >
                    <img
                      className="App-logo"
                      src={BlackScelly}
                      style={{ marginTop: "10px" }}
                    />
                    {/* <div className="twitter"> */}
                    <div
                      style={{
                        height: "fit-content",
                        position: "relative",
                        top: "6rem",
                        right: "-1rem",
                      }}
                      className="twitter-timeline"
                    >
                      <TwitterTimeline />
                    </div>
                    {/* </div> */}
                  </div>
                  <h1 className="App-title">Kappa C0dex</h1>
                  <p
                    id="underline"
                    style={{ fontSize: "20px", marginBottom: "0" }}
                  >
                    <a href="https://git.vogklis.com">Git Website</a>{" "}
                    <a href="https://blog.vogklis.com">Portfolio</a>
                  </p>

                  <p>This is me. Or is it?</p>
                </div>
                <div>
                  I am a front-end / backend React{" (Gatby, Next, Typescript)"}{" "}
                  , Python and Java developer
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
                  <SocialTooltip>
                    <a
                      data-for="custom-class"
                      data-tip="find my projects on GitHub!"
                      href="https://unnamedsoftware.com/kappa/github"
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
                      href="https://unnamedsoftware.com/kappa/twitter"
                      target="__blank"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </SocialTooltip>
                  <SocialTooltip>
                    <a
                      data-for="custom-class"
                      data-tip="See my profile on spotify"
                      href="https://unnamedsoftware.com/kappa/spotify"
                    >
                      <FaSpotify style={{ height: "25px" }} />
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
        </div>
        <footer>
          <div>
            <h1> Kappa™ • 2021 </h1>
          </div>
          <div className="App-Footer-Link">
            <span />{" "}
            <a href="https://unnamedsoftware.com/discord" target="__blank">
              <FaDiscord />
            </a>{" "}
            <span>•</span>
            <span />{" "}
            <a href="mailto:unnamedbusinesstm@gmail.com" target="__blank">
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
            <a
              href="https://unnamedsoftware.com/kappa/twitter"
              target="__blank"
            >
              <AiOutlineTwitter />
            </a>{" "}
          </div>
        </footer>
      </div>
    </>
  )
}
