import * as React from 'react';
import { WebView } from 'react-native-webview';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

export default class App extends React.Component {
  adFunction = async () => {
    // await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
    await AdMobInterstitial.setAdUnitID('ca-app-pub-6128669615016913/4284402393');
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  }



  componentDidMount () {
    this.adFunction();
  }


  render () {
    return (
      <WebView
        source={{
          uri: 'https://sub.thekpop.net/'
        }}
      />
    );
  }
}