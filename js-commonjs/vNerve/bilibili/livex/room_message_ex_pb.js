// source: vNerve/bilibili/livex/room_message_ex.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var vNerve_bilibili_live_room_message_pb = require('../../../vNerve/bilibili/live/room_message_pb.js');
goog.object.extend(proto, vNerve_bilibili_live_room_message_pb);
goog.exportSymbol('proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage', null, global);
goog.exportSymbol('proto.vNerve.bilibili.livex.RoomMessageEx', null, global);
goog.exportSymbol('proto.vNerve.bilibili.livex.RoomMessageEx.PayloadCase', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vNerve.bilibili.livex.RoomMessageEx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.vNerve.bilibili.livex.RoomMessageEx.oneofGroups_);
};
goog.inherits(proto.vNerve.bilibili.livex.RoomMessageEx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vNerve.bilibili.livex.RoomMessageEx.displayName = 'proto.vNerve.bilibili.livex.RoomMessageEx';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.displayName = 'proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.vNerve.bilibili.livex.RoomMessageEx.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.vNerve.bilibili.livex.RoomMessageEx.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  EXTRA_INFO_CHANGE: 2
};

/**
 * @return {proto.vNerve.bilibili.livex.RoomMessageEx.PayloadCase}
 */
proto.vNerve.bilibili.livex.RoomMessageEx.prototype.getPayloadCase = function() {
  return /** @type {proto.vNerve.bilibili.livex.RoomMessageEx.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.vNerve.bilibili.livex.RoomMessageEx.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vNerve.bilibili.livex.RoomMessageEx.prototype.toObject = function(opt_includeInstance) {
  return proto.vNerve.bilibili.livex.RoomMessageEx.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vNerve.bilibili.livex.RoomMessageEx} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vNerve.bilibili.livex.RoomMessageEx.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    extraInfoChange: (f = msg.getExtraInfoChange()) && proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vNerve.bilibili.livex.RoomMessageEx}
 */
proto.vNerve.bilibili.livex.RoomMessageEx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vNerve.bilibili.livex.RoomMessageEx;
  return proto.vNerve.bilibili.livex.RoomMessageEx.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vNerve.bilibili.livex.RoomMessageEx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vNerve.bilibili.livex.RoomMessageEx}
 */
proto.vNerve.bilibili.livex.RoomMessageEx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    case 2:
      var value = new proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage;
      reader.readMessage(value,proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.deserializeBinaryFromReader);
      msg.setExtraInfoChange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vNerve.bilibili.livex.RoomMessageEx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vNerve.bilibili.livex.RoomMessageEx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vNerve.bilibili.livex.RoomMessageEx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vNerve.bilibili.livex.RoomMessageEx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getExtraInfoChange();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 room_id = 1;
 * @return {number}
 */
proto.vNerve.bilibili.livex.RoomMessageEx.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vNerve.bilibili.livex.RoomMessageEx} returns this
 */
proto.vNerve.bilibili.livex.RoomMessageEx.prototype.setRoomId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional RoomExtraInfoChangedMessage extra_info_change = 2;
 * @return {?proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage}
 */
proto.vNerve.bilibili.livex.RoomMessageEx.prototype.getExtraInfoChange = function() {
  return /** @type{?proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage} */ (
    jspb.Message.getWrapperField(this, proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage, 2));
};


/**
 * @param {?proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage|undefined} value
 * @return {!proto.vNerve.bilibili.livex.RoomMessageEx} returns this
*/
proto.vNerve.bilibili.livex.RoomMessageEx.prototype.setExtraInfoChange = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.vNerve.bilibili.livex.RoomMessageEx.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vNerve.bilibili.livex.RoomMessageEx} returns this
 */
proto.vNerve.bilibili.livex.RoomMessageEx.prototype.clearExtraInfoChange = function() {
  return this.setExtraInfoChange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vNerve.bilibili.livex.RoomMessageEx.prototype.hasExtraInfoChange = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    liveStatus: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    area: jspb.Message.getFieldWithDefault(msg, 4, ""),
    cover: jspb.Message.getFieldWithDefault(msg, 5, ""),
    startLiveTime: jspb.Message.getFieldWithDefault(msg, 16, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage}
 */
proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage;
  return proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage}
 */
proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.vNerve.bilibili.live.LiveStatus} */ (reader.readEnum());
      msg.setLiveStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setArea(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCover(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartLiveTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLiveStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getArea();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCover();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStartLiveTime();
  if (f !== 0) {
    writer.writeUint64(
      16,
      f
    );
  }
};


/**
 * optional vNerve.bilibili.live.LiveStatus live_status = 1;
 * @return {!proto.vNerve.bilibili.live.LiveStatus}
 */
proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.prototype.getLiveStatus = function() {
  return /** @type {!proto.vNerve.bilibili.live.LiveStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.vNerve.bilibili.live.LiveStatus} value
 * @return {!proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage} returns this
 */
proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.prototype.setLiveStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage} returns this
 */
proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string area = 4;
 * @return {string}
 */
proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.prototype.getArea = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage} returns this
 */
proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.prototype.setArea = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string cover = 5;
 * @return {string}
 */
proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.prototype.getCover = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage} returns this
 */
proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.prototype.setCover = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 start_live_time = 16;
 * @return {number}
 */
proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.prototype.getStartLiveTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage} returns this
 */
proto.vNerve.bilibili.livex.RoomExtraInfoChangedMessage.prototype.setStartLiveTime = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


goog.object.extend(exports, proto.vNerve.bilibili.livex);