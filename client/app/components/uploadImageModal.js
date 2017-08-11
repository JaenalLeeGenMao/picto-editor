import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardImg, CardBlock, CardTitle  } from 'reactstrap';
var FontAwesome = require('react-fontawesome');
var $ = require('jquery');

class UploadImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      selected: ''
    };

    //bind all this methods so they can get reference
    this.toggle = this.toggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // simply open/close modal dialog
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  // handle selection request and send callback back to playground
  async handleSelect(e) {
    await this.setState({
      modal: !this.state.modal,
      selected: e.target.id
    });
    console.log("Selected file: " + this.state.selected);
    this.props.handleChanges(this.state.selected, false);
  }

  // handle delete request and send callback back to playground
  async handleDelete(e) {
    await this.setState({
      modal: !this.state.modal,
      selected: e.target.id
    });
    console.log("Deleted file: " + this.state.selected);
    this.props.handleChanges(this.state.selected, true);
  }

  render() {
    return (
      <span>
        <Button onClick={this.toggle} block><FontAwesome name="image"/> {this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.buttonTitle}</ModalHeader>
          <ModalBody>
            <div className="modalDisplays">
            {
                this.props.files.map(function(image, index) {
                    return (
                        <Card id={image} style={{"width":"318px", "padding":"15px"}} key={image}>
                            <CardImg top width="100%" src={image} alt={image} />
                            <CardBlock>
                              <CardTitle>{image.substring(29,image.length)}</CardTitle>
                              <Button id={index}  color="secondary" onClick={this.handleSelect} block>SELECT</Button>
                              <Button id={index}  color="danger" onClick={this.handleDelete} block>DELETE</Button>
                            </CardBlock>
                        </Card>
                    )
                }.bind(this))
            }
            </div>
          </ModalBody>
        </Modal>
      </span>
    );
  }
}

module.exports = UploadImageModal;
