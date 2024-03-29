# TwistedBytes Interaction System

📺 [Trailer](https://youtu.be/6LumTyC_160) <br/>
🎮 [Playable Demo](https://static.twistedbytes.net/downloads/6fb3c34c-e6fd-7275-7388-574abc6389a1/TBIA%20Playable%20Demo/) <br/>
🔌 [Demo Unreal Project](https://static.twistedbytes.net/downloads/7a42299c-6047-e1e8-5b98-c16ab1868b89/TBIA%20Demo%20Project/) (PLUGIN REQUIRED) <br/>
📽 [Video Tutorials](https://www.youtube.com/watch?v=oSeIxjblP7w&list=PLLyOa9EQGJ4osSqY9aQmr1dUQu_bmHA0V) <br/>
📖 [Documentation](https://twistedbytes-net.github.io/TBIA-Documentation)
📆 [Roadmap](https://twistedbytes-net.github.io/TBIA-Documentation/roadmap) <br/>
🛰 [Discord](https://discord.twistedbytes.net) <br/>

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
Join the community on our [Discord](https://discord.twistedbytes.net).
Check out the [FAQ](https://twistedbytes-net.github.io/TBIA-Documentation/docs/faq) for common issues and how to solve them.

If you think that you have found a 🐞 bug 🐞, please report it on our [GitHub Issue Tracker](https://github.com/twistedbytes-net/TBIA-Documentation/issues).

## Technical Details

**Features:**

**v1.3**
- New input action for enhanced input component (Input trigger multiple tap)
- Interaction based on holding the input or Gameplay Events
- Interactable actors can now be inherited from Pawns as well as Characters
- Bug fixes

**v1.2**
- Proximity Interaction.
- Cursor interaction for Top-Down games.
- Custom Tracing for passive and active abilities.
- BugFix: `IsAvailableForInteraction` in active abilities will now be called properly.

**v1.1**
- Enhanced Input System: Bind any Input Actions to Gameplay Abilities

**v1.0**
- Built on top of GAS.
- Fully usable and extendable in Blueprints and C++.
- Easy to use and integrate, even for non GAS-users
- Replicated and multiplayer-ready with full client-prediction support.
- Support for replicated animation montages
    - Actors
    - Characters (with multiple Skeletal Mesh components)
