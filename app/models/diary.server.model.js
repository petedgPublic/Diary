var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var DiarySchema = new Schema({
  isPublic: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  profilePicturePath: {
    type: String,
    default: '',
    trim: true,
    required: 'Path cannot be blank'
  },
  backgroundImagePath: {
    type: String,
    default: '',
    trim: true,
    required: 'Path cannot be blank'
  },
  user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
  usersWithAccess: [{
    user: {
      type: Schema.ObjectId,
      ref: 'User'
    }
  }],
  likes: [{
    user: {
      type: Schema.ObjectId,
      ref: 'User'
    }
  }]
});

mongoose.model('Diary', DiarySchema);
