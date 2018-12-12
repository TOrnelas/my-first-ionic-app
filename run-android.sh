sudo ionic cordova platform remove android
sudo ionic cordova platform add android
export ANDROID_HOME=~/Library/Android/sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
sudo ionic cordova run android