const Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keyQmXU71mFqvcIu7",
});
let instance = Airtable.base("appQoyG07f8X3gM9i");

module.exports = instance.table("Content");
