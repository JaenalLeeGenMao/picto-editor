var React = require('react')
var ReactRouter = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Switch = require('react-router-dom').Switch;
var Playground = require('./playground')
require('../css/customscrollbar.css')
require('../css/simple-sidebar.css')
require('../css/index.css')

class App extends React.Component {
    render() {
        return (
            <ReactRouter>
                <Switch>
                    <Route exact path="/" component={Playground} />
                    <Route render={function() {
                        return (
                            <div className="invalid-container">
                                <img src='http://i.imgur.com/6bgtvrg.jpg'/>
                                <code>Page not found</code>
                            </div>
                        )
                    }} />
                </Switch>
            </ReactRouter>
        )
    }
}

module.exports = App
