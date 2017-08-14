// import jsdom from 'jsdom';
import assert from 'assert';

var expect = require('chai').expect;
var mount = require('enzyme').mount;
var shallow = require('enzyme').shallow;

// Important
var jsdom = require('mocha-jsdom');
var rerequire = jsdom.rerequire;
var $ = rerequire('jquery');


describe('<Playground/>', function() {

    let React, utils;


    global.jQuery = $ = rerequire('jquery')

    global.window = document;
    global.navigator = {
        userAgent: 'node.js'
    };

    React = require('react');
    utils = require('react-addons-test-utils');

    const Playground = require('../app/components_test/playground');


    it('should have an image to display the Playground', function() {
        const wrapper = shallow( < Playground / > );
        expect(wrapper.find('img')).to.have.length(1);
    });

    it('should have a single button', function() {
        const wrapper = shallow( < Playground / > );
        expect(wrapper.find('Button')).to.have.length(1);
    });

    it('should not have props for show, file, files, name, selectedFiles and textFiles', function() {
        const wrapper = shallow( < Playground / > );
        expect(wrapper.props().show).to.be.undefined;
        expect(wrapper.props().file).to.be.undefined;
        expect(wrapper.props().files).to.be.undefined;
        expect(wrapper.props().name).to.be.undefined;
        expect(wrapper.props().selectedFiles).to.be.undefined;
        expect(wrapper.props().textFiles).to.be.undefined;
    });

});

describe('<AddTextModal>', function() {

    let React, utils;


    global.jQuery = $ = rerequire('jquery')

    global.window = document;
    global.navigator = {
        userAgent: 'node.js'
    };

    React = require('react');
    utils = require('react-addons-test-utils');

    const AddTextModal = require('../app/components_test/addTextModal');

    it('should have a Modal for the AddTextModal', function() {
        const wrapper = shallow( < AddTextModal / > );
        expect(wrapper.find('Modal')).to.have.length(1);
    });

    it('should have least 3 buttons', function() {
        const wrapper = shallow( < AddTextModal / > );
        expect(wrapper.find('Button')).to.have.length(3);
    });

    it('should have props for modal and text', function() {
        const wrapper = shallow( < AddTextModal / > );
        expect(wrapper.props().modal).to.be.undefined;
        expect(wrapper.props().text).to.be.undefined;
    });
});

describe('<UploadImageModal>', function() {

    let React, utils;


    global.jQuery = $ = rerequire('jquery')

    global.window = document;
    global.navigator = {
        userAgent: 'node.js'
    };

    React = require('react');
    utils = require('react-addons-test-utils');

    const UploadImageModal = require('../app/components_test/uploadImageModal');

    it('should have a Card for the UploadImageModal', function() {
        const wrapper = shallow( < UploadImageModal / > );
        expect(wrapper.find('Card')).to.have.length(1);
    });

    it('should have 3 buttons', function() {
        const wrapper = shallow( < UploadImageModal / > );
        expect(wrapper.find('Button')).to.have.length(3);
    });

    it('should have props for modal and selected', function() {
        const wrapper = shallow( < UploadImageModal / > );
        expect(wrapper.props().modal).to.be.undefined;
        expect(wrapper.props().selected).to.be.undefined;
    });
});
