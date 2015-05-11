module.exports = {
  get: function (prop) {
    return this[prop];
  },

  set: function (prop, val) {
    if (arguments.length > 1) {
      this[prop] = val;
    } else {
      for (var item in prop)
        this.set(item, prop[item]);
    }
  }
};
