module.exports = {
  get: function (prop) {
    var args = Array.prototype.slice.call(arguments, 1), val = this[prop];
    return typeof val === 'function' ? val.apply(this, args) : val;
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
