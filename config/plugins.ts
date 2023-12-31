export default ({ env }) => ({
  ckeditor: {
    enabled: true,
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        uploadStream: {
          folder: env("CLOUDINARY_FOLDER", ""),
        },
        delete: {},
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  email: {
    provider: "sendmail",
    providerOptions: {
      dkim: {
        privateKey: env("DKIM_PRIVATE_KEY"),
        keySelector: env("DKIM_KEY_SELECTOR"),
      },
    },
    settings: {
      defaultFrom: "cms@sponsoredgigs.com",
      defaultReplyTo: "cms@sponsoredgigs.com",
    },
  },
});
