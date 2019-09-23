// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {

  // for the current tab, inject the "inject.js" file & execute it
  chrome.tabs.executeScript(tab.ib, {
    file: 'inject.js'
  });

});
