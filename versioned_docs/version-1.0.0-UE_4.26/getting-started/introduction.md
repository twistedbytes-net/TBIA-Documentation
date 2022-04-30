---
sidebar_position: 1
title: Introduction
---

## TwistedBytes Interaction System
🛒 [Unreal Marketplace](https://www.unrealengine.com/marketplace/en-US/product/fd69a887e4894a61b05809916c9ec2b2) <br/>
📺 [Trailer](https://youtu.be/6LumTyC_160) <br/>
🎮 [Playable Demo](https://drive.google.com/drive/folders/12lCDG6TGoBTreHeardwIId3YxiQYlmP7?usp=sharing) <br/>
🔌 [Demo Unreal Project](https://drive.google.com/drive/folders/1I7TXOPM-9tHABdhWqy58TAR6-lenSy1E?usp=sharing) (PLUGIN REQUIRED) <br/>
📽 Tutorial Video (COMING SOON) <br/>
📆 [Roadmap](https://twistedbytes-net.github.io/TBIA-Documentation/roadmap) <br/>
🛰 [Discord](https://discordapp.com/invite/CP4uZ69tne) <br/>

**TwistedBytes Interaction System** is a plugin for Unreal Engine that aims to solve a seemingly simple task - which is interactions. However, complexity grows
quickly when trying to implement interaction gameplay mechanics that should support:

- Playing animations in-sync on multiple skeletal meshes (e.g. first-person and third person player models).
- Trigger events before, during, and after interactions, e.g. SFX, VFX, custom function calls, etc.
- Trigger events on specific animation montage frames.
- Multiplayer scenarios with client-prediction for lag-free user experiences.

Basic knowledge in Blueprints is all you need to make use of this plugin. It is built on top of the **Gameplay Ability System** (GAS) which is heavily
battle-tested in popular games like Fortnite and Paragon. The plugin can be easily extended either using Blueprints or C++ as it is designed to be a solid
framework for any type of gameplay interactions.

**Next steps:**

We highly recommend you to check out the documentation pages. The *Getting Started* section is for you, if you are in a
hurry. For an in-depth explanation about the plugin's concepts and architecture, we prepared diagrams for you that will help you to understand the flow of
events.

If you happen to get stuck with our plugin or have any questions about how to use **TwistedBytes Interaction System**, you can:
Join the community on our [Discord](https://discordapp.com/invite/CP4uZ69tne).
Check out the [FAQ](https://twistedbytes-net.github.io/TBIA-Documentation/docs/faq/) for common issues and how to solve them.

If you think that you have found a 🐞 bug 🐞, please report it on our [GitHub Issue Tracker](https://github.com/twistedbytes-net/TBIA-Documentation/issues).

## Technical Details

**Features:**

- Built on top of GAS.
- Fully usable and extendable in Blueprints and C++.
- Easy to use and integrate, even for non GAS-users
- Replicated and multiplayer-ready with full client-prediction support.
- Support for replicated animation montages
  - Actors
  - Characters (with multiple Skeletal Mesh components)

**Code Modules:**
- TBIA_Runtime (Runtime)
- TBIA_Editor (Editor)

**Number of Blueprints:** 4
- Data Table: 1
- GameplayEffect: 3

**Number of C++ Classes:** 42
- TBIA_Runtime: 30
- TBIA_Editor: 12

**Network Replicated:** Yes
