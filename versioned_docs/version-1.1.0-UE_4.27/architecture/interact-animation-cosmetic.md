---
sidebar_position: 5
title: Interact Animation Cosmetic
---

## Event ActivateAbility 
```mermaid
flowchart TD
    A[Activate Ability] -->B(Commit Ability)
    B --> |Failed| C(CancelAbility)
    B --> D[Get Character Context]
    D --> E[Get Interaction Context]
    E --> F[Try Play Montages]
    F --> |Montage Event Received| G[InteractionEventReceived]
    F --> |Montage Completed| H(End Ability)
    F --> |Montage Interrupted|I(Cancel Ability)
    F --> |Montage Cancelled|I
```
