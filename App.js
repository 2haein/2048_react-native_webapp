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
  adFunction = () => {
    <AdMobBanner
    bannerSize="fullBanner"
    // adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
    adUnitID="ca-app-pub-6128669615016913/8187315932"
    servePersonalizedAds // true or false
    onDidFailToReceiveAdWithError={this.bannerError} />
  }
  
  componentDidMount(){
    this.adFunction();
  }


  render() {
    return (
      <WebView
        source={{
          uri: 'https://sub.thekpop.net/'
        }}
      />
    );
  }
}