---
sidebar_position: 1
title: Using Enhanced Input
---
export const Step = ({children, text}) => {
    return <span style={{
        backgroundColor: '#822',
        color: '#faa',
        border: '1px ' + '#faa' + ' solid',
        borderRadius: '5rem',
        padding: '.2rem .4rem',
        fontSize: '.6rem'
    }}>
        {text}
    </span>
}

## Setting up Project

To get started, go to `Project Settings | Input` <Step text="1"/>, click on *Default Player Input Class* and select `EnhancedPlayerInput` <Step text="2"/> then click on *Default Input Component Class* and select `TBIA_EnhancedInputComponent`. 

![Project settings using enhanced input](_static/img/enhanced_input/01_project_settings.png)

## Creating Input Data assets

To create *Input Mapping Context*, right-click in the *Content Browser* and
select `Input | Input Mapping Context` <Step text="1"/>.

![Create Input Mapping Context](_static/img/enhanced_input/02_mapping_context.png)

Then to create an *Input Action*, right-click in the *Content Browser* and
select `Input | Input Action` <Step text="1"/>.

![Create Input Action](_static/img/enhanced_input/03_input_action.png)

Now we need to create *GAS Enhanced Input Mapping*, right-click in the *Content Browser* and
select `TwistedBytes | Data Assets | GAS Enhanced Input Mapping` <Step text="1"/>.

![Create GAS Enhanced Input Mapping](_static/img/enhanced_input/04_create_enhanced_asset.png)


## Setup GAS Enhanced Input Mapping

Open the *Input Action* created add a trigger, set it to *Down* <Step text="1"/> and make sure the *Actuation Threshold* is equal to *zero* <Step text="2"/>.

![Setup Input Action](_static/img/enhanced_input/05a_setup_input_action.png)

Open *Input Mapping Context* and add action mapping <Step text="1"/>, select the *Input Action* that was created earlier <Step text="2"/>. After that you need to bind this *Input Action* to a key <Step text="3"/> as shown in the image below.

![Setup Input Mapping Context](_static/img/enhanced_input/05a_setup_input_mapping.png)

Now open *GAS Enhanced Input Mapping*, first set the `Input Mapping Context`, that was created earlier, to it's specific variable <Step text="1"/>, then click on *+* to add *Ability Mapping*.
Select the `Input Action` as in <Step text="2"/>, after that set `TBIA.Input.Interaction.InteractActive` as a gameplay tag <Step text="3"/> that links *GAInteractActive* to the selected *Input Action*. Lastly set `GAInterActive` ability as in <Step text="4"/>.

![Setup GAS Enhanced Input Mapping](_static/img/enhanced_input/05b_setup_enhanced_asset.png)

## Setup Player Character

Open `Player Character` select *TBIA_Interaction Component* <Step text="1"/>, go to *Details panel* and under `TwistedBytes | Interaction | Config` set *Input Consumer* <Step text="2"/> to `TBIA Enhanced Input Component` Lastly set `GAS Enhanced Input Mapping` as in <Step text="3"/>.

![Setup Player Character](_static/img/enhanced_input/06_select_asset.png)

