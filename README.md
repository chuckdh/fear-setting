# FEAR-Setting

## Install

For development: 

    yarn # Install deps
    yarn run dev # Start webserver in dev mode
    yarn run webpack # Start webpack's development server (opens up browser windows)

or, for production

    yarn # Install deps
    yarn run build # Build app for production to ./dist
    yarn run start # Start web server in production mode (port 80)

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

There is many room for improvement here. 