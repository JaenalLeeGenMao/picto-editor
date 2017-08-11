var React = require('react')
var axios = require('axios')
var FontAwesome = require('react-fontawesome')

var UploadImageModal = require('./uploadImageModal')
var AddTextModal = require('./addTextModal')

import $ from 'jquery'
import { draggable } from 'jquery-ui/ui/widgets/draggable'
import { resizable } from 'jquery-ui/ui/widgets/resizable'
import { Button, Form, FormGroup, Label, Input, FormText, UncontrolledTooltip  } from 'reactstrap'

class Playground extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            file: '',
            files: [],
            name: "abaaa",
            selectedFiles: [],
            textFiles: []
        }

        //bind all this methods so they can get reference
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChanges = this.handleChanges.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleText = this.handleText.bind(this)
        this.handleDoubleClick = this.handleDoubleClick.bind(this)
    }

    componentWillMount() {
        // Upon loading request images that are already exist to be sored as default values
        axios.get("http://localhost:8000/images").then(function(response) {

            this.setState(function() {
                return {
                    files: response.data
                }
            });

            console.log(this.state.files);
        }.bind(this));

        // Add event listener when windows detect click perform update to all components
        window.addEventListener("click", this.handleUpdate);
    }

    componentDidMount() {
        // Update to current latest date to remind myself what day is it :)
        var newDate = new Date();
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        var day = newDate.getDate();
        var monthIndex = newDate.getMonth();
        var year = newDate.getFullYear();
        document.getElementById("page-title").innerHTML = days[newDate.getDay()] + ", " + newDate.getDate() + " " + monthNames[monthIndex] + " " + year;

        // Simple sidebar menu toggler on top-left of the screen
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            $("#toggleSidebar").toggleClass("fa-chevron-right");
            $("#toggleSidebar").toggleClass("fa-chevron-left");
        });

        // $( "#penguin.png" ).draggable();
    }

    // Handle submit button and prompt user if success/unsuccess to upload files
    handleSubmit(e) {
        e.preventDefault();
        var file = document.getElementById("file-upload").files[0].name;

        var files = this.state.files;
        // console.log(file.name);
        axios.post("http://localhost:8000/uploads?filename="+ file).then(function(response) {
            console.log(file.substr(file.length - 3))
            if (file.substr(file.length - 3) === "png" ) {
                alert("successfully uploaded")
            } else if (file.substr(file.length - 3) === "jpg" ) {
                alert("successfully uploaded")
            } else if (file.substr(file.length - 4) === "jpeg") {
                alert("successfully uploaded")
            } else {
                alert("uploaded unsuccessful")
                return
            }

            // Create new url for our file
            file = document.getElementById("file-upload").files[0];
            file = (window.URL || window.webkitURL).createObjectURL(file);
            files = files.concat(file);
            this.setState(function() {
                return {
                    files: files
                }
            })
            console.log(response);
            console.log(this.state.files);

        }.bind(this));
    }

    // Update image sources and added to local array else removed from array
    handleChanges(imageIndex, deleted) {

        var file = imageIndex;
        var files = this.state.files;
        console.log(imageIndex);

        if (deleted) {
            console.log(files.splice(imageIndex, 1));
            console.log(files);
        } else {
            var selectedFiles = this.state.selectedFiles.concat(this.state.files[file])

            this.setState(function() {
                return {
                    selectedFiles: selectedFiles
                }
            })
            this.handleUpdate()
        }


        this.setState(function() {
            return {
                file: file,
                files: files
            }
        })

    }

    // Updates all components with draggable options
    handleUpdate() {
        this.state.selectedFiles.map(function(each) {
            $(".draggable").draggable();
        })
        this.state.textFiles.map(function(each) {
            $(".draggable").draggable();
        })

        // Forces the UI to re-render
        this.forceUpdate();
    }

    // Handle text input after adde by user it will update the screen
    handleText(text, added) {
        if (added) {
            this.setState(function() {
                var newTextFiles = this.state.textFiles.concat(text)
                return {
                    textFiles: newTextFiles
                }
            })
            this.handleUpdate()
            console.log(this.state.textFiles)

        }

    }

    // Double click event that delete the component from screen
    handleDoubleClick(e) {
        console.log('removed!')
        if (e.target.src) {
            var files = this.state.selectedFiles
            files.splice(files.indexOf(e.target.src), 1)
            e.target.remove();
        } else {
            var files = this.state.textFiles
            files.splice(files.indexOf(e.target.name), 1)
            e.target.remove();
        }

    }

    render() {
        return (
            <div>
                <div id="wrapper">

                    <div id="sidebar-wrapper">
                        <ul className="sidebar-nav">
                            <li className="sidebar-brand">
                                <img className="sidebar-logo" width="50px" src="https://i.pinimg.com/originals/83/17/13/831713eafbeb99ad4a5ba6c72098f128.png"/>
                                <span className="sidebar-text"> <strong>Picto</strong>chart </span>
                            </li>
                            <li>
                                <h2>Images</h2>
                                <UploadImageModal buttonLabel="Select file" buttonTitle="Images" files={this.state.files} handleChanges={this.handleChanges}/>
                            </li>
                            <li>
                                <h2>Upload Files</h2>
                                <Form id="myFormId" onSubmit={this.handleSubmit.bind(this)}>
                                <FormGroup>
                                    <Label className="btn btn-secondary btn-block">
                                        <Input type="file" name="file" id="file-upload"/>
                                        <FontAwesome className="sidebar-logo" name="file"/> Select File
                                    </Label>
                                    <FormText color="muted">Choose a .png file</FormText>
                                </FormGroup>
                                <Button type="submit" block><FontAwesome className="sidebar-logo" name="upload"/> Upload</Button>
                                </Form>
                            </li>
                            <li>
                                <AddTextModal handleText={this.handleText.bind(this)} />
                            </li>
                        </ul>
                    </div>

                    <div id="page-content-wrapper">
                        <div className="site">
                            <h1 id="page-title" className="page-title"></h1>
                            <main className="main-content">
                                <div className="navbar">
                                    <a href="#menu-toggle" id="menu-toggle" data-toggle="tooltip" onClick={() => this.setState({ show: !this.state.show })}>
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-square-o fa-stack-2x"></i>
                                        <i id="toggleSidebar" className="fa fa-chevron-right fa-stack-1x"></i>
                                    </span>
                                    </a>
                                    <UncontrolledTooltip  placement="right" target="menu-toggle">
                                        {this.state.show ? "Hide": "Show"}
                                    </UncontrolledTooltip >
                                </div>
                                <div className="canvas">
                                    {
                                        ( this.state.selectedFiles.length > 0 ) &&
                                        this.state.selectedFiles.map(function(each, index) {
                                            return (
                                                <div className="draggable" key={each} onDoubleClick={this.handleDoubleClick}>
                                                    <img  src={each} alt="Draggable Object" />
                                                </div>
                                            )
                                        }.bind(this))
                                    }

                                    {
                                        ( this.state.textFiles.length > 0 ) &&
                                        this.state.textFiles.map(function(each, index) {
                                            return (
                                                <div className="draggable" key={index} onDoubleClick={this.handleDoubleClick}>
                                                    <span name={each}> {each}</span>
                                                </div>
                                            )
                                        }.bind(this))
                                    }
                                </div>
                            </main>
                            <footer className="footer">
                                <h2 className="talk-title">Coffee Lovers(Taste original)</h2>
                                <p className="talk-speaker">Jaenal Lee</p>

                                <a href="https://Facebook.com/jaenallee">
                                    <FontAwesome name="facebook" className="facebook" />
                                </a>
                                <a href="https://twitter.com/jaenalleegenmao">
                                    <FontAwesome name="twitter" className="twitter"/>
                                </a>
                                <a href="https://github.com/JaenalLeeGenMao">
                                    <FontAwesome name="github" className="github"/>
                                </a>
                                <p>Follow @jaenalleegenmao</p>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Playground
