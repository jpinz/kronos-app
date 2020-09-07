# Kronos Website Creation Tool

## Project Description

This is a website to create training websites for clients.

## Info about the core tech behind this site

### Main Creation Site

#### [VueJS](https://vuejs.org/) + [VueX](https://vuex.vuejs.org/) + [Vue Router](https://router.vuejs.org/)

[Vue JS](https://vuejs.org/) is similar to React JS, it is a JavaScript framework used to create web applications. [VueX](https://vuex.vuejs.org/) is the state manager for Vue. [Vue Router](https://router.vuejs.org/) is the routing system for Vue, to assist with URL routing.

#### Bulma.io and [Buefy](https://buefy.org/)

This is the CSS Bootstrapping Framework that is used to help with the design of the website to make it a bit easier to create and have premade designed components.

#### Node.js and Express

Node and Express is what is used to run the application itself. It hosts the website and is what allows the client website to be generated.

### Client Templated Site

#### [Nuxt.js](https://nuxtjs.org/)

[Nuxt.js](https://nuxtjs.org/) is yet another web application framework, but instead of being its own thing, it is an extension of Vue.js. It's slightly more lightweight to create a site, especially a static one with no backend server, which is what we are creating.

#### Bulma.io and [Buefy](https://buefy.org/) for Nuxt

Bulma and Buefy are also used in Nuxt, as it is Vue based.

#### [Tailwind.css](https://tailwindui.com/)

Tailwind is like Bulma.io, there were a few things Bulma couldn't do, but can be acheived with Tailwind.

## Instructions

Make sure Node is installed on your machine.

### How to add more Task Groups or Tasks

There is one step for adding another Task Groups, and one step to add new Tasks to an existing group.

#### Adding a new Task Group

Add another entry to `taskGroups` in the VueX store, located at [/src/store/index.js](/src/store/index.js)

#### Adding a new Task within a Task Group

Add another entry to the `tasks` in the wanted `taskGroup` in the VueX store, located at [/src/store/index.js](/src/store/index.js)

### Build and Run Main Site

1. In the root directory of this application, run `npm install`
2. Then run `npm run build`
3. Figure out what port you want to use for the website and change it in [server.js](/server.js) on line 9.
4. Then run `npm run start` and check on your web browser to make sure it's running.

### Build and Run Client Site

1. Navigate to `/template`
2. Run `npm install`
3. Make sure there is a `site.json` file in the directory so that there is data to create the site from.
4. *Optional* - run `npm run dev` if you just want to see the site running
5. If you want to generate and build the completed site run `npm run build`
6. Then run `npm run generate`
7. Now there is a generated `/dist` folder with the completed website. That can be hosted on a server anywhere, or zipped and sent to a client. It can also be viewed by running `npm run start`

## How to host

### Hosting Main Site

This needs to be done on a system with dynamic web hosting capabilities. The node server needs to be ran, and files have to be created in order to generate the client site.

### Hosting Client Site

The client site is static, so it should be able to be hosted with ease anywhere. It is just some HTML and javascript files.

## Skills needed to understand/work on this project

- Javascript
- HTML
- CSS
- Web servers
- Node.js
- Vue (not hard to learn)

## Other notes

This website is far from completed. Both the creation site and template client site arent the prettiest. The client site has the option for an image for each task, but isn't being used right now. It would still have to be programmed into the template site and the VueX store on the main site. Also, more than one website cannot be generated at one time right now due to the way the website creates the client site from the template. This would probably be a good use for containers via docker.