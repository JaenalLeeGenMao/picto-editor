import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardImg, CardBlock, CardTitle , Form, FormGroup, Label, Input} from 'reactstrap';
var FontAwesome = require('react-fontawesome');
var $ = require('jquery');

class AddTextModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      text: ''
    };

    //bind all this methods so they can get reference
    this.toggle = this.toggle.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  // simply open/close modal dialog
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  // handle adding request and send callback back to playground
  async handleAdd() {
    await this.setState({
      modal: !this.state.modal
    });
    console.log("Selected file: " + this.state.text);
    this.props.handleText(this.state.text, true);
  }

  // handle cancelation request and send callback back to playground
  async handleCancel() {
    await this.setState({
      modal: !this.state.modal
    });
    console.log("Selected file: " + this.state.text);
    this.props.handleText(null, false);
  }

  render() {
    return (
      <span>
        <Button onClick={this.toggle} block>
            <FontAwesome className="sidebar-logo" name="file-text"/> Add text
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Text Editor</ModalHeader>
          <ModalBody>
            <div className="modalDisplays">
                <Card style={{"width":"100%"}}>
                    <CardBlock>
                      <Form onSubmit={(e) => e.preventDefault()}>
                          <FormGroup>
                            <Label for="addText">ADD NEW TEXT</Label>
                            <Input type="text" name="addText" id="addText" placeholder="Enter text here" onChange={(e) => this.setState({ text: e.target.value })}/>
                          </FormGroup>
                          <Button color="primary" onClick={this.handleAdd} block>ADD</Button>
                          <Button color="secondary" onClick={this.handleCancel} block>CANCEL</Button>
                      </Form>
                    </CardBlock>
                </Card>
            </div>
          </ModalBody>
        </Modal>
      </span>
    );
  }
}

module.exports = AddTextModal;
