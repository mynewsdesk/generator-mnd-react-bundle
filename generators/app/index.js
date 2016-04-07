'use strict';
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the bundle generator.' +
      'I will generate the bundle structure for you.'
    ));

    var prompts = [{
      type: 'input',
      name: 'bundleName',
      message: "What's the name of your bundle?",
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    this.destinationRoot('client/app/bundles/' + this.props.bundleName);
    // /startup
    this.fs.copyTpl(
      this.templatePath('startup/clientGlobals.js'),
      this.destinationPath('startup/clientGlobals.js'),
      {bundleName: this.props.bundleName}
    );
    this.fs.copyTpl(
      this.templatePath('startup/serverGlobals.js'),
      this.destinationPath('startup/serverGlobals.js'),
      {bundleName: this.props.bundleName}
    );
    this.fs.copyTpl(
      this.templatePath('startup/Component.jsx'),
      this.destinationPath('startup/' + this.props.bundleName + '.jsx'),
      {bundleName: this.props.bundleName}
    );
    this.fs.copyTpl(
      this.templatePath('startup/devProps.js'),
      this.destinationPath('startup/devProps.js'),
      {bundleName: this.props.bundleName}
    );
    this.fs.copyTpl(
      this.templatePath('startup/devEndpoints.js'),
      this.destinationPath('startup/devEndpoints.js'),
      {bundleName: this.props.bundleName}
    );

    // /containers
    this.fs.copyTpl(
      this.templatePath('containers/Container.js'),
      this.destinationPath('containers/' + this.props.bundleName + 'Container.js'),
      {bundleName: this.props.bundleName}
    );

    // /reducers
    this.fs.copyTpl(
      this.templatePath('reducers/**/*'),
      this.destinationPath('reducers'),
      {bundleName: this.props.bundleName}
    );

    // /actions
    this.fs.copyTpl(
      this.templatePath('actions/**/*'),
      this.destinationPath('actions'),
      {bundleName: this.props.bundleName}
    );

    // /components
    this.fs.copyTpl(
      this.templatePath('components/Component.jsx'),
      this.destinationPath('components/' + this.props.bundleName + '.jsx'),
      {bundleName: this.props.bundleName}
    );
  },

  end: function () {
    this.log(yosay(
      'Your bundle is ready. Happy coding!'
    ));
  }
});
