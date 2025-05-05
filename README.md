# WentTheFox's Beat Saber Overlay

An overlay created by [WentTheFox] for the [BSDataPuller] and [BeatSaberPlus] mods.

[WentTheFox]: https://went.tf

[BSDataPuller]: https://github.com/ReadieFur/BSDataPuller/

[BeatSaberPlus]: https://github.com/hardcpp/BeatSaberPlus

## Features

> [!IMPORTANT]
> Some customization options refer to "query parameters" which is a technical term for values in a
> URL that are denoted by a starting `?` character and a `&` between individual values. If you want
> to provide multiple options at once, be sure to use the format `?param1=value1&param2=value2&…`
>
> "Deprecated" means the functionality might still work bit it is not actively maintained, and it is
> subject for removal in the future. You should avoid using it, and if you are currently using it,
> switch to the suggested alternatives.

### Live Map Data

The overlay works with either of the two mods. In order to use a specific one as the data source,
add the `source` query parameter with the data source's code as the value. Available codes:

* `BSDP` - BSDataPuller (default, supports all features)
* `BSPlus` - BeatSaberPlus (unreliable BSR IDs, no ranked stars)
* `MOCK` - Virtual source which uses pre-defined events (for testing)
* `OFF` - **Deprecated**, please use `disabled=beat-saber-root`, see the [Customizable UI] section

[Customizable UI]: #customizable-ui

While playing, the current song will appear in the top-right corner along with some supplemental
information like difficulty, length, ranked stars and PP. Additionally, an accuracy graph and the
currently selected modifiers are displayed.

#### Automatic BRB Scene Switching

If given advanced access to OBS through the browser source settings, the overlay will automatically
switch between two scenes called `Main` and `BRB`, the first is used while the overlay connection is
open, and the second in any other case. If you don't want this behavior, do not grant advanced
access to the browser source.

### Heart Rate

Heart rate tracking can be configured by hovering over the bottom left corner of the page. Currently
supported options
are:

* Bluetooth Low Energy heart rate monitors via the Web Bluetooth API
    * The button is only shown if the current browser supports it
    * Tested with Polar H10 in Chrome v110 on Windows 11 22H2
    * Requires using the browser UI to select the desired device, so you will need to use Window
      Capture and color filter, this does not work when used as an OBS Browser Source
    * The device selection is lost when the page is reloaded, and it must be selected again
* Pulsoid API using websockets (requires a paid subscription)
    * After the API key is entered in the dialog it will be preserved across page loads until
      manually cleared
* Any arbitrary Websocket source
    * You can provide a host URL and optionally path to the JSON object data
    * Without a path the socket data is treated as plaintext numbers

### Customizable UI

Click on any visible element on the page tio view the settings which will allow you to customize
that element, and view all other settings of the app as well. If you want to have a dedicated
browser source just for managing settings, you can add `/settings.html` at the end of the browser
source.

You can use the _Elements_ section of the settings to hide certain elements of the overlay that are
specific to me (the developer). Unchecking things there will completely remove the element and
prevent all code associated with it from running to limit resource usage.

And yes, this includes the "watermark" (channel bug) in the top left. You can choose to hide it
completely, or you can set your own logo image.

#### Crediting

If you end up using this overlay in your own streams, all I would ask you to consider is to
include a note about where you got this overlay from, both to let others find it too and also out
of courtesy for my work on this entirely custom overlay page.

If you are wondering what links to use, you can link to

* my Twitch channel: https://www.twitch.tv/wentthefox
* the GitHub page of this overlay: https://github.com/WentTheFox/Beat-Saber-Overlay
* my website: https://went.tf

Crediting is not mandatory, I will not go after you if you don't do it, but as a community we
should be striving to lift each other up, and I very much feel like it's mutually beneficial to
credit your fellow creators and developers who make what you do possible, and I myself try to live
by that as well.

[DoubleColonBot]: https://github.com/WentTheFox/DoubleColonBot

## Attributions

<!-- Keep in sync with SettingsPageCredits.tsx -->

If I'm going to ask others to credit me for my work, you can bet that I'm going to credit everyone
whose work I myself used during the creation of this overlay.

* Bluetooth logo: https://commons.wikimedia.org/wiki/File:Bluetooth.svg
* Pulsoid logo is based on the Pulsoid App icon. This project is not affiliated with Pulsoid in any
  way, shape, or form.
* Bouncy icon made by [KisuPantteri](https://www.twitch.tv/KisuPantteri)
* Beat Saber UI font: [Teko](https://fonts.google.com/specimen/Teko)
* Overlay UI font: [Kalam](https://fonts.google.com/specimen/Kalam)

### Appreciation

Thanks to the individuals below for their contributions towards making this overlay the best it can
possibly be through any combination of constructive feedback, improvement ideas, code contributions,
and generally being sources of inspiration:

* [Gosha](https://github.com/Gosha)
* [MinnieFops](https://www.twitch.tv/minniefops)
* [TheBlackParrot](https://www.twitch.tv/theblackparrot)
