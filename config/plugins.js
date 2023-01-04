module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },

    email: {
      config: {
        provider: 'sendmail',
        settings: {
          defaultFrom: 'eneotujoe@gmail.com',
          defaultReplyTo: 'eneotujoe@gmail.com',
        },
      },
    },

    // email: {
    //   config: {
    //     provider: 'amazon-ses',
    //     providerOptions: {
    //       key: env('AWS_ACCESS_KEY_ID'),
    //       secret: env('AWS_ACCESS_SECRET'),
    //       amazon: env('AWS_SES_REGION'),
    //     },
    //     settings: {
    //       defaultFrom: 'eneotujoe@gmail.com',
    //       defaultReplyTo: 'eneotujoe@gmail.com',
    //     },
    //   },
    // },

});
  