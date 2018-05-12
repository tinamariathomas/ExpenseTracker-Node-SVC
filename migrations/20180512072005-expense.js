'use strict';

var dbm;
var type;
var seed;
const expenseTable = 'expenses';

exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  return db.createTable(expenseTable, {
    id: { type: 'int', primaryKey: true },
    description: 'string',
    amount: 'int'
  }, callback);
};

exports.down = function(db, callback) {
  return db.dropTable(expenseTable);
};

exports._meta = {
  "version": 1
};
