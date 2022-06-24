## Show YouTube Video Upload Date extension

For Google Chrome, Chromium and Chromium-based Microsoft Edge

### Chrome Web Store page

https://chrome.google.com/webstore/detail/show-youtube-video-upload/amdebbajoolgbbgdhdnkhmgkkdlbkdgi

### Ported to Firefox Add-ons by [trevorraney](https://github.com/trevorraney)

https://addons.mozilla.org/en-US/firefox/addon/show-youtube-upload-date/

## To upload a new plugin version to the Chrome Web Store

From the root of the project folder, in the terminal..

Increment the extension version in:

```
./bundle/manifest.json
```

And create the zip by running:

```
./package.sh
```

If when running `./package.sh` you get the below error, try pausing any live streams in Chrome or closing Chrome completely:

```
bootstrap_look_up com.google.Chrome.MachPortRendezvousServer.1: Permission denied (1100)
```

Then upload this file via the Chrome Web Store Developer Dashboard:

```
./bin/package.zip
```
