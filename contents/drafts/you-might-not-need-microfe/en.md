---
title: You might not need Micro Frontends
slug: you-might-not-need-microfe
date: "2019-10-08"
minute2read: 15
description: My mind about the latest trend in Micro Frontend
categories: [programming]
cover: https://www.mazipan.xyz/content-images/you-might-not-need-microfe/microfe.png
---

## Disclaimer

Before we starting, you need to take a note that all in this article is my own words. It may be wrong, subjective and doesn't works well with your current situtations. Do not take any decisions based on only this article.

## About Micro Frontend

You might ever heard the term of *Micro Frontends* (MFE), basically its just copycat from the concept of *Micro Services* in backend area. Like *Micro Services* that got very huge popularity in backend, MFE is also got good tractions in its adoptions. Every startup, every FE developers want to implementing this concept into their current projects.

## What's the MFE sells to Us?

MFE coming with many strong point that makes you as a developers interest in it. We will try to describe some of it in this below lists:

#### Technology stack isolation

MFE enable possibility to use different technology stack in Frontend. Let's say you want to develop header fragment using React, then you switch to Vue when developing the sidebar fragment. It possible with the isolation concept brings by MFE.

#### Autonomous teams

This is maybe the coolest thing in MFE, you can have seperate teams which normally composed by different specialized person, like you can have one frontend developer, one backend developer, one designer, one product manager, etc in one team. They all can work without having worry their improvement or fixing will crashing another team improvement. It because they will only working in small piece of fragment that treats as a single web apps instead of one full pages.

This approach somehow can increase the effectiveness and efficiency of teams working on frontend code, and the teams entirely. They will have a full ownership on their own fragments, they can iterate faster in development. Instead of organizing the team based on their specialization, we can organizing based on bussiness scope or we usually called as a "vertical" alignment.

<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/you-might-not-need-microfe/horizontal.png" alt="Micro FE horizontal teams" height="200px" width="200px">

<small class="caption">Image source from https://martinfowler.com<small>

#### Ease of deployments with better isolation

The other key point from MFE is that you can deploy your code with more confident without scare you will break feature or code from the another teams. This is because MFE often coming from different repository with different deployment pipeline and different server to serve the code in production environment.

<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/you-might-not-need-microfe/deployment.png" alt="Micro FE deployment" height="200px" width="200px">

<small class="caption">Image source from https://martinfowler.com<small>

#### Improved scalability with smaller pieces

With different deployment and different server, its easier to us to maintain the scalability. Instead of have one big server, we can split it into several small server that only serve small piece of fragment. It also make us have a clear visibility about the fragment that have a bigger usage, and the smaller one. We can reduce the specs for the smaller one and increase for the bigger one.

#### Localized complexity

MFE can localized the complexity of your web apps into several part. This is good that we doesn't need to put all of our logics and complexities in the same place. With the growing of your bussiness, these logics and complexities may will harm you someday if its on one place.

## Problem you will face

Honestly, implementing MFE is not that easy. There are some concern you might face when try to adopt.

## References:

+ [micro-frontends.org](https://micro-frontends.org/)
+ [martinfowler.com](https://martinfowler.com/articles/micro-frontends.html)

### May useful for you...
