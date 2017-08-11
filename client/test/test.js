var React = require('react');
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

var UploadImageModal = require('./app/components/uploadImageModal');
var AddTextModal = require('./app/components/addTextModal');
var Playground = require('./app/components/playground');


var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('<Playground/>', function () {
  it('should have an image to display the Playground', function () {
    const wrapper = shallow(<Playground/>);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should have a button', function () {
    const wrapper = shallow(<Playground/>);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have props for modal and text', function () {
    const wrapper = shallow(<Playground/>);
    expect(wrapper.props().show).to.be.defined;
    expect(wrapper.props().file).to.be.defined;
    expect(wrapper.props().files).to.be.defined;
    expect(wrapper.props().name).to.be.defined;
    expect(wrapper.props().selectedFiles).to.be.defined;
    expect(wrapper.props().textFiles).to.be.defined;
  });
});

describe('<AddTextModal>', function () {
  it('should have an input for the AddTextModal', function () {
    const wrapper = shallow(<AddTextModal/>);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have a button', function () {
    const wrapper = shallow(<AddTextModal/>);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have props for modal and text', function () {
    const wrapper = shallow(<AddTextModal/>);
    expect(wrapper.props().modal).to.be.defined;
    expect(wrapper.props().text).to.be.defined;
  });
});

describe('<UploadImageModal>', function () {
  it('should have an input for the UploadImageModal', function () {
    const wrapper = shallow(<UploadImageModal/>);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have a button', function () {
    const wrapper = shallow(<UploadImageModal/>);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have props for modal and selected', function () {
    const wrapper = shallow(<UploadImageModal/>);
    expect(wrapper.props().modal).to.be.defined;
    expect(wrapper.props().selected).to.be.defined;
  });
});
