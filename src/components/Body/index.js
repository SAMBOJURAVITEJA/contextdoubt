import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderContent = () => (
        <div className="content-container">
          <h6>Content</h6>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
      )
      const content1 = showContent ? renderContent() : null

      const renderLeftNavbarMenu = () => (
        <div className="LeftNavbarMenuContainer">
          <h1 className="h1">Left Navbar Menu</h1>
          <ul>
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
            <p>Item 4</p>
          </ul>
        </div>
      )
      const content2 = showLeftNavbar ? renderLeftNavbarMenu() : null

      const renderRightNavbar = () => (
        <div className="RightNavbarContainer">
          <h1 className="h1">Right Navbar Menu</h1>
          <div className="add">
            <p>Ad 1</p>
          </div>
          <div className="add">
            <p>Ad 2</p>
          </div>
        </div>
      )
      const content3 = showRightNavbar ? renderRightNavbar() : null
      return (
        <div className="body-container">
          {content2}
          {content1}
          {content3}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
