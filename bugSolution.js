import * as Linking from 'expo-linking';

const handleDeepLink = async (url) => {
  // Process the deep link URL here
  console.log('Deep link received:', url);
  // Handle routing logic based on the URL
};

const handleDeepLinkOpen = async () => {
  let initialUrl = await Linking.getInitialURL();
  if (initialUrl) {
    handleDeepLink(initialUrl);
  }

  Linking.addEventListener('url', ({ url }) => {
    if (url) {
      handleDeepLink(url);
    }
  });
};

export default handleDeepLinkOpen;