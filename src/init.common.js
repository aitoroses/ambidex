module.exports = {
  "addons":         {
                      "utilities":      require("./addons/utilities.js"),
                    },

  "mixinCreators":  {
                      "connectStoresToLocalState":   require("./mixinCreators/connectStoresToLocalState.jsx"),
                    },

  "mixins":         {
                      "Reflux":   require("./mixins/Reflux.jsx"),
                      "Settings": require("./mixins/Settings.jsx"),
                      "Title":    require("./mixins/Title.jsx"),
                    },
};
