Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  Template.body.helpers({
    tasks: function() {
      return Tasks.find({});
    }
  });
}