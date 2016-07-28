var Person = function() {
    this.data = {
        _id: null,
        index: null,
        guid: null,
        isActive: null,
        balance: null,
        picture: null,
        age: null,
        eyeColor: null,
        name: null,
        gender: null,
        company: null,
        email: null,
        phone: null,
        address: null,
        about: null,
        registered: null,
        lattitude: null,
        longitude: null,
        tags: null,
        friends: null,
        greeting: null,
        favoriteFruit: null
    };
    this.fill = function(info) {
        for (var prop in this.data) {
            if (this.data[prop] !== "undefined") {
                this.data[prop] = info[prop];
            }
        }
    };
    this.getFriendsDetail = function() {
        return this.data.friends;
    };
    this.getPersonDetails = function() {
        return this.data;
    };
};

module.exports = function(info) {
    var instance = new Person();
    instance.fill(info);
    return instance;
};