import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Header from "../components/common/Header"
import WithAnimation from "../hoc/WithAnimation"
import Media from "../components/common/Media"
import Content from "../components/common/Content"
import Sponsor from "../components/common/Sponsor"
import Overlays from "../components/common/Overlays"
import {
  Wrapper
} from './MainStyledComponents'
import Distortion from "../components/common/Distortion"


const IndexPage = () => (
  <WithAnimation>
    <Layout>
      <Seo title="Home" />
      <Wrapper>
        <Overlays />
        <Header />
        <Media />
        <Content />
        <Sponsor />
        <Distortion />
      </Wrapper>

    </Layout>
  </WithAnimation>

)

export default IndexPage
