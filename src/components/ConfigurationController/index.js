import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
        mad,
      } = value

      console.log(mad, 'from configureController')

      const onChange1 = () => {
        onToggleShowContent()
      }

      const onChange2 = () => {
        onToggleShowLeftNavbar()
      }

      const onChange3 = () => {
        onToggleShowRightNavbar()
      }

      return (
        <form className="configurationControllerContainer">
          <h1>Layout</h1>
          {showContent ? (
            <div className="ccContainer-1">
              <input
                type="checkbox"
                checked={showContent}
                onChange={onChange1}
                id="checkbox1"
              />
              <label htmlFor="checkbox1">Content</label>
            </div>
          ) : (
            <div className="ccContainer-1">
              <input
                type="checkbox"
                value={showContent}
                onChange={onChange1}
                id="checkbox1"
              />
              <label htmlFor="checkbox1">Content</label>
            </div>
          )}
          {showLeftNavbar ? (
            <div className="ccContainer-2">
              <input
                type="checkbox"
                checked={showLeftNavbar}
                onChange={onChange2}
                id="checkbox2"
              />
              <label htmlFor="checkbox2">Left Navbar</label>
            </div>
          ) : (
            <div className="ccContainer-2">
              <input
                value={showLeftNavbar}
                type="checkbox"
                onChange={onChange2}
                id="checkbox2"
              />
              <label htmlFor="checkbox2">Left Navbar</label>
            </div>
          )}
          {showRightNavbar ? (
            <div className="ccContainer-3">
              <input
                type="checkbox"
                checked={showRightNavbar}
                onChange={onChange3}
                id="checkbox3"
              />
              <label htmlFor="checkbox3">Right Navbar</label>
            </div>
          ) : (
            <div className="ccContainer-3">
              <input
                value={showRightNavbar}
                type="checkbox"
                onChange={onChange3}
                id="checkbox3"
              />
              <label htmlFor="checkbox3">Right Navbar</label>
            </div>
          )}
        </form>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
