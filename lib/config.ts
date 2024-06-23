const config = {
  appBaseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000',
  google_analytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  google_tag_manager: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER ?? '',
};

export default config;
