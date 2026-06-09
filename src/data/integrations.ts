export type IntegrationGroup = {
  group: string;
  items: string[];
};

export const integrations: IntegrationGroup[] = [
  {
    group: "Backend & realtime",
    items: ["Firebase Firestore", "Nakama", "REST API", "UnityWebRequest"],
  },
  {
    group: "Auth",
    items: ["Firebase Auth", "Facebook SDK", "Google Sign-In", "Apple ID"],
  },
  {
    group: "Push & live-ops",
    items: ["Firebase Cloud Messaging", "OneSignal"],
  },
  {
    group: "Analytics & A/B tests",
    items: ["Firebase Analytics"],
  },
  {
    group: "Crash reporting",
    items: ["Firebase Crashlytics", "Sentry"],
  },
  {
    group: "Monetization",
    items: ["AdMob", "Unity Ads", "Unity IAP"],
  },
  {
    group: "Multiplayer",
    items: ["Photon Fusion", "Photon PUN2", "Nakama"],
  },
  {
    group: "Web3 / wallet",
    items: ["Thirdweb SDK"],
  },
  {
    group: "Media / event apps",
    items: ["YouTube SDK", "QR-flow", "File sync", "Host-client control"],
  },
  {
    group: "Game client tools",
    items: ["Addressables", "DOTween", "UniTask", "Zenject"],
  },
];
