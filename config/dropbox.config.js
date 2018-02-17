require('isomorphic-fetch');
const Dropbox = require('dropbox').Dropbox;
const fs = require('fs');
const dbx = new Dropbox({ accessToken: process.env.ACCESS_TOKEN });
const Post = require('../app/post/post.model');

module.exports.getUrl = (filename, fileContent) => {
  return dbx.filesUpload({ path: `/multer/${filename}.png`, contents: fileContent })
    .then(fileUploaded => {
      const parameters = {
        path: fileUploaded.path_lower,
        settings: {
            requested_visibility: 'public'
          }
      };
      return dbx.sharingCreateSharedLinkWithSettings(parameters)
        .then(response => response.url.split('/s')[1])
    })
    .catch(error => console.log(error));
}
