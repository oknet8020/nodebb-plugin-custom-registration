'use strict';

var plugin = {};

plugin.addFields = function(data, callback) {
    data.registrationForm.push({
        label: 'מספר טלפון',
        name: 'phone',
        placeholder: 'הזן מספר טלפון',
        type: 'text'
    });

    callback(null, data);
};

plugin.saveFields = function(data) {
    console.log("שדה מותאם אישית נשמר:", data.userData.phone);
};

module.exports = plugin;
