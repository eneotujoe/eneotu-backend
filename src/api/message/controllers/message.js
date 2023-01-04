'use strict';

/**
 *  message controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::message.message', ({ strapi }) =>  ({
    async create(ctx) {
        const response = await super.create(ctx);
        await strapi.plugins['email'].services.email.send({
            to: 'eneotujoe@gmail.com',
            from: 'info@reinforcedai.com',
            cc: '',
            bcc: '',
            replyTo: 'eneotujoe@gmail.com',
            subject: 'email provider successfully',
            text: 'Hello world!',
            html: 'Hello world!',
          });
        // response.data.attributes.email
        return response;
      }

}));
