This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Set the env

Create and complete each environment file; ask the team for values.

```bash
cp .env.template .env.dev
cp .env.template .env.production
```

Set the current environment.

```bash
# Development
npm run env:dev
# Release
npm run env:prod
```

Note: For iOS you must delete the app derived data for the new env to take effect. The env file is cached in the derived data. The derived data directory can be accessed via Xcode app > Xcode > Settings > Locations. Typically it is located as /Users/USER/Library/Developer/Xcode/DerivedData

## Step 2: Build the app

```bash
npm install
```

## Step 3: Start the app

### For Android

```bash
npm run android
```

### For iOS

```bash
npm run ios
```

## Step 4: Release the app

### For Android

```bash
npm run sign:android
```

The app bundle to upload to Goolge Play is located at android/app/build/outputs/bundle/release/app-release.aab

### For iOS

- Launch Xcode
- Select the release target
- Update the build and version ids
- Archive the project and upload to the AppStore

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Documentation

- [App Local State (Redux Store)](./doc/redux.md)
- [App Navigation](./doc/navigation.md)
- [Test Mode](./doc/testmode.md)

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
