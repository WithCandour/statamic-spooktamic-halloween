# Spooktamic Halloween

Make your content super spooky with this Halloween addon for Statamic.

## Installation
To install this addon, copy the `SpooktamicHalloween` directory into your `site/addons` directory, you will need your license key from the Statamic marketplace.

Effects will show on any page with the `{{ spooktamic_halloween:head }}` tag in the `<head />` section. Pages can be blacklisted later so it's safe to put this in a place where it will be used globally.

## Configuration
There are various configuration options available on the addon settings page.

### Animation
You have control over the speed of the animation (the time it takes for the ghost to travel across the screen), and the timeout. The timeout is the number of seconds before the ghost animation stops and is removed from the page, set to `0` to show indefinitely.

### Blacklist Pages
In the addon settings there is a grid for pasting in the url of any page you do not wish to have effects.