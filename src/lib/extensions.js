/*
    note to contributors & developers that can read JSON:
        the extra commas are added at the end of each thing
        to help copy & pasting work better
        pleas dont remove them :)
*/

import React from 'react';

import defaultExtensionIcon from './icons/placeholder.png';

import dmPythonIcon from './icons/python.png';
import dmLuaIcon from './icons/lua.png';

const extensionUrl = "https://gaiamod-main.github.io/extensions/GaiaWindWave90/";
const secondExtensionUrl = "https://gaiamod-main.github.io/GaiaMod-ExtensionsGallery/extensions/GaiaWindWave90/";

export default [
    {
        name: "GaiaBlocks",
        description: "Wonderful utility blocks!",
        code: "GaiaWindWave90/GaiaBlocks.js",
        banner: "GaiaMod-ExtensionsGallery/images/GaiaWindWave90/gaiablocks.png",
        creator: "GaiaWindWave90",
        isGitHub: true,        
    },
    {
        name: 'GaiaGPT',
        description: 'A GaiaMod modification of Pang AI with more prompts.',
        code: "GaiaWindWave90/GaiaGPT.js",
        banner: "GaiaMod-ExtensionsGallery/images/GaiaWindWave90/GaiaGPT.png",
        creator: "logise1123",
        isGitHub: true,
    },
    {
        name: "Runtime Tools",
        description: "Blocks for modifying Scratch objects like Turbo Mode, stage size, clone limits, and more!",
        code: "GaiaWindWave90/GaiaRuntime.js",
        banner: "GaiaMod-ExtensionsGallery/images/GaiaWindWave90/runtimeThumb.svg",
        creator: "GaiaWindWave90",
        isGitHub: true,        
    },
    {
        name: 'Prompts',
        description: 'Prompts made for Gaia AI. Inspired by the prompts extension found in Snail-IDE.',
        code: "GaiaWindWave90/GTPPrompts.js",
        banner: "GaiaMod-ExtensionsGallery/images/GaiaWindWave90/prompts.png",
        creator: "GaiaWindWave90",
        isGitHub: true,
    },
    {
        name: 'Spinach Facts',
        description: 'An extension about spinach! Based on Gen1x\'s CATS, MrIncredibleMaker\'s DOGS and pooiod7\'s Raccoon Facts extensions.',
        code: "GaiaWindWave90/SpinachFacts.js",
        banner: "GaiaMod-ExtensionsGallery/images/GaiaWindWave90/spinach.png",
        creator: "GaiaWindWave90",
        isGitHub: true,
    },
    {
        name: "Penguin Attack!",
        description: "Edited version of the Fire in the Hole extension.",
        code: "GaiaWindWave90/PenguinAttack.js",
        banner: "GaiaMod-ExtensionsGallery/images/GaiaWindWave90/PenguinAttack.png",
        creator: "GaiaWindWave90",
        isGitHub: true,        
    },
    {
        name: "Cocrea Fetch",
        description: "Fetches API from Cocrea or Gandi IDE.",
        code: "GaiaWindWave90/cocreaFetch.js",
        banner: "GaiaMod-ExtensionsGallery/images/GaiaWindWave90/cocreaFetch.png",
        creator: "fath11",
        isGitHub: true,        
    },
    {
        name: "Webcam Recorder",
        description: "Records videos straight out of webcam.",
        code: "GaiaWindWave90/Webcamrecorder.js",
        banner: "GaiaMod-ExtensionsGallery/images/GaiaWindWave90/WebCamThumb.png",
        creator: "-SIPC-",
        isGitHub: true,        
    },
];
