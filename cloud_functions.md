https://firebase.google.com/docs/functions/get-started

npm install -g firebase-tools


https://github.com/firebase/functions-samples/tree/master/exif-images


https://firebase.google.com/docs/reference/functions/functions.storage.ObjectMetadata

https://cloud.google.com/vision/docs/reference/libraries#client-libraries-install-nodejs

https://firebase.google.com/docs/functions/config-env

firebase functions:config:set service.name="value"

firebase functions:config:get

functions.config().someservice.id

firebase functions:log

firebase help functions:log


 firebase deploy --only functions
 firebase deploy --only hosting
 firebase deploy --only functions:function1,function2

exports.groupA = {
  function1: functions.https.onRequest(...);
  function2: functions.database.ref('\path').onWrite(...);
}
exports.groupB = require('./groupB);
https://firebase.google.com/docs/cli/