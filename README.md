# FEAR-Setting

## Install

For development: 

    yarn # Install deps
    yarn run start # Start webserver in dev mode
    yarn run webpack # Start webpack's development server (opens up browser windows)

or, for production

    yarn # Install deps
    yarn run build # Build app for production to ./dist
    yarn cross-env NODE_ENV=production PORT=80 yarn start # Start web server in production mode on port 80

for dev server

## Scope

This project aims to replicate the paper-based fear-setting method descriped in [this](https://www.ted.com/talks/tim_ferriss_why_you_should_define_your_fears_instead_of_your_goals) TED video by [Tim Ferriss](https://www.ted.com/speakers/tim_ferriss) in an responsive, gadget friendly online way, with syncing between multiple devices.

## This app

On the first page you can define your fears. Each fear has 3 parts. First, **Define**, let me quote Tim here:

> ...you're writing down all of the worst things you can imagine happening if you take that step. You want 10 to 20...

Second part, **Prevent**, 

> ...What could I do to prevent each of these bullets from happening, or, at the very least, decrease the likelihood even a little bit?...

Third and final part is **Repair**, wich is:

> ...So if the worst-case scenarios happen, what could you do to repair the damage even a little bit, or who could you ask for help?...

---

On the second page, your write a small essay detailing:

> ...What might be the benefits of an attempt or a partial success?...

---

On the third page, "The Cost of Inaction", you also write, but the topic is:

> ...So you should ask yourself, if I avoid this action or decision and actions and decisions like it, what might my life look like in, say, six months, 12 months, three years?...

---

### What you see

The app has 3+2 pages. On the first page, the user can create fears and we display it to them in a list-like manner. This is also the place where the fears can be edited or removed. On the second page, we ask the user to write a small essay, so it should be clean, and they also should see the fears they wrote down. The third page is essentially the same. All of this information should be syncded to all connected clients in real-time. There are 2 extra pages, a welcome screen with the TED talk and a conclusion page, where you can see all your answers.

# Dev notes

For development, you don't have to build the app with *yarn run build*, because you only need the node server for the sockets. Webpack serves you the actual compiled content. In production, you have to run the build before *yarn run start*, so the node server can serve the compiled files from ./dist.

The client entry point is the ./src/index.js file. Here the routes, the strore and the sockets are set up, then the ./src/App.vue file renders. The App.vue sets up the site layout, loads in all the other components, then renders the correct one based on the current route. Each page has it's own component. Two components are not standalone, the VLink.vue, wich is used to render the links correctly for the routing, and the FearItem.vue, wich is used by the FearList.vue component to better break down responsibility. The components are responsible for triggering sockets to save the data they are handling. So, the CostOfInaction.vue only triggers save for the "cost" (text) data. 

After a save is triggered, the data is sent to the node server through socket.io, and the server broadcasts it to everyone else, and saves the state to a file. Should the server crash or stop, on the next startup the state is read from the save file. When a client connects, the server sends it the inital state it should have. If a client can not connect to the server (or loses it's onnection), then editing the fear-list or other data is not possible, because syncing after offline mode is difficult. The offline client could have vastly different data set than that of the server and the other clients have. 

There is many room for improvement here. The save could be improved, could use a proper database like Redis or MongoDB. Also TypeScript is set up, but ultimatly not used. The server code is also in older style js. The design also could be even more gadget friendly. The node server is extremly simple. It does not handle authentication, and is basicly impossible to scale. Should set up a Redis server for it so it can be clustered, and the clusters would be able to have a shared memory. 