var BasePlugin = require('ember-cli-deploy-plugin');

module.exports = {
  name: 'ember-cli-deploy-generic-after-deploy',

  createDeployPlugin: function(options) {
    var DeployPlugin = BasePlugin.extend({
      name: options.name,

      defaultConfig: {
        callback: function(context) {
          return context.callback || function() {};
        }
      },

      requiredConfig: ['callback'],

      didDeploy: function(context) {
        this.log("Running generic after deploy callback");
        var callback = this.readConfig('callback') || null;
        return Promise.resolve(callback);
      }
    });

    return new DeployPlugin();
  }
};
