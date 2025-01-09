# Expo Linking.getInitialURL() returns null inconsistently on Android

This repository demonstrates a bug in Expo's `Linking` API on Android where `getInitialURL()` occasionally returns `null` despite receiving a valid deep link.  The issue is intermittent and hard to reproduce consistently. This makes relying on `getInitialURL` for handling initial app launch from a deep link unreliable.

## Reproducing the Issue

Follow the instructions in `bug.js` to set up and run the example. You may need to repeatedly relaunch the app from the deep link to observe the null return from `getInitialURL()`.  There's no guaranteed way to reproduce this consistently, as its intermittent nature is the core problem.

## Solution

The `bugSolution.js` file presents a workaround that enhances reliability. Instead of solely relying on `getInitialURL()`, it combines it with an event listener for `Linking.addEventListener('url`, handler)`. This approach handles both the initial deep link and any subsequent deep links that may be opened after the app has started.  Note this still doesn't guarantee success in all cases but makes the issue significantly less frequent.

## Further investigation needed

More investigation is needed to understand the root cause of the inconsistency in `Linking.getInitialURL()` on Android.